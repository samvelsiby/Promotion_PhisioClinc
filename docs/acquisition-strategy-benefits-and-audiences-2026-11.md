# Acquisition strategy: workplace benefits and other audiences

Written 21 November 2026. Sources: the College of Physiotherapists of Manitoba advertising rules (12 June 2025), Semrush's Canadian database, Google Search Console for 22 August to 19 November 2026 filtered to Canada, and web searches run the same day. Volumes are Semrush's monthly estimates for Canada.

## Summary

1. **A "use your benefits before they expire" campaign should not run.** Manitoba's rule bars advertising that promotes or encourages unnecessary use of physiotherapy. Alberta's regulator, working from the same national wording, names this exact message as a breach.
2. **People do not search Google for it anyway.** Benefit-reset searches are close to zero. The benefits audience is real, but it is reached through the insurance page, insurer directories, opening hours and employers, not through a year-end push.
3. **The same applies to "check-ups".** Advertising visits to people with no complaint carries the same risk. The allowed version is care with a clinical reason: fall-risk, work injury, running and ergonomic assessments.
4. **Six other audiences are worth building for.** The strongest are injured workers, people who want a physiotherapist who speaks Hindi, Malayalam or Tamil, and people covered by plans the clinic already bills.

## Part 1: The benefits idea

### What the rules say

| Source | What it says |
|---|---|
| College of Physiotherapists of Manitoba, Advertising and Marketing, F.ii | Advertising must not "promote or encourage unnecessary use of physiotherapy services" |
| Same, G.iii | No time-limited pricing or other inducements |
| College of Physiotherapists of Alberta, "Ethical advertising" | Ads that encourage people to use up their benefits before the benefit year ends are inconsistent with the advertising standard |
| Same | Assessing people with no symptoms and selling them products is described as problematic |

Manitoba and Alberta both adapted their rule from the national Core Standards of Practice, so the wording is the same. I found no Manitoba statement on benefit-expiry ads specifically. The clinic can ask the College at info@manitobaphysio.com before deciding, but I would treat the Alberta position as the likely answer.

The reasoning behind the rule: a benefits deadline tells someone to book because money is about to lapse, not because they need care.

### What search demand shows

| Keyword | Monthly searches |
|---|---|
| when do benefits reset | 40 |
| do benefits reset in january | 10 |
| use benefits before year end | no data |
| benefits use it or lose it | no data |
| physio check up | 20 |
| preventative physiotherapy | none |

Even without the rule, there is no Google traffic to win here.

### What competitors do

I searched ten Winnipeg competitor sites for year-end or benefit-reset content and found none. Clinics in Ontario and the United States do publish it. The Winnipeg competitors have plain insurance coverage pages listing who they direct bill. The search tool is US-based, so a local campaign on social media or email would not have shown up.

### The allowed version

The goal changes from "book before your benefits lapse" to "if you already need care and have a plan, we are easy to use."

| Action | Why it works | Rule check |
|---|---|---|
| Rebuild `/insurance` as the hub: one short section per insurer the clinic bills, how direct billing works, and a list of what to check in a plan (annual maximum, per-visit limit, plan-year dates, referral requirement, a spouse's plan) | "canada life physiotherapy coverage" 90, "manulife physiotherapy coverage" 90, "direct billing physiotherapy" 70, "canada life direct billing" 90. The page ranks 59 to 75 today. | Factual. State plan-year dates as something to look up, with no deadline language. Do not state coverage amounts; they differ by plan. |
| Confirm whether the clinic can direct bill Sun Life and Manulife | Neither is on the site's insurer list, and they are two of the largest group insurers in Canada. | Clinic question, not a marketing one. |
| List the clinic on Sun Life's Lumino Health provider search | People with a Sun Life plan search there for nearby providers. Its pages also rank on Google for local provider searches. | A directory listing is fine. Do not request ratings. |
| Keep evening and weekend hours prominent | Working people book around a job. Done on the homepage this week. | Verifiable fact. |
| Free education talks for nearby employers on desk set-up or lifting | Reaches a whole insured workforce at once. | General education is allowed. No free assessments, and no paid service to the same person on the same day. |
| Leave year-end reminders out of email, text, social and Google Business Profile posts | | This is the message Alberta names. |

## Part 2: Other audiences

Search volumes here are small. These angles win on fit, not on traffic: a person who finds the page is likely to book.

| Audience | What they look for | Search evidence | What to build | Rule check |
|---|---|---|---|---|
| Injured workers (WCB) | A clinic that handles the claim | Search Console, Canada: "work injury physiotherapy" 72 impressions at position 84; "wcb work injury clinic winnipeg" 50 at 58; "work related injury treatment winnipeg" 35 at 60 | Rework `/services/work-injuries`. It gets the impressions and ranks on page six to nine. | Already factual |
| Collision claims (MPI) | Same, for MPI | "car accident physiotherapy" 320 a month, position 82 | Rework the motor vehicle page | Already factual |
| Hindi, Malayalam and Tamil speakers | A physiotherapist they can talk to | "tamil physiotherapist" 50 a month; others too small to measure | State languages on the homepage, team pages and Google Business Profile. Both owners speak all three. Lijo already volunteers with the Malayalee Association of Manitoba. | Verifiable fact. Do not say "the only". |
| Veterans, RCMP, Forces members, refugee claimants | Whether the clinic is a registered provider | No measurable volume | A short section on `/insurance`. The site already lists Medavie Blue Cross and the Interim Federal Health Program. | Clinic must confirm it is registered for each program |
| Seniors | Balance and falls | "physiotherapy for seniors" 110; the Dakota 55+ programs | Fall prevention page plus the community-centre guides | Fall-risk assessment has a clinical reason, so it is not an unnecessary service |
| Runners and desk workers | A specific assessment | "ergonomic assessment" 390 nationally, 20 for Winnipeg; Elite's running assessment page draws about 25 visits a month | One page each, only if the clinic offers them | Advertise only what the clinic provides |
| Students | Whether the student plan covers physiotherapy | "umsu health plan" 20 | One paragraph on `/insurance` | Low priority |
| People at tax time | Whether physiotherapy can be claimed | "is physiotherapy tax deductible in canada" 70; "can you claim physiotherapy on taxes" 70 | One post in February, sourced to the Canada Revenue Agency | National audience, so judge it by links, not bookings |

## Part 3: Where the Google traction is

Benefits and audience pages add fit. They do not add much volume. The volume is in the work already planned:

| Opportunity | Monthly searches | Status |
|---|---|---|
| Treatment pages (dry needling, acupuncture, orthotics, cupping) | about 2,200 | Built, waiting on clinic approval |
| Local guides (community centres, parks, pickleball) | 1,000 to 2,400 each | Planned in the blog plan |
| "physiotherapy st vital" and close variants | about 220 | Merge fixes built, not deployed |
| Google Maps results | not measurable here | Needs the Google Business Profile reviewed |

A paid option exists for speed: Google Ads on "physiotherapy near me" limited to a few kilometres around the clinic. Ads fall under the same College rules.

## Order of work

1. Rework `/insurance` into the hub described above.
2. Rework the work injury and motor vehicle service pages.
3. Add languages spoken to the homepage, team pages and Google Business Profile.
4. Clinic: confirm Sun Life and Manulife billing, the federal programs, and which assessments it offers.
5. List on Lumino Health and the Manitoba Physiotherapy Association directory.
6. Offer one employer education talk and see whether it leads to bookings.

## Status, 21 November 2026

Built in code, not deployed:

| Change | Data behind it | Where |
|---|---|---|
| Insurance page rebuilt: how direct billing works, what to check in a plan, claims, six questions with FAQ markup | "direct billing physiotherapy" 70, "canada life direct billing" 90, "coordination of benefits" 480; page at 59 to 75 for general insurance searches | `app/insurance/page.tsx`, `app/insurance/layout.tsx` |
| Collision page retitled "Car Accident & MPI Physiotherapy in Winnipeg", with a section on opening an MPI claim | "car accident physiotherapy" 320 a month, position 82 | `lib/serviceSeo.ts`, `lib/servicePatientInfo.ts` |
| Work injury page retitled "Work Injury & WCB Physiotherapy in Winnipeg", with a section on work-related pain that is not a WCB claim | "work injury physiotherapy" 72 Canadian impressions at position 84 | same files |
| Outcome claims removed from both pages' benefit lists ("Reduced risk of re-injury", "Comprehensive injury recovery", "Reduced pain and improved function") | College rule F.iii | `app/services/serviceData.ts` |

Drafted, not published, in `docs/blog-drafts/`:

| Post | Data behind it |
|---|---|
| Is Physiotherapy Tax Deductible in Canada? | 70 + 70 searches a month, difficulty 26 to 28 |
| Coordination of Benefits: Using Two Health Plans for Physiotherapy | 480 a month, difficulty 15 |

Each draft ends with reviewer notes listing what was verified and what was not.

Changed from the plan above: the insurance page does not have one section per insurer. I had no verified facts for individual insurers, and near-identical sections would add nothing. The insurer grid stays, with a note that being listed does not mean a plan covers physiotherapy.

The work injury page already had detailed patient information, so its low position is not a content gap. "Work injury physiotherapy" has no place name in it, so Google is ranking national results.

## Limits

- Semrush volumes are national. Winnipeg is about 2% of Canada's population, so a 90-a-month keyword is a handful of local searches.
- I did not verify any plan's coverage amounts, plan-year dates or the tax rules. Each needs a source before it is published.
- Lumino Health is confirmed as a patient-facing directory. I could not confirm equivalent directories for Manitoba Blue Cross, Medavie or Canada Life.
- The competitor check covered websites only.
- This is not legal advice.

## Sources

- College of Physiotherapists of Manitoba, Advertising and Marketing: https://manitobaphysio.com/wp-content/uploads/2025/06/Advertising-and-Marketing-1.pdf
- College of Physiotherapists of Alberta, Good practice: ethical advertising: https://cpta.ab.ca/news-and-updates/news/good-practice-ethical-advertising
- College of Physiotherapists of Alberta, 10 examples of unprofessional advertising: https://www.cpta.ab.ca/news-and-updates/news/good-practice-10-examples-of-unprofessional-advertising/
- College of Physiotherapists of Ontario, Advertising and Marketing Standard: https://www.collegept.org/rules-and-resources/advertising
- Lumino Health provider search: https://luminohealth.sunlife.ca/en/find-a-health-care-provider/brantford/physiotherapists
- TELUS Health eClaims: https://www.telus.com/en/health/health-professionals/allied-healthcare-professionals/eclaims
