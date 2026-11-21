'use client'

import { createContext, useContext, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { ShieldCheck } from 'lucide-react'
import GoogleAnalytics from './GoogleAnalytics'
import ConversionTracker from './ConversionTracker'
import CampaignTags from './CampaignTags'
import { forgetCampaign } from '@/lib/analyticsEvents'

declare global {
  interface Window {
    // Read by the Rtstics visit counter: `false` stops it for this page.
    __rtConsent?: boolean
  }
}

const STORAGE_KEY = 'promotion-cookie-consent-v1'
const MAX_AGE = 180 * 24 * 60 * 60 * 1000
// Key the Rtstics chat widget (localStorage, 90 days) and visit counter (sessionStorage)
// use to remember the ad click id and campaign tags a visitor arrived with.
const ATTRIBUTION_KEY = 'rt_attr'
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

// The chat widget keeps ad click ids in localStorage for 90 days. Only a visitor
// who accepted optional cookies keeps that record.
function dropStoredAdClick() {
  try { localStorage.removeItem(ATTRIBUTION_KEY) } catch { /* Storage unavailable. */ }
}

// "Reject optional" means nothing further goes to Google Analytics or the visit
// counter from this browser: Google's documented kill switch for the property,
// the counter's own consent flag, and removal of anything already stored.
function stopOptionalTracking(measurementId: string) {
  window.__rtConsent = false
  window.dispatchEvent(new Event('rt:consent'))
  ;(window as unknown as Record<string, unknown>)[`ga-disable-${measurementId}`] = true
  dropStoredAdClick()
  try { sessionStorage.removeItem(ATTRIBUTION_KEY) } catch { /* Storage unavailable. */ }
  forgetCampaign()
  clearAnalyticsCookies()
}

export default function CookieConsent({ children }: { children: React.ReactNode }) {
  const [choice, setChoice] = useState<boolean | null>(null)
  const [ready, setReady] = useState(false)
  const [editing, setEditing] = useState(false)
  const heading = useRef<HTMLHeadingElement>(null)
  const trigger = useRef<HTMLElement | null>(null)
  const choiceRef = useRef<boolean | null>(null)
  const pathname = usePathname()
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-ML36VHX4VF'
  const inStudio = pathname?.startsWith('/studio')
  const bannerVisible = ready && (choice === null || editing) && !inStudio
  choiceRef.current = choice

  useEffect(() => {
    const stored = readChoice()
    if (stored === false) stopOptionalTracking(measurementId)
    choiceRef.current = stored
    setChoice(stored)
    setReady(true)
    const sync = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY || event.key === null) window.location.reload()
    }
    window.addEventListener('storage', sync)
    return () => window.removeEventListener('storage', sync)
  }, [measurementId])

  useEffect(() => {
    if (editing) heading.current?.focus()
  }, [editing])

  function save(optional: boolean) {
    const previous = choice
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ analytics: optional, savedAt: Date.now() })) } catch { /* Keep this choice in memory when storage is unavailable. */ }
    if (!optional) stopOptionalTracking(measurementId)
    choiceRef.current = optional
    setChoice(optional)
    setEditing(false)
    trigger.current?.focus()
    // Changing an earlier choice reloads so tools that are already running stop,
    // and tools that were never loaded start cleanly.
    if (previous !== null && previous !== optional) window.location.reload()
  }

  return <ConsentContext.Provider value={{ bannerVisible, openSettings: () => { trigger.current = document.activeElement as HTMLElement; setEditing(true) } }}>
    {children}
    {/* Until a choice is made GA4 runs in cookieless Consent Mode. After "Reject optional" it is not loaded at all. Production host only. */}
    {ready && !inStudio && choice !== false && <GoogleAnalytics measurementId={measurementId} consent={choice === true} />}
    {/* The cookieless visit counter follows the same rule: off after an explicit reject. */}
    {ready && !inStudio && choice !== false && <ConversionTracker />}
    {/* Campaign tags on booking links, for the booking portal step counter. Same rule. */}
    {ready && !inStudio && choice !== false && <CampaignTags />}
    {ready && choice === true && !inStudio && (
      <Script src="https://datafa.st/js/script.js" data-website-id="dfid_QoyPW2C1pzniPcSl3pYpc" data-domain="www.promotionphysiotherapy.ca" strategy="afterInteractive" />
    )}
    {/* Clinic chat is a site feature, so it loads for everyone. Its 90-day ad-click record is kept only after Accept. */}
    {ready && (
      <Script
        src="https://agent.rtstics.com/widget.js"
        data-agent="c6f8978799bb9bdc41"
        strategy="afterInteractive"
        onReady={() => { if (choiceRef.current !== true) dropStoredAdClick() }}
      />
    )}
    {bannerVisible && <section aria-labelledby="cookie-heading" aria-describedby="cookie-description" className="fixed inset-x-2 bottom-2 z-[2147483647] mx-auto max-h-[85dvh] max-w-6xl overflow-y-auto rounded-xl border border-gray-200 bg-white p-4 text-gray-900 shadow-[0_8px_40px_rgba(0,0,0,0.14)] sm:inset-x-6 sm:bottom-6 sm:p-6">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-8">
        <div className="flex min-w-0 flex-1 items-start gap-3">
          <ShieldCheck className="mt-1 hidden h-6 w-6 shrink-0 text-[#c8101e] sm:block" aria-hidden="true" />
          <div>
            <h2 id="cookie-heading" ref={heading} tabIndex={-1} className="text-base font-semibold tracking-tight focus:outline-none sm:text-xl">Your privacy. Your choice.</h2>
            <p id="cookie-description" className="mt-1 max-w-2xl text-xs leading-relaxed text-gray-600 sm:mt-2 sm:text-sm">With your permission, we use Google and Datafast cookies to see how this website is used and to measure our advertising, never to show you personalised ads. Until you choose, visits are counted without cookies. <Link href="/privacy" className="font-medium text-[#c8101e] underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">Privacy &amp; cookies</Link></p>
          </div>
        </div>
        <div className="grid shrink-0 grid-cols-2 gap-2 lg:min-w-[340px]">
          <button onClick={() => save(false)} className="min-h-11 rounded-lg border border-[#c8101e] px-3 py-2 text-sm font-semibold text-[#c8101e] hover:bg-red-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c8101e] sm:min-h-12 sm:px-4 sm:py-3">Reject optional</button>
          <button onClick={() => save(true)} className="min-h-11 rounded-lg border border-[#c8101e] bg-[#c8101e] px-3 py-2 text-sm font-semibold text-white hover:bg-[#a50d19] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c8101e] sm:min-h-12 sm:px-4 sm:py-3">Accept optional</button>
        </div>
      </div>
    </section>}
  </ConsentContext.Provider>
}
