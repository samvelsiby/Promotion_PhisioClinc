import { createHash } from 'crypto'
import { NextRequest } from 'next/server'

// Server-side counting shared by the booking redirect (/book) and the booking
// portal step counter (/api/portal-event). Nothing here sets or needs a cookie.

// A pseudonymous id that rotates daily and is never stored. The same browser on
// the same day gets the same id from both routes, so GA4 can line up a booking
// click with the portal steps that follow it without any stored identifier.
export function dailyClientId(request: NextRequest): string {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || request.ip || ''
  const salt = process.env.BOOKING_HASH_SALT || process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''
  const day = new Date().toISOString().slice(0, 10)
  const digest = createHash('sha256').update(`${ip}|${request.headers.get('user-agent') || ''}|${salt}|${day}`).digest('hex')
  return `${parseInt(digest.slice(0, 8), 16)}.${parseInt(digest.slice(8, 16), 16)}`
}

export function deviceClass(userAgent: string): 'mobile' | 'tablet' | 'desktop' {
  if (/iPad|Tablet/i.test(userAgent)) return 'tablet'
  if (/Mobi|Android|iPhone/i.test(userAgent)) return 'mobile'
  return 'desktop'
}

// GA4 Measurement Protocol. A no-op until GA4_API_SECRET is set. Callers must
// catch: measurement never blocks a booking.
export async function sendGa4Event(clientId: string, name: string, params: Record<string, string | number>) {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  const apiSecret = process.env.GA4_API_SECRET
  if (!measurementId || !apiSecret) return

  const url = `https://www.google-analytics.com/mp/collect?measurement_id=${encodeURIComponent(measurementId)}&api_secret=${encodeURIComponent(apiSecret)}`
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: clientId,
      non_personalized_ads: true,
      events: [{ name, params: { ...params, engagement_time_msec: 1 } }],
    }),
    signal: AbortSignal.timeout(1500),
  })
}
