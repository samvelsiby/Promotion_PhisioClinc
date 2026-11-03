import { createHash } from 'crypto'
import { NextRequest, NextResponse } from 'next/server'
import { COMPANY_CONTACT } from '@/lib/constants'
import { isProductionAnalyticsHost } from '@/lib/analyticsEvents'

// First-party booking redirect.
//
// Every "Book now" link on the site points here instead of straight at Juvonno.
// The handler counts the click on our own server (no cookie, no consent banner,
// no ad blocker in the way), then forwards the visitor to the Juvonno portal with
// any campaign parameters preserved so Juvonno can see them if it keeps them.
//
// Two sinks:
//   1. A structured JSON line in the Vercel runtime log (always).
//   2. A `booking_redirect` event sent to GA4 through the Measurement Protocol,
//      only when GA4_API_SECRET is set and the request hits the production host.
//      The client id is the visitor's own _ga cookie when they accepted analytics,
//      otherwise a daily-rotating hash with no stored identifier.

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const PASSTHROUGH = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'gbraid', 'wbraid', 'fbclid', 'msclkid'] as const
const SRC_PATTERN = /^[a-z0-9-]{1,40}$/

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams
  const target = new URL(COMPANY_CONTACT.BOOKING_URL)
  const attribution: Record<string, string> = {}
  for (const key of PASSTHROUGH) {
    const value = params.get(key)
    if (value && value.length <= 200) {
      target.searchParams.set(key, value)
      attribution[key] = value
    }
  }

  const srcRaw = params.get('src') || ''
  const src = SRC_PATTERN.test(srcRaw) ? srcRaw : 'unknown'
  const page = refererPath(request)
  const host = (request.headers.get('host') || '').split(':')[0]
  const event = {
    type: 'booking_redirect',
    at: new Date().toISOString(),
    src,
    page,
    country: request.headers.get('x-vercel-ip-country') || '',
    device: deviceClass(request.headers.get('user-agent') || ''),
    ...attribution,
  }
  console.log(JSON.stringify(event))

  if (isProductionAnalyticsHost(host)) {
    await sendToGa4(request, event).catch(() => { /* Measurement must never block the booking. */ })
  }

  const response = NextResponse.redirect(target, 302)
  response.headers.set('Cache-Control', 'no-store')
  response.headers.set('X-Robots-Tag', 'noindex, nofollow')
  return response
}

function refererPath(request: NextRequest): string {
  const referer = request.headers.get('referer')
  if (!referer) return ''
  try {
    const url = new URL(referer)
    return url.origin === request.nextUrl.origin ? url.pathname : url.hostname
  } catch {
    return ''
  }
}

function deviceClass(userAgent: string): 'mobile' | 'tablet' | 'desktop' {
  if (/iPad|Tablet/i.test(userAgent)) return 'tablet'
  if (/Mobi|Android|iPhone/i.test(userAgent)) return 'mobile'
  return 'desktop'
}

// Reuse the visitor's GA client id when they accepted analytics so GA4 can stitch
// this event to their session. Otherwise derive a pseudonymous id that rotates
// daily and is never stored.
function clientId(request: NextRequest): string {
  const ga = request.cookies.get('_ga')?.value
  if (ga) {
    const parts = ga.split('.')
    if (parts.length >= 4) return `${parts[2]}.${parts[3]}`
  }
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || request.ip || ''
  const salt = process.env.BOOKING_HASH_SALT || process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''
  const day = new Date().toISOString().slice(0, 10)
  const digest = createHash('sha256').update(`${ip}|${request.headers.get('user-agent') || ''}|${salt}|${day}`).digest('hex')
  return `${parseInt(digest.slice(0, 8), 16)}.${parseInt(digest.slice(8, 16), 16)}`
}

async function sendToGa4(request: NextRequest, event: Record<string, string>) {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  const apiSecret = process.env.GA4_API_SECRET
  if (!measurementId || !apiSecret) return

  const params: Record<string, string | number> = {
    link_location: event.src,
    page_path: event.page,
    engagement_time_msec: 1,
  }
  if (event.country) params.country_code = event.country
  if (event.device) params.device_class = event.device
  if (event.utm_source) params.campaign_source = event.utm_source
  if (event.utm_medium) params.campaign_medium = event.utm_medium
  if (event.utm_campaign) params.campaign_name = event.utm_campaign
  if (event.utm_content) params.campaign_content = event.utm_content
  if (event.gclid || event.gbraid || event.wbraid) params.has_google_click_id = 1
  if (event.fbclid) params.has_meta_click_id = 1

  const url = `https://www.google-analytics.com/mp/collect?measurement_id=${encodeURIComponent(measurementId)}&api_secret=${encodeURIComponent(apiSecret)}`
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: clientId(request),
      non_personalized_ads: true,
      events: [{ name: 'booking_redirect', params }],
    }),
    signal: AbortSignal.timeout(1500),
  })
}
