'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Calendar, Phone } from 'lucide-react'
import { COMPANY_CONTACT, bookingHref } from '@/lib/constants'
import { useCookieConsent } from './CookieConsent'

// Phone-only bar that keeps Call and Book one tap away on every page.
// It sits to the left of the chat bubble (60px, 24px from the right and bottom
// edges), steps aside while the cookie banner is open, and hides once the
// footer, which has its own booking and phone links, scrolls into view.
export default function MobileActionBar() {
  const pathname = usePathname()
  const { bannerVisible } = useCookieConsent()
  const [footerInView, setFooterInView] = useState(false)

  useEffect(() => {
    const footer = document.querySelector('footer')
    if (!footer || typeof IntersectionObserver === 'undefined') return
    const observer = new IntersectionObserver(([entry]) => setFooterInView(entry.isIntersecting))
    observer.observe(footer)
    return () => observer.disconnect()
  }, [pathname])

  if (pathname?.startsWith('/studio') || bannerVisible || footerInView) return null

  return (
    <nav
      aria-label="Call or book"
      className="fixed bottom-7 left-3 right-24 z-40 grid grid-cols-2 gap-1 rounded-full border border-gray-200 bg-white p-1 shadow-[0_8px_30px_rgba(0,0,0,0.18)] sm:hidden"
    >
      <a
        href={`tel:${COMPANY_CONTACT.PHONE}`}
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-3 text-sm font-semibold text-gray-900 active:bg-gray-100"
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        Call
      </a>
      <a
        href={bookingHref('sticky')}
        data-rt-goal="book-sticky"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#c8101e] px-3 text-sm font-semibold text-white active:bg-[#a50d19]"
      >
        <Calendar className="h-4 w-4" aria-hidden="true" />
        Book
      </a>
    </nav>
  )
}
