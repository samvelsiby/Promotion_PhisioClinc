// Preview and local builds must never contribute to the production property.
export function isProductionAnalyticsHost(hostname: string): boolean {
  return hostname === 'promotionphysiotherapy.ca' || hostname === 'www.promotionphysiotherapy.ca'
}

export type ClinicEvent = 'booking_click' | 'phone_click' | 'generate_lead'

// Google Ads account 472-874-3127. The Google tag must be configured for this
// id (see GoogleAnalytics.tsx) or the conversion events below go nowhere.
export const GOOGLE_ADS_ID = 'AW-18511812804'

// Website actions that count as Google Ads conversions. Labels come from
// Google Ads > Goals > Conversions > (action) > See event snippet.
// Only the fixed label is sent: no form values, no patient details, and never
// enhanced-conversion data (email or phone hashes).
const ADS_CONVERSIONS: Partial<Record<ClinicEvent, string>> = {
  booking_click: `${GOOGLE_ADS_ID}/ZwnQCM3V_L4dEMSxj_tE`, // "Book appointment"
  generate_lead: `${GOOGLE_ADS_ID}/IRTUCPKL_L4dEMSxj_tE`, // "Submit lead form"
  phone_click: `${GOOGLE_ADS_ID}/BEo_CJ_6hb8dEMSxj_tE`, // "Website phone click"
}

// Google Consent Mode v2 state. Ad personalization stays denied in every state:
// the site never opts visitors into personalised ads, only into measurement.
export function consentState(granted: boolean) {
  const value = granted ? 'granted' : 'denied'
  return {
    analytics_storage: value,
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: 'denied',
  } as const
}

// Only event names and a fixed placement label are sent. Never pass form values or patient details.
export function clinicLinkEvent(href: string): { event: ClinicEvent; location?: string } | null {
  if (href.startsWith('tel:')) return { event: 'phone_click' }
  try {
    const url = new URL(href, window.location.origin)
    if (url.origin === window.location.origin && url.pathname === '/book') {
      const src = url.searchParams.get('src') || undefined
      return { event: 'booking_click', location: src && /^[a-z0-9-]{1,40}$/.test(src) ? src : undefined }
    }
    if (url.protocol === 'https:' && url.hostname === 'pmphysio.juvonno.com' && url.pathname === '/portal/publicbook.php') return { event: 'booking_click' }
  } catch { /* Not a link we measure. */ }
  return null
}

export function recordClinicEvent(event: ClinicEvent, location?: string) {
  if (typeof window === 'undefined' || !isProductionAnalyticsHost(window.location.hostname) || typeof window.gtag !== 'function') return
  try {
    window.gtag('event', event, {
      method: event === 'generate_lead' ? 'website_form' : 'website_link',
      ...(location ? { link_location: location } : {}),
    })
    const adsConversion = ADS_CONVERSIONS[event]
    if (adsConversion) window.gtag('event', 'conversion', { send_to: adsConversion })
  } catch { /* Measurement must never prevent an enquiry or navigation. */ }
}
