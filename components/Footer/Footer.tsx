"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Facebook, Youtube } from 'lucide-react'

const linkColumns = [
  {
    title: 'Patients',
    links: [
      { label: 'Patient Portal', href: '#' },
      { label: 'Patient Resources', href: '#' },
      { label: 'Online Appointments', href: 'https://pmphysio.juvonno.com/portal/publicbook.php' },
      { label: 'Medical Team', href: '/team' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'News & Blogs', href: '/blogs' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/team' },
      { label: 'Services', href: '/#services' },
      { label: 'FAQs', href: '/#faqs' },
      { label: 'Contact Us', href: 'https://pmphysio.juvonno.com/portal/publicbook.php' },
    ],
  },
]

export default function Footer() {
  const pathname = usePathname()

  // Hide footer on Sanity Studio routes
  if (pathname?.startsWith('/studio')) {
    return null
  }

  return (
    <footer className="border-t bg-white">
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
          title="ProMotion Physiotherapy Location - Unit 4, 567 St. Anne's Rd, Winnipeg, MB R2M 5B2"
        />
      </div>

      <div className="flex flex-col gap-10 px-4 py-10 sm:px-6 sm:py-12 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        {/* Logo + location + socials */}
        <div className="max-w-sm">
          <div className="relative h-10 w-40">
            <Image
              src="/logo.png"
              alt="ProMotion Physiotherapy logo"
              fill
              sizes="160px"
              className="object-contain"
            />
          </div>

          <p className="mt-4 text-sm leading-relaxed text-gray-600">
            ProMotion Physiotherapy
            <br />
            Unit 4, 567 St. Anne&apos;s Rd, Winnipeg, MB R2M 5B2
          </p>

          <div className="mt-4 flex gap-3 text-gray-500">
            <a
              href="#"
              aria-label="ProMotion on YouTube"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-[#e63939] hover:text-white"
            >
              <Youtube className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="ProMotion on Facebook"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-[#e63939] hover:text-white"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Link columns */}
        <div className="flex flex-1 flex-wrap gap-8 text-sm text-gray-700 lg:justify-end">
          {linkColumns.map((column) => (
            <div key={column.title} className="min-w-[140px] space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                {column.title}
              </p>
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
            </div>
          ))}
        </div>
      </div>

    </footer>
  )
}
