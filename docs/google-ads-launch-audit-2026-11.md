# Google Ads launch audit: website, tracking, compliance, lead handling

Written 21 November 2026 for Pro-Motion Physiotherapy (567 St. Anne's Rd, Winnipeg). Checked against the live site, the code in this repo and the Juvonno booking portal on the same day. This is a compliance review by a marketing agency, not legal advice. The College of Physiotherapists of Manitoba (CPM) answers practice questions at info@manitobaphysio.com, and a privacy lawyer should confirm anything marked "judgment call".

## 1. Verdict

Do not turn ads on yet. The site is fast and the measurement base is good, but eight things would either waste spend or create a compliance problem once paid traffic arrives.

| # | Blocker | Why it blocks | Section |
|---|---|---|---|
| 1 | No call or book button on the first screen of service pages on a phone. The first booking link is 4,371 px down a 7,635 px page. | Most ad clicks are mobile. The visitor lands, sees a heading and a photo, and has nothing to tap. | 3 |
| 2 | "Accept analytics" also grants Google ad storage and ad user data. | The banner asks for analytics consent only. Once Google Ads is linked, accepting would also set ad cookies the visitor was never told about. | 4 |
| 3 | The Rtstics visit counter ignores "Reject optional" and sends the ad click ID (`gclid`) and the full referrer to a Lovable-hosted server. | The privacy page says it "stores no identifiers". A click ID is an identifier. | 4 |
| 4 | The site advertises five Occupational Therapy services. The team is two physiotherapists and one assistant, and the booking portal offers physiotherapy only. | CPM: advertise only what the clinic can provide. Ads and Google's automation will also pick these pages up. | 3 |
| 5 | "Review Us" button is still in the navbar on every page. | CPM calls soliciting web reviews a clear breach. Paid traffic multiplies its exposure. | 5 |
| 6 | The contact form has no spam protection, no stored copy and no privacy notice, and its placeholder asks people to describe their injury. | Ads attract form bots. One failed email is one lost patient with no record. Health details then travel by plain email through a US provider. | 3, 6 |
| 7 | No conversion is confirmed in Google Ads. GA4 key events and the GA4 to Google Ads link could not be verified. | Without conversions Google optimises for clicks, not patients. | 8 |
| 8 | Ad copy and keywords have not been approved by a physiotherapist. | CPM requires the physiotherapist to review and approve marketing prepared by a third party. | 5 |

Everything else in this document is ordered by how much it matters.

## 2. What is bookable (the scope for ads)

I read "only taking customers for the selected ones" as: advertise only what a patient can actually book. The Juvonno portal offers exactly this:

| Item | Options in the portal |
|---|---|
| Location | Pro-Motion Physiotherapy, Unit 4 - 567 St. Anne's Rd |
| Services | Physiotherapy Initial Assessment, Physiotherapy Treatment |
| Practitioners | Lijo Paul, Ben Bastin Jose |

So the ad account covers physiotherapy assessment and treatment at one clinic. Out of scope until the clinic says otherwise: occupational therapy services, massage, athletic therapy, pelvic floor, and the four gated treatment pages (dry needling, acupuncture, cupping, orthotics), which return 404 in production until a physiotherapist approves them and roster status is confirmed. If "selected" meant something narrower, such as specific conditions or only new patients, tell me and I will cut the keyword list to match.

## 3. Website audit for paid traffic

Measured on the live site. Desktop load from here: first byte 92 ms, full load 1.5 s, 273 KB transferred. Speed is not a problem.

### High impact

| Finding | Evidence | Fix |
|---|---|---|
| No call to action above the fold on mobile service pages | On `/services/back-pain-sciatica-relief` at 375 x 812: first `/book` link at 4,371 px, "Book Now" button at 4,694 px. The phone number is inside the collapsed menu. | Add a Book and a Call button directly under the H1, and a sticky bottom bar on phones with "Call" and "Book". Use `bookingHref('service-hero')` and `bookingHref('sticky')` so each placement is measured. |
| Cookie banner covers 47% of the phone screen | Banner is 379 px tall on an 812 px screen and sits exactly where a button under the H1 would go. | Shorten the mobile banner to two lines plus the two buttons side by side. Keep both buttons the same size and weight, which they are now. |
| Occupational Therapy pages | `/services/home-accessibility-assessments`, `mobility-adaptive-equipment`, `wheelchair-seating-positioning`, `pressure-management`, `fall-prevention`, plus an "Occupational Therapy" filter on the homepage and `/how-we-treat`. No occupational therapist is listed on `/team`. | Ask the clinic who provides these. If nobody does, remove the pages and the category, and redirect the URLs. If a physiotherapist provides some of them (fall prevention is plausible), relabel them as physiotherapy. Occupational therapy is a separately regulated profession in Manitoba. |
| Hero sends visitors to another website | "Looking for an earlier appointment? Check Last Minute Physio" links to lastminutephysio.com. I did not check whether that site lists other clinics. | Remove it from any page used as an ad landing page, or confirm it only shows Pro-Motion's openings. Paying for a click and then offering an exit is the definition of a leak. |
| Booking portal adds a step and promises nothing | `/book` opens a Welcome page whose only action is "Continue". It says the front desk "will review your request and confirm", and "Please call if you are looking for an appointment within 24hrs". | Point `BOOKING_URL` at `publicbook.php?step=clinicPractService&dr=0&branch_id=1` to skip one click, after confirming with the clinic that the Welcome text is not needed. Say on the site that online bookings are confirmed by the front desk, and that same-day requests should call. |
| Urgent visitors are told to phone, but the phone is hard to find on mobile | Same evidence as the first row. | The sticky Call button fixes this. People searching "physio open sunday" or "same day physio" want to phone. |

### Medium impact

| Finding | Evidence | Fix |
|---|---|---|
| No fees anywhere | `/first-visit` says "Ask about the current assessment fee". No dollar amount on service pages. | Publish the assessment and follow-up fees on `/first-visit` and `/insurance`. Ad visitors compare clinics on price and coverage. CPM allows stating fees; it bans discounts and packages. |
| Contact form is on `/about` only | "Request Appointment" on a service page navigates to `/about#appointment-form`. | Put a short form (name, phone, preferred time) on each service page, or keep the visitor on the page with an inline form. |
| Contact form reliability | `app/api/contact/route.ts`: one Resend email to one inbox, no honeypot, no rate limit, no copy stored, no confirmation to the sender. The `from` address falls back to `onboarding@resend.dev` if the env var is missing. | Add a honeypot field and a per-IP rate limit, send a short confirmation email to the sender, alert a second address, and fail loudly if the `from` domain is not verified. See section 6 on where to store leads. |
| Testimonials with superlatives | Homepage quotes "the best physiotherapy I've found in the whole city" and "expert care". `Testimonials.tsx` also holds "The best physio clinic in the city!!!". | Swap for reviews that describe the experience without ranking the clinic. See section 5. |
| Unsourced outcome wording already flagged | `/how-we-treat`: "Advanced technique", "Specialized", "Effective for", plus "Specialized treatment" on the MPI and wheelchair cards and "our specialized treatment" in `serviceData.ts`. | Reword before these pages receive paid traffic. Listed in `docs/treatment-pages-compliance-2026-11.md`. |

### Low impact

| Finding | Evidence | Fix |
|---|---|---|
| Security headers | Only `Strict-Transport-Security` is set. No `Content-Security-Policy`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy` or `Permissions-Policy`. | Add a `headers()` block in `next.config.js`. Set `Referrer-Policy: strict-origin-when-cross-origin` explicitly so condition-page URLs are never sent to other sites. |
| Third-party scripts on previews | The Rtstics tracker and the chat widget load on localhost and preview deployments. | Gate both to the production host, as GA4 already is. |
| `anonymize_ip` in the GA4 config | GA4 ignores this setting; it never stores IP addresses. | Harmless. Remove for tidiness. |

### Working correctly

- `/book` returns a 302 to Juvonno, is `noindex`, and forwards `gclid` and `utm_*`.
- `/?gclid=…` and every tested landing page return 200 in about half a second.
- The apex domain redirects to `www` with a 308.
- Gated treatment pages return 404 in production.

## 4. Tracking and consent audit

### What the site loads

| Tool | Loads when | Cookies | Data leaves to | Status |
|---|---|---|---|---|
| Google Analytics 4 (`G-ML36VHX4VF`) | Every production page view, in Consent Mode | None until Accept | Google (US and other regions) | Mostly correct, two fixes below |
| Datafast | Only after Accept | Yes | Datafast | Correct, but redundant |
| Rtstics visit counter | Every page view, any host | None (uses `sessionStorage`) | `click-to-client-compass.lovable.app` | Needs fixing |
| Rtstics AI chat widget | Every page view, any host | None, but it writes ad click IDs to `localStorage` for 90 days | `agent.rtstics.com` | Needs a notice and an agreement. See T10. |
| `/book` redirect | Each booking click | None | Vercel log, and GA4 if `GA4_API_SECRET` is set | Correct |
| Google Maps | Only after "Load Google map" | Google's | Google | Correct |
| Juvonno portal | After the redirect | `gohealthpmphysio` session cookie | Juvonno | No tracking on it at all |

### Verified on the live site

- Before any choice, `document.cookie` is empty and `localStorage` is empty.
- The first GA4 request carries `gcs=G100` (all storage denied) and `npa=1` (no personalised ads).
- After "Reject optional", no cookies are set and the choice is stored for 180 days.
- Ad personalisation is hard-coded to `denied` in every state, and Google Signals is off. That means no remarketing audiences can ever be built from this site, which is the correct posture for a health clinic.

### Gaps

| # | Gap | Detail | Fix |
|---|---|---|---|
| T1 | Consent wording does not match what is granted | `consentState()` in `lib/analyticsEvents.ts` sets `analytics_storage`, `ad_storage` and `ad_user_data` to `granted` on Accept. The banner and button say analytics only. Today this is dormant because no Google Ads account is linked. The day it is linked, Accept will let Google set `_gcl_*` ad cookies and use the visit for ad measurement. | Either change the banner to "analytics and ad measurement cookies" and describe Google Ads on `/privacy`, or split into two toggles. Do it in the same release that links Google Ads. |
| T2 | Visit counter ignores Reject | The script checks `window.__rtConsent === false`, but nothing on the site ever sets it. After Reject it keeps sending page views. It sends `gclid`, `fbclid`, `utm_*`, the landing path and the full `document.referrer`. | In `CookieConsent.save(false)` set `window.__rtConsent = false` and dispatch `rt:consent`, and set it on load when the stored choice is false. Stop sending `gclid` and `fbclid` unless the visitor accepted. |
| T3 | Privacy page overstates | It says the counter "stores no identifiers" and that it records phone clicks. It does send click IDs, and it does not record phone clicks. It also says GA "sends no identifiers" before Accept; GA still sends IP address, user agent, screen size and a per-page random ID. | Rewrite those two paragraphs to say exactly what is sent. Accuracy matters more than reassurance here. |
| T4 | `url_passthrough` is on | When ad storage is denied, Google's tag appends `gclid` to internal links so the click can still be attributed without a cookie. Combined with `/book` forwarding it, the click ID reaches Juvonno too. | Judgment call. It is cookieless and common, but it carries an ad identifier for someone who has not consented. Keep it only if `/privacy` says so plainly. The strict option is to turn it off and accept less attribution. |
| T5 | Google receives data before, and after, a Reject | GA4 sends cookieless pings from the first page view and keeps sending them after Reject. Each ping carries the IP address and the page URL, which on this site can be a condition page. The banner discloses this ("Until you accept, analytics run without cookies"). | After an explicit Reject, stop loading the Google tag. A person who taps Reject on a health site reasonably expects nothing to go to Google, and the Commissioner's guidance says an opt-out must take effect. For visitors who have not chosen yet, it is a judgment call: the strict reading of the health-is-sensitive rule is to load nothing until Accept, which is how the site worked before 3 November. The cost is less modelled data in GA4 and Google Ads. The `/book` server count is unaffected either way. |
| T6 | Three analytics tools doing one job | GA4, Datafast and the Rtstics counter all count visits. Each is another company receiving data about visits to a health site. | Drop Datafast unless someone uses it weekly. Keeping the collection to what is needed is itself a privacy-law principle. |
| T7 | Chat widget | Labelled "AI assistant", which is good. No notice inside the widget about health details, no privacy link, and it loads for everyone. Where transcripts are stored and for how long is not documented. | Add one line in the widget: do not share health details, with a link to `/privacy`. The Privacy Commissioner's generative AI principles say prompts should not be kept or reused for other purposes unless required, so set a short retention period and document where transcripts are stored. Put a written PHIA agreement in place between the clinic and Rtstics covering the chat and the counter, and confirm the clinic has one with Juvonno and Resend. |
| T8 | Form invites health details | The message box placeholder is "Tell us about your injury or pain...". The privacy page tells people to avoid sharing medical details in website messages. | Change the placeholder to "What would you like help with? Please keep medical details for your appointment." Add a line under the button linking to `/privacy`. |
| T9 | Privacy page is a cookie notice, not a privacy policy | It names no privacy contact person, does not mention that form emails are processed by Resend in the US, and does not mention Google Ads. | Add: the clinic's privacy officer and how to request access or correction, the list of service providers and that some process data outside Canada, how long enquiries are kept, and Google Ads once linked. |

Two more gaps found while fixing the above, both in the chat widget (`agent.rtstics.com/widget.js`):

| # | Gap | Detail | Fix |
|---|---|---|---|
| T10 | Chat stores ad click IDs for 90 days without consent | When a visitor arrives with `gclid`, `fbclid` or `utm_*`, the widget saves them with the landing URL and referrer in `localStorage` under `rt_attr` for 90 days, whatever the cookie choice. It also reads Meta's `_fbp` and `_fbc` cookies if present. | Fixed on the site side: the record is deleted unless the visitor accepted (see section 11). The proper fix is in the widget itself: store attribution only when the host page signals consent. |
| T11 | Chat offers "Request a call back" | The widget's form says "Leave your details and we'll call you within minutes" and confirms with "Thanks! We're calling you now." | Find out who or what places that call and whether the clinic can keep the promise outside staffed hours. If the call is automated, Canadian telemarketing rules on automated calls need checking before ads send volume to it. Otherwise change the wording to match what really happens. |

## 5. Compliance review

The clinic sits under four sets of rules at once. The table gives the rule, what it means for this launch and where the site stands. Sources are at the end.

### Privacy law

| Rule | What it requires | Status |
|---|---|---|
| PIPEDA (federal) is still the law in force and applies to the clinic's commercial activity. Manitoba has no substantially similar private-sector law. Bill C-36, a replacement, had first reading on 15 June 2026 and has not passed. | Meaningful consent, purposes stated up front, collect only what is needed, safeguards, access on request, a named accountable person, breach reporting where there is a real risk of significant harm. | Consent banner exists. Gaps T1, T3 and T9 are the consent and openness problems. |
| PHIA (Manitoba) applies. A registered health professional who collects or keeps personal health information is a "trustee" (s. 1(1)). | Collect only what is needed (s. 13) and say why (s. 15). Reasonable safeguards (s. 18) and a written retention and destruction policy (s. 17). A written agreement with every "information manager" before sharing (s. 25(3)); the information is still treated as the clinic's (s. 25(5)). Notify the person and the Ombudsman of a breach with a real risk of significant harm (s. 19.0.1). The regulation adds a written security policy, staff training, signed confidentiality pledges and a safeguards audit every two years. | A name plus "I have back pain" in an enquiry is personal health information. It can flow through Juvonno (booking), Resend (form email) and Rtstics (chat). Each needs a written agreement on file. The clinic should confirm it has the security policy, pledges and two-year audit. |
| Privacy Commissioner guidance on online tracking and behavioural advertising | Opt-out consent is acceptable only when the purpose is obvious, the opt-out is easy and lasting, and the information is not sensitive. Health is named as sensitive and needs express opt-in. In finding 2014-001 the Commissioner treated health-related browsing as sensitive and required express consent for remarketing. | The site uses opt-in for cookies and never grants ad personalisation. Keep it that way: no remarketing, no audiences built from condition pages, no Meta pixel. See T4 and T5 for the two places the current setup is less strict than this. |
| Cross-border processing | Allowed, but people must be told clearly that their information may be processed outside Canada and may be accessible to foreign authorities. I found no PHIA rule requiring storage in Manitoba or Canada. | `/privacy` says this for analytics. Add it for form email and chat (T9). |
| Quebec Law 25 | Stricter consent rules for Quebec residents' information. Whether passive visits to a Manitoba clinic's site trigger it is unsettled. | Negligible exposure for a campaign geo-targeted to Winnipeg. The opt-in banner already meets its consent standard. |

### Anti-spam law (CASL)

| Situation | Allowed? |
|---|---|
| Replying to someone who submitted the form | Yes. A message sent in response to an enquiry is exempt (regulations s. 3(b)). |
| Appointment confirmations and reminders by email or text | No consent needed, but each must still identify the clinic and include an unsubscribe (s. 6(6)). Check that Juvonno's reminder templates do both. Do not add promotions to them. |
| A missed-call text back ("Sorry we missed you, call or book here") | Reasonable as a reply to their call, but I could not confirm that a phone call alone counts as an enquiry under the Act. One message, identify the clinic, no promotion. |
| Marketing email or text to someone who enquired but never booked | Only within six months of the enquiry (s. 10(10)), with the clinic's name and contact details and an unsubscribe honoured within 10 business days. Safer: do not do it. |
| Newsletters to patients | Express consent, or the two-year window after their last paid visit, always with unsubscribe. The clinic must be able to prove consent (s. 13), so keep the record. |

Penalties run up to $10 million for an organisation.

### Google Ads policies

| Policy | Effect on this account |
|---|---|
| Personalised advertising: health is a sensitive category | Remarketing ("your data segments"), Customer Match, audience expansion and lookalikes are not supported. Keyword and location targeting are fine. Google's page names chronic conditions and their treatment; physiotherapy is not named, but Google assesses the site as well as the ads, and the chronic pain and arthritis pages fall inside. The site's settings already prevent audiences being built. Do not let anyone "turn on remarketing" later. |
| Healthcare and medicines | Certification is for online pharmacies, telemedicine and addiction services. Physiotherapy is not listed. |
| Misrepresentation | No claims of improbable results, no hidden costs, no fear-based wording about illness. Google has no rule of its own against superlatives; the College rule is the one that binds. |
| Editorial | No phone numbers in headline or description text. The number goes in a call asset. |
| Enhanced conversions | Google's own policy says conversions in sensitive categories cannot be used, and gives medical services as the example. Do not enable. |
| Lead form assets | Collect a prospect's contact details and enquiry inside Google. Do not use for a health enquiry. |
| Consent Mode | Google's consent policy covers the EEA, UK and Switzerland, not Canada. Canadian privacy law still requires consent, so the site's opt-in design stays. |
| Local Services Ads | Google's category list is home services and does not include physiotherapy. Canadian eligibility not confirmed. Do not plan around it. |

### College of Physiotherapists of Manitoba: advertising

These bind every headline, description, asset and landing page.

| Rule | In ads this means |
|---|---|
| A(i): the physiotherapist is accountable for the website and any online platform | Ads, landing pages and the Google Business Profile are all the physiotherapist's responsibility, whoever wrote them. |
| B: a practice focus may be stated only if it is a significant focus backed by ongoing education | Affects ad groups and sitelinks that name a focus area. Keep to "physiotherapy for back pain", and confirm any focus claim with the clinic. |
| C: no "specialist" or wording that implies specialization | No "specialists", "specialized", "expert", "advanced". |
| D, E: truthful, accurate, verifiable; physiotherapist reviews and approves third-party marketing | Every claim must be provable: hours, address, direct billing, registered physiotherapists. Ben or Lijo signs off the keyword list, every ad and every landing page in writing before launch, and again when copy changes. Keep the record. |
| F(ii) to (iv): no encouraging unnecessary use, no unsubstantiated claims or guarantees, no uniqueness claims | No "pain-free", "fast relief", "get back to 100%", "the only clinic that". |
| F(v), (vi): no comparative or superlative statements, no disparaging other clinics | No "best", "top", "leading", "#1", "better than". Do not bid on competitors' names. |
| G: no discounts, coupons, gift cards, time-limited pricing, packages, prizes or draws | No promotion assets, no countdown ads. A price asset is acceptable only if it shows the plain fee schedule. |
| H: no advertising free consultations, screenings, assessments or trials | No "free assessment" ads. |
| I: explicit informed consent before using patient images | No patient photos in ads or on landing pages without it. |
| Newsletter, February 2024: soliciting testimonials or web reviews is a clear breach | Remove "Review Us". Do not run review-request campaigns. |
| Advertise only what the clinic is competent to provide | No ad groups for dry needling, acupuncture, pelvic floor, vestibular or occupational therapy unless the clinic confirms a qualified provider. |

Two places Google can break these rules without anyone noticing:

1. **Automatically created assets and auto-applied recommendations.** Google can write its own headlines from the site and add keywords on its own. Turn both off at account level on day one. Otherwise an ad saying "Best Physio in Winnipeg" can run that nobody approved.
2. **Testimonials on the landing page.** The direction has no testimonial clause, and the College has not ruled on this exact point. My reading: a patient saying "best in the city" on Google is the patient's statement, but the clinic choosing that quote for its homepage makes it marketing the clinic uses, which F(v) covers. Use reviews that describe the experience.

One grey area: a location asset can show the clinic's Google star rating next to the ad. The direction does not address this. Unsolicited reviews are tolerated, but a rating in an ad is arguably comparative. Ask the College before relying on it.

### Competition Act

Section 74.01 prohibits materially false or misleading claims, and performance claims that are not backed by adequate testing; the advertiser carries the burden of proof. A price that leaves out mandatory fees is treated as misleading. If fees are published, show the full amount a patient pays. The Competition Bureau treats fake, incentivised or staff-written reviews as misleading advertising.

### Call recording

One-party consent makes recording legal under the Criminal Code, but privacy law is stricter: the Privacy Commissioner requires telling the caller at the start, stating the purpose, and offering an alternative if they object. Callers to a clinic discuss health, so a recording is personal health information held by a vendor.

Google Ads now records calls by default in Canada, and skips accounts it identifies as healthcare unless the advertiser opts in. Do not rely on Google's classification: check the setting is off after the account is created, and leave recording off in any call-tracking tool. Count calls and their length only.

## 6. Handling leads properly

Ads only pay back if every lead is answered. Three channels will receive them.

| Channel | Today | Risk | What to set up |
|---|---|---|---|
| Phone (204) 560-2999 | Published hours are Mon to Fri 9 to 8, Sat 9 to 4, Sun 10 to 4 | A missed call from an ad is a paid click that books with the next clinic | Run call ads only during hours the phone is answered. Check voicemail hourly. Call back missed numbers within 15 minutes during open hours. |
| Juvonno online booking | A request the front desk must confirm | A slow confirmation feels like no booking | Confirm within one business hour. Set a daily check at opening and mid-afternoon. |
| Website form | Email to one inbox | Spam, lost email, nobody watching the inbox on Sunday | The fixes in section 3. Reply within one business hour. Send a test submission every Monday. |

### Rules for the front desk

1. **Ask every new patient "How did you hear about us?"** and record it in Juvonno's referral source field. This is the only reliable measure of which patients came from ads, because Juvonno drops the campaign tags after the first click.
2. **Keep health details in Juvonno.** A spreadsheet of leads should hold date, channel, source and outcome only, with no names or conditions. Names plus conditions belong in the clinical system.
3. **First call script:** name, phone, one line on the problem, who is paying (private, insurance, MPI, WCB), then offer the two nearest openings. Do not send people to the website to book while they are on the phone.
4. **Know capacity before spending.** If the next assessment slot is more than three or four days out, pause the campaigns. Paying for clicks you cannot serve trains Google on the wrong signal and annoys patients.
5. **Never ask for a review, and never offer anything for one.**
6. **Replying is fine, marketing is not.** See the CASL table.

### What to watch every week

| Number | Where | Why |
|---|---|---|
| Ad spend, clicks, cost per click | Google Ads | Cost side |
| Booking clicks by placement | GA4 `booking_click`, Vercel log `booking_redirect` | Which page and button work |
| Calls from ads and their length | Google Ads call reporting | Phone leads |
| Form submissions | GA4 `generate_lead` and the inbox count | The two should match. If they do not, email is failing. |
| New patients who said "Google ad" | Juvonno | The real result |
| Missed calls during open hours | Phone system | Leak |
| Days until next available assessment | Juvonno | Capacity |

Cost per new patient is ad spend divided by the Juvonno number. Decide the ceiling before launch: average visits per new patient multiplied by fee per visit gives the revenue from one patient, and the clinic chooses what share of that it will pay to acquire one.

## 7. Google Ads strategy

### Structure

Search campaigns only. No Performance Max, no Display, no remarketing, no Search Partners, no lead form assets. Performance Max and Display rely on audience signals that the health policy restricts, and they hide where money goes.

| Campaign | Intent | Example keywords (phrase and exact match) | Landing page |
|---|---|---|---|
| Brand | People looking for the clinic | pro-motion physiotherapy, promotion physio winnipeg, pro motion physio st annes | Homepage |
| Local physio | Ready to book nearby | physiotherapy st vital, st vital physiotherapy, physio near me, physiotherapist near me, physiotherapy winnipeg, physio winnipeg | Homepage |
| Hours | Needs to be seen soon | physio open sunday, physio open saturday, evening physiotherapy, same day physiotherapy, walk-in physio clinic | Homepage or `/first-visit` |
| Claims and billing | Insurer pays, multi-visit | car accident physiotherapy, mpi physiotherapy, whiplash treatment, wcb physiotherapy, work injury physio, physiotherapy direct billing | `/services/motor-vehicle-accident-injuries-mpi`, the WCB page, `/insurance` |
| Conditions | Problem-aware | back pain physiotherapy, sciatica physiotherapy, neck pain physiotherapy, shoulder physiotherapy, knee pain physiotherapy, tmj physiotherapy, tmj treatment winnipeg | The matching `/services/…` page |

Start with Brand, Local physio, Hours and Claims. Add Conditions once the service pages have the mobile button fix, one ad group per condition, each pointing at its own page.

### Keyword sizes

Semrush, Canadian database, 21 November 2026. Volumes are national and understate small local terms. Semrush had cost-per-click data for only a few of these, between $0.89 and $2.16, and no record of who is bidding on "physiotherapy winnipeg". Pull real local bid ranges from Google's Keyword Planner inside the Ads account before setting budgets.

| Keyword | Monthly searches | Semrush CPC |
|---|---|---|
| physiotherapy near me | 22,200 | no data |
| physio near me | 4,400 | $1.91 |
| physiotherapy winnipeg | 1,900 | no data |
| physiotherapist near me | 1,900 | no data |
| tmj physiotherapy | 590 | no data |
| frozen shoulder physiotherapy | 480 | $0.91 |
| vertigo physiotherapy | 390 | no data |
| car accident physiotherapy | 320 | no data |
| wcb physiotherapy | 320 | no data |
| physiotherapist winnipeg | 260 | no data |
| physio winnipeg | 260 | no data |
| whiplash treatment | 260 | $1.16 |
| knee pain physiotherapy | 210 | no data |
| tmj treatment winnipeg | 170 | no data |
| shoulder physiotherapy | 170 | no data |
| walk-in physio clinic | 140 | no data |
| back pain physiotherapy | 140 | no data |
| physiotherapy st vital | 110 | no data |
| st vital physiotherapy | 110 | no data |
| neck pain physiotherapy | 110 | no data |
| sciatica physiotherapy | 110 | $1.27 |
| physio open sunday | 90 | $2.03 |

"Near me" terms are national counts. Only the share inside the target area will ever see the ads. Vertigo is listed for size only; advertise it only if a physiotherapist at the clinic treats it.

### Targeting

- **Location:** a radius around 567 St. Anne's Rd rather than all of Winnipeg. Start at about 6 km, which covers St. Vital, River Park South, Meadowood, Island Lakes, Royalwood, Sage Creek, Southdale and Windsor Park. Add a second ring to about 10 km with a lower bid. Check the map in Google Ads' location picker before saving.
- **Location option:** "Presence: people in or regularly in your targeted locations". The default also includes people merely interested in the area, which shows ads to people in other cities.
- **Schedule:** clinic hours only for the first month, so every call can be answered.
- **Devices:** all. Expect mobile to dominate.
- **Languages:** English.

### Negative keywords from day one

jobs, job, careers, salary, hiring, course, courses, school, degree, program, university, assistant, aide, free, exercises, youtube, pdf, video, what is, definition, veterinary, dog, equine, massage, chiropractor, chiropractic, acupuncture, dry needling, cupping, orthotics, pelvic floor, athletic therapy, occupational therapy, home care, in home, virtual, online, and other cities (brandon, steinbach, selkirk, toronto, calgary). Remove acupuncture, dry needling, cupping and orthotics from this list only when those pages are approved and live.

Review the search terms report daily in week one and twice a week after. Most wasted spend is found there.

### Bidding and budget

- Weeks 1 to 3: Maximize Clicks with a maximum cost-per-click cap, so spend is controlled while conversion tracking is checked against Juvonno.
- After about 15 to 20 recorded conversions: switch to Maximize Conversions.
- After about 30 conversions a month: consider a target cost per conversion.

A planning figure, not a forecast: at an assumed $2 to $5 a click, $30 a day buys roughly 180 to 450 clicks a month. Replace the assumed click cost with Keyword Planner's local range, and judge the budget on cost per new patient after the first four weeks.

### Ad copy that passes the College rules

Headlines (30 characters or fewer):

- Physiotherapy in St. Vital
- Pro-Motion Physiotherapy
- Open 7 Days a Week
- Evening Appointments to 8 PM
- Saturday & Sunday Hours
- Book Your Assessment Online
- Direct Billing Available
- MPI & WCB Claim Support
- No Referral Needed to Book
- Registered Physiotherapists
- 567 St. Anne's Rd, Winnipeg
- Back Pain & Sciatica Physio
- Physio After a Car Accident
- Parking at the Clinic Door

Descriptions (90 characters or fewer):

- Assessment and treatment by registered physiotherapists on St. Anne's Road. Book online.
- Open weekdays to 8 PM and on weekends. Call the clinic or book your assessment online.
- Direct billing to participating insurers. Coverage depends on your plan. MPI & WCB claims.
- Your first visit includes an assessment, a treatment plan and a home exercise program.

Each line states a fact the clinic can prove. A physiotherapist still has to approve them. "No Referral Needed to Book" is true in Manitoba, but some insurers require one for coverage, so the landing page must say so (the homepage FAQ already does).

Assets to use: location (linked to the Google Business Profile), call (scheduled to clinic hours), sitelinks to First Visit, Insurance and Direct Billing, MPI Claims and Meet the Team, callouts with the facts above, structured snippet "Services". Assets to leave off: promotion, price with offers, lead form, and anything Google creates automatically.

### Account settings checklist

- Auto-tagging on.
- Auto-applied recommendations off.
- Automatically created assets off.
- Search Partners and Display Network off.
- Customer Match and audience expansion off.
- Location option set to Presence.
- Call recording off.
- Billing owned by the clinic's Google Ads account, with Rtstics added as a manager. The clinic keeps ownership of its data.

## 8. Analytics to add, and what not to add

### Add before launch

| Item | Why | How |
|---|---|---|
| Link GA4 to Google Ads | Without it Google Ads sees no conversions | GA4 Admin, Product links, Google Ads. Needs admin on both. |
| Mark key events in GA4 and import them | Tells Google what a lead is | `booking_click` as primary, counted once per session. `phone_click` and `generate_lead` as secondary until volumes are known. |
| Google Ads call reporting | Counts calls made from the ad itself, which never touch the site | Turn on call reporting with the call asset. Count calls of 60 seconds or more. Recording off. |
| `GA4_API_SECRET` in Vercel | Turns on the exact server-side `booking_redirect` count | Described in `docs/ads-tracking-and-analytics-access-plan.md`. I could not confirm whether it is set. |
| GA4 housekeeping | Clean data | Data retention to 14 months, an internal-traffic filter for the clinic and Rtstics, `link_location` registered as a custom dimension, Search Console linked. |
| "How did you hear about us?" in Juvonno | Ground truth | Front desk habit plus the referral source field. |
| Form delivery check | A silent email failure loses patients | Weekly test submission, and compare GA4 `generate_lead` with emails received. |

### Add later

| Item | When |
|---|---|
| Completed-booking tracking inside Juvonno | If Juvonno support allows a tracking code on the portal, or exposes online bookings by API. Still unanswered from the earlier plan. |
| Website call tracking (number swap for ad visitors) | If phone leads turn out to be most of the volume and click counts are not enough. Use a Canadian-hosted option or Google's own forwarding numbers, with recording off. |

### Do not add

| Item | Reason |
|---|---|
| Remarketing tags, Meta pixel, TikTok pixel | Builds audiences from visits to health-condition pages. Against Google's health policy and the Privacy Commissioner's guidance on sensitive information. |
| Customer Match or uploading patient lists | Sends patient identity to an ad platform. |
| Enhanced conversions for leads | Sends a prospect's hashed email or phone to Google. Google's own policy excludes sensitive categories, medical services included. |
| Session replay (Microsoft Clarity, Hotjar) | Records what people do on a health site, including what they type. The earlier plan suggested Clarity; for this client I now advise against it. |
| A second or third visit counter | See T6. |

## 9. Not verified

| Item | Why not | Who can check |
|---|---|---|
| GA4 key events and the GA4 to Google Ads link | The Analytics connector's Google login has expired (`invalid_grant`) | Samvel: re-run the Google login for the analytics connector, or look in GA4 Admin |
| Whether `GA4_API_SECRET` is set in Vercel | Not in `.env.local`; production env vars were not read | Vercel project settings |
| Which physiotherapist provides the Occupational Therapy services | Not stated on the site | Clinic |
| Acupuncture and dry needling roster status | Unchanged from the earlier compliance record | Clinic, CPM register |
| What lastminutephysio.com shows | Not opened | Anyone |
| Where chat transcripts and visit-counter data are stored, and for how long | Server side, not visible from the browser | Rtstics |
| Mobile speed score | I measured load timing from a desktop connection only | Run PageSpeed Insights on a service page |
| Real local cost per click | Semrush had little Canadian CPC data | Google Keyword Planner |
| The clinic's actual fees | Not published | Clinic |
| Whether the clinic has PHIA agreements with Juvonno and Resend, a written security policy, staff pledges and a two-year safeguards audit | Clinic records | Clinic |
| Whether Juvonno's reminder emails and texts identify the clinic and carry an unsubscribe | Not seen | Clinic, Juvonno |
| CPM's March 2026 guideline on AI in clinical practice, and whether it covers a website chat assistant | Not read | Rtstics or clinic |
| Whether a location asset's star rating is acceptable to the College | Not addressed in the practice direction | Ask CPM |
| Quebec Law 25 reach | Law-firm summaries only, no primary source read | Privacy lawyer, if it ever matters |

## 10. Order of work

| Step | Work | Owner | Size |
|---|---|---|---|
| 1 | Mobile sticky Call and Book bar, buttons under the H1, compact cookie banner | Rtstics | Half a day |
| 2 | Consent fixes T1, T2, T3, T8 and the privacy page rewrite T9 | Rtstics | Half a day |
| 3 | Remove "Review Us", swap the superlative testimonials, reword "specialized" and "advanced" | Rtstics, clinic approves | Two hours |
| 4 | Decide the Occupational Therapy pages | Clinic | One conversation |
| 5 | Form: honeypot, rate limit, confirmation email, second recipient | Rtstics | Half a day |
| 6 | Clinic decisions: fees to publish, who answers phones and when, privacy officer name, sign-off on ad copy and keywords | Clinic | One meeting |
| 7 | Written PHIA agreements: clinic with Rtstics (chat, visit counter), and confirm the ones with Juvonno and Resend | Both | Template plus signature |
| 8 | Link GA4 and Google Ads, mark key events, call reporting, account settings checklist | Rtstics | One hour |
| 9 | Launch Brand, Local physio, Hours and Claims at a small budget, clinic hours only | Rtstics | One hour |
| 10 | Daily search-terms review for a week, then the weekly scorecard | Rtstics | Ongoing |

## 11. Fixed in the code on 21 November 2026

These changes are in the working tree. They are not committed or deployed, and the clinic has not yet approved the copy changes.

| Audit item | Change | Files |
|---|---|---|
| Blocker 1: mobile buttons | "Book an assessment" and "Call" directly under the H1 on every service page, with a line saying bookings are confirmed by the front desk and to call for same-day needs. A phone-only sticky Call and Book bar on every page, placed beside the chat bubble, hidden while the cookie banner is open and when the footer is in view. New placements `service-hero` and `sticky`. | `app/services/[slug]/page.tsx`, `components/MobileActionBar.tsx`, `app/layout.tsx` |
| Cookie banner size | 196 px tall on a 375 x 812 phone, down from 379 px. | `components/CookieConsent.tsx` |
| T1: consent wording | Banner now says the cookies measure website use and advertising and are never used for personalised ads. Buttons are "Reject optional" and "Accept optional". | `components/CookieConsent.tsx` |
| T2 and T5: Reject | After "Reject optional" the Google tag and the visit counter are not loaded. On the page where Reject is tapped, Google's `ga-disable` switch and the counter's `__rtConsent` flag stop them at once and stored campaign tags are cleared. Changing an earlier choice reloads the page. Before a choice, cookieless mode is unchanged. | `components/CookieConsent.tsx`, `components/ConversionTracker.tsx` |
| T10: chat ad-click record | The widget's 90-day `rt_attr` record is deleted unless the visitor accepted. | `components/CookieConsent.tsx` |
| T3 and T9: privacy page | Rewritten to state what each tool sends in each consent state, the providers involved, processing outside Canada, and how to make an access or correction request. | `app/privacy/page.tsx` |
| T8 and blocker 6: contact form | Hidden honeypot field, per-IP limit of 5 requests in 10 minutes, field length caps, header-injection guard, optional second inbox (`RESEND_CLINIC_BACKUP_EMAIL`), a warning in the logs if the sending domain is not configured, a count-only log line, and a confirmation email to the sender. The prompt no longer asks for injury details, and a privacy line sits under the button. | `app/api/contact/route.ts`, `app/about/page.tsx` |
| Blocker 5: Review Us | Removed from the desktop and mobile navigation. | `components/Navbar.tsx` |
| Testimonials | The two quotes that rank the clinic ("best ... in the city") are removed. Three remain. | `components/Testimonials/Testimonials.tsx` |
| "Specialized" and "Advanced" | Removed from nine descriptions. Unsourced outcome wording such as "Effective for" is still there and needs the clinic's rewrite. | `app/how-we-treat/page.tsx`, `components/BentoGrid/bentoItems.ts`, `app/services/serviceData.ts` |

Checked in a local preview at 375 x 812: buttons visible above the banner; after Reject no request goes to the counter or Google on the next page, even with a `gclid` in the URL, and no campaign record remains in browser storage; the honeypot returns success without sending; the sixth request in a row gets a 429. Type check passes for the app.

Not checked: a real form submission and the confirmation email (it would email the clinic), and Google's behaviour after Reject on the live site (the Google tag only runs on the production host).

Still open: T4 (`url_passthrough`), T6 (Datafast), T7 and T11 (chat notice, agreement, call-back promise), the pre-choice half of T5, the `/book` deep link, security headers, fees, the Occupational Therapy pages, a named privacy contact and a retention period for the privacy page, and everything in the Google Ads account.

## Sources

- Site code: `components/CookieConsent.tsx`, `components/GoogleAnalytics.tsx`, `components/ConversionTracker.tsx`, `lib/analyticsEvents.ts`, `app/book/route.ts`, `app/api/contact/route.ts`, `app/privacy/page.tsx`, `app/about/page.tsx`, `components/Navbar.tsx`, `components/Testimonials/Testimonials.tsx`, `components/BentoGrid/bentoItems.ts`
- Live checks on 21 November 2026: www.promotionphysiotherapy.ca (homepage, back pain service page at 375 x 812, `/book`, response headers), pmphysio.juvonno.com booking portal, the visit-counter script and the chat widget embed
- Semrush keyword overview, Canadian database, 21 November 2026
- Earlier records in this repo: `docs/treatment-pages-compliance-2026-11.md`, `docs/ads-tracking-and-analytics-access-plan.md`, `docs/seo-semrush-competitor-research-2026-11.md`
- CPM, Advertising and Marketing practice direction: https://manitobaphysio.com/wp-content/uploads/2025/06/Advertising-and-Marketing-1.pdf
- CPM, In Touch newsletter, February 2024 (soliciting reviews): https://manitobaphysio.com/wp-content/uploads/2024/05/In-Touch-February-2024-1.pdf
- PIPEDA: https://laws-lois.justice.gc.ca/eng/acts/P-8.6/ and Bill C-36 status: https://www.parl.ca/LegisInfo/en/bill/45-1/c-36
- Privacy Commissioner, provinces where PIPEDA applies: https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/r_o_p/prov-pipeda/
- Privacy Commissioner, guidelines on online behavioural advertising: https://www.priv.gc.ca/en/privacy-topics/technology/online-privacy-tracking-cookies/tracking-and-ads/gl_ba_1112/
- Privacy Commissioner, meaningful consent guidelines: https://www.priv.gc.ca/en/privacy-topics/collecting-personal-information/consent/gl_omc_201805/
- Privacy Commissioner, finding 2014-001 (health-related remarketing): https://www.priv.gc.ca/en/opc-actions-and-decisions/investigations/investigations-into-businesses/2014/pipeda-2014-001/
- Privacy Commissioner, processing personal data across borders: https://www.priv.gc.ca/en/privacy-topics/airports-and-borders/gl_dab_090127/
- Privacy Commissioner, recording customer calls: https://www.priv.gc.ca/en/privacy-topics/surveillance/02_05_d_14/
- Privacy Commissioner, generative AI principles: https://www.priv.gc.ca/en/privacy-topics/technology/artificial-intelligence/gd_principles_ai/
- Manitoba, Personal Health Information Act: https://web2.gov.mb.ca/laws/statutes/ccsm/p033-5.php?lang=en and regulation 245/97: https://web2.gov.mb.ca/laws/regs/current/245-97.php?lang=en
- CASL: https://laws-lois.justice.gc.ca/eng/acts/E-1.6/ and regulations SOR/2013-221: https://laws-lois.justice.gc.ca/eng/regulations/SOR-2013-221/FullText.html
- Criminal Code s. 184: https://laws-lois.justice.gc.ca/eng/acts/C-46/section-184.html
- Competition Act s. 74.01: https://laws-lois.justice.gc.ca/eng/acts/c-34/section-74.01.html
- Google Ads, personalised advertising and health: https://support.google.com/adspolicy/answer/143465 and https://support.google.com/adspolicy/answer/16701855
- Google Ads, healthcare and medicines: https://support.google.com/adspolicy/answer/176031
- Google Ads, enhanced conversions policy: https://support.google.com/adspolicy/answer/7475709
- Google Ads, Customer Match policy: https://support.google.com/adspolicy/answer/6299717
- Google Ads, misrepresentation: https://support.google.com/adspolicy/answer/6020955 and editorial: https://support.google.com/adspolicy/answer/6021546
- Google Ads, call recording: https://support.google.com/google-ads/answer/16913427
- Google, EU user consent policy: https://www.google.com/about/company/user-consent-policy/
- Google Analytics, no personally identifiable information: https://support.google.com/analytics/answer/6366371

The legal and policy pages above were read on 21 November 2026. Bill C-36's content and Quebec Law 25's reach rest on law-firm summaries, not primary text.
