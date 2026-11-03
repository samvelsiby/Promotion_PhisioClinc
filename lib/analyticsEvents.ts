// Preview and local builds must never contribute to the production property.
export function isProductionAnalyticsHost(hostname: string): boolean {
  return hostname === 'promotionphysiotherapy.ca' || hostname === 'www.promotionphysiotherapy.ca'
}

export type ClinicEvent = 'booking_click' | 'phone_click' | 'generate_lead'

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
  } catch { /* Measurement must never prevent an enquiry or navigation. */ }
}
