"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Facebook, Phone, Mail, MapPin, Instagram, Clock } from 'lucide-react'

const linkColumns = [
  {
    title: 'Patients',
    links: [
      { label: 'Book Appointment', href: 'https://pmphysio.juvonno.com/portal/publicbook.php' },
      { label: 'Insurance Providers', href: '/insurance' },
      { label: 'Request Appointment', href: '/about#appointment-form' },
      { label: 'Meet Our Team', href: '/team' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'News & Blogs', href: '/blogs' },
      { label: 'About Us', href: '/about' },
      { label: 'What We Treat', href: '/what-we-treat' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Team', href: '/team' },
      { label: 'Services', href: '/#what-we-treat' },
      { label: 'FAQs', href: '/#faqs' },
      { label: 'Contact Us', href: '/about#appointment-form' },
    ],
  },
]

// SEO-optimized services links
const serviceLinks = [
  { label: 'Back Pain & Sciatica Relief', href: '/services/back-pain-sciatica-relief' },
  { label: 'Sports Injuries', href: '/services/sports-injuries' },
  { label: 'Work Injuries & WCB', href: '/services/work-injuries' },
  { label: 'Motor Vehicle Accident (MPI)', href: '/services/motor-vehicle-accident-recovery' },
  { label: 'Neck Pain Relief', href: '/services/neck-pain-relief' },
  { label: 'Shoulder Pain Relief', href: '/services/shoulder-pain-relief' },
  { label: 'Hip & Knee Pain Relief', href: '/services/hip-knee-pain-relief' },
  { label: 'Chronic Pain Management', href: '/services/chronic-pain-relief' },
  { label: 'Pre & Post-Surgical Rehab', href: '/services/pre-post-surgical-conditions' },
]

export default function Footer() {
  const pathname = usePathname()

  // Hide footer on Sanity Studio routes
  if (pathname?.startsWith('/studio')) {
    return null
  }

  const businessAddress = {
    street: 'Unit 4, 567 St. Anne\'s Rd',
    city: 'Winnipeg',
    province: 'MB',
    postalCode: 'R2M 5B2',
    country: 'Canada',
  }

  const fullAddress = `${businessAddress.street}, ${businessAddress.city}, ${businessAddress.province} ${businessAddress.postalCode}`

  return (
    <footer className="border-t bg-white" role="contentinfo">
      {/* Structured Data for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Physiotherapy',
            name: 'Pro Motion Physiotherapy',
            // Use absolute URL so Google can fetch the logo
            image: 'https://promotionphysiotherapy.com/logo.png',
            '@id': 'https://promotionphysiotherapy.com',
            url: 'https://promotionphysiotherapy.com',
            telephone: '+12045760033',
            priceRange: '$$',
            address: {
              '@type': 'PostalAddress',
              streetAddress: businessAddress.street,
              addressLocality: businessAddress.city,
              addressRegion: businessAddress.province,
              postalCode: businessAddress.postalCode,
              addressCountry: businessAddress.country,
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 49.8951,
              longitude: -97.1384,
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '20:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Saturday',
                opens: '09:00',
                closes: '16:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Sunday',
                opens: '10:00',
                closes: '16:00',
              },
            ],
            sameAs: [
              'https://www.facebook.com/profile.php?id=61584659892176',
              'https://www.instagram.com/pro.motion.physiotherapy',
            ],
            areaServed: {
              '@type': 'City',
              name: 'Winnipeg',
            },
            // Explicit Organization schema with logo for Google
            '@graph': [
              {
                '@type': 'Organization',
                name: 'Pro Motion Physiotherapy',
                url: 'https://promotionphysiotherapy.com',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://promotionphysiotherapy.com/logo.png',
                },
              },
            ],
          }),
        }}
      />

      {/* Google Maps Section */}
      <div className="w-full border-b border-gray-200">
        <iframe
          src="https://www.google.com/maps?q=Unit+4,+567+St.+Anne%27s+Rd,+Winnipeg,+MB+R2M+5B2&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
          title="Pro Motion Physiotherapy Location - Unit 4, 567 St. Anne's Rd, Winnipeg, MB R2M 5B2"
          aria-label="Pro Motion Physiotherapy clinic location map"
        />
      </div>

      <div className="flex flex-col gap-10 px-4 py-10 sm:px-6 sm:py-12 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        {/* Logo + location + contact info + socials */}
        <div className="max-w-sm">
          <div className="relative h-10 w-40">
            <Link href="/" aria-label="Pro Motion Physiotherapy Home">
              <Image
                src="/logo.png"
                alt="Pro Motion Physiotherapy - Registered Physiotherapy Clinic in Winnipeg, Manitoba"
                fill
                sizes="160px"
                className="object-contain"
                priority
              />
            </Link>
          </div>

          <address className="mt-4 text-sm leading-relaxed text-gray-600 not-italic">
            <p className="font-semibold text-gray-900 mb-2">Pro Motion Physiotherapy</p>
            <div className="space-y-1.5">
              <p className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-gray-500 flex-shrink-0" aria-hidden="true" />
                <span>
                  {businessAddress.street}
                  <br />
                  {businessAddress.city}, {businessAddress.province} {businessAddress.postalCode}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gray-500 flex-shrink-0" aria-hidden="true" />
                <a
                  href="tel:+12045760033"
                  className="hover:text-[#e63939] transition-colors"
                  aria-label="Call Pro Motion Physiotherapy at (204) 576-0033"
                >
                  (204) 576-0033
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-500 flex-shrink-0" aria-hidden="true" />
                <a
                  href="mailto:info@promotionphysiotherapy.ca"
                  className="hover:text-[#e63939] transition-colors"
                  aria-label="Email Pro Motion Physiotherapy"
                >
                  info@promotionphysiotherapy.ca
                </a>
              </p>
              <div className="flex items-start gap-2 pt-2">
                <Clock className="h-4 w-4 mt-0.5 text-gray-500 flex-shrink-0" aria-hidden="true" />
                <div className="text-sm text-gray-600">
                  <p><span className="font-medium text-gray-900">Mon - Fri:</span> 9:00 AM - 8:00 PM</p>
                  <p><span className="font-medium text-gray-900">Sat - Sun:</span> 9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </address>

          <div className="mt-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400 mb-2">
              Follow Us
            </p>
            <div className="flex gap-3 text-gray-500">
              <a
                href="https://www.facebook.com/profile.php?id=61584659892176"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Pro Motion Physiotherapy on Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-[#e63939] hover:text-white"
              >
                <Facebook className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/pro.motion.physiotherapy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Pro Motion Physiotherapy on Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-[#e63939] hover:text-white"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Services Column - SEO Boost */}
        <div className="min-w-[200px] space-y-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
            Our Services
          </h3>
          <ul className="space-y-2">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-gray-700 transition-colors hover:text-[#e63939]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/what-we-treat"
                className="text-sm font-semibold text-[#e63939] transition-colors hover:text-[#c62828]"
              >
                View All Services →
              </Link>
            </li>
          </ul>
        </div>

        {/* Link columns */}
        <div className="flex flex-1 flex-wrap gap-8 text-sm text-gray-700 lg:justify-end">
          {linkColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400 mb-3">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-700 transition-colors hover:text-[#e63939]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>
    </footer>
  )
}
