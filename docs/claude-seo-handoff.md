# Claude Code: Pro Motion Physiotherapy SEO and analytics handoff

Paste the following into Claude Code opened in `/Users/samvelsiby/Promotion-Phisothearpy`:

---
Act as the SEO analyst and analytics engineer for Pro Motion Physiotherapy in Winnipeg, Manitoba, with a focus on St. Vital and Meadowood. Your goal is to identify evidence-backed opportunities to increase qualified organic visits and appointment enquiries.

## Start with project and access verification
Read applicable AGENTS.md/CLAUDE.md instructions and inspect git status. Preserve existing changes. Determine which source tree is deployed: both the repository root and `production-redesign/` exist. Do not assume the README or old release notes describe current production.

Inspect `.mcp.json` and use `/mcp` to confirm available connections. The project configuration includes existing local Search Console and GEO Optimizer servers. Tool registration is not proof of authentication or property access. Test each with a small read-only request. If an authentication step needs me, explain the exact action and continue independent work. Do not print credentials or copy tokens into reports.

For Search Console, list accessible properties and select the exact property covering promotionphysiotherapy.ca. For GA4, use Google's official analytics-mcp if configured; enumerate accounts/properties and verify the website stream. The source fallback measurement ID is G-ML36VHX4VF; this is NOT the numeric GA4 property ID and does not grant access. Report missing connections explicitly.

## Project evidence
Read these files before making recommendations:
- docs/search-baseline-2026-09-17/report.md, gsc.json, geo.json, details.json
- docs/seo-content-ready/README.md
- docs/seo-review-2026-09-25/seo-review.html
- docs/light-theme-seo-update.md
- docs/original-site-team-seo-release.md
- lib/constants.ts, lib/metadata.ts, lib/schema.ts
- lib/clinicArticles.ts, lib/servicePatientInfo.ts, lib/sanity.ts
- components/GoogleAnalytics.tsx, components/CookieConsent.tsx
- app/robots* and app/sitemap* where present
Treat dated reports as historical baselines, never current measurements. Sanity and local articles are merged; local editorial articles take precedence for matching slugs. Verify this behavior before proposing CMS changes.

The site uses an external booking portal: https://pmphysio.juvonno.com/portal/publicbook.php. A booking-link click is not a completed appointment. GA4 and Datafast are referenced in the consent component; verify their live installation and events. Do not assume PostHog is installed just because an MCP exists in another assistant.

There is conflicting historical canonical-host evidence: an earlier document names https://promotionphysiotherapy.ca, while lib/constants.ts currently names https://www.promotionphysiotherapy.ca. Check live redirects, canonical tags, sitemap URLs, internal links and GSC inspection evidence before choosing a preferred host.

## Analysis
1. Create an access matrix: source, connected status, selected property/project, date coverage, limitations. Keep local evidence separate from live API data.
2. Pull the latest complete 28 days of GSC data and the previous equal 28 days. State exact dates, data freshness and Canada/Web filters. Separate brand and non-brand queries; show query/page clicks, impressions, CTR and average position. Identify relevant queries with substantial impressions and weak CTR, positions roughly 4–20, declining pages and mismatched destinations. Do not describe average position as a fixed local rank. If data is sparse, include a longer window and explain the limitation.
3. With GA4 access, compare matching dates using the property timezone. Review organic landing pages, source/medium, engaged sessions, device mix, relevant geography and actual configured key events. Inspect event definitions and collection before labeling anything a conversion. Investigate booking-link clicks, phone clicks and enquiry submissions only where implemented. Explain consent-related undercounting, attribution differences and any sampling/thresholding. GSC clicks and GA4 sessions need not match.
4. Audit live indexability, response codes, redirects, canonicals, robots, sitemap, metadata, headings, schema, service pages and internal links. Use GEO Optimizer for supplementary AI-search diagnostics; its score is not proof of rankings or AI citations. Treat llms.txt as experimental, not a ranking requirement.
5. Prioritize existing Winnipeg service pages and useful supporting content, including back pain/sciatica, MPI/whiplash and WCB/work injuries where supported by actual services and search demand. Avoid repetitive location pages, invented keyword volumes, fabricated reviews, clinician credentials or medical-review attribution. Substantiate clinical claims using authoritative references and identify content needing clinician review.
6. Inspect tracking behavior without sending personal or health information to analytics. Preserve consent gating. Identify duplicate page views, missing events and the limits of measuring an external booking portal. Do not claim completed-booking tracking without verified integration.

## Deliverables and scope
Save a dated report under docs/ with the access matrix, baseline tables, source/date references, ranked opportunities, tracking gaps and a practical 30-day plan. For each action give evidence, affected URL/file, expected benefit, effort and a measurable success criterion. Distinguish observations from hypotheses. Include a concise list of remaining access blockers.
This handoff authorizes analysis and local report preparation. Propose implementation patches based on findings; do not deploy, publish CMS content or change account settings solely on the basis of this prompt. Do not stop analysis because one source is unavailable. Finish everything supported by the available evidence.
---

## Live access setup

Codex connections do not automatically transfer into Claude. This workspace now has a `.mcp.json` entry for the locally installed GSC and GEO servers, referring to existing authentication locations rather than embedding credentials. Restart/open Claude Code here, review its project MCP prompt and run `/mcp`. GSC authentication still needs verification. The existing historical JSON reports are immediately readable from the folder.

Google Analytics: use the official experimental server:
https://github.com/googleanalytics/google-analytics-mcp

Setup prerequisites: `pipx`, Google Cloud tooling, a Cloud project with Analytics Admin API and Data API enabled, and Google credentials with access to the correct GA4 property and the analytics.readonly scope. Neither pipx nor gcloud was found on the current shell PATH during handoff preparation. Follow the official README to create Application Default Credentials; keep the credentials outside this repository.

After authentication, substitute the real credential-file path and Google Cloud project ID in this official Claude Code registration command:

```sh
claude mcp add analytics-mcp \
  --scope user \
  -e "GOOGLE_APPLICATION_CREDENTIALS=PATH_TO_CREDENTIALS_JSON" \
  -e "GOOGLE_PROJECT_ID=YOUR_PROJECT_ID" \
  -- pipx run analytics-mcp
```

Do not enable write tools for the initial audit. Verify account summaries and the selected GA4 property with a small report. This setup has not been executed; GA4 access is not yet connected. The measurement ID in source identifies a stream but cannot authenticate it.

Sanity requires its own Claude connection and authentication if live CMS data is needed. Local source and historical reports remain available without it. OpenSEO skills in Codex are not proof of a connected OpenSEO MCP in Claude.
