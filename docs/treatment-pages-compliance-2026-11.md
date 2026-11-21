# Treatment pages: compliance record and sign-off checklist

Written 20 November 2026. This is a record of the rules the four treatment pages were written against and what the clinic must confirm before they go live. It is not legal advice. The College of Physiotherapists of Manitoba (CPM) answers practice questions at info@manitobaphysio.com.

## What was built

| Page | URL | Status |
|---|---|---|
| Dry needling | /how-we-treat/dry-needling | Draft, not live |
| Acupuncture | /how-we-treat/acupuncture | Draft, not live |
| Cupping therapy | /how-we-treat/cupping-therapy | Draft, not live |
| Orthotics | /how-we-treat/orthotics | Draft, not live |

All copy lives in `app/how-we-treat/treatmentPages.ts`. Each page has an `approved` flag set to `false`. While it is `false` the page:

- returns a 404 in production
- is left out of the sitemap
- is not linked from /how-we-treat
- shows only in local development, with a draft banner and a noindex tag

To publish a page, a registered physiotherapist at the clinic reviews it, the items below are confirmed, and `approved` is changed to `true` for that page.

## Why the pages are gated

1. **CPM requires it.** The Advertising and Marketing practice direction says the physiotherapist is accountable for what is on the clinic website and must review and approve marketing prepared by a third party. Rtstics is a third party.
2. **Roster status is not confirmed.** Only physiotherapists whose names are on the CPM roster for a technique may perform it, and the practice direction says to advertise only services the physiotherapist is competent to provide. The team bios do not settle this:
   - Ben's bio says he is "pursuing advanced certifications in Acupuncture", which suggests he is not yet on the acupuncture roster.
   - Lijo's bio lists training in acupuncture and cupping.
   - Neither bio mentions dry needling training.
3. **The dry needling rules change on 1 December 2026.** From that date CPM has a separate Dry Needling roster. Until then, dry needling requires being on the Acupuncture roster plus specific dry needling instruction.

## Sign-off checklist for the clinic

| # | Confirm | Applies to |
|---|---|---|
| 1 | Which physiotherapist is on the CPM Acupuncture roster | Acupuncture |
| 2 | Which physiotherapist will be on the CPM Dry Needling roster from 1 December 2026. If nobody will be, do not publish the dry needling page, and remove Dry Needling from /how-we-treat. | Dry needling |
| 3 | Needles are single-use and sterile, and written consent is taken before the first needling treatment and before any new technique or body area | Both needling pages |
| 4 | Needle insertion and removal is never done by the physiotherapy assistant | Both needling pages |
| 5 | Whether any technique carries an additional fee. The pages say patients are told before it is used. | All four |
| 6 | How a visit that includes acupuncture is receipted. The page tells patients to ask reception. | Acupuncture |
| 7 | Cupping is dry cupping only. The page says nothing pierces the skin. | Cupping |
| 8 | Who assesses for orthotics, whether custom devices are supplied, and how they are made (scan, cast or impression) | Orthotics |
| 9 | A physiotherapist has read each page and agrees every statement is accurate for this clinic | All four |

## Rules applied

### CPM practice direction: Advertising and Marketing (current as of 12 June 2025)

| Rule | How the pages handle it |
|---|---|
| Truthful, accurate and verifiable | Every research statement names the study and links it. CPM's own definitions are used for acupuncture and dry needling. |
| Advertise only services the physiotherapist is competent to provide | Pages are gated until roster status is confirmed. No individual is named as a provider. |
| No stated practice focus or "specialist" language | None used. |
| No unsubstantiated claims, unrealistic expectations or guarantees | Evidence limits are stated: dry needling evidence is low to moderate quality and short term, cupping evidence is limited, orthotics evidence is mixed. |
| No claims of uniqueness or special advantage | None. |
| No comparative or superlative statements, no product endorsement for gain | None. No orthotic brand is named. |
| Do not promote unnecessary use of services | Each page says the treatment is optional. The orthotics page says not everyone with foot pain needs one. |
| No discounts, packages, time-limited pricing, gift cards or prizes | None. |
| No advertising of free consultations, screenings, assessments or trials | None. |
| Patient images need explicit informed consent | No patient images are used. |
| CPM logo may not be used | Not used. CPM is linked by name only. |

### CPM practice direction: Use of Needles in Practice (current as of 7 May 2026)

| Rule | How the pages handle it |
|---|---|
| Acupuncture and dry needling are separate rostered activities | Stated on both pages. |
| Only rostered physiotherapists may perform them, with no delegation | Stated. Pages say assistants do not insert or remove needles. |
| Discuss all treatment options, and patients may decline | Stated in the intro, the session section and the FAQ. |
| No persuading or coercing patients into a treatment | Copy is informational. The call to action is for an assessment, not for the technique. |
| Disclose additional fees before treatment | Stated in the cost section. |
| Written informed consent for first treatment and for new techniques or body areas | Stated. |
| Disclose side effects and how to manage them | Each needling page lists common minor effects and rare serious ones, including pneumothorax. |
| A needling-trained physiotherapist stays available throughout | Stated. |

### Other law

| Law | Relevance | Status |
|---|---|---|
| Food and Drugs Act, section 3 | Bars advertising a device to the public as a treatment, preventative or cure for the diseases in Schedule A.1. Needles and orthotics are devices. | The pages make no disease claims. I did not verify the current Schedule A.1 list, so keep future edits to pain and movement and avoid naming diseases. |
| Competition Act | General ban on false or misleading advertising | Not looked up for this work. The CPM truthfulness rule is stricter and was applied. |
| Personal Health Information Act (Manitoba) | Patient information and images | Not looked up for this work. No patient information is used on the pages. |

## Research cited on the pages

| Page | Source | What it is cited for |
|---|---|---|
| Dry needling | Gattie, Cleland, Snodgrass. JOSPT 2017;47(3):133-149 | Very low- to moderate-quality evidence of short-term pain reduction; long-term benefit lacking |
| Acupuncture | Vickers et al. J Pain 2018;19(5):455-474 | Effective for chronic musculoskeletal, headache and shoulder pain; smaller advantage over sham |
| Cupping | U.S. NCCIH cupping page | Most research is low quality; evidence for pain is not strong; leaves temporary marks |
| Orthotics | Whittaker et al. BJSM 2018;52(5):322-328 and Rasenberg et al. BJSM 2018;52(16):1040-1046 | Mixed evidence for heel pain; no difference between custom and prefabricated |

I read abstracts and summaries of these studies, not the full papers. The reviewing physiotherapist should be comfortable with each citation.

## Wording check

`node scripts/check-treatment-copy.cjs` scans the treatment copy for guarantees, superlatives, specialist language, incentives and free offers. It passes on the four pages. It is a word check, not a legal review, and it gives false positives on other files (for example the CSS class `leading-relaxed` and "free parking").

## Existing site: issues found, not changed

These were already on the site before this work.

| Where | Issue | Rule |
|---|---|---|
| Navbar "Review Us" button (desktop and mobile) | CPM's February 2024 newsletter says testimonials are allowed but "soliciting testimonials or web reviews is a clear breach of the Practice Direction". A site-wide button asking for reviews is likely soliciting. | Advertising |
| docs/seo-search-console-opportunities-2026-10.md | Advised asking every discharged patient for a Google review. That advice conflicts with the same rule and now carries a correction note. | Advertising |
| /how-we-treat: IASTM "Advanced technique", Myofascial Release and Balance Training "Specialized" | Language that implies specialization | Advertising C |
| /how-we-treat: Ultrasound "Faster Healing", IFC "Reduced Inflammation", several "Effective for" statements | Outcome claims with no source | Advertising F.iii |
| Team bios: "expanding his expertise", "advanced certifications", "advanced training", "top academic distinction" | Check against the Titles, Credentials and Specialty Designations standard, which I did not read | Advertising B and C |
| Service page call to action: "our experienced team" | Probably acceptable, but must be verifiable | Advertising D |
| `app/services/treatments.ts` | Describes needling as "safe, regulated techniques". The file is not imported anywhere, so it is not shown on the site. | None while unused |

Changed in this work, because they sat next to the new pages: the Acupuncture, Dry Needling, Cupping and Orthotics entries on /how-we-treat. The acupuncture entry previously claimed to "balance energy flow" and listed "Stress Reduction" and "Improved Energy Flow" as benefits.

## Sources

- CPM, Advertising and Marketing practice direction: https://manitobaphysio.com/wp-content/uploads/2025/06/Advertising-and-Marketing-1.pdf
- CPM, Use of Needles in Practice practice direction: https://manitobaphysio.com/wp-content/uploads/2026/05/Use-of-Needles-in-Practice.pdf
- CPM, Acupuncture and Dry Needle Therapy practice direction (15 May 2024, in effect until the new rosters start): https://manitobaphysio.com/wp-content/uploads/2026/01/Acupuncture-and-Dry-Needle-Therapy-.pdf
- CPM, separate rosters announcement, 29 May 2026: https://manitobaphysio.com/important-update-separate-acupuncture-and-dry-needling-rosters-in-manitoba/
- CPM, In Touch newsletter, February 2024 (testimonials, page 4): https://manitobaphysio.com/wp-content/uploads/2024/05/In-Touch-February-2024-1.pdf
- CPM, Verify a Physiotherapist: https://manitobaphysio.com/for-the-public/verify-a-physiotherapist/
- Food and Drugs Act, section 3: https://laws-lois.justice.gc.ca/eng/acts/F-27/section-3-20190621.html
