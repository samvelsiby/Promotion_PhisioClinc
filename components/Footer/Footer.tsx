'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Facebook, Phone, Instagram, MapPin } from 'lucide-react'
import { COMPANY_CONTACT, NAP_LINE } from '@/lib/constants'

const serviceLinks = [
  { label: 'Back pain & sciatica', href: '/services/back-pain-sciatica-relief' },
  { label: 'Sports injuries', href: '/services/sports-injuries' },
  { label: 'Work injuries & WCB', href: '/services/work-injuries' },
  { label: 'Car accident recovery & MPI', href: '/services/motor-vehicle-accident-recovery' },
  { label: 'Neck pain', href: '/services/neck-pain-relief' },
  { label: 'Shoulder pain', href: '/services/shoulder-pain-relief' },
  { label: 'Hip & knee pain', href: '/services/hip-knee-pain-relief' },
  { label: 'Chronic pain', href: '/services/chronic-pain-relief' },
  { label: 'Pre & post-surgical rehab', href: '/services/pre-post-surgical-conditions' },
]

const patientLinks = [
  { label: 'About the clinic', href: '/about' },
  { label: 'Meet our team', href: '/team' },
  { label: 'How we treat', href: '/how-we-treat' },
  { label: 'Insurance & direct billing', href: '/insurance' },
  { label: 'Recovery resources', href: '/blogs' },
  { label: 'Contact us', href: '/about#appointment-form' },
]

const linkStyle = 'inline-flex min-h-9 items-center py-1 text-sm leading-relaxed text-gray-600 transition-colors hover:text-[#c8101e] hover:underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c8101e]'

export default function Footer() {
  const pathname = usePathname()
  if (pathname?.startsWith('/studio')) return null

  return (
    <footer id="clinic-footer" className="scroll-mt-32 border-t border-gray-200 bg-white text-gray-900">
      <div className="bg-gray-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-12">
          <div>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Your next step starts here.</h2>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-gray-600">Personalized physiotherapy in St. Vital, Winnipeg. Let’s find a time that works for you.</p>
          </div>
          <a href={COMPANY_CONTACT.BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 shrink-0 items-center justify-center gap-6 self-stretch rounded-lg bg-[#c8101e] px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-[#a50d19] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c8101e] sm:self-start lg:self-center">
            Book an appointment <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-10 lg:grid-cols-[1.1fr_1fr_.85fr_1.2fr] lg:gap-x-8 lg:py-14">
          <div className="order-1 col-span-2 min-w-0 sm:col-span-1">
            <Link href="/" aria-label="Pro Motion Physiotherapy home" className="inline-block rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
              <Image src="/navbar/Navbar.svg" alt="Pro Motion Physiotherapy" width={210} height={70} sizes="210px" className="h-auto w-[210px] max-w-full" />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-gray-600">Founded by two dedicated physiotherapists. Driven by care. Powered by motion.</p>
            <a href={`tel:${COMPANY_CONTACT.PHONE}`} className="mt-5 inline-flex min-h-11 items-center gap-2 text-xl font-semibold tracking-tight hover:text-[#c8101e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" /> {COMPANY_CONTACT.PHONE_DISPLAY}
            </a>
            <a href={`mailto:${COMPANY_CONTACT.EMAIL}`} className={`${linkStyle} break-all`}>{COMPANY_CONTACT.EMAIL}</a>
            <p className="mt-1 text-sm text-gray-600">Fax: {COMPANY_CONTACT.FAX}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a href={COMPANY_CONTACT.SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Pro Motion Physiotherapy on Instagram" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-colors hover:border-[#c8101e] hover:text-[#c8101e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"><Instagram className="h-5 w-5" aria-hidden="true" /></a>
              <a href={COMPANY_CONTACT.SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Pro Motion Physiotherapy on Facebook" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-colors hover:border-[#c8101e] hover:text-[#c8101e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"><Facebook className="h-5 w-5" aria-hidden="true" /></a>
              <a href={COMPANY_CONTACT.REVIEWS_URL} target="_blank" rel="noopener noreferrer" className={`${linkStyle} ml-2`}>Google reviews <ArrowUpRight className="ml-1 h-4 w-4 shrink-0" aria-hidden="true" /></a>
            </div>
          </div>

          <nav aria-label="Footer treatments" className="order-3 min-w-0 lg:order-2">
            <h3 className="mb-3 text-base font-semibold">How we can help</h3>
            <ul>{serviceLinks.map(link => <li key={link.href}><Link href={link.href} className={linkStyle}>{link.label}</Link></li>)}</ul>
            <Link href="/what-we-treat" className={`${linkStyle} mt-2 font-semibold text-[#c8101e]`}>Explore all treatments <ArrowUpRight className="ml-1 h-4 w-4 shrink-0" aria-hidden="true" /></Link>
          </nav>

          <nav aria-label="Footer patient information" className="order-4 min-w-0 lg:order-3">
            <h3 className="mb-3 text-base font-semibold">Your care</h3>
            <ul>{patientLinks.map(link => <li key={link.href}><Link href={link.href} className={linkStyle}>{link.label}</Link></li>)}</ul>
          </nav>

          <div className="order-2 col-span-2 min-w-0 sm:col-span-1 lg:order-4">
            <h3 className="mb-4 text-base font-semibold">Visit our St. Vital clinic</h3>
            <address className="text-sm leading-relaxed text-gray-600 not-italic">
              <span className="font-medium text-gray-900">{COMPANY_CONTACT.NAME}</span><br />
              {COMPANY_CONTACT.ADDRESS.street}<br />
              {COMPANY_CONTACT.ADDRESS.city}, {COMPANY_CONTACT.ADDRESS.province} {COMPANY_CONTACT.ADDRESS.postalCode}
            </address>
            <div className="mt-4 space-y-1 text-sm leading-relaxed text-gray-600" aria-label="Clinic opening hours">
              <p>{COMPANY_CONTACT.HOURS.weekday}</p>
              <p>{COMPANY_CONTACT.HOURS.saturday}</p>
              <p>{COMPANY_CONTACT.HOURS.sunday}</p>
            </div>
            <div className="mt-5 overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
              <iframe src={`https://www.google.com/maps?q=${encodeURIComponent(NAP_LINE)}&output=embed`} width="100%" height="160" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={`Map to Pro Motion Physiotherapy, ${NAP_LINE}`} className="block w-full" />
            </div>
            <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(NAP_LINE)}`} target="_blank" rel="noopener noreferrer" className={`${linkStyle} mt-2 gap-2`}><MapPin className="h-4 w-4 shrink-0" aria-hidden="true" /> Get directions <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-gray-200 pb-32 pt-6 text-sm text-gray-600 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8 lg:pb-6">
          <p>© {new Date().getFullYear()} {COMPANY_CONTACT.NAME}</p>
          <p>Built by <a href="https://www.rtstics.com/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-6 items-center font-medium text-gray-900 underline decoration-gray-300 underline-offset-4 hover:text-[#c8101e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">RTSTICS</a></p>
        </div>
      </div>
    </footer>
  )
}
