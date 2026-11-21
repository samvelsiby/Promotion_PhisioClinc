# Sit-down checklist: Juvonno tag, Google tracking, Google Ads

For one meeting with the clinic, about 75 minutes. Background is in `google-ads-launch-audit-2026-11.md` and `google-ads-scaling-clinic-process-juvonno-tracking-2026-11.md`. Google's menu names change now and then; if one is not where this says, search the setting name inside the product.

Decided 21 November 2026: the five Occupational Therapy pages come down (done in the code, not deployed), and fees will not be published.

## Before you go (you, alone)

- [ ] In Tag Manager container `GTM-57SHJFTT`: Tags, New, Custom HTML, paste the script from `docs/juvonno-portal-gtm-tag.html`, trigger All Pages, Save, Submit, Publish.
- [ ] Have the container code ready to paste (Tag Manager, Admin, Install Google Tag Manager).
- [ ] Print or open the ad headlines, descriptions and keyword list from the launch audit, section 7, for sign-off.
- [ ] Decide whether the site changes are deployed before the meeting. The test booking in part D only counts once they are live.

Ask the clinic person to bring:

- [ ] Juvonno administrator login
- [ ] The Google account that owns the clinic's Google Analytics and Business Profile, plus the phone that receives its login codes
- [ ] A clinic credit card for Google Ads billing

## Part A: Juvonno (15 min, they are logged in, you guide)

- [ ] Settings, System & Company Settings, General, Portal, **Google Tag Manager Snippets**: paste the container code, Save.
- [ ] Same Portal screen, **Messages**: add this exact sentence to the end of both "Public Book Thank You Message" and "Secure Book Thank You Message": `Your appointment request has been received.`
- [ ] Settings, **Referral Types**, New Referral Type. Add seven and tick "Portal Signup" on each: Google or online search, Google Maps, Friend or family, Doctor or other provider, Insurer / MPI / WCB, Saw the clinic, Other.
- [ ] Portal, General: **Mandatory Referral Type** = Yes.
- [ ] Settings, General, Patients, Quick Patient Creation: **Referral Fields Enabled** = Yes, and required.
- [ ] Portal, Scheduling: **Pending Appointment Email Address** is an inbox someone reads every day.
- [ ] Check: open `pmphysio.juvonno.com/portal/publicbook.php` in a private window, view the page source, and find `GTM-57SHJFTT`.

Decide while the screen is open:

- [ ] May ad visitors skip the Welcome page and land on the assessment calendar?
- [ ] The Welcome text says to call for anything within 24 hours, but the calendar shows same-day times. Hide those times, or remove the sentence?
- [ ] Auto-accept online bookings for returning patients?

## Part B: Google accounts (25 min)

Access first:

- [ ] Google Analytics, Admin, Property access management: add your email as **Editor** on the Pro-Motion property (`G-ML36VHX4VF`).
- [ ] Tag Manager, Admin, User Management: add the clinic's Google email as **Administrator** on the container.

Create Google Ads (signed in as the clinic's Google account):

- [ ] Go to ads.google.com. When it starts building a campaign for you, choose **Switch to Expert Mode**, then **Create an account without a campaign**.
- [ ] Country Canada, time zone Winnipeg (Central), currency CAD. These cannot be changed later.
- [ ] The clinic person enters the billing details and card.
- [ ] Admin, Access and security: invite your email as **Admin**.
- [ ] If Google asks for advertiser verification, the clinic person completes it.

Connect tracking:

- [ ] Google Analytics, Admin, Product links, **Google Ads links**: link the new account.
- [ ] Google Analytics, Admin, Key events: mark `booking_click`, `phone_click`, `generate_lead`.
- [ ] Google Analytics, Admin, Custom definitions: add `link_location` and `channel` as event-scoped dimensions.
- [ ] Google Analytics, Admin, Data retention: 14 months.
- [ ] Google Analytics, Admin, Data streams, the web stream, **Measurement Protocol API secrets**: create one. You add it to Vercel as `GA4_API_SECRET` afterwards.
- [ ] Google Ads, Goals, Conversions, New, **Import from Google Analytics**: `booking_click` as primary; `phone_click` and `generate_lead` as secondary.

Account settings in Google Ads:

- [ ] Auto-tagging **on**.
- [ ] Tracking, Final URL suffix: `utm_source=google&utm_medium=cpc&utm_campaign={campaignid}`
- [ ] Auto-applied recommendations **off** (Recommendations, Auto-apply: untick everything).
- [ ] Call reporting **on**, call recording **off**.
- [ ] Link the Google Business Profile, for the location asset.

Never turn on, even if Google suggests it: remarketing or audience lists, Customer Match, enhanced conversions, lead form assets, call recording, Performance Max, Display, Search Partners, automatically created assets.

## Part C: Answers and sign-offs (25 min)

- [ ] New assessments per week each physiotherapist can take; how far out the next slot is today.
- [ ] Days and times that usually have openings.
- [ ] Assessment fee and follow-up fee. For working out what a new patient is worth only; fees will not be published.
- [ ] Typical number of visits for a new patient.
- [ ] What the clinic will pay to gain one new patient; monthly ad budget for three months.
- [ ] Who answers the phone in each open hour, and what happens to a call during treatment.
- [ ] Who checks pending online requests and the form inbox, and how often.
- [ ] Which conditions they most want; which to avoid. More MPI and WCB patients, yes or no?
- [ ] Confirm "Ergonomic Training" on the How We Treat page is something the clinic offers. It was labelled Occupational Therapy and is now under Physiotherapy.
- [ ] Name of the clinic's privacy contact for the privacy page.
- [ ] Written agreements with Juvonno, Resend and Rtstics for handling patient information: in place?
- [ ] **Sign-off in writing** by a physiotherapist. Send `docs/ad-approval-request-2026-11.md` as an email before the meeting, or have them reply to it on the spot. Their reply is the record.
- [ ] Agreement to send four numbers each month from Juvonno: new patients by referral type, revenue by referral type, first-visit arrival rate, first visits with a follow-up booked.

## Part D: Test before you leave (10 min)

- [ ] Open the site with `?utm_source=google&utm_medium=cpc&utm_campaign=test` on the end of the address, tap Book, and complete a booking under your own name.
- [ ] They see it in Juvonno's Pending tab and cancel it.
- [ ] Check the Vercel log for `portal_step` lines: open, service, datetime, submit, complete.
- [ ] Call the clinic number once from your phone and send one website form, to confirm both reach someone.

If the site changes are not live yet, do the test booking later from home and ask them to cancel it.

## After the meeting (you)

- [ ] Add `GA4_API_SECRET` in Vercel and redeploy.
- [ ] Mark `portal_complete` as a key event once the first one arrives.
- [ ] Pull local click prices from Keyword Planner.
- [ ] Build the four campaigns paused; switch on only after the written sign-off.
