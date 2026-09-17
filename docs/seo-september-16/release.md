# SEO content update — 16 September 2026

## Verified baseline
Live sitemap crawl: 45 pages, all HTTP 200, unique titles, one H1, canonical present, no robots noindex. Raw results: live-baseline.json. The supplied audit's duplicate-title claim is not reproducible on production.

The former /team/bency-thekkineth profile returns a genuine 404 with noindex. Git commit f9a6148 explicitly removed this member. Keep 404 rather than misrepresent an unrelated current practitioner as the replacement. The URL is absent from the current team and sitemap.

## Changes
- Expanded TMJ, back pain/sciatica, collision/MPI and workplace/WCB service pages with assessment preparation, individualized care planning and payment information.
- Added links to the actual registered physiotherapists' profiles without assigning unverified specialty credentials or clinical review credit.
- Expanded existing first-visit page with costs, benefit limits, public/private coverage distinctions and stable location/coverage anchors.
- Homepage links to existing referral, cost and location information.
- Blog metadata now describes both the original Sanity articles and practical patient guides.
- Preserved existing URLs, Sanity content, booking flow and visual design. No unnecessary URL migrations or duplicate catchment/service pages.

## Sources checked
- https://www.nidcr.nih.gov/health-info/tmd
- https://www.nhs.uk/conditions/sciatica/
- https://www.mpi.mb.ca/opening-an-injury-claim/
- https://apps.mpi.mb.ca/HealthCare/Physiotherapy.html
- https://www.wcb.mb.ca/healthcare-providers/
- https://www.gov.mb.ca/fs/imd/print,service-adults.html

## Validation
Production build passes compilation, lint and type validation. Rendered checks verify all seven affected pages have one H1, the service additions appear, and internal links/anchors resolve. No ranking or booking uplift is established by these checks.

## Facts still needed
Reception-confirmed assessment/follow-up fees; precise accessibility and entrance details; public-program participation; provider-specific availability. No prices, transit times, visit counts or coverage guarantees invented.

## Measurement
Compare 28-day Search Console periods once sufficient data accumulates: non-branded clicks, impressions, query-specific positions and distinct pages receiving clicks. Track enquiries/bookings separately. Inspect the four service URLs and first-visit page after release; request indexing once if appropriate. No automated rank tracker or GBP change was made.
