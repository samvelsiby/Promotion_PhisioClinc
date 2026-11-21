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

// Campaign tags for the booking portal step counter.
//
// The booking portal is on another domain, so /book has to hand it the campaign
// the visit came from. Only the three plain campaign tags are kept, for the
// current tab only, and never an ad click id. CookieConsent clears them when a
// visitor selects "Reject optional".
export const CAMPAIGN_STORAGE_KEY = 'pm_campaign'
const CAMPAIGN_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign'] as const
const CAMPAIGN_VALUE = /^[A-Za-z0-9_.-]{1,60}$/

export function rememberCampaign() {
  try {
    const params = new URLSearchParams(window.location.search)
    const tags: Record<string, string> = {}
    for (const key of CAMPAIGN_PARAMS) {
      const value = params.get(key)
      if (value && CAMPAIGN_VALUE.test(value)) tags[key] = value
    }
    if (Object.keys(tags).length) sessionStorage.setItem(CAMPAIGN_STORAGE_KEY, JSON.stringify(tags))
  } catch { /* Storage unavailable: booking links simply go out untagged. */ }
}

export function forgetCampaign() {
  try { sessionStorage.removeItem(CAMPAIGN_STORAGE_KEY) } catch { /* Storage unavailable. */ }
}

// Returns the href with the stored campaign tags added, for /book links only.
export function withCampaign(href: string): string {
  try {
    const url = new URL(href, window.location.origin)
    if (url.origin !== window.location.origin || url.pathname !== '/book') return href
    const tags = JSON.parse(sessionStorage.getItem(CAMPAIGN_STORAGE_KEY) || 'null')
    if (!tags || typeof tags !== 'object') return href
    for (const key of CAMPAIGN_PARAMS) {
      const value = tags[key]
      if (typeof value === 'string' && CAMPAIGN_VALUE.test(value) && !url.searchParams.has(key)) url.searchParams.set(key, value)
    }
    return url.toString()
  } catch {
    return href
  }
}
