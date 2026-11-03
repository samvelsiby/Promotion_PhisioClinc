# Analytics product: niche, value, feature roadmap, and how Google tag and Meta Pixel fit in

Written 2026-11-03. Companion to `analytics-product-architecture.md` (architecture, data model, Lovable prompt).

---

## 1. The niche and why someone pays a good price

### The niche in one sentence

Appointment-based local businesses in Canada (physio, chiro, dental, massage, vet, trades that quote on site) whose booking completes in a third-party tool, and the agencies that run their ads.

### The one number they will pay for

**Cost per booked appointment, by campaign, keyword and page**, with the booked appointments fed back to Google and Meta so the ad platforms optimise toward bookings instead of clicks.

Every tool they have today stops at "click" or "form submit". Nobody tells a physio owner that the Google campaign produced 31 booked assessments at $38 each while the Meta campaign produced 4 at $210. That answer changes where they spend next month. That is the value, and it is worth more than the subscription on day one.

### Value math to put on the pricing page

| Vertical | Typical first-visit value | Lifetime value | One extra booking per month pays for |
|---|---|---|---|
| Physiotherapy | $120 to $150 | $600 to $1,200 (6 to 10 visits) | Any plan |
| Dental | $200 to $400 | $3,000+ | Any plan |
| Home services (quote visit) | $0 (quote) | $2,000 to $20,000 per job | Any plan many times over |

Price against ad spend, not against "analytics". A clinic spending $1,500 a month on ads will pay $99 to $199 a month for a tool that makes that spend measurably better. An agency with 15 such clients will pay $49 per site for a white-label version it marks up or bundles.

### Suggested packaging

| Plan | Price (CAD, per site, monthly) | What is in it |
|---|---|---|
| Measure | $49 | Snippet, tracked links, webhooks, email parse, dashboard, client portal, weekly report |
| Grow | $149 | Everything above plus call tracking number, Google Ads and Meta conversion feeds, SEO module, alerts, QR/offline links |
| Agency | $299 for 10 sites, then $25 per site | Everything, white-label domain and branding, multi-client dashboard, API |

---

## 2. Feature roadmap, grouped by the job it does

Each line says what it is, why a client cares, and how it is built on the architecture doc.

### 2a. Measure (foundation, already designed)

| Feature | Why the client cares | Build note |
|---|---|---|
| Cookieless snippet | Counts everyone, no banner, no ad-blocker loss | Done in architecture doc |
| Tracked links (`/go/book`) | Counts hand-offs to booking tools that cannot be tagged | Edge redirect |
| Webhooks from forms and booking tools | Completed bookings, not just clicks | Per-provider field maps |
| Confirmation-email parsing | Works with any tool that emails the clinic (Juvonno) | Inbound email address per site, count and timestamp only |
| Call tracking numbers | Phone is 40 to 60 percent of leads for clinics | Twilio number per site, dynamic insertion for paid visitors, call duration as quality signal |
| Ad spend sync | Cost per lead needs cost | Google Ads API, Meta Marketing API, Microsoft Ads nightly |
| Lead status | Booked, showed, became a patient | Status field updated by webhook, email, CRM sync or one click in the portal |

### 2b. Convert (make the website produce more leads)

| Feature | Why the client cares | Build note |
|---|---|---|
| Page-level conversion rate | "Which pages make the phone ring" | Leads attributed to landing page and last page before intent click |
| CTA performance | Which button, where, converts | The `src` placement label already in the Pro-Motion `/book` link, reported per button |
| Form abandonment | Where people quit the form | Snippet records field focus order and last field touched, never values |
| Scroll depth and time on page per landing page | Is the ad landing page losing people above the fold | Snippet, sampled |
| Speed to lead | Minutes between a lead and the clinic's first reply; the strongest predictor of booking | Needs the clinic's reply to flow through (email BCC, CRM webhook, or manual) |
| Pre-instrumented CTA and landing-page components | Your agency ships sites that are tracked from day one | A React/Next component kit and a WordPress plugin that render `/go/*` links, tel links, and forms wired to the snippet |
| Simple A/B tests | Hero headline or CTA copy, decided by leads not clicks | Snippet assigns a variant per visitor hash, dashboard shows leads per variant |
| QR codes and short links for offline | Flyers, signage, clinic reception, referral cards, radio | Each code is a tracked link with its own campaign; this is offline attribution nobody gives small businesses |
| Google Business Profile links with UTMs | GBP is often the top lead source and it is invisible in GA4 | Generator for website, appointment and menu links with `utm_source=google&utm_medium=organic&utm_campaign=gbp` |

### 2c. Advertise (make ad spend produce more bookings)

| Feature | Why the client cares | Build note |
|---|---|---|
| Booked-appointment conversions pushed to Google Ads | Smart Bidding optimises toward bookings | Offline conversion upload with stored `gclid`, section 3 below |
| Booked-appointment conversions pushed to Meta | Same, for Advantage+ | Conversions API with stored `fbc`/`fbp`, section 3 below |
| Keyword to booking report | Which search terms produce patients, not clicks | Join leads' `gclid` to Google Ads click data |
| Wasted-spend finder | Keywords and placements with clicks and zero leads over 30 days | Query over spend and leads |
| Budget pacing and CPL alerts | Overspend or CPL spike caught the same day | Cron plus alert rules |
| Campaign-to-page mismatch | Ad for knee pain landing on the home page | Landing-page report by campaign |

### 2d. Rank (SEO, because the same clients ask for it)

| Feature | Why the client cares | Build note |
|---|---|---|
| Search Console connected to leads | "Which Google queries produce bookings", the SEO report nobody has | GSC API: query → page; our data: page → leads. Join on page. |
| Local rank tracking | "Physiotherapy St. Vital" position, weekly | DataForSEO or SerpApi, 20 to 50 keywords per site |
| Pages with traffic but no leads | The CRO to-do list | GSC impressions and clicks vs our leads per page |
| Core Web Vitals | Speed affects rank and conversion | CrUX API, free |
| Schema and NAP checks | Local pack eligibility | Crawl the site weekly, validate LocalBusiness schema, compare NAP to GBP |
| AI search referrals | Traffic from ChatGPT, Perplexity, Gemini, Copilot | Referrer classification in the snippet |
| Content suggestions | What to write next | Queries with impressions and no page, grouped by intent |

### 2e. Report (why the client stays subscribed)

| Feature | Build note |
|---|---|
| Weekly plain-English email: spend, leads, bookings, cost per booking, best and worst campaign, one recommended action | Template over the week's numbers, later an LLM paragraph |
| Client portal with the agency's brand and domain | Already designed |
| Embeddable KPI card | Already designed |
| ROI view: enter average patient value once, see return on ad spend | One setting per site |
| Benchmarks: "clinics like yours convert 4.1 percent of visits to leads" | Needs 30+ sites in a vertical before it is honest |
| Alerts: tracking stopped, form broken, site down, CPL doubled, no leads for 3 days | Cron rules |

### 2f. Later: assistant features

Natural-language questions over the data, auto-generated monthly insight paragraphs, recommended actions with one-click apply (pause keyword, shift budget) through the ad APIs, anomaly detection. Build these last; they are only valuable once the data underneath is trusted.

### Integrations to list on the website, in order of build

Booking: Juvonno (email parse and API), Jane, Cliniko, Noterro, Calendly, Acuity, Square Appointments. Trades: Jobber, Housecall Pro, ServiceTitan. Forms: native HTML, Typeform, Jotform, Gravity Forms, Webflow. CRM: HubSpot, GoHighLevel. Ads: Google Ads, Meta, Microsoft Ads, TikTok. Google: GA4, Search Console, Business Profile. Calls: Twilio-based native, CallRail import.

---

## 3. How Google tag and Meta Pixel work, and how the product integrates them

### 3a. Google tag (gtag.js) in plain terms

One script, `googletagmanager.com/gtag/js?id=...`, serves several Google products depending on the id:

| Id prefix | Product | What it does |
|---|---|---|
| `G-` | GA4 | Page views, events, sessions, audiences |
| `AW-` | Google Ads | Conversion tracking and remarketing |
| `GT-` | Google tag | A shared tag that fans out to the above |

The script creates a queue (`dataLayer`) and the `gtag()` function pushes commands into it. `gtag('config', 'G-XXXX')` starts GA4. `gtag('event', 'booking_click', {...})` records an event. Google Ads counts a conversion when it sees `gtag('event', 'conversion', {send_to: 'AW-XXXX/LABEL'})` or when a GA4 event is imported as a conversion in the Ads account.

Attribution works through the click id. When someone clicks a Google ad, the landing URL carries `gclid=...` (auto-tagging). The Google tag stores it in a first-party cookie (`_gcl_aw`) for 90 days. When a conversion fires later, the tag sends the stored `gclid` with it, and Google Ads joins it back to the campaign, ad group, keyword and cost. No `gclid`, no attribution. That is why Consent Mode matters: with `ad_storage` denied, the cookie is not written, and Google falls back to modelling.

Google Tag Manager (GTM) is a container that loads the Google tag and any others through a UI of tags, triggers and variables, so marketers change tracking without a code deploy. Server-side GTM runs the same container on your own subdomain (for example `data.clinic.ca`) and forwards to Google and Meta from the server, which recovers some of what ad blockers remove. Stape hosts it for about US$20 a month; Google Cloud Run is the self-hosted path.

### 3b. Meta Pixel and Conversions API in plain terms

The Pixel is `fbq('init', 'PIXEL_ID')` then `fbq('track', 'PageView')` and standard events such as `Lead`, `Schedule`, `Contact`. Meta's click id arrives as `fbclid` in the landing URL; the Pixel stores it as the `_fbc` cookie and sets a browser id cookie `_fbp`. Those two values are how Meta attributes a later conversion to the ad.

The Conversions API (CAPI) is the server-side twin: a POST to `graph.facebook.com/v21.0/PIXEL_ID/events` with the event name, time, an `event_id`, and `user_data` for matching (`fbc`, `fbp`, client IP, user agent, and optionally SHA-256 hashed email or phone). Sending the same event from both Pixel and CAPI with the same `event_id` makes Meta deduplicate, so you get the browser event when it gets through and the server event when it does not. Meta scores each event's Event Match Quality; `fbc` plus `fbp` plus IP and user agent gives a usable score without any hashed personal data.

**Health caveat.** Since early 2025 Meta restricts which events health-and-wellness-categorised businesses can send and optimise on, particularly lower-funnel events. Before promising Meta booking optimisation to a clinic, check the data-source category in Events Manager and test which standard events are accepted. Google has no equivalent restriction for physiotherapy, only for personalised ads based on health conditions, which the product never does.

### 3c. Google Ads offline conversions

For bookings that complete off-site, the cleanest path is not a pixel at all. Google Ads accepts conversions uploaded later with just three things: the `gclid` from the original click, the conversion time, and the conversion action name. Upload via the Google Ads API (`ConversionUploadService`) or a scheduled Google Sheet. The booking can happen hours or days after the click, in Juvonno, on the phone, anywhere. Meta has the same idea through CAPI with the stored `fbc`, and through Offline Conversions for CSV uploads.

Google also offers Enhanced Conversions (hashed email or phone sent with the conversion to improve matching). For a health business, leave it off unless a lawyer signs off, because it links a health-service conversion to a hashed identity on Google's side.

### 3d. How the product integrates all of this

The product is the one tag the client installs, and the server is the one place that knows a booking happened. That makes it the natural conversion bridge.

1. **Landing.** The snippet reads `gclid`, `gbraid`, `wbraid`, `fbclid` and `utm_*` from the first URL and keeps them in `sessionStorage`. If the site has consent for ads, the snippet can also load `gtag.js` and `fbq` in Consent Mode on the client's behalf, so the client does not need a separate GTM setup. Without consent, the snippet still records the click ids first-party with the cookieless visitor hash.
2. **Intent.** Every lead-creating event (form submit, tracked-link click, call) stores the click ids on the lead record, plus the `_fbp` and `_fbc` cookie values if they exist, the landing page and the timestamp.
3. **Booking confirmed.** When the webhook, parsed email, CSV or portal click marks the lead `booked`, the server fires three things at once, each with the same `event_id`:
   - Google Ads: offline conversion upload with the stored `gclid` (or `gbraid`/`wbraid`), conversion name "Booked appointment", conversion time.
   - Meta: CAPI event `Schedule` with `fbc`, `fbp`, IP and user agent from the original visit, `event_id` for dedup against the browser Pixel.
   - GA4: Measurement Protocol event `book_appointment` with the visitor's `_ga` client id if they consented, otherwise the hashed id, so the GA4 funnel shows the full path.
4. **Reporting.** The dashboard shows cost per booked appointment by campaign because spend comes from the ad APIs and bookings came from step 3, joined on campaign id through the click id.

Per-site settings: Google Ads customer id and conversion action, Meta Pixel id and CAPI access token, GA4 measurement id and API secret, and a toggle for "load Google tag and Meta Pixel through the snippet" versus "the client manages their own tags".

### 3e. What this means for the Pro-Motion site specifically

The site already has steps 1 and 2 in a basic form: the Google tag in Consent Mode, click ids forwarded through `/book`. What it lacks is step 3, and that depends on Juvonno telling you a booking happened (email parse is the fallback that always works). Once that exists, the booking event goes to Google Ads as an offline conversion and the campaign optimises toward booked assessments. That single change usually moves cost per booking more than any landing-page work.

---

## 4. Build order for the next 90 days

| Weeks | Ship | Why first |
|---|---|---|
| 1 to 4 | Measure: snippet, tracked links, webhooks, email parse, dashboard, client portal, weekly email | Everything else needs trusted counts |
| 5 to 8 | Advertise: ad spend sync, Google Ads offline conversions, Meta CAPI, call tracking | This is the feature that justifies $149 |
| 9 to 12 | Rank and Convert: Search Console join, CTA and page reports, QR and GBP link generator, alerts | Retention and upsell |
| After | Benchmarks, A/B tests, assistant features, WordPress plugin, component kit | Needs scale or a second engineer |

Run Pro-Motion and the builder client as the first two sites from week 1. Their real data is the demo for everyone after.

---

## 5. CallRail: what it is and what it would take to build the equivalent

Checked callrail.com/pricing on 2026-11-03. US$ per month, plus usage.

| Plan | Price | What you get |
|---|---|---|
| Lead Tracking | $50 | 5 tracking numbers, 250 minutes, call and text attribution, recording, routing, transcription, automation rules |
| Lead Tracking Complete | $95 | Plus form tracking, a form builder, multi-touch cost-per-lead reporting |
| Lead Conversion | $150 | Plus AI call summaries, sentiment, auto conversion tagging, coaching tools |
| Lead Conversion Complete | $195 | Everything |
| Voice Assist | from $95 | AI answers missed calls, qualifies the lead |

Extra numbers and minutes billed on top. API included. HIPAA business associate agreement for healthcare. Available in Canada.

### What CallRail actually is, in components

1. **Phone numbers and call routing.** Buys local and toll-free numbers, forwards to the business's real line, records, handles text. Built on a carrier API (Twilio or Bandwidth).
2. **Dynamic number insertion (DNI).** A JavaScript snippet swaps the phone number on the website per visitor based on where they came from (Google Ads, organic, Meta, a specific campaign). Each number pool maps back to a source, so a call is attributed to the campaign.
3. **Session matching.** Associates the call with the web session that was on the page when the call started, so you get landing page, keyword and click id for a phone call.
4. **Form tracking.** A snippet that captures form submissions on the site and attributes them the same way.
5. **Conversation intelligence.** Transcription (speech-to-text), summary, sentiment, keyword spotting, automatic "this call was a booking" tagging. Today this is an LLM over a transcript.
6. **Integrations.** Google Ads (calls as conversions), GA4, Meta, HubSpot, Salesforce, Zapier, plus an API.
7. **Reporting and multi-client agency accounts.**

### Difficulty to build each piece in-house

| Piece | Difficulty | How | Running cost |
|---|---|---|---|
| Numbers, forwarding, recording, SMS | Easy | Twilio: buy number, TwiML `<Dial record="true">`, status webhooks | About US$1.15 per Canadian number per month, about 1.4 cents per minute each leg; a clinic with 3 numbers and 300 minutes is under $15 a month in Twilio fees |
| Dynamic number insertion | Easy to medium | Snippet reads the stored source (already in the product's `sessionStorage` attribution), looks up the number pool for that source, replaces `tel:` links and visible numbers. Pool sizing is the only subtle part: one number per source is fine for small sites, per-visitor pools only matter at scale | Numbers only |
| Session to call matching | Medium | Snippet reports which number it showed to which visitor hash; when a call arrives on that number within N minutes, join | None |
| Form tracking | Already in the product | Snippet | None |
| Transcription and AI summary | Easy now | Twilio recording → Deepgram or OpenAI Whisper → Claude for summary, sentiment, "booked: yes/no" | Roughly 1 to 2 cents per minute transcribed plus a fraction of a cent for the summary |
| Google Ads call conversions | Medium | Mark call as conversion, upload with the `gclid` from the matched session (same offline-conversion path as bookings) | None |
| Voice Assist (AI answers the phone) | Medium to hard | Twilio Media Streams to a realtime voice model, or a vendor like Vapi or Retell. Works, but needs serious testing before a clinic trusts it with patients | Vendor fees around 10 to 20 cents a minute |
| HIPAA/PHIA posture, call recording consent | Process, not code | Canadian two-party consent for recording is not required (one-party suffices under the Criminal Code), but PIPEDA still requires notice. Play "this call may be recorded" prompt. Store recordings in Canada | None |

Rough effort for a competent full-stack developer who already has the analytics product from the architecture doc: numbers, routing, recording and DNI in two to three weeks; call-to-session matching and Google Ads call conversions in another two; transcription and AI tagging in one. Six to eight weeks for a credible CallRail-equivalent limited to the features clinics and trades use. Voice Assist is a separate project.

### Should you build it

Yes, as a module of the analytics product, not as a standalone clone. Reasons:

- CallRail charges $50 to $195 per client per month for something that costs under $20 a month to run on Twilio. That margin is the business.
- Phone is 40 to 60 percent of leads for clinics and trades. An attribution product without calls is half blind.
- You already have the hard part, attribution and the lead record. Calls become one more lead source with a click id attached.
- CallRail does not do what your product does: it cannot see a booking completed in Juvonno and feed that back to the ad platforms. You can offer calls plus bookings in one place, which CallRail cannot.

What not to copy: the full enterprise feature list, Salesforce integrations, the custom form builder. Build numbers, DNI, recording, transcript, AI tag, and Google Ads call conversions. That is the 20 percent of CallRail that 100 percent of your clients use.
