import {
  COMPANY_CONTACT,
  NAP_LINE,
  OPENING_HOURS_SPEC,
  SITE_URL,
} from '@/lib/constants'
import { faqs } from '@/lib/faqs'

const logoUrl = `${SITE_URL}/logo.png`

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    '@id': `${SITE_URL}/#clinic`,
    name: COMPANY_CONTACT.NAME,
    alternateName: ['Pro Motion', 'Pro Motion Physio', 'Pro Motion Physiotherapy Winnipeg'],
    image: logoUrl,
    logo: logoUrl,
    url: SITE_URL,
    telephone: COMPANY_CONTACT.PHONE,
    faxNumber: COMPANY_CONTACT.FAX,
    email: COMPANY_CONTACT.EMAIL,
    priceRange: '$$',
    currenciesAccepted: 'CAD',
    paymentAccepted: 'Cash, Credit Card, Debit Card, Direct Billing',
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_CONTACT.ADDRESS.street,
      addressLocality: COMPANY_CONTACT.ADDRESS.city,
      addressRegion: COMPANY_CONTACT.ADDRESS.province,
      postalCode: COMPANY_CONTACT.ADDRESS.postalCode,
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COMPANY_CONTACT.GEO.latitude,
      longitude: COMPANY_CONTACT.GEO.longitude,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(NAP_LINE)}`,
    openingHoursSpecification: OPENING_HOURS_SPEC.map((spec) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: spec.days,
      opens: spec.opens,
      closes: spec.closes,
    })),
    sameAs: [COMPANY_CONTACT.SOCIAL.facebook, COMPANY_CONTACT.SOCIAL.instagram],
    areaServed: [
      { '@type': 'City', name: 'Winnipeg' },
      { '@type': 'AdministrativeArea', name: 'St. Vital' },
      { '@type': 'AdministrativeArea', name: 'Fort Garry' },
      { '@type': 'AdministrativeArea', name: 'Windsor Park' },
      { '@type': 'AdministrativeArea', name: 'Sage Creek' },
      { '@type': 'AdministrativeArea', name: 'Pembina' },
    ],
    medicalSpecialty: 'Physiotherapy',
    isAcceptingNewPatients: true,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Physiotherapy services',
      itemListElement: [
        'Back pain and sciatica',
        'Sports injuries',
        'WCB work injuries',
        'MPI motor vehicle accident recovery',
        'Neck and shoulder pain',
        'Hip and knee pain',
        'Chronic pain',
        'Pre and post-surgical rehabilitation',
      ].map((name) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name },
      })),
    },
    potentialAction: {
      '@type': 'ReserveAction',
      target: COMPANY_CONTACT.BOOKING_URL,
      name: 'Book an appointment',
    },
  }
}

export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: COMPANY_CONTACT.NAME,
    url: SITE_URL,
    publisher: { '@id': `${SITE_URL}/#clinic` },
    potentialAction: {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: COMPANY_CONTACT.BOOKING_URL,
        actionPlatform: [
          'http://schema.org/DesktopWebPlatform',
          'http://schema.org/MobileWebPlatform',
        ],
      },
      name: 'Book Now',
    },
  }
}

export function getFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/#faq`,
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.path.startsWith('http') ? item.path : `${SITE_URL}${item.path}`,
    })),
  }
}

export function getServiceSchema(args: {
  name: string
  description: string
  path: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: args.name,
    description: args.description,
    url: `${SITE_URL}${args.path}`,
    serviceType: 'Physiotherapy',
    provider: {
      '@id': `${SITE_URL}/#clinic`,
    },
    areaServed: {
      '@type': 'City',
      name: 'Winnipeg',
    },
  }
}

export function getArticleSchema(args: {
  title: string
  description: string
  path: string
  datePublished?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: args.title,
    description: args.description,
    datePublished: args.datePublished,
    author: {
      '@type': 'Organization',
      name: COMPANY_CONTACT.NAME,
    },
    publisher: {
      '@type': 'Organization',
      name: COMPANY_CONTACT.NAME,
      logo: { '@type': 'ImageObject', url: logoUrl },
    },
    mainEntityOfPage: `${SITE_URL}${args.path}`,
  }
}
