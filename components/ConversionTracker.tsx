import Script from 'next/script'

// Rtstics conversion analytics snippet (built in Lovable).
// Cookieless by design: it records page views and intent clicks with a
// server-side daily hash and no identifiers, so it is not gated behind the
// cookie banner. Loaded on every page, including previews, while the tool is
// being tested; narrow this to the production host once the data is trusted.
//
// The *.lovableproject.com preview host returns 401 to anonymous requests.
// Replace TRACKER_SRC with the published Lovable URL (or custom domain) to go live.
export const TRACKER_SRC = 'https://db716b9b-760e-4992-845a-118c6cf5f972.lovableproject.com/api/public/t.js'
export const TRACKER_SITE_ID = '0c1aad1f-09ea-4bf9-bf24-6c5fe01cb2d6'

export default function ConversionTracker() {
  return <Script src={TRACKER_SRC} data-site={TRACKER_SITE_ID} strategy="afterInteractive" />
}
