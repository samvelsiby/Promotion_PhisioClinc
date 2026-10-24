# SEO content prepared — 18 September 2026

## Publication status
User explicitly authorized replacing Cursor's UI changes with the repository release. Commit a65f610 pushed to main. Existing live Google Analytics (G-ML36VHX4VF) preserved alongside the existing analytics and booking integration. Production deployment dpl_HUMh6pVP8avGxuVMnvL8fQTAfpMa promoted to the clinic domains.

## Evidence and priorities
Search Console final data available for September 10–15; Canada Web search. These are average positions across observations, not fixed local or Maps rankings. The sample predates the recent content changes.

| Topic | Observed query | Average position | Impressions | Destination |
|---|---|---:|---:|---|
| Local clinic | physiotherapy winnipeg | 34.5 | 18 | Homepage |
| Local clinic | physiotherapy st vital | 11.5 | 2 | Homepage |
| Back pain | back pain winnipeg | 40.5 | 17 | Existing back-pain service |
| Back pain | back pain treatment winnipeg | 38.3 | 12 | Existing back-pain service |
| Collision care | whiplash treatment winnipeg | 34.6 | 7 | Existing MPI service |
| Work injuries | wcb work injury clinic winnipeg | 26 | 3 | Existing work-injury service |

OpenSEO is installed but unavailable as tools in this session. No search-volume, difficulty, competitor or backlink figures were invented. Existing Search Console and GEO results are in ../search-baseline-2026-09-17/.

## Prepared changes
- New article: /blogs/back-pain-sciatica-assessment-winnipeg. Informational appointment preparation, clearly distinct from the transactional service page. Links to existing service, first-visit and insurance pages. Reciprocal service link comes from the existing patient-guide integration.
- Unique search descriptions for back pain, MPI and work-injury services; no guaranteed results or automatic coverage claims.
- Service H1 uses the existing descriptive Winnipeg heading helper.
- Original Sanity articles preserved. No new image required for this practical written guide; no fabricated patient photographs or medical-review attribution.

The patch is based on 5ae3966. Review and merge it into the current live source rather than applying blindly. Homepage metadata already names Winnipeg, St. Vital and Meadowood; retain that wording and the existing booking portal.

## Validation completed
TypeScript no-emit check and git diff whitespace check passed. Production build passed (59 generated pages). Live verification follows deployment.

## Next measurement
Compare equivalent 28-day Canada Web periods once enough data exists. Review non-brand impressions, clicks and query/page positions, alongside booking conversions where tracking is available. Choose subsequent articles from recurring query gaps, not a fixed publishing quota. Prioritize real clinician review and confirmed fees over additional generic articles.
