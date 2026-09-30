# Analytics measurement — September 30, 2026

Production base: 523d33ffb0220730b7c1807b73234df3deb4e7c4. Prepared in an isolated checkout so the unpublished redesign remains untouched.

## Changes

- Load GA4 only on promotionphysiotherapy.ca and www.promotionphysiotherapy.ca. Localhost, local IP addresses and preview domains do not load the Google tag.
- Apply the same hostname restriction to custom clinic events.
- Record booking_click for the floating Schedule Appointment button, which uses window.open and bypasses the delegated anchor listener.
- Preserve the existing generate_lead event, emitted only after the enquiry API returns HTTP success and success:true. Preserve phone_click and anchor booking_click tracking. Payloads contain only fixed method labels, never form contents.
- Preserve enhanced-measurement page navigation tracking without a duplicate manual page_view sender.

## Validation

Production build, type checking and diff checks passed. Build disk caching was temporarily disabled to accommodate low local disk space; that configuration change was reverted and is not part of the release.

scripts/verify-analytics.cjs tests the local production build using Playwright. It intercepts all Google traffic and form POSTs. Verified: no Google scripts or events on local and preview origins; one tag on production; button and anchor booking events; phone click; no lead for HTTP 500 or success:false; exactly one lead for success:true with fixed payload. No real clinic email, booking or Analytics event was sent. Playwright must be installed or supplied via NODE_PATH. TEST_BROWSER_PATH can select an installed browser; TEST_BASE_URL defaults to http://127.0.0.1:3107.

## Account-side step still required

Connected OpenSEO GA4 tools are read-only. In GA4 property 248255177 (Promotion physiothearpy), Admin > Data display > Events, mark generate_lead as a key event. If absent, use Create event with that exact name and Mark as key event; choose creation with code if prompted because the website already emits the event. Count once per event; do not invent a monetary value. Do not create a page-view matching rule or mark booking_click as a completed appointment.

Google instructions: https://support.google.com/analytics/answer/13128484?hl=en

This setting is prospective and does not backfill historical key-event counts. Previous local activity remains in historic reports; use hostname filtering when examining page reports. No GA4 property settings, historical filters, timezone, or external booking portal settings were changed. Real portal booking completion requires Juvonno-side support.
