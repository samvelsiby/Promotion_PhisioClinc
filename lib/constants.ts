/**
 * Single source of truth for NAP (Name, Address, Phone).
 * Use these values on every page, schema block, and citation listing.
 */

export const SITE_URL = 'https://www.promotionphysiotherapy.ca'

export const COMPANY_CONTACT = {
  NAME: 'Pro-Motion Physiotherapy',
  LEGAL_NAME: 'Pro-Motion Physiotherapy',
  PHONE: '+12045602999',
  PHONE_DISPLAY: '(204) 560-2999',
  FAX: '204-594-4987',
  EMAIL: 'info@promotionphysiotherapy.ca',
  BOOKING_URL: 'https://pmphysio.juvonno.com/portal/publicbook.php',
  REVIEWS_URL: 'https://share.google/HAWazXFacwaQqbU8P',
  REVIEW_WRITE_URL:
    'https://search.google.com/local/writereview?placeid=ChIJb8qUxhl36lIRBWPxW_iROsw',
  ADDRESS: {
    street: "Unit 4 - 567 St. Anne's Rd",
    city: 'Winnipeg',
    province: 'MB',
    postalCode: 'R2M 5B2',
    country: 'Canada',
  },
  GEO: {
    latitude: 49.835354,
    longitude: -97.090898,
  },
  SOCIAL: {
    facebook: 'https://www.facebook.com/profile.php?id=61584659892176',
    instagram: 'https://www.instagram.com/pro.motion.physiotherapy',
  },
  HOURS: {
    weekday: 'Monday to Friday: 9:00 AM to 8:00 PM',
    saturday: 'Saturday: 9:00 AM to 4:00 PM',
    sunday: 'Sunday: 10:00 AM to 4:00 PM',
  },
} as const

export const NAP_LINE = `${COMPANY_CONTACT.ADDRESS.street}, ${COMPANY_CONTACT.ADDRESS.city}, ${COMPANY_CONTACT.ADDRESS.province} ${COMPANY_CONTACT.ADDRESS.postalCode}`

export const GOOGLE_PLACE_ID = 'ChIJb8qUxhl36lIRBWPxW_iROsw'
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${COMPANY_CONTACT.NAME}, ${NAP_LINE}`)}&query_place_id=${GOOGLE_PLACE_ID}`
export const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${COMPANY_CONTACT.NAME}, ${NAP_LINE}`)}&destination_place_id=${GOOGLE_PLACE_ID}`

export const OPENING_HOURS_SPEC = [
  {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '20:00',
  },
  {
    days: ['Saturday'],
    opens: '09:00',
    closes: '16:00',
  },
  {
    days: ['Sunday'],
    opens: '10:00',
    closes: '16:00',
  },
] as const

/**
 * First-party booking link. Every "Book now" goes through /book so the click is
 * counted on our server before redirecting to Juvonno. `src` names the placement
 * (hero, footer, service-cta…) so clicks can be compared per button.
 */
export const BOOKING_PATH = '/book'
export function bookingHref(src: string) {
  return `${BOOKING_PATH}?src=${encodeURIComponent(src)}`
}
