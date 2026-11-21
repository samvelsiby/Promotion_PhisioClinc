import { NextRequest, NextResponse } from 'next/server'
import { COMPANY_CONTACT } from '@/lib/constants'
import { isProductionAnalyticsHost } from '@/lib/analyticsEvents'
import { dailyClientId, deviceClass, sendGa4Event } from '@/lib/serverAnalytics'

// Booking portal step counter.
//
// The Juvonno booking portal is on another domain, so the site cannot see what
// happens after /book. A small tag in the portal's Google Tag Manager container
// (docs/juvonno-portal-gtm-tag.html) calls this route once per step.
//
// It accepts three fixed labels and nothing else: which step, which channel the
// visit came from, and the campaign name from the ad link. No page address, no
// form values, no click id, no cookie. Anything that does not match is dropped.
//
// Sinks are the same as /book: a JSON line in the Vercel runtime log (always),
// and a `portal_<step>` GA4 event when GA4_API_SECRET is set on production.

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const PORTAL_ORIGIN = new URL(COMPANY_CONTACT.BOOKING_URL).origin
const STEPS = new Set(['open', 'service', 'datetime', 'submit', 'complete'])
const CHANNELS = new Set(['paid', 'site', 'other'])
const CAMPAIGN_PATTERN = /^[A-Za-z0-9_.-]{1,60}$/

// Best-effort flood guard, per serverless instance. One booking is five events.
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 40
const recent = new Map<string, number[]>()

function rateLimited(ip: string): boolean {
  const now = Date.now()
  const hits = (recent.get(ip) || []).filter((time) => now - time < WINDOW_MS)
  const limited = hits.length >= MAX_PER_WINDOW
  if (!limited) hits.push(now)
  recent.set(ip, hits)
  if (recent.size > 5000) {
    recent.forEach((times, key) => {
      if (times.every((time) => now - time >= WINDOW_MS)) recent.delete(key)
    })
  }
  return limited
}

// Browsers send Origin on the beacon POST and Referer on the image fallback.
function fromPortal(request: NextRequest): boolean {
  for (const header of ['origin', 'referer']) {
    const value = request.headers.get(header)
    if (!value) continue
    try {
      if (new URL(value).origin === PORTAL_ORIGIN) return true
    } catch { /* Malformed header: keep looking. */ }
  }
  return false
}

async function handle(request: NextRequest) {
  const response = new NextResponse(null, { status: 204 })
  response.headers.set('Cache-Control', 'no-store')
  response.headers.set('X-Robots-Tag', 'noindex, nofollow')

  const params = request.nextUrl.searchParams
  const step = params.get('step') || ''
  if (!STEPS.has(step) || !fromPortal(request)) return response

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || request.ip || 'unknown'
  if (rateLimited(ip)) return response

  const channelRaw = params.get('channel') || ''
  const channel = CHANNELS.has(channelRaw) ? channelRaw : 'other'
  const campaignRaw = params.get('campaign') || ''
  const campaign = CAMPAIGN_PATTERN.test(campaignRaw) ? campaignRaw : ''
  const event = {
    type: 'portal_step',
    at: new Date().toISOString(),
    step,
    channel,
    campaign,
    country: request.headers.get('x-vercel-ip-country') || '',
    device: deviceClass(request.headers.get('user-agent') || ''),
  }
  console.log(JSON.stringify(event))

  const host = (request.headers.get('host') || '').split(':')[0]
  if (isProductionAnalyticsHost(host)) {
    const gaParams: Record<string, string | number> = { channel, device_class: event.device }
    if (campaign) gaParams.campaign_name = campaign
    if (event.country) gaParams.country_code = event.country
    await sendGa4Event(dailyClientId(request), `portal_${step}`, gaParams).catch(() => { /* Measurement must never fail the request. */ })
  }
  return response
}

export const GET = handle
export const POST = handle
