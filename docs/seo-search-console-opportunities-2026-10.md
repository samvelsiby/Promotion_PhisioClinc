# Search Console opportunities: October 2026

Data: Google Search Console, sc-domain:promotionphysiotherapy.ca, 30 July to 27 October 2026 (90 days), plus GA4 property 248255177 for the same window. Keyword ideas come from Google autocomplete (Canada), which shows what people type now but not exact volumes.

## Headline numbers (90 days)

| Metric | Value |
|---|---|
| Clicks | 244 |
| Impressions | 11,845 |
| Average CTR | 2.1% |
| Average position | 15.9 |
| Share of impressions from the ACL article alone | 37% |
| Share of clicks from brand searches ("pro motion physiotherapy" variants) | about 45% |

Almost all non-brand clicks are missing. The site is being shown, but mostly on page 2 to 4 for the searches that bring patients.

## 1. Fix pages that already rank on page 1 but get no clicks (quick wins)

These rank in positions 6 to 11 and get zero or near-zero clicks. The problem is the search snippet, not the ranking. Rewrite the title and excerpt in Sanity or `lib/clinicArticles.ts` so they answer the query directly.

| Page | Impressions | Clicks | Position | Main query | Suggested title |
|---|---|---|---|---|---|
| /blogs/understanding-acl-injuries-... | 4,430 | 16 | 6.4 | acl injury recovery time football | ACL Recovery Time: How Long Until You Can Play Again? |
| /blogs/questions-first-physiotherapy-assessment | 380 | 4 | 6.3 | first physiotherapy appointment | What Happens at Your First Physiotherapy Appointment? |
| /blogs/physiotherapy-referral-winnipeg | 316 | 1 | 11.2 | do you need a referral for physiotherapy | Do You Need a Referral for Physio in Manitoba? (No, Here's Why) |
| /blogs/physiotherapy-vs-athletic-therapy-winnipeg | 310 | 2 | 7.8 | athletic therapy vs physiotherapy | Athletic Therapist vs Physiotherapist: What's the Difference? |
| /blogs/wcb-physiotherapy-winnipeg | 135 | 0 | 10.9 | wcb physiotherapy winnipeg | WCB Physiotherapy in Winnipeg: How to Start Your Claim Care |
| /blogs/tennis-elbow-symptoms-physiotherapy-winnipeg | 93 | 2 | 7.0 | elbow pain winnipeg | Elbow Pain in Winnipeg: Is It Tennis Elbow? |
| /blogs/mpi-physiotherapy-claims-winnipeg | 66 | 0 | 6.2 | mpi physiotherapy winnipeg | MPI Physiotherapy in Winnipeg: Direct Billing After a Car Accident |

Notes:
- The ACL article's traffic is mostly global football news searches, so clicks will never be high value. A clearer title will still lift clicks, and a short "ACL rehab in Winnipeg" section with a booking link is worth adding.
- Blog page titles render as "{title} | Pro-Motion Physiotherapy". That makes most blog titles 90 to 110 characters, so Google cuts them off. Consider dropping the suffix on blog posts, or shortening it to "| Pro-Motion", in `app/blogs/[slug]/page.tsx`.

## 2. Topics close to page 1 that need a stronger page

| Cluster | Combined impressions | Position | Page Google uses | What to do |
|---|---|---|---|---|
| TMJ and jaw pain (tmj treatment winnipeg, physio for jaw pain winnipeg, tmj physio winnipeg) | about 115 | 16 to 26 | jaw pain blog, TMJ service | Expand /services/tmj-dysfunction with FAQs, what an assessment involves and a link from the jaw blog. This is the closest non-brand cluster to page 1. |
| Elbow pain winnipeg | 39 | 8.9 | tennis elbow blog | Title fix above, then link to the new pickleball elbow post. |
| Sciatica physiotherapy winnipeg | 13 | 9 | back pain guide | Add a "Sciatica" section and FAQ to the back pain service page. |
| Physiotherapy open sunday winnipeg | 18 | 7.8 | homepage | New post published (see below). Add "Open Sundays" to the homepage description. |
| Sports physiotherapy winnipeg, wcb physiotherapy winnipeg | 15 each | 8.8 | various | Internal links from the new hockey and pickleball posts help here. |

## 3. Big, competitive searches where the site sits on page 3 to 5

| Query family | Impressions | Position |
|---|---|---|
| physiotherapy winnipeg, physiotherapist winnipeg, winnipeg physiotherapy, physio winnipeg | about 450 | 25 to 43 |
| best physio / physiotherapist / physiotherapy clinic winnipeg | about 200 | 22 to 41 |
| back pain winnipeg, back pain treatment winnipeg | about 200 | 36 to 43 |
| neck pain winnipeg, neck pain treatment winnipeg (4 variants) | about 150 | 38 to 53 |
| sports injury clinic / rehab / treatment winnipeg | about 90 | 61 to 66 |
| work related injury treatment, wcb work injury clinic winnipeg | about 55 | 42 to 55 |
| post op physio, surgical prehabilitation winnipeg | about 60 | 35 to 69 |
| whiplash treatment winnipeg, car accident treatment winnipeg | about 90 | 31 to 59 |

On-page edits alone will not move these. They are decided mainly by the Google Business Profile, reviews and links:

1. **Google reviews.** "Best" searches are judged on reviews. Ask every discharged patient for a review using the existing review link, and reply to every review.
   - **Correction, 20 November 2026:** do not act on this. The College of Physiotherapists of Manitoba says soliciting testimonials or web reviews breaches its advertising practice direction. See docs/treatment-pages-compliance-2026-11.md.
2. **Google Business Profile.** Add every service as a GBP service, post weekly, upload real clinic and team photos, and add Sunday hours as an attribute.
3. **Local citations and links.** Make sure name, address and phone match exactly on Medimap, Yelp, Yellow Pages, the College of Physiotherapists of Manitoba clinic finder, Sun Life Lumino, Canada Life and other insurer directories. Ask Dakota Community Centre and local leagues about sponsorship listings, which give a relevant local link.
4. **Service pages.** Back pain, neck pain, sports injuries and work injuries are short. Add a FAQ block, a "what happens at your first visit" section, a named physiotherapist and links to the matching blog posts. Back pain is also split between the service page (position 43) and /what-we-treat/all (position 20), so link /what-we-treat/all clearly to the service page for that topic.

## 4. Tracking problems to fix in GA4

- **Key events are not set up.** GA4 recorded 93 `booking_click` and 11 `phone_click` events in 90 days, but zero key events. Mark both as key events under Admin, Events, so you can see which pages produce bookings.
- **Bot traffic.** Direct sessions from Singapore, Ashburn and similar cities have zero engagement. Filter them out or ignore them when reading reports.
- Organic search from Winnipeg was 124 sessions in 90 days with 74 engaged.

## 5. Content housekeeping

- Most Sanity posts have no main image, including the eight new ones. Add a real photo with alt text to each. Image posts look better in the blog listing and in social shares.
- "Knee Pain While Running in Winnipeg" has no publish date in Sanity. Set one so it sorts correctly and shows a date.
- The old non-www homepage stopped getting impressions after 30 September and now redirects correctly. No action needed.
- "east st paul physiotherapy" brings about 40 impressions at position 44 to 47. That area is across the river and not a realistic target, so skip it.

## New local posts published on 28 October 2026

| Slug | Target searches |
|---|---|
| dakota-community-centre-staying-active-st-vital | dakota community centre, dakota community centre pickleball, jonathan toews sportsplex |
| pickleball-elbow-injuries-winnipeg | pickleball elbow, pickleball elbow treatment, pickleball elbow vs tennis elbow, pickleball injury |
| physiotherapy-st-annes-road-st-vital-neighbourhoods | physiotherapy st annes road winnipeg, physiotherapy st vital winnipeg, physiotherapy meadowood, physiotherapy near st vital centre, physiotherapy southdale / sage creek |
| hockey-groin-strain-physiotherapy-winnipeg | hockey groin injury, hockey groin pull recovery, hockey groin strain |
| snow-shovelling-back-pain-slip-on-ice-winnipeg | shoveling snow back pain, slipped on ice and hurt my back |
| physiotherapy-open-sunday-winnipeg | physiotherapy open sunday winnipeg, physiotherapy winnipeg open saturday, physio near me open now |
| walking-running-st-vital-park-trails-injury-prevention | st vital park, bishop grandin greenway, running injury physio winnipeg |
| is-physiotherapy-covered-by-manitoba-health | is physiotherapy covered by manitoba health, how much is physiotherapy in winnipeg |

"Is physiotherapy covered by manitoba health" appeared as a suggestion under almost every Winnipeg physiotherapy seed term, so it is likely one of the most common local questions.

## Suggested next posts

- How much does physiotherapy cost in Winnipeg? This needs your actual fees to be useful.
- Whiplash treatment in Winnipeg after a winter collision (MPI)
- Physiotherapy for seniors in St. Vital, linked to the Dakota 55+ programs
- Post-op physio after hip or knee replacement in Winnipeg
- Pelvic floor physiotherapy, but only if the clinic offers it
