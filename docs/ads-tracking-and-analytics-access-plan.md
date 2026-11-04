# Ads tracking, booking visibility, and AI-agent access plan

Written 2026-11-03. Covers two questions: how to see ad click → site → Book Now → completed Juvonno booking, and what access Claude needs to read analytics directly.

## 1. What the site tracks today

Found in `components/GoogleAnalytics.tsx`, `lib/analyticsEvents.ts`, `components/CookieConsent.tsx`.

| Thing | State |
|---|---|
| GA4 tag | Installed (measurement ID `G-ML36VHX4VF`), production host only |
| Cookie consent | GA does not load at all until the visitor clicks Accept |
| `booking_click` event | Fires on any click to `pmphysio.juvonno.com/portal/publicbook.php` |
| `phone_click` event | Fires on any `tel:` link |
| `generate_lead` event | Fires on contact form submit |
| Google Ads conversion tag | Not installed |
| GA4 ↔ Google Ads link | Unknown, needs checking in GA4 Admin |
| Cross-domain tracking to Juvonno | Not configured |
| UTM / gclid passthrough to Juvonno | Not configured. The link is a plain `href` |
| Booking completion | Not visible at all. Happens on Juvonno's domain |

So "how many clicked Book Now" is already answered by `booking_click` in GA4, but only for visitors who accepted cookies. Visitors who ignore or decline the banner are invisible. That is usually 30 to 60 percent of traffic, which is the single biggest gap right now.

## 2. The funnel we want

```
Ad impression → Ad click → Landing page → Book Now click → Juvonno form opened → Booking confirmed
     Ads           Ads/GA4       GA4            GA4 (have)         Juvonno?            Juvonno?
```

Steps 1 to 4 are fixable on our side this week. Steps 5 and 6 depend on what Juvonno allows.

## 3. Fixes on our side (no Juvonno dependency)

### 3a. Google Consent Mode v2 instead of "no GA until accept"
Load gtag immediately with `gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', ... })`, then `gtag('consent', 'update', { ...granted })` when the visitor accepts. With consent denied, GA4 sends cookieless pings and uses behavioural modelling to estimate the missing users, and Google Ads can model conversions. This keeps the privacy posture (no cookies without consent) but stops the data going to zero. This is the highest-value change.

### 3b. First-party `/book` redirect route
Change every Book Now link from the raw Juvonno URL to `/book` on our own domain. A Next.js route handler:
1. Logs the click server-side (count, referrer, UTM, gclid, page). No cookie, no consent needed, cannot be blocked by ad blockers.
2. Redirects (302) to the Juvonno URL, appending `utm_*` and `gclid` as query params so Juvonno sees them if it preserves them.

This gives a true Book Now click count independent of consent, and a per-page / per-campaign breakdown. Store it in Supabase (already a dependency) or Vercel KV.

### 3c. Link GA4 to Google Ads and import conversions
In GA4 Admin → Product links → Google Ads, link the ads account. Then in Google Ads → Goals → Conversions → Import from GA4: `booking_click` (primary), `phone_click` and `generate_lead` (secondary). Until booking completion is visible, `booking_click` is the optimisation signal for Smart Bidding. Auto-tagging in Google Ads must stay on so gclid is attached.

### 3d. UTM discipline on every ad
Every ad URL carries `utm_source`, `utm_medium=cpc`, `utm_campaign`, `utm_content`. Meta ads also need this because Meta does not auto-tag for GA4.

### 3e. Behaviour visibility
- Microsoft Clarity (free): heatmaps, session replay, rage-click detection. Gate behind the same consent as GA.
- Vercel Web Analytics (cookieless, no consent needed): page views, referrers, countries, devices. The site is on Vercel already. Cheap baseline that never goes to zero.

### 3f. Call tracking
Ads will drive phone calls that never touch the site. Use Google Ads call assets with call reporting, or a dynamic tracking number (CallRail or similar) swapped in only for paid visitors.

## 4. Seeing completed bookings (Juvonno side)

Three things to ask Juvonno support, in order of value:

1. **Can we add a tracking snippet (GA4 / GTM container) to the public booking portal?** Many clinic booking systems have a "tracking code" field in portal settings. If yes: add `pmphysio.juvonno.com` to GA4 cross-domain settings, fire a `book_appointment` event on the confirmation page, import it to Google Ads as the real primary conversion. This gives the full funnel.
2. **Does the portal preserve URL query params (`gclid`, `utm_*`) through to the booking record, or is there a "how did you hear about us" / referral-source field we can pre-fill via URL?** If yes, each booking carries its source. Export monthly and reconcile, or upload to Google Ads as offline conversions keyed by gclid.
3. **API access.** Juvonno has a REST API. A nightly job pulls appointments created through online booking and writes a count per day (and source, if item 2 works) into our own table. Even without attribution this gives the one number that matters: bookings per day, before vs after ads start, and booking_click → booking conversion rate.

If Juvonno says no to all three, fallback is manual: the clinic exports online bookings weekly from Juvonno and we divide by `/book` clicks for the period. Crude but honest.

## 5. Access Claude needs to read this data directly

### What is already set up
- **Google Analytics MCP** (Google's official `analytics-mcp`) is configured at the user level and connected to this session. Its OAuth token is expired or revoked, so every call fails with `invalid_grant`. Fix: re-run the Google application-default login for that server (the account used must have at least Viewer on the Pro-Motion GA4 property). Once that works Claude can run reports, funnels, realtime, and conversions reports with ad cost.
- **Search Console MCP** (`mcp-search-console`, configured in `.mcp.json`) started, then crashed during this session. Fix: run it once from a terminal to see the error, then re-authenticate. The Google account must be added to the `promotionphysiotherapy.ca` property in Search Console (Full or Owner).
- **Vercel MCP** is connected: deployments, logs, and Vercel Web Analytics if enabled.

### What to provide
| Item | Why |
|---|---|
| GA4 property ID (number) | Every analytics-mcp call needs it |
| Viewer on GA4 property for the MCP's Google account | Otherwise token is valid but reports 403 |
| Full access on GSC property for the same account | Search Console reads |
| GA4 ↔ Google Ads link enabled | Ad cost and campaign data appear inside GA4 reports, no separate Ads API needed |
| Juvonno answers to section 4 | Decides whether booking completion is ever visible |
| Juvonno API key (if item 3 in section 4 is yes) | Nightly booking count job |
| Supabase or Vercel KV for `/book` click log | First-party click counting |

A dedicated Google Ads MCP exists but needs a Google Ads developer token and manager account. Not worth it at this stage. Linked GA4 reports cover campaign cost, clicks, and conversions.

## 6. Suggested order

1. Consent Mode v2 (3a) and `/book` redirect (3b). One PR, half a day.
2. GA4 ↔ Ads link and conversion import (3c). 30 minutes in the Google UIs.
3. Re-auth both MCP servers (section 5). 15 minutes.
4. Email Juvonno with the three questions (section 4). Blocks the real funnel; start now.
5. Clarity + Vercel Analytics (3e). An hour.
6. Call tracking (3f) once ads are running and phone volume is known.

## 7. Built on 2026-11-03 (steps 3a and 3b)

- `components/GoogleAnalytics.tsx` now boots with Consent Mode v2 defaults (all denied, `ads_data_redaction`, `url_passthrough`) and pushes a consent `update` when the visitor accepts or withdraws. The tag loads on every production page view, not only after Accept. Ad personalization is never granted.
- `components/CookieConsent.tsx` renders the GA tag regardless of choice (host-gated to production inside the tag). Datafast still loads only after Accept. Banner copy and `app/privacy/page.tsx` describe the cookieless mode and the redirect.
- `app/book/route.ts` is the first-party redirect. Logs one JSON line per click to the Vercel runtime log (`type: booking_redirect`, `src`, `page`, `country`, `device`, UTM and click ids) and forwards to Juvonno with those parameters attached. `X-Robots-Tag: noindex`, `Cache-Control: no-store`, and `/book` is disallowed in `robots.txt`.
- All 11 Book Now links use `bookingHref('<placement>')` from `lib/constants.ts`. Placements: `hero`, `highlights`, `footer`, `features`, `what-we-treat`, `service-cta`, `service-text`, `blog-index`, `blog-post`, `first-visit`.
- The client `booking_click` GA4 event now carries `link_location` = placement.

### To turn on the GA4 server-side count
1. GA4 Admin → Data streams → the web stream → Measurement Protocol API secrets → Create. 
2. In Vercel project settings add env var `GA4_API_SECRET` (Production only) with that value. Optional: `BOOKING_HASH_SALT` with any random string.
3. Redeploy. Each `/book` hit then also appears in GA4 as the event `booking_redirect` with `link_location`, `page_path`, `campaign_*`, `has_google_click_id`. Register `link_location` as a custom dimension (event scope) in GA4 Admin to break it down per button.
4. `booking_click` (client, consent-modelled) and `booking_redirect` (server, exact) are intentionally separate events. Expect `booking_redirect` ≥ `booking_click`.

### Not verified yet
Consent Mode behaviour can only be observed on the production host (the tag refuses to load elsewhere by design). After deploy: open the site in a fresh private window, do not accept, and check in GA4 DebugView or the Network tab that `/g/collect` requests carry `gcs=G100` (denied) and switch to `gcs=G111` after Accept.

### Rtstics tracker (added 2026-11-03)
- `components/ConversionTracker.tsx` loads `https://click-to-client-compass.lovable.app/api/public/t.js` on every page (not consent-gated: no cookies, sessionStorage only, honours `window.__rtConsent === false`).
- It counts `booking_click` only on links that carry `data-rt-goal` or point at a known booking host, and Juvonno is not on its list. All 11 Book Now links therefore carry `data-rt-goal="book-<placement>"`, so each placement shows up as its own goal label in the Rtstics dashboard.
- The contact form carries `data-rt-label="contact"` so its `form_submit` event is named.
- It stores `utm_source`, `utm_medium`, `utm_campaign`, `gclid`, `fbclid`, landing path and referrer host in `sessionStorage['rt_attr']` and sends them with every event, so campaign attribution survives navigation within the session.
