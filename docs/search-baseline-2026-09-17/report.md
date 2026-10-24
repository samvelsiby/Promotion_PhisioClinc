# Pro Motion search baseline — 17 September 2026

Requested range: 19 August–15 September 2026. Finalized Google Web search data is present only for 10–15 September. These figures predate the 16 September content release.

Overall, all countries: 26 clicks, 1,068 impressions, 2.43% CTR, 21.39 average position. Average position is not a fixed Winnipeg rank or Google Maps rank.

## Canada keyword baseline

| Query | Average position | Impressions | Clicks |
|---|---:|---:|---:|
| promotion physiotherapy | 2.7 | 26 | 9 |
| physiotherapy winnipeg | 34.5 | 18 | 1 |
| winnipeg physiotherapy | 42.1 | 18 | 0 |
| back pain winnipeg | 40.5 | 17 | 0 |
| back pain treatment winnipeg | 38.3 | 12 | 0 |
| whiplash treatment winnipeg | 34.6 | 7 | 0 |
| physio winnipeg | 43.7 | 7 | 0 |

## First action
In Search Console inspect https://www.promotionphysiotherapy.ca/ and https://www.promotionphysiotherapy.ca/services/tmj-dysfunction. Run Test Live URL; if eligible, request indexing once. API inspection reports both as crawled, currently not indexed, using older crawl records. This is not a live fetch result. Back pain is indexed but its stored user canonical is stale. Live TMJ HTML was checked and correctly self-canonicalizes to https://www.promotionphysiotherapy.ca/services/tmj-dysfunction. Do not overwrite the correct current tag based on Google’s historical record.

## Targeted release
Redirect the obsolete /blogs/1-5-signs-its-time-to-see-a-physiotherapist URL to the existing equivalent article. Add contextual links from the ACL and collision articles to existing sports injury and MPI services and first-visit information. Preserve article URLs and Sanity content.

## GEO audit interpretation
Homepage tool score: 56/100, a tool-specific checklist score, not an observed AI citation rate or Google ranking factor. Meta and content checks pass. MedicalClinic JSON-LD already contains clinic name, address, contact and sameAs links; the recommendation to add generic Organization data overlooks the existing subtype. Hidden FAQ/navigation content and repeated pronouns do not by themselves establish cloaking or keyword stuffing. No automatic crawler policy changes or fabricated authority links were applied.

## Next priorities
1. Request indexing of the two priority URLs and recheck after Google revisits them.
2. Confirm Google Business Profile categories, exact address, hours and booking link; obtain genuine patient reviews without incentives. No GBP access was available in this run.
3. Monitor Canada non-brand query trends and conversions over the next 28 days before rewriting the newly improved services again.
4. Obtain clinic-confirmed assessment/follow-up prices and clinician review for medical articles.
5. Complete OpenSEO session reload for competitor/backlink evidence. Its installed tools were not exposed here; no paid research ran.

## Files
gsc.json: full finalized baseline. details.json: Canada queries and index inspections. geo.json: raw homepage audit. Query row totals can differ from property totals due to Search Console privacy filtering.
