// Only event names and a fixed method are sent. Never pass form values or patient details.
export function clinicLinkEvent(href: string): 'booking_click' | 'phone_click' | null {
  if (href.startsWith('tel:')) return 'phone_click'
  try {
    const url = new URL(href)
    if (url.protocol === 'https:' && url.hostname === 'pmphysio.juvonno.com' && url.pathname === '/portal/publicbook.php') return 'booking_click'
  } catch { /* Relative links are not external booking links. */ }
  return null
}

export function recordClinicEvent(event: 'booking_click' | 'phone_click' | 'generate_lead') {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  try {
    window.gtag('event', event, { method: event === 'generate_lead' ? 'website_form' : 'website_link' })
  } catch { /* Measurement must never prevent an enquiry or navigation. */ }
}
