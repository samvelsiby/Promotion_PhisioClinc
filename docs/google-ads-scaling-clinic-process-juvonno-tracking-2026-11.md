# Scaling Google Search ads: the full patient path, the clinic's part, and seeing inside Juvonno

Written 21 November 2026 for Pro-Motion Physiotherapy. This builds on `docs/google-ads-launch-audit-2026-11.md`, which covers the launch blockers, compliance rules, campaign structure, keywords and ad copy. Nothing here changes those guardrails: Search only, no remarketing, no enhanced conversions, no call recording, no session replay, and College advertising rules on every word.

This document answers three questions:

1. How does a search-only account scale, and what limits it?
2. What does the clinic have to do well once a person clicks, and what do we need the clinic to tell us?
3. How do we see what happens after "Book" inside Juvonno?

## 1. The short version

- **Juvonno is not a black box by design.** Juvonno has an official Google Tag Manager slot for the booking portal (Settings, General, Portal, "Google Tag Manager Snippets"). It is empty on Pro-Motion's portal today. Once a container is in, each booking step can be counted. Juvonno also has referral-source fields and reports that nobody is using yet.
- **Budget is the last lever, not the first.** A search-only account in a 6 to 10 km radius has a fixed pool of searches. Growth comes from five multipliers in a row: share of searches shown, click rate, site-to-lead rate, lead-to-attended rate, and visits per patient. The last three belong to the website, the portal and the clinic. Fixing them is cheaper than buying more clicks.
- **The clinic's capacity is the ceiling.** Two physiotherapists. When the next assessment slot is more than about three days out, more ad spend buys waiting lists, not patients.
- **The number to manage is cost per attended first assessment**, not cost per click or per "Book" click. That needs three counts we do not have yet: completed online requests, accepted requests, and people who showed up.

## 2. The whole path, stage by stage

| # | Stage | Who owns it | Counted where | Status today |
|---|---|---|---|---|
| 1 | Search ("physio near me") and ad shown | Rtstics | Google Ads: impressions, impression share | Not launched |
| 2 | Ad click | Rtstics | Google Ads | Not launched |
| 3 | Landing page read | Rtstics | GA4, Rtstics counter | Working |
| 4a | "Book" tapped | Rtstics | `/book` server log, GA4 `booking_click` | Working |
| 4b | Phone call | Clinic | Google Ads call reporting, `phone_click`, phone system | Call reporting not set up |
| 4c | Form sent | Clinic | GA4 `generate_lead`, inbox | Working |
| 5 | Portal: service chosen | Juvonno | Nothing | **Blind** |
| 6 | Portal: date and time chosen | Juvonno | Nothing | **Blind** |
| 7 | Portal: details entered, request sent | Juvonno | Nothing | **Blind** |
| 8 | Front desk accepts the request | Clinic | Juvonno "Pending" tab | Not reported to us |
| 9 | Reminder sent, patient arrives | Clinic | Juvonno schedule status | Not reported to us |
| 10 | Assessment done, next visit booked | Clinic | Juvonno Patient Retention report | Not reported to us |
| 11 | Plan of care finished | Clinic | Juvonno Patient Drop-Off report | Not reported to us |

Stages 5 to 7 are the black box. Stages 8 to 11 are not hidden, they are just in a system only the clinic logs into.

## 3. Seeing inside Juvonno

### What I checked on the live portal (21 November 2026)

| Fact | Evidence |
|---|---|
| No tag manager or analytics on the portal | No `googletagmanager` script and no `dataLayer` on `pmphysio.juvonno.com/portal/publicbook.php` |
| Steps 1 and 2 have their own addresses | Welcome: `publicbook.php`. Service: `?step=clinicPractService&dr=0&branch_id=1`. Date and time: `?step=dateTime&branch_id=1&dr=0&product_id=3` |
| The last step is a form on the date page | Choosing a time opens form `frmConfirmAppt`, which posts back to `publicbook.php`. I did not submit it, so the confirmation screen is not verified. |
| Campaign tags die after the first portal page | Loaded the service step with `utm_*` and `gclid`, moved to the date step: the address was rebuilt without them. The form's hidden `bookurl_additional_parameters` field was empty. |
| A new patient must create an account | First name, last name, date of birth, mobile, email, password, password again, and a reCAPTCHA |
| No "How did you hear about us?" on the portal | The field is not in the form, so no referral type is switched on for portal signup |
| Bookings are requests | Welcome text says the front desk reviews and confirms. Auto-accept is off. |
| A direct link to the assessment calendar exists | `publicbook.php?step=dateTime&branch_id=1&dr=0&product_id=3` opens the Initial Assessment calendar with no clicks |

### Layer A: count the portal steps (the real fix)

Juvonno's help centre documents the integration: create a GTM container, then in Juvonno go to Settings, System & Company Settings, General, Portal, "Google Tag Manager Snippets", paste the container code, save. Juvonno says tags can then track page views, button clicks and form submissions on the portal.

How to use it without breaking the privacy posture of the main site:

| Rule | Why |
|---|---|
| The container belongs to the clinic's Google account, with two-step login. Rtstics gets edit access. | Whoever controls the container can run script on a page where patients type their name and date of birth, and on the logged-in patient portal. Under PHIA that access is a safeguard the clinic is accountable for. |
| Tags fire only on `/portal/publicbook.php`. Nothing on `plogin.php` or any logged-in page. | The logged-in portal shows invoices, forms and documents. |
| Send a step name only: `service`, `datetime`, `submit`, `complete`. Never the page address, form values or anything read from the page. | Keeps names, birth dates and appointment times out of every analytics tool. |
| No cookies. No Google Ads tag, no Meta pixel, no remarketing tag in this container, ever. | The portal has no consent banner, and Juvonno's own article suggests Meta Pixel. That advice does not fit a health clinic in Canada. |
| Count through our own endpoint, not a plain GA4 tag. | With consent denied, GA4 does not show the hits in reports for a site this small. The `/book` route already solves this by counting on our server and forwarding to GA4 by Measurement Protocol. Do the same: a small tag sends `step` and a campaign label to a new `/api/portal-event` route on the clinic site. The Rtstics counter can do this job if it can run with click IDs switched off. |

The four events and how to trigger them:

| Event | Trigger | Certainty |
|---|---|---|
| `portal_service` | Page view where the address contains `step=clinicPractService` | Verified address |
| `portal_datetime` | Page view where the address contains `step=dateTime` | Verified address |
| `portal_submit` | Form submit on `frmConfirmAppt` | Form verified, trigger untested |
| `portal_complete` | The thank-you screen. Put a unique phrase in Juvonno's "Public Book Thank You Message" and "Secure Book Thank You Message" and trigger when it appears. | Untested. Confirm in GTM Preview with one real test booking, then cancel it. |

**Keeping the ad source without an identifier.** `/book` already forwards `utm_campaign` to the first portal page. The tag reads it there, keeps only a coarse label such as `paid-local` or `organic` in the tab's session storage, and attaches that label to the four events. The label is not a click ID and cannot be tied to a person. Result: completed bookings by campaign, in aggregate. For this to work the ads need a final URL suffix (`utm_source=google&utm_medium=cpc&utm_campaign={campaignid}`), and the site's Book links need to carry the visit's campaign tags into `/book`, which they do not do today (`bookingHref()` sends only the button placement).

What this gives and what it does not:

- Gives: `/book` clicks, then service, date, submit, complete, with drop-off at each step, split by paid and organic and by campaign.
- Does not give: a completed booking tied to one specific ad click inside Google Ads. That needs the click ID stored against a booking, which links an ad identifier to a patient record. Not recommended. Google keeps bidding on `booking_click`, and we use the measured completion rate to judge and value it.

### Layer B: use the records Juvonno already keeps

| Juvonno feature | Where | What to do |
|---|---|---|
| Referral Types | Settings, Referral Types | Create a short list: Google or online search, Google Maps, Friend or family, Doctor or other provider, Insurer / MPI / WCB, Saw the clinic, Other. Tick "Portal Signup" on each. |
| Mandatory Referral Type | Settings, General, Portal, General | Turn on, so every online signup answers it. |
| Referral field at the desk | Settings, General, Patients, Quick Patient Creation, "Referral Fields Enabled" and required | Turn on, so phone bookings answer it too. |
| Referrals by Type report | Reports, Statistics | Monthly: new patients by source. |
| Revenue by Referrals report | Reports, Statistics | Monthly: revenue by source. This is the closest thing to return on ad spend. |
| Patient Retention report | Reports, Statistics | New patients and whether they rebook, per practitioner. |
| Patient Drop-Off report | Reports, Statistics | Patients at risk of stopping early. |
| Pending Appointment Email Address | Settings, General, Portal, Scheduling | Set to an inbox that is watched, so a request is never missed. |
| Appointment Booking Statistics | Reports, Statistics | Shows which user booked each appointment. Whether portal bookings appear as their own line is not confirmed. |

Patients cannot tell an ad from an organic result, so "Google or online search" is one bucket. The split between paid and organic comes from Layer A.

### Layer C: the API, later

Juvonno has a REST API (`/api/appointments`, `/api/customers`), with a key created under a user's profile. A nightly job could pull counts of appointments created, accepted and attended. I could not open the field reference, so whether an appointment records "booked through portal" or the referral type is unknown. It would also give Rtstics a key that can read patient records, which needs a written PHIA agreement and a read-only, least-access setup. Do Layers A and B first; they may be enough.

### Portal friction worth fixing while we are in there

| Finding | Suggestion | Decision for |
|---|---|---|
| Welcome page whose only action is "Continue" | Send ad traffic to the service step, or straight to the assessment calendar using the deep link above | Clinic |
| "Please call if you are looking for an appointment within 24hrs", while the calendar showed same-day times | Either hide slots inside 24 hours (Hours Prior to Book) or drop the sentence. Today the page contradicts itself. | Clinic |
| Request, then wait for the front desk | Consider Auto-Accept for returning patients at least. Juvonno notes public bookings by new people still need a person to match the patient. | Clinic |
| Account with password and date of birth before a first booking | Ask Juvonno whether "Public Appointment Booking" without a profile can shorten this | Clinic, Juvonno |
| "Reason for the appointment" field | Leave off, or keep it optional. It collects health details before a relationship exists. | Clinic |
| No fees shown | "Display Product & Services Pricing" can show the assessment fee in the portal | Clinic |

## 4. The clinic's side: what has to be true when a person shows up

Ads only bring a person to the door. These are the standards that turn that person into a patient who finishes care. Each has one owner and one number.

| Stage | Standard | Owner | Number to watch |
|---|---|---|---|
| Phone rings | Answered live during every hour ads run. Missed calls returned within 15 minutes. | Front desk | Missed calls in open hours, target under 10% |
| First call | Name, phone, one line on the problem, who pays (private, insurer, MPI, WCB), then offer the two nearest times. Book on the call, never "go to the website". Ask "How did you hear about us?" | Front desk | Calls that end in a booking |
| Online request | Accepted or answered within one business hour. Checked at opening, midday and mid-afternoon. | Front desk | Hours from request to acceptance |
| Web form | Reply within one business hour. Test submission every Monday. | Front desk | Forms received versus GA4 count |
| Before the visit | Confirmation with address, parking, what to wear and bring, fee, and direct-billing details. Intake form sent through Juvonno (Welcome Packet). Reminder by text or email. | Front desk | Intake forms completed before arrival |
| Insurance | Coverage question answered before the visit where possible, so cost is not a surprise at the desk | Front desk | Visits where cost was a surprise |
| Arrival | Greeted, form checked, seen on time | Front desk | Arrival rate for first assessments |
| Assessment | What is wrong, the plan, how many visits and why, home program. Matches what the ad and page promised. | Physiotherapist | Patients who leave with a written plan |
| Next visit | Booked before the patient leaves, when the plan calls for one | Physiotherapist, front desk | First visits with a follow-up booked |
| Missed visit | One call or text the same day to rebook | Front desk | No-shows rebooked |
| Finish | Discharge with a home program. No "check-up" visits pitched to people with no complaint. | Physiotherapist | Plans completed |

Three College limits shape this list. Follow-ups are booked because the plan needs them, never to fill the schedule. Nobody asks for a review at any stage. Reminder messages identify the clinic, carry an unsubscribe and contain no promotion.

Outside reference points, all from vendors and practice-software companies, so directional only:

| Measure | Reported figure |
|---|---|
| Missed calls in business hours | Under 10% is the usual target, under 5% is strong |
| New-patient calls that end in a booking | About 60% at an average clinic, 80 to 85% at the best |
| Arrival rate | 85 to 88% acceptable, 90 to 93% strong |
| Plans of care completed | 65 to 75% |
| Physical therapy cost per lead from search ads (US) | About US$33 |

## 5. What we need the clinic to tell us

**Capacity**
1. How many new assessments a week can Lijo and Ben each take on top of current patients?
2. Which days and times usually have openings? Which are always full?
3. How far out is the next assessment slot right now?

**Money**
4. Assessment fee and follow-up fee.
5. Average visits per new patient, by payer if known (private, insurer, MPI, WCB).
6. What the clinic is willing to pay to gain one new patient.
7. Monthly ad budget for the first three months.

**Phones and front desk**
8. Who answers the phone in each open hour, including evenings and Sundays? Is there a receptionist or do the physiotherapists answer between patients?
9. What happens to a call during treatment? Voicemail, forwarding, nothing?
10. Can the phone system report missed calls?
11. Who watches the pending requests and the form inbox, and how often?

**Juvonno**
12. Who is the Juvonno administrator, and will they add the tag container and the referral types (section 3)?
13. Is the Welcome page text needed? May ad traffic skip it?
14. Auto-accept for any group of patients?
15. Which reminders and intake forms are switched on today?
16. Will the clinic send us four numbers each month from Juvonno: new patients by referral type, revenue by referral type, first-visit arrival rate, first visits with a follow-up booked?

**Services and rules**
17. Which conditions do Lijo and Ben most want to see, and which should ads avoid?
18. MPI and WCB: does the clinic want more of these? They are multi-visit and insurer-paid.
19. Who provides the Occupational Therapy services listed on the site?
20. Which physiotherapist signs off the ads and landing pages, in writing?
21. Are PHIA agreements in place with Juvonno, Resend and Rtstics?

Items 1, 4, 5, 6, 8 and 12 block the launch. The rest shape how fast we scale.

## 6. How a search-only account scales

### The arithmetic

```
New patients = searches in the area
             x share of searches where the ad shows
             x click rate
             x site visitors who book, call or write
             x leads who attend a first assessment
Revenue      = new patients x visits per patient x fee
```

Budget moves only the second line. Everything below it is a rate, and rates compound. Lifting site-to-lead from 6% to 8% and lead-to-attended from 60% to 75% yields two-thirds more patients from the same spend.

Cost per attended new patient = ad spend divided by first assessments attended that came from ads. An illustration with assumed numbers, to be replaced with real ones after four weeks: $900 a month at $3 a click is 300 clicks; at 8% that is 24 leads; at 65% that is about 16 attended assessments, or roughly $56 each. Whether $56 is cheap depends on answers 4 to 6.

### The ladder

| Stage | When | What we do | Move up when |
|---|---|---|---|
| 0. Close the leaks | Before spending | Launch blockers in the audit. Portal step counts. Referral types in Juvonno. Phone coverage agreed. Campaign tags carried into `/book`. | A test booking shows up at every stage of section 2 |
| 1. Prove the path | Weeks 1 to 4 | Brand, Local physio, Hours, Claims. Small budget, clinic hours only, click-cap bidding. Read search terms daily. The goal is measured rates, not profit. | About 30 leads recorded, cost per attended assessment known, calls and requests meeting the standards in section 4 |
| 2. Fill what works | Months 2 to 3 | For campaigns under the cost ceiling, read "impression share lost to budget" and raise budget in steps of about a quarter, a week apart. Where share is lost to rank, fix ad relevance and the landing page before raising bids. Switch to Maximize Conversions. Add Conditions, one ad group per service page. | Lost-to-budget share is small on the core campaigns and cost per patient holds |
| 3. Widen | Months 3 to 6 | Second radius ring to about 10 km. More condition pages as the clinic approves them. Run ads outside clinic hours on "book online" wording once portal completion is measured. Copy the account to Microsoft Advertising (Bing), which is also search-only. Lean into MPI and WCB if the clinic wants them. | Cost per patient holds as volume rises |
| 4. Capacity | Whenever slots run out | Throttle budget when the next assessment is more than about three days out. Steer spend to campaigns and days with openings. | The clinic adds hours or a practitioner |

Raising budget in quarter steps is a practitioner habit so automated bidding can settle, not a Google rule.

### Where search-only stops

When the ad already shows for most local searches on the core terms, more money raises the price per click and little else. From there, growth comes from the lower lines of the arithmetic and from channels that respect the same guardrails: organic and Maps visibility, factual insurance and claims content, and referral relationships with physicians and insurers. None of those need remarketing or content for Meta.

## 7. Weekly scorecard

Extends the table in the audit with the stages that are blind today.

| Number | Source | Owner |
|---|---|---|
| Spend, clicks, cost per click, impression share lost to budget and to rank | Google Ads | Rtstics |
| `/book` clicks by placement and campaign | Server log, GA4 | Rtstics |
| Portal: service, date, submit, complete | Portal tag (section 3A) | Rtstics |
| Calls from ads of 60 seconds or more | Google Ads call reporting | Rtstics |
| Missed calls in open hours | Phone system | Clinic |
| Requests pending longer than one business hour | Juvonno | Clinic |
| New patients by referral type | Juvonno, Referrals by Type | Clinic |
| First assessments attended | Juvonno | Clinic |
| First visits with a follow-up booked | Juvonno, Patient Retention | Clinic |
| Days to next assessment slot | Juvonno | Clinic |
| Cost per attended new patient | Spend divided by attended | Rtstics |

## 8. Next steps in order

| Step | Work | Owner |
|---|---|---|
| 1 | One meeting with the clinic to answer section 5 | Both |
| 2 | Clinic creates the GTM container and pastes it into Juvonno; adds referral types and makes them mandatory | Clinic, guided by Rtstics |
| 3 | Build `/api/portal-event`, the four portal tags, and campaign-tag passthrough on Book links; note the portal counter on `/privacy` | Rtstics |
| 4 | One test booking to verify every event, then cancel it | Both |
| 5 | Decide the Welcome page, the 24-hour sentence, auto-accept and the deep link | Clinic |
| 6 | Finish the launch blockers in the audit, then start stage 1 | Rtstics |

## 9. Not verified

| Item | Why | Who can check |
|---|---|---|
| The GTM snippet loads on every booking step, including the thank-you screen | Needs the container installed | Step 4 above |
| What the confirmation screen looks like and whether it has its own address | I did not submit a booking | Step 4 above |
| Whether Juvonno reports portal bookings separately, and what the API exposes per appointment | Field reference would not load | Juvonno support |
| Whether "Public Appointment Booking" can skip account creation | Setting described, behaviour not seen | Juvonno support |
| Whether the Rtstics counter can run with click IDs off and treat `step=` as funnel steps | Not tested | Rtstics |
| All outside benchmarks in section 4 | Vendor-published, definitions vary | Replace with the clinic's own numbers |
| Real local click prices | Still needs Keyword Planner | Rtstics |

## 10. Built on 21 November 2026

In the working tree. Not committed, not deployed.

| Piece | What it does | Files |
|---|---|---|
| Tag Manager container | `GTM-57SHJFTT`, created and published empty. Not yet pasted into Juvonno. | Google Tag Manager |
| Step counter endpoint | `/api/portal-event` accepts `step` (open, service, datetime, submit, complete), `channel` (paid, site, other) and `campaign`. It only counts requests that come from `pmphysio.juvonno.com`, drops anything else, logs one `portal_step` line and forwards a `portal_<step>` event to GA4 when `GA4_API_SECRET` is set. | `app/api/portal-event/route.ts`, `lib/serverAnalytics.ts` |
| Booking redirect | Now shares the counting helpers with the endpoint, so a booking click and the portal steps after it carry the same daily id in GA4. Behaviour unchanged. | `app/book/route.ts` |
| Campaign tags on Book links | `utm_source`, `utm_medium` and `utm_campaign` from the landing address are kept for the tab and added to `/book` links when tapped. No click id is kept. Cleared and switched off after "Reject optional". | `lib/analyticsEvents.ts`, `components/CampaignTags.tsx`, `components/CookieConsent.tsx` |
| Portal tag | The script for Tag Manager. Each step is counted once per tab. | `docs/juvonno-portal-gtm-tag.html` |
| Privacy page | One paragraph describing the step counter. Needs the clinic's approval like the rest of that page. | `app/privacy/page.tsx` |

### To switch it on

1. Deploy the site changes.
2. In Tag Manager, container `GTM-57SHJFTT`: Tags, New, Tag Configuration, Custom HTML. Paste the script from `docs/juvonno-portal-gtm-tag.html`. Triggering: All Pages. Name it "Portal step counter". Save, then Submit and Publish.
3. The clinic pastes the container code into Juvonno and adds the sentence "Your appointment request has been received." to both Thank You messages (section 3).
4. In Google Ads, set the account's final URL suffix to `utm_source=google&utm_medium=cpc&utm_campaign={campaignid}`.
5. Make one test booking from an address with `?utm_source=google&utm_medium=cpc&utm_campaign=test`, and check the Vercel log for five `portal_step` lines ending in `complete`. Cancel the booking.
6. In GA4, mark `portal_complete` as a key event and register `channel` as a custom dimension.

### Open points

- Juvonno submits the form through jQuery after its own checks, and may show a review screen before the final confirmation. `submit` is counted at the first of those; `complete` depends on the thank-you sentence. Both need the test booking to confirm.
- After "Reject optional" the site stops adding campaign tags, but `/book` and the portal counter still add anonymous counts to GA4, as `/book` already did. The strict option is to pass a do-not-count flag through `/book` and have the portal tag honour it.
- `/book` still forwards the ad click code to Juvonno (audit item T4). The step counter does not need it.

## Sources

- Live checks on 21 November 2026: `pmphysio.juvonno.com/portal/publicbook.php` (scripts, step addresses, booking form fields, campaign-tag behaviour)
- Site code: `app/book/route.ts`, `lib/constants.ts`, `components/GoogleAnalytics.tsx`, `components/ConversionTracker.tsx`
- Juvonno, Google Tag Manager integration: https://support.juvonno.com/hc/en-us/articles/13311892585879-How-to-Set-Up-the-Google-Tag-Manager-Integration
- Juvonno, Google Analytics for the Patient Portal: https://support.juvonno.com/hc/en-us/articles/18914771590679-How-to-Set-Up-Google-Analytics-for-the-Patient-Portal
- Juvonno, Patient Portal settings overview: https://support.juvonno.com/hc/en-us/articles/20794715108887-Overview-Patient-Portal-Settings
- Juvonno, connecting online booking to a website: https://support.juvonno.com/hc/en-us/articles/35997228313495
- Juvonno, Referral Types: https://support.juvonno.com/hc/en-us/articles/235712467-Settings-Referral-Types
- Juvonno, pending appointments: https://support.juvonno.com/hc/en-us/articles/235460887-How-to-Manage-Pending-Appointments-from-the-Patient-Portal
- Juvonno, Appointment Booking Statistics report: https://support.juvonno.com/hc/en-us/articles/40301533377047-Appointment-Booking-Statistics-Report
- Juvonno, Patient Retention report: https://support.juvonno.com/hc/en-us/articles/360056598954-Report-Patient-Retention
- Juvonno API guide: https://globaloffice.github.io/juvonno-api
- Missed-call and first-call targets: https://clinicmaster.com/?p=5812 and https://www.patientprism.com/healthcare-call-tracking-metrics-revenue-drivers-2026
- Call-to-booking rates: https://mycallhero.com/mystery-caller-audit-v4/
- Arrival and plan-completion targets: https://pulserevops.com/industry-kpis/ik0447 and https://www.physitrack.com/insights/physical-therapy-practice-kpis-small-clinics
- Physical therapy cost per lead: https://thevalleymarketinggroup.com/blog/physical-therapy-google-ads-cost-per-lead-2026/
- Google Ads, impression share: https://support.google.com/google-ads/answer/7508874
