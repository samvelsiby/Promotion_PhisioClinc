# Winnipeg growth content release

Status: published successfully to production as commit `e02f471`; Vercel reports deployment complete. Prepared against production checkout `/private/tmp/promotion-original-team-seo`, base `2627f3985fba038eeb0ee7eb0641103a68bbcdd6`. The unrelated redesign in the primary workspace is preserved.

## Changes

- Six patient-information guides and `/first-visit`.
- Existing Sanity articles preserved; merged lists and sitemap include six new local guides.
- Working GET-based journal search, empty state and clear action.
- Article contents, source links and related service links.
- Added guidance to insurance, MPI/WCB/post-surgical service pages and the footer.
- Corrected categorical private-physio funding statement in the shared FAQ and fixed the FAQ anchor.
- UTC formatting prevents publication dates moving back one day.

## Verification

- Final production build, including lint/type checks, passed with network access and no Sanity fetch errors.
- Initial sandbox build passed but encountered DNS errors; this was superseded by the successful final network-enabled build.
- Eleven changed/new rendered HTML pages passed single-H1, metadata, canonical and JSON-LD parsing checks.
- Six distinct article URLs and first-visit are in the sitemap; related internal links resolve to built routes.
- Browser: WCB search returned the relevant guide; no-match and clear-search paths passed, with fourteen total articles after clearing (eight existing plus six new).
- Browser: first-visit, journal and MPI article at 320px, 390px and 1440px all had one H1 and no horizontal overflow. Phone and desktop layouts were visually inspected.
- Report navigation/source anchors and git whitespace checks passed.
- Existing browser-support database age warnings remain; these are not build failures.

## Review and publication

Patient-facing facts come from the clinic’s existing material and linked official sources. No named clinical review is asserted. The current Manitoba advertising direction calls for physiotherapist review of third-party marketing; the patient-guide review file makes that review concrete. Confirm operational facts and approve the final copy before public publication. No contact, spend, paid placement or directory update has occurred.

`website-update.patch` contains this task’s complete code changes, including new files. Do not apply it over the unrelated redesign. The research and review files are copied into the primary workspace for durable access.

## Publication authorization

The user requested proceeding with the website updates and reserved backlink emails for a later request. This release includes only the prepared website changes. No outreach is authorized or sent. No clinician review attribution is added.

## Live verification

All eleven checks passed against https://www.promotionphysiotherapy.ca: six guides, first-visit, journal, insurance, sitemap and WCB search. HTTP 200 responses, article source/related-link sections, sitemap inclusion, single H1 and JSON-LD parsing were verified. The journal retains eight existing articles alongside the six new guides. No backlink outreach or emails were sent.
