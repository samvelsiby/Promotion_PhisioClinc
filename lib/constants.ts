/**
 * Single source of truth for NAP (Name, Address, Phone).
 * Use these values on every page, schema block, and citation listing.
 */

export const SITE_URL = 'https://www.promotionphysiotherapy.ca'

export const COMPANY_CONTACT = {
  NAME: 'Pro Motion Physiotherapy',
  LEGAL_NAME: 'Pro Motion Physiotherapy',
  PHONE: '+12045602999',
  PHONE_DISPLAY: '(204) 560-2999',
  FAX: '204-594-4987',
  EMAIL: 'info@promotionphysiotherapy.ca',
  BOOKING_URL: 'https://pmphysio.juvonno.com/portal/publicbook.php',
  REVIEWS_URL: 'https://share.google/HAWazXFacwaQqbU8P',
  REVIEW_WRITE_URL:
    'https://search.google.com/local/writereview?placeid=ChIJb8qUxhl36lIRBWPxW_iROsw',
  ADDRESS: {
    street: "Unit 4, 567 St. Anne's Rd",
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
