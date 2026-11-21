# Blog plan for organic reach

Written 21 November 2026. Sources: Google Search Console for 22 August to 19 November 2026 (90 days), and Semrush's Canadian database pulled 21 November. Volumes are Semrush's monthly estimates for Canada. Difficulty is Semrush's 0 to 100 score; under 30 is realistic for this site. Every post is advertising under the College rules in `docs/treatment-pages-compliance-2026-11.md`.

## The finding that changes the plan

The blog has 35 posts. In 90 days they earned 54 clicks, and 53 of those came from outside Canada.

| | Impressions | Clicks |
|---|---|---|
| Blog posts, all countries | 12,264 | 54 |
| Blog posts, Canada only | 1,673 | 1 |
| Whole site, Canada only | 13,005 | 347 |

The ACL recovery post shows the pattern: 6,868 impressions worldwide, 86 in Canada. The hockey groin post has 513 worldwide and 4 in Canada. A reader in the United Kingdom or India cannot book in St. Vital, so that reach has no value to the clinic.

More posts of the same kind will not help. The blog needs fewer, better-aimed posts.

## Why the current posts miss

1. **Generic health topics draw a global audience.** "ACL injury recovery time" is searched everywhere, and Google shows the post everywhere.
2. **The local posts target phrases nobody types.** "Hockey groin strain physiotherapy Winnipeg" has no measurable search volume. Adding "Winnipeg" to a title does not create demand.
3. **In Canada most posts sit on page two or lower.** Coverage (position 41), direct billing (47), WCB (30), jaw pain (29) and whiplash (26) are the posts a local patient would search for, and they rank worst.
4. **Some posts compete with the pages that should rank.** Two posts target "physiotherapy St. Vital" alongside the homepage. The jaw pain post takes the TMJ searches while the TMJ service page gets none. The open-Sunday post sits at position 12 for a search the homepage should own.

## What competitors' blogs show

Blogs are a small traffic source even for the leaders. Prairie Trail gets 96% of its estimated traffic from its homepage. Of its blog posts, one earns traffic: a guide to six walks around Winnipeg (150 keywords, about 89 visits a month). Its condition posts earn close to nothing. Elite Sports Injury has one stretching post with about 190 visits and little else.

The one local-interest guide outperforms all the health articles combined. That is the model to copy.

## The plan

### Step 1: Fix what exists (before writing anything new)

| Action | Posts | Why |
|---|---|---|
| Merge into the homepage and redirect | `choosing-physiotherapy-st-vital`, `physiotherapy-st-annes-road-st-vital-neighbourhoods`, `physiotherapy-open-sunday-winnipeg` | Stops three posts competing with the homepage for "physiotherapy st vital" (110 a month) and "physio open sunday" (90) |
| Merge into the service page and redirect | `jaw-pain-clicking-physiotherapy-winnipeg` into `/services/tmj-dysfunction` | "tmj treatment winnipeg" is 170 a month at difficulty 13, and the service page has no impressions |
| Rewrite for Manitoba searchers | `is-physiotherapy-covered-by-manitoba-health`, `direct-billing-physiotherapy-winnipeg`, `wcb-physiotherapy-winnipeg`, `mpi-physiotherapy-claims-winnipeg`, `physiotherapy-referral-winnipeg` | Low volume, but only Manitobans search these and they are close to booking. Answer the question in the first two sentences, then link to the booking page. |
| Retitle to the phrase people use | `physiotherapy-vs-athletic-therapy-winnipeg` to "Athletic therapist vs physiotherapist" | The reversed phrase has 210 searches a month at difficulty 5; the post is at position 17 in Canada |
| Link each condition post to its service page, first paragraph | All condition posts | Passes relevance to the pages that convert |
| Leave alone | ACL, Achilles and other generic posts | They do no harm. Do not write more like them. |
| Fix when convenient | Two URLs with typos (`ret1urn-to-play`, `1-5-signs-it-s-time`) | Cosmetic. Redirect the old address if changed. |

### Step 1 status, 21 November 2026

After reading the posts and the Canadian query data, two rows in the table above were wrong and are dropped:

- **Manitoba posts: no rewrite needed.** Their low average positions come from generic searches such as "insurance physiotherapy clinic". For the searches they were written for, they already sit near position 10: "is physiotherapy covered by manitoba health" (9.9), "direct billing physiotherapy winnipeg" (9.8), "wcb physiotherapy winnipeg" (9.8). Those searches had 6 to 10 Canadian impressions each in 90 days, so a rewrite would move almost nothing.
- **Athletic therapy retitle: already done.** The post was retitled "Athletic Therapist vs Physiotherapist" in an earlier round.

The merge was confirmed by the data. For "physiotherapy st vital", Google was splitting impressions across five addresses: the homepage (50 impressions, position 14.9), the St. Anne's Road post (25, 9.5), the checklist post (20, 11.4), the open-Sunday post (13, 18.7) and the fall prevention page (13, 4.8). The jaw pain post had 210 Canadian impressions on TMJ searches while the TMJ service page had none.

Done in code, not yet deployed:

| Change | Where |
|---|---|
| Three posts redirect to the homepage; the jaw pain post redirects to the TMJ service page | `lib/mergedPosts.json`, `next.config.js` |
| Merged posts removed from the blog index, sitemap and post lookups | `lib/sanity.ts` |
| New "Find us on St. Anne's Road in St. Vital" section on the homepage: address, parking, hours, neighbourhood distances | `components/FindUs.tsx`, `app/page.tsx` |
| Homepage title and description now state "Open 7 Days" and weekday hours to 8 PM | `app/page.tsx` |
| Two sections from the jaw pain post added to the TMJ service page | `lib/servicePatientInfo.ts` |

Prepared, not applied:

| Change | How to apply |
|---|---|
| Related links for the 8 posts that had no internal links | `node scripts/add-related-links.cjs` prints the list; adding `--apply` writes to the live site |

Risk to watch: the St. Anne's Road post ranked higher for "physiotherapy st vital" than the homepage does. A redirect normally passes that on, but check the homepage's position for that search two to four weeks after deploying. To undo, remove the post's line from `lib/mergedPosts.json`.

The fall prevention page showing for "physiotherapy st vital" is not fixed here.

### Step 2: New posts, in priority order

Three kinds of post have measured demand. Write these and nothing else for now.

**A. Local guides (the Prairie Trail model)**

People searching these want the place, not a physiotherapist, so few will book on that visit. The value is repeated exposure to people who live within a short drive, and local relevance for the site.

| # | Post | Main keyword | Volume | Difficulty |
|---|---|---|---|---|
| 1 | Southdale Community Centre guide | southdale community centre | 2,400 | 26 |
| 2 | Expand the existing Dakota guide, with a fieldhouse section | dakota community centre, dakota fieldhouse | 2,400 and 1,000 | 19 and 29 |
| 3 | Walking and running in St. Vital Park and Bois-des-Esprits (expand the existing trails post) | st vital park, bois des esprits | 1,600 and 720 | 26 and 16 |
| 4 | Where to play pickleball in south Winnipeg | pickleball winnipeg, indoor pickleball winnipeg | 1,000 and 140 | 28 and 21 |
| 5 | Winakwa, Norberry-Glenlee and St. Vital Centennial Arena guide | three centre names | 480, 260, 390 | 31, 30, 16 |
| 6 | Winter activity in Winnipeg: river trail and cross-country skiing | winnipeg river trail, cross country skiing winnipeg | 210 and 170 | 23 and 15 |

Each guide needs facts a resident would use: address, hours source, programs, parking, and how far it is from the clinic. Finish with one short section on common injuries from that activity and a link to the matching service page.

**B. Treatment questions (publish only after the treatment pages are approved)**

These support the four treatment pages and should link to them. The audience is national, so judge them by the treatment pages' rankings, not by their own clicks.

| # | Post | Main keyword | Volume | Difficulty |
|---|---|---|---|---|
| 7 | Dry needling vs acupuncture | dry needling vs acupuncture | 1,300 | 8 |
| 8 | Does dry needling hurt? | does dry needling hurt | 170 | 14 |
| 9 | Cupping marks: what they are and how long they last | cupping marks | 170 | 14 |

Use the College's own definitions, cite sources, state side effects, and make no outcome claims. A physiotherapist must approve each before it goes live.

**C. Decision questions (low difficulty, people choosing a provider)**

| # | Post | Main keyword | Volume | Difficulty |
|---|---|---|---|---|
| 10 | Physiotherapy vs massage therapy | physiotherapy vs massage therapy | 210 | 4 |
| 11 | How much does physiotherapy cost in Manitoba? | how much does physiotherapy cost | 110 | 5 |
| 12 | What to wear to physiotherapy | what to wear to physiotherapy | 90 | 4 |
| 13 | Physiotherapist vs chiropractor | physiotherapist vs chiropractor | 70 | 2 |

For comparison posts, describe each profession factually and do not say one is better. The College bars comparative claims and disparaging other providers.

### Topics to skip

| Topic | Volume | Difficulty | Why skip |
|---|---|---|---|
| shin splints | 12,100 | 69 | Owned by national health sites; audience is not local |
| sciatica exercises | 2,400 | 64 | Same |
| balance exercises for seniors | 1,300 | 75 | Same |
| rotator cuff exercises | 3,600 | 50 | Same |
| Any "[condition] physiotherapy Winnipeg" post | none measurable | | No demand. Put that effort into the service page. |

## Pace

Step 1 first, as one batch. Then two posts a month: one local guide and one from group B or C. Thirteen posts is about six months. Publishing faster does not help; 35 posts already exist and one Canadian click came from them.

## How to measure

Use Search Console filtered to Canada. The all-countries view is what made the blog look healthy.

| Measure | Now | Check |
|---|---|---|
| Blog clicks from Canada, 90 days | 1 | Monthly |
| Posts in the Canadian top 10 with 50 or more impressions | 2 (Dakota, ACL) | Monthly |
| Homepage position for "physiotherapy st vital" | about 13 | After the merges in step 1 |
| TMJ service page impressions | 0 | After the jaw post merge |

## Limits

- Semrush volumes are national estimates. "Southdale community centre" may include searches for places of the same name elsewhere.
- Many local posts were published on 28 October and are 23 days old. Their Canadian rankings may still settle.
- Posts are stored in Sanity. I have not checked whether redirects for merged posts need a code change or a CMS setting.
- I did not read the full text of the 35 posts for this plan. The merge and rewrite calls are based on their rankings and titles.
