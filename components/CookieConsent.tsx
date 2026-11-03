'use client'

import { createContext, useContext, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { ShieldCheck } from 'lucide-react'
import GoogleAnalytics from './GoogleAnalytics'

const STORAGE_KEY = 'promotion-cookie-consent-v1'
const MAX_AGE = 180 * 24 * 60 * 60 * 1000
const ConsentContext = createContext({ openSettings: () => {}, bannerVisible: false })
export const useCookieConsent = () => useContext(ConsentContext)

function readChoice(): boolean | null {
  try {
    const value = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null')
    return value && typeof value.analytics === 'boolean' && typeof value.savedAt === 'number' && value.savedAt <= Date.now() && Date.now() - value.savedAt < MAX_AGE ? value.analytics : null
  } catch { return null }
}

function clearAnalyticsCookies() {
  const host = location.hostname.split('.')
  const domains = ['', ...host.map((_, i) => host.slice(i).join('.'))]
  for (const cookie of document.cookie.split(';')) {
    const name = cookie.trim().split('=')[0]
    if (!/^(_ga($|_)|_gid$|_gat($|_)|_gcl_|datafast_)/.test(name)) continue
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ''}`
    }
  }
}

export default function CookieConsent({ children }: { children: React.ReactNode }) {
  const [choice, setChoice] = useState<boolean | null>(null)
  const [ready, setReady] = useState(false)
  const [editing, setEditing] = useState(false)
  const heading = useRef<HTMLHeadingElement>(null)
  const trigger = useRef<HTMLElement | null>(null)
  const pathname = usePathname()
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-ML36VHX4VF'
  const inStudio = pathname?.startsWith('/studio')
  const bannerVisible = ready && (choice === null || editing) && !inStudio

  useEffect(() => {
    setChoice(readChoice())
    setReady(true)
    const sync = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY || event.key === null) window.location.reload()
    }
    window.addEventListener('storage', sync)
    return () => window.removeEventListener('storage', sync)
  }, [])

  useEffect(() => {
    if (editing) heading.current?.focus()
  }, [editing])

  function save(analytics: boolean) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ analytics, savedAt: Date.now() })) } catch { /* Keep this choice in memory when storage is unavailable. */ }
    if (!analytics) {
      // Consent Mode drops to "denied" via GoogleAnalytics; also remove cookies already set.
      clearAnalyticsCookies()
    }
    setChoice(analytics)
    setEditing(false)
    trigger.current?.focus()
    // Withdrawing after acceptance reloads so Datafast and any running listeners stop.
    if (choice === true && !analytics) window.location.reload()
  }

  return <ConsentContext.Provider value={{ bannerVisible, openSettings: () => { trigger.current = document.activeElement as HTMLElement; setEditing(true) } }}>
    {children}
    {/* GA4 loads in cookieless Consent Mode until accepted; it only ever runs on the production host. */}
    {ready && !inStudio && <GoogleAnalytics measurementId={measurementId} consent={choice === true} />}
    {ready && choice === true && !inStudio && (
      <Script src="https://datafa.st/js/script.js" data-website-id="dfid_QoyPW2C1pzniPcSl3pYpc" data-domain="www.promotionphysiotherapy.ca" strategy="afterInteractive" />
    )}
    {bannerVisible && <section aria-labelledby="cookie-heading" aria-describedby="cookie-description" className="fixed inset-x-3 bottom-3 z-[2147483647] mx-auto max-h-[85dvh] max-w-6xl overflow-y-auto rounded-xl border border-gray-200 bg-white p-5 text-gray-900 shadow-[0_8px_40px_rgba(0,0,0,0.14)] sm:inset-x-6 sm:bottom-6 sm:p-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-8">
        <div className="flex min-w-0 flex-1 items-start gap-3">
          <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-[#c8101e]" aria-hidden="true" />
          <div>
            <h2 id="cookie-heading" ref={heading} tabIndex={-1} className="text-xl font-semibold tracking-tight focus:outline-none">Your privacy. Your choice.</h2>
            <p id="cookie-description" className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-600">With your permission, we use Google Analytics and Datafast cookies to understand how our website is used. Until you accept, analytics run without cookies or identifiers and only produce anonymous totals. You can change your choice anytime.</p>
            <Link href="/privacy" className="mt-2 inline-flex min-h-8 items-center text-sm font-medium text-[#c8101e] underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">Privacy &amp; cookies</Link>
          </div>
        </div>
        <div className="grid shrink-0 grid-cols-1 gap-2 sm:grid-cols-2 lg:min-w-[340px]">
          <button onClick={() => save(false)} className="min-h-12 rounded-lg border border-[#c8101e] px-4 py-3 text-sm font-semibold text-[#c8101e] hover:bg-red-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c8101e]">Reject optional</button>
          <button onClick={() => save(true)} className="min-h-12 rounded-lg border border-[#c8101e] bg-[#c8101e] px-4 py-3 text-sm font-semibold text-white hover:bg-[#a50d19] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c8101e]">Accept analytics</button>
        </div>
      </div>
    </section>}
  </ConsentContext.Provider>
}
