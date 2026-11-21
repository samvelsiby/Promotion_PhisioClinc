'use client'

import Script from 'next/script'

// Rtstics conversion analytics snippet (built in Lovable).
// Cookieless: it records page views and intent clicks with a server-side daily
// hash, and keeps the campaign tags of the current visit (including an ad click
// id, when the visitor arrived from an ad) in sessionStorage.
//
// Rendered by CookieConsent, which leaves it out once a visitor has chosen
// "Reject optional" and sets `window.__rtConsent = false` so an already-running
// copy stops. It still loads on previews while the tool is being tested; narrow
// this to the production host once the data is trusted.
//
// Served from the published Lovable app (the *.lovableproject.com preview host
// returns 401 to anonymous requests, so never point this at it).
export const TRACKER_SRC = 'https://click-to-client-compass.lovable.app/api/public/t.js'
export const TRACKER_SITE_ID = '0c1aad1f-09ea-4bf9-bf24-6c5fe01cb2d6'

export default function ConversionTracker() {
  return <Script src={TRACKER_SRC} data-site={TRACKER_SITE_ID} strategy="afterInteractive" />
}
