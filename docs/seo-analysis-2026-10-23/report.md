# Pro-Motion Physiotherapy — SEO & analytics audit, 23 October 2026

Prepared from local repository evidence, live site checks against `https://www.promotionphysiotherapy.ca`, and historical reports under `docs/`. **Update, same day (continued session, data pulled 24 Oct 2026 UTC):** the `gscServer` (Search Console) and `geo-optimizer` MCP connections that were blocked in the original pass are now live and were queried directly — §3 and the new §4b below replace the earlier stale/placeholder figures with real numbers. GA4 (`analytics-mcp`) is still not connected (needs `gcloud` + your interactive Google sign-in — unchanged, see §7). Every figure below is labelled by source and date; nothing here is a live measurement unless stated.

## 0. Critical finding: the local checkout is not what's deployed

Before anything else: **this working directory's `main` branch is 15 commits behind `origin/main`**, and `origin/main` — not the local tree — is what Vercel actually serves.

- `git status` shows local `main` "behind origin/main by 15 commits," plus ~29 modified-but-uncommitted files and a long list of untracked files (including `components/CookieConsent.tsx`, `app/privacy/`, and most of `docs/`).
- I downloaded the live production JS chunk `app/layout-*.js` (deployment `dpl_8BujJ3y75So1jRXTw4r2qaTf5nz3`) and confirmed it contains the strings `booking_click`, `phone_click`, and `generate_lead` — these only exist in `origin/main`'s `lib/analyticsEvents.ts` and `components/GoogleAnalytics.tsx`, **not** in this local checkout's version of those files.
- `production-redesign/` is a separate git **worktree** of the same repo (not a different project), currently checked out at `fb5e145`, 5 commits behind local `main` and far behind `origin/main`. It is not linked to any Vercel project (no `.vercel/` directory there) and is not the deployed source.
- The repo root's `.vercel/project.json` (`projectId: prj_1sh6…`, `promotion-phisio-clinc`) is the only linked Vercel project, and it deploys from the GitHub repo `samvelsiby/Promotion_PhisioClinc` on pushes to `main` on GitHub — i.e. `origin/main`.

**Conclusion:** `origin/main` is production. All source-level findings below cite `origin/main` (via `git show origin/main:<path>`) where the local tree disagrees, and say so explicitly. Your local uncommitted edits are preserved untouched — I did not run `git pull`, `checkout`, `reset` or `stash` — but they describe an **older base** than what visitors see today, and merging them later will need conflict resolution, not a fast-forward. Flagging this now because it changes which files are safe to patch.

## 1. Access matrix

| Source | Connected in this session? | Property/project | Date coverage available | Limitations |
|---|---|---|---|---|
| Google Search Console (`gscServer` MCP) | **Yes, as of this update (24 Oct 2026).** Connected and queried live: `list_properties`, `get_performance_overview`, `compare_search_periods`, `get_advanced_search_analytics`, `check_indexing_issues`. | Domain property `sc-domain:promotionphysiotherapy.ca`, confirmed `siteOwner` permission. Two other properties on the account (`agent.rtstics.com`, `sc-domain:rtstics.com`) are unrelated to this clinic and were not queried. | Live, through **23 Oct 2026** (most recent day with data in `get_performance_overview`'s 28-day window; GSC's usual 1–3 day reporting lag applies to the most recent day or two). | None for this session — figures in §3 are live. |
| GA4 (official `analytics-mcp`) | **No.** Not configured; `pipx` and `gcloud` were both absent from PATH at session start (installing `pipx` now, see §7). | Referenced historically as property `248255177` ("Promotion physiothearpy") in `docs/seo-2026-09-28` and `docs/seo-review-2026-09-25` — reached from a **different assistant's** OpenSEO/Chrome connection, not available here. `G-ML36VHX4VF` is a measurement ID, not a GA4 property ID, and authenticates nothing. | None live. | No live GA4 read access this session. |
| GEO Optimizer (`geo-optimizer` MCP) | **Yes, as of this update (24 Oct 2026).** Connected and queried live: `geo_audit`, `geo_trust_score` against the production homepage. | — | Live, 24 Oct 2026. | A checklist/heuristic score (bot-access, schema, content-structure signals), not an observed AI-citation rate or ranking signal — same caveat the tool's own output states. See §4b. |
| Google Business Profile | **No** MCP or API access in this session. | — | Last reviewed 28 Sep 2026 (`docs/seo-2026-09-28/google-business-profile-review.md`), by a different assistant with signed-in GBP access. | Cannot re-verify current listing state. |
| Live site (direct HTTP) | **Yes.** `curl`-based checks against the public site. | `https://www.promotionphysiotherapy.ca` | Live, 23 Oct 2026. | Confirms indexability/redirects/metadata; cannot substitute for GSC/GA4 metrics. |
| Local repository evidence (code, docs) | **Yes.** | `origin/main` (deployed) vs. local `main` (stale, uncommitted edits) vs. `production-redesign` worktree (unpublished, unrelated to production). | Current as of this session. | Source code, not traffic data. |

Local historical evidence (gsc.json, geo.json, seo-review.html, etc.) is kept separate from live data throughout this report and is always dated.

## 2. Canonical host — resolved

There was conflicting historical guidance: `docs/light-theme-seo-update.md` (11 Sep) says the bare domain `https://promotionphysiotherapy.ca` is canonical; `docs/original-site-team-seo-release.md` and current `lib/constants.ts` say `https://www.promotionphysiotherapy.ca` is canonical, "matching Vercel's existing host-level redirect."

Live verification settles it:
```
curl -sI https://promotionphysiotherapy.ca/        → HTTP/2 308, location: https://www.promotionphysiotherapy.ca/
curl -sI https://www.promotionphysiotherapy.ca/    → HTTP/2 200
```
The bare domain permanently redirects (308) to `www`. The live homepage's `<link rel="canonical">` tag reads `https://www.promotionphysiotherapy.ca`, matching `SITE_URL` in `lib/constants.ts` and the sitemap (`https://www.promotionphysiotherapy.ca/sitemap.xml`, confirmed via `robots.txt`). **`www` is the correct, currently-enforced canonical host.** The 11 Sep doc is superseded; no further action needed here, and nothing should be changed to point at the bare domain.

## 3. Search Console — live data (pulled 24 Oct 2026)

Connection restored this session. All figures below are a direct `gscServer` read against `sc-domain:promotionphysiotherapy.ca` — not historical exports. Domain property, so figures already cover both `www` and bare-domain traffic.

**Trailing 28 days, all countries/devices** (`get_performance_overview`, 25 Sep–23 Oct 2026): **134 clicks, 7,483 impressions, 1.79% CTR, 14.5 average position.** This is a materially different shape from the 19 Aug–15 Sep baseline (26 clicks / 1,068 impressions / 2.43% CTR / 21.39 position) — both impressions and average position have improved a lot since that snapshot; CTR has gone *down* in relative terms, consistent with ranking for more, broader, lower-intent queries (see non-brand table below) rather than a site problem.

**Latest complete 28 days vs. previous equal 28 days** (`compare_search_periods`, by device, since the tool requires a breakdown dimension):

| Period | Clicks | Impressions | CTR | Avg. position |
|---|---:|---:|---:|---:|
| **24 Sep–21 Oct 2026** (current) | 133 (84 mobile + 49 desktop + 0 tablet) | 7,156 (3,569 + 3,529 + 58) | ~1.9% | Mobile 8.9 / Desktop 19.5 / Tablet 6.4 |
| **27 Aug–23 Sep 2026** (previous) | 61 (41 + 18 + 2) | 2,635 (1,242 + 1,376 + 17) | ~2.3% | Mobile 10.3 / Desktop 22.2 / Tablet 6.6 |
| **Change** | **+118% clicks** | **+172% impressions** | −0.4pt | Mobile position improved 1.4, Desktop improved 2.7 |

Clicks and impressions both roughly doubled-to-tripled period-over-period, and average position improved on both mobile and desktop. CTR dipped slightly in relative terms — expected when impression growth comes disproportionately from new, lower-intent, non-brand queries (below), which pull the blended average down even as the brand queries that actually convert continue to perform well.

**Top queries, 24 Sep–21 Oct 2026 — brand terms carry the clicks:**

| Query | Clicks | Impressions | CTR | Avg. position |
|---|---:|---:|---:|---:|
| promotion physiotherapy | 30 | 103 | 29.1% | 4.9 |
| pro motion physiotherapy | 15 | 46 | 32.6% | 1.0 |
| pro- motion physiotherapy | 8 | 68 | 11.8% | 1.4 |
| physiotherapy near me | 3 | 68 | 4.4% | 8.6 |
| promotion physio | 3 | 5 | 60.0% | 1.0 |
| physiotherapy winnipeg | 2 | 105 | 1.9% | 26.6 |

**Non-brand queries ranking on page 1 (position ≤ 11) with zero clicks** — this is the clearest, most actionable finding from the live pull, and a stronger signal than anything in the historical data since several of these are genuinely well-positioned, not buried on page 3+:

| Query | Clicks | Impressions | Avg. position |
|---|---:|---:|---:|
| **physiotherapy st vital** | 0 | 42 | **8.8** |
| **physiotherapist st vital** | 0 | 32 | **9.3** |
| **elbow pain winnipeg** | 0 | 35 | **8.9** |
| **fall prevention programs** | 0 | 31 | **10.7** |
| physiotherapy | 0 | 83 | 8.8 |
| direct billing physiotherapy winnipeg | 0 | 7 | 10.0 |

These are Canada-filtered, 24 Sep–21 Oct 2026. The bolded four are notable because position 8.8–10.7 is a realistic page-1/top-of-page-2 spot, yet none has ever converted an impression into a click in this window — a title/snippet relevance problem, not a ranking problem. "physiotherapy st vital" and "physiotherapist st vital" in particular rank well but may be competing for clicks against the homepage's own broader title rather than a dedicated St. Vital-focused page or heading. Worth a title/meta-description rewrite test on whichever page is actually ranking for these two before writing any new content.

Further down the non-brand funnel (lower positions, same window): "back pain winnipeg" (63 impr, pos 33.2), "physiotherapist winnipeg" (59 impr, pos 28.8), "physio winnipeg" (40 impr, pos 42.0), "back pain treatment winnipeg" (34 impr, pos 39.7) — all zero clicks, but at positions this far down page 2–4, that's expected and not itself actionable; these would need a ranking improvement before a CTR fix matters.

**Page-level attribution for the four bolded queries, confirmed by a direct `page,query` pull (24 Sep–21 Oct 2026) — this replaces the source-code inference with live GSC data:**

| Query | Page(s) actually ranking | Impressions | Position |
|---|---|---:|---:|
| **physiotherapy st vital** | **Homepage** `/` (dominant) | 29 | 10.6 |
| | + `/` for the variant "local physiotherapy st vital" | 8 | 13 |
| | + `/services/fall-prevention` (secondary) | 13 | 4.8 |
| **physiotherapist st vital** | **Homepage** `/` (dominant by impressions) | 26 | 10.1 |
| | + `/services/fall-prevention` (secondary, but *better* position) | 6 | 6.0 |
| **fall prevention programs** | **`/services/fall-prevention`** (only page ranking) | 31 | 10.7 |
| **elbow pain winnipeg** | **`/blogs/tennis-elbow-symptoms-physiotherapy-winnipeg`** | 23 | 9.1 |
| | + `/what-we-treat/all` | 12 | 8.4 |
| | **`/services/elbow-wrist-hand-pain-relief` — zero rows, no impressions at all** | 0 | — |

Three corrections to the earlier source-level inference:
1. For the two "st vital" queries, the **homepage carries most of the impressions**, not a dedicated service page. `/services/fall-prevention` also ranks for both — and for "physiotherapist st vital" it actually holds a *better* position (6.0 vs. the homepage's 10.1) despite far fewer impressions. A title/meta rewrite should target the homepage first (it has the volume), with `/services/fall-prevention`'s meta as a secondary candidate.
2. "fall prevention programs" is cleanly attributed: `/services/fall-prevention` is the only page ranking for it, at position 10.7 with zero clicks — a direct, uncontested title/meta rewrite target.
3. "elbow pain winnipeg" does **not** rank for `/services/elbow-wrist-hand-pain-relief` at all — that page has no GSC rows in this window for any query. The query is instead being picked up by the blog post `tennis-elbow-symptoms-physiotherapy-winnipeg` (pos 9.1) and the `/what-we-treat/all` hub page (pos 8.4). The new meta description already drafted locally for `elbow-wrist-hand-pain-relief` (see note below) may help the page get indexed for this term going forward, but it won't fix a zero-click/zero-impression problem that's really a visibility problem, not a snippet problem — don't expect the same fast win as the other three queries until the page actually starts earning impressions.

**Indexing check** (`check_indexing_issues`, 4 representative URLs): homepage, `/privacy`, `/services/back-pain-sciatica-relief`, and `/blogs/back-pain-sciatica-assessment-winnipeg` are all **indexed**, with zero canonical, robots-blocked, or fetch issues reported. This confirms `/privacy` is indexed by Google today despite the sitemap gap noted in §5 — the sitemap omission is cosmetic/completeness only, not an indexing blocker.

**Local uncommitted work, confirmed still present (24 Oct 2026):** `lib/serviceSeo.ts` on the local working tree (not committed, not on `origin/main`) already has new `getServiceSeoDescription` entries for `elbow-wrist-hand-pain-relief` ("Elbow, wrist and hand pain physiotherapy in St. Vital, Winnipeg...") and `fall-prevention` ("Fall prevention physiotherapy in St. Vital, Winnipeg...") — verified via `git diff` just now, so this work was not re-done or duplicated here. Note the same uncommitted diff also changes every `getServiceSeoTitle`/description from "Pro Motion" to "Pro-Motion" branding — a change that will need to be reconciled against `origin/main` (15 commits ahead, §0) before these edits can ship; do not commit this file in isolation without checking what else changed upstream in the meantime.

## 4. GA4 — live tracking code verified; live metrics not available

No live GA4 read access this session (see Access matrix). However, I verified the **current, deployed tracking implementation** directly from source and from the live production JS bundle — this is observation of code behavior, not traffic data.

**What's actually implemented on `origin/main` (confirmed live in `app/layout-f28fbac74ceebfe2.js`, deployment `dpl_8BujJ3y75So1jRXTw4r2qaTf5nz3`):**
- `components/GoogleAnalytics.tsx` only loads GA4/gtag.js when `isProductionAnalyticsHost(hostname)` is true — localhost and preview deployments never fire the tag. Good hygiene; avoids polluting the property with dev traffic.
- A single document-level delegated click listener classifies any clicked `<a>` by `href` (`lib/analyticsEvents.ts`): `tel:` → `phone_click`; the exact booking URL `https://pmphysio.juvonno.com/portal/publicbook.php` → `booking_click`. This covers every booking/phone link site-wide (navbar, hero, footer), not just one button.
- `generate_lead` fires from `app/about/page.tsx` only after the contact API (`app/api/contact/route.ts`) returns HTTP success with `success: true` — not on form submit. Per `docs/analytics-measurement-2026-09-30.md`, payloads carry only a fixed `method` label, never form field contents (consistent with the task's "no personal/health info to analytics" requirement).
- GA4's enhanced measurement handles page-view-on-navigation; there is no duplicate manual `page_view` sender in this (`origin/main`) version. **Note:** the **local**, uncommitted copy of `GoogleAnalytics.tsx` in this working tree still has an old manual `page_view` `useEffect` — do not reintroduce that if/when local changes are merged, since it would double-count pageviews against the already-live version.
- `components/CookieConsent.tsx` gates GA4 and Datafast behind explicit opt-in (`localStorage` choice, 180-day expiry), only renders the banner outside `/studio`, and strips `_ga*`/`datafast_` cookies on opt-out. This satisfies the "preserve consent gating" requirement.

**What is not yet confirmed (needs live GA4 admin access, which I don't have):**
- Whether `generate_lead` is marked as a GA4 **key event**. `docs/analytics-measurement-2026-09-30.md` lists this as an outstanding account-side step as of 30 Sep; `docs/seo-review-2026-09-25` separately found GA4's configured key events were `purchase`, `qualify_lead`, `close_convert_lead` — none of which match what the site actually emits. **Do not treat any GA4 "key event" count as enquiry volume until this is checked**, and do not assume it's been fixed since without re-verifying.
- Whether `booking_click` has ever been mistaken for a completed booking anywhere in reporting — per the task's own caution, it is only a click on an external link to Juvonno's booking portal, not a confirmed appointment. Juvonno-side completion tracking does not exist (no JS access to that third-party portal) and would need Juvonno's cooperation.
- Current live session/landing-page volumes — the only available figures are a different assistant's 25 Sep read of GA4 property `248255177` (37 organic sessions, 23 users, 22 engaged sessions for 17–23 Sep; America/Vancouver timezone), which I cannot re-verify or refresh here.

## 4b. GEO Optimizer — live audit (24 Oct 2026)

Connection restored this session; ran `geo_audit` and `geo_trust_score` directly against `https://www.promotionphysiotherapy.ca`. As the tool's own output and the historical report both say, this is a checklist/heuristic score — not an observed AI-citation rate, and not a Google ranking signal.

**Overall score: 56/100 ("foundation" band)** — identical to the 17 Sep 2026 historical run. The score has not moved in five weeks; nothing regressed, but nothing improved either.

**Bot access — no issues.** `robots.txt` explicitly allows every major AI crawler checked: GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User, Googlebot, Google-Extended, Bingbot, Applebot(-Extended), Amazonbot, and others. A live fetch-as-bot check (`cdn_check`) confirmed GPTBot, OAI-SearchBot, PerplexityBot, Claude-SearchBot, Googlebot, and Applebot all get a real HTTP 200 with the full page (no Vercel/CDN challenge blocking them). Content also renders fully without JavaScript (Next.js SSR), so no AI crawler is dependent on JS execution to read the page.

**Trust Stack score: 13/25 (grade C, "medium" trust).** Layer-by-layer:

| Layer | Score | Have | Missing |
|---|---:|---|---|
| Technical | 3/5 | HTTPS, HSTS | Content-Security-Policy header, X-Frame-Options header |
| Identity | 2/5 | Brand name consistent, About page | No `Organization` JSON-LD (only `MedicalClinic`/`WebSite`/`FAQPage`), no contact info *inside* schema, no author attribution |
| Social | 3/5 | `sameAs` to Facebook + Instagram, testimonials present | No Knowledge Graph pillar links (Wikipedia/Wikidata/LinkedIn) |
| Academic | 2/5 | 15 numbers cited, 10 external non-social links | No links to authoritative sources (gov/edu/PubMed-type), no references section |
| Consistency | 3/5 | Brand name consistent across title/H1/schema | Schema description differs from meta description, no `dateModified` in schema |

**Concrete, low-effort gaps the audit's `recommendations` array flagged** (filtered to the ones worth acting on, excluding speculative/experimental items like WebMCP tool attributes that have no adoption yet):
- **7 of 21 images lack descriptive `alt` text** — straightforward accessibility + multimodal-AI fix.
- **No `Organization` JSON-LD** alongside the existing `MedicalClinic` schema — adding one is low-effort and directly addresses the Identity-layer gap above.
- **No `llms.txt`** — the tool explicitly caveats this is "an organizational signal, not a proven ranking factor," consistent with what the original report already said; still absent.
- **Keyword repetition:** the word "your" sits at 3.8% density — flagged as mild stuffing, not severe, but worth a light edit pass.
- **Duplicate text behind `aria-hidden`:** the audit's `prompt_injection` check (a cloaking/spam heuristic, not an actual security finding) flagged 8 instances of text that appears both visibly and in an `aria-hidden` duplicate — e.g. the FAQ answers and service blurbs. This reads like a standard accessibility pattern (screen-reader-only duplicate of visible copy) rather than deceptive cloaking, since the two copies match, but it's worth a quick look at the source (`app/page.tsx` / service cards) to confirm it isn't unintentionally duplicating content in a way that could also look spammy to a crawler. Not flagging this as a confirmed problem — flagging it as unverified-but-worth-a-source-check, since I didn't trace the specific component in this pass.
- **Content freshness:** no `dateModified`/`datePublished` signal anywhere; the audit separately flagged a stale-looking "© 2026" footer string and a Google-review quote with no date, both low-severity "content decay" signals rather than real staleness.

**Citability sub-score: 40/100 (raw 84/210).** The tool's own top-3 improvement suggestions, by estimated impact: add quantitative data (percentages/figures/metrics, +33%), cite authoritative external sources (+27%), and lead each section with a concrete fact in the first sentence (+25%). None of this is new work to recommend today — it's the same "measure before you add more content" conclusion as §8's existing guidance, now with a numeric anchor if you want to track movement on a future rerun.

## 5. Live technical/indexability audit (verified now, 23 Oct 2026)

- `robots.txt`: `Allow: /`, `Disallow: /studio/`, `/api/`; references `https://www.promotionphysiotherapy.ca/sitemap.xml`. Correct — CMS studio and API routes are blocked, public pages are not.
- `sitemap.xml`: all URLs use the `www` host, consistent with the canonical tag. Homepage meta robots: `index, follow`.
- Spot-checked `/services/back-pain-sciatica-relief`: HTTP 200, one `<h1>`, correct self-referencing canonical, unique title/description (`Back Pain & Sciatica Physiotherapy in Winnipeg | Pro Motion`).
- `/privacy` is live (HTTP 200, `index, follow`, unique title) but **is not listed in `app/sitemap.ts`'s hardcoded path array** — a minor, low-effort gap since it's linked from the cookie banner on every page.
- `llms.txt` returns 404. Per the task's own framing this is experimental, not a ranking requirement — noting its absence only as a fact, not a recommendation to add one.
- `app/careers/[slug]/` exists as an **empty directory** (no page file) — not a live route, not linked from navigation, not in the sitemap. Harmless dead weight, not a crawl or indexing issue; safe to delete or leave.
- `MedicalClinic` JSON-LD (`lib/schema.ts`, `origin/main`) includes name, full address, geo, phone, hours, `sameAs` (Facebook + Instagram), and an `OfferCatalog` naming back pain/sciatica, sports injuries, WCB, MPI, neck/shoulder, hip/knee, chronic pain, and pre/post-surgical rehab — matches the task's priority list and matches what `app/services/serviceData.ts` actually offers. No fabricated ratings/reviews in schema.
- Service copy for WCB and MPI (`app/services/serviceData.ts`, `origin/main`) is already appropriately hedged: e.g. MPI overview states "Booking an appointment does not confirm MPI coverage or approval of a claim," and WCB content frames outcomes as claim-dependent rather than guaranteed. This is consistent with the Manitoba physiotherapy advertising rules cited in the GBP review (see §6) and needs no correction on this pass.

## 6. Google Business Profile (historical, 28 Sep 2026 — not re-verified live)

From `docs/seo-2026-09-28/google-business-profile-review.md`, prepared by a different assistant with signed-in GBP access I don't have here. Flagging as **unverified** but worth carrying forward because it names concrete, low-effort fixes once someone with GBP access can act:

- Listed name has a stray space ("Pro- Motion" vs. correct "Pro-Motion Physiotherapy").
- GBP currently lists 12 service-area subareas + Pembina, MB, but the owner confirmed the clinic only sees patients on-site — Google's service-area feature is meant for businesses that travel to the customer. The report recommends removing the service-area list while keeping the visible clinic address.
- Facebook isn't yet linked as a GBP social profile (only Instagram is).
- The report explicitly flags that the College of Physiotherapists of Manitoba's advertising practice direction requires clinician sign-off before publishing changes, and that soliciting reviews is prohibited under that same direction — both constraints this report also respects (no review-generation tactics proposed anywhere below).

I cannot confirm any of this is still accurate four weeks later. Treat §6 as a punch list to re-verify, not as current fact.

## 7. GA4 MCP connection — status and what's still needed

You asked me to connect the official `analytics-mcp`. Status:

- **`pipx`**: not found on PATH at session start; I ran `brew install pipx` in the background (homebrew is present at `/opt/homebrew/bin/brew`). [Will report completion below / in next message if still running.]
- **`gcloud` (Google Cloud SDK)**: not found, and **not yet installed**. This is a larger (~1 GB) install and the subsequent steps require you personally — a browser-based Google sign-in for `gcloud auth application-default login`, and GCP Console access to confirm/create the project and enable the Analytics Admin + Data APIs. I did not install it without checking with you first, since it's a sizeable system change that then sits idle waiting on steps only you can do. Say go-ahead and I'll install it and walk you through the remaining steps (I will not, and cannot, enter your Google credentials myself).
- Once both are installed and you've run the `gcloud auth application-default login` + API-enablement steps, the registration command is exactly what you pasted:
  ```sh
  claude mcp add analytics-mcp \
    --scope user \
    -e "GOOGLE_APPLICATION_CREDENTIALS=PATH_TO_CREDENTIALS_JSON" \
    -e "GOOGLE_PROJECT_ID=YOUR_PROJECT_ID" \
    -- pipx run analytics-mcp
  ```
- Separately, the GSC MCP (`gscServer`) had its own historical blocker, independent of GA4: the `~/.config/mcp-gsc/connection-check.log` from 17 Sep showed the OAuth flow completed but then `403 accessNotConfigured` because the Search Console API was not enabled in Google Cloud project `541807045025`. **That's now resolved** — `gscServer` connected and returned live data in this update (§3), so whatever fixed the API-enablement step has already happened.

## 8. Ranked opportunities

Ordered by evidence strength and effort; several are blocked on account-side access I don't have.

| # | Action | Evidence | File/URL | Benefit | Effort | Success criterion |
|---|---|---|---|---|---|---|
| 1 | Rewrite title/meta on the **homepage** for "physiotherapy st vital" (29 impr, pos 10.6) and "physiotherapist st vital" (26 impr, pos 10.1); rewrite `/services/fall-prevention`'s title/meta for "fall prevention programs" (31 impr, pos 10.7, the only page ranking) and as a secondary lever for the "st vital" pair (it holds pos 4.8–6.0 there, better than the homepage, despite fewer impressions) | **Live GSC page-level pull, 24 Sep–21 Oct 2026** (§3 attribution table) confirms exact page per query — supersedes the earlier source-code inference. `elbow pain winnipeg` does **not** attribute to `/services/elbow-wrist-hand-pain-relief` at all (zero rows); it's `/blogs/tennis-elbow-symptoms-physiotherapy-winnipeg` (pos 9.1) and `/what-we-treat/all` (pos 8.4) instead — treat that one as a visibility gap, not a snippet fix | `app/page.tsx` meta + `/services/fall-prevention` meta (via `lib/serviceSeo.ts`) | Directly convertible impression volume already exists for 3 of the 4 queries; this is the single clearest, most actionable finding from live data | Low (copy edit, no new content) | These queries show nonzero CTR on the next GSC pull |
| 2 | In GA4, mark `generate_lead` as a key event (and confirm `booking_click`/`phone_click` are visible but **not** marked as conversions) | `docs/analytics-measurement-2026-09-30.md` outstanding item; `docs/seo-review-2026-09-25` found mismatched key events (`purchase`, `qualify_lead`, `close_convert_lead`) | GA4 Admin → Events (account-side) | Makes enquiry volume actually measurable before judging any SEO change by "bookings" | Low (needs GA4 admin access) | `generate_lead` appears under GA4 Key events and fires on a real test enquiry |
| 3 | Add `Organization` JSON-LD alongside the existing `MedicalClinic` schema | **Live GEO audit, 24 Oct 2026**: Identity trust layer scores 2/5, explicitly missing Organization schema (§4b) | `lib/schema.ts` (origin/main) | Addresses the lowest-scoring Trust Stack layer; low effort, structured-data-only change | Low | `geo_trust_score` Identity layer score increases on rerun |
| 4 | Add descriptive `alt` text to the 7 of 21 homepage images currently missing it | Live GEO audit (§4b) | Homepage image components (origin/main) | Accessibility + multimodal-AI readability | Low | `geo_audit` reports 21/21 images with alt text |
| 5 | Add `/privacy` to `app/sitemap.ts`'s path list | Confirmed live: page returns 200/`index,follow`; **live GSC indexing check (§3) confirms it is already indexed**, so this is a sitemap-completeness fix only, not an indexing fix | `app/sitemap.ts` (origin/main) | Minor crawl completeness fix | Trivial (one line) | `/privacy` appears in `sitemap.xml` after deploy |
| 6 | Reconcile local `main` with `origin/main` before making further edits anywhere in this repo | §0 — local tree lacks live analytics code and is 15 commits stale | Whole repo | Prevents accidentally reverting live tracking/consent code via a careless merge | Medium (needs careful diff review, not a blind pull) | `git status` shows local `main` caught up to `origin/main` with local edits intentionally re-applied or dropped |
| 7 | Re-verify the 28 Sep GBP findings (name spacing, service-area removal, Facebook link) with live GBP access | `docs/seo-2026-09-28/google-business-profile-review.md` is 4 weeks old and unverified here | Google Business Profile (account-side) | Local-pack/Maps consistency; low effort once someone has access | Low | GBP listing matches the owner-confirmed name/address/service list |
| 8 | Delete the empty `app/careers/[slug]/` directory | Confirmed empty, unlinked, not in sitemap | `app/careers/` | Tidiness only — no measurable SEO benefit | Trivial | Directory removed, build still passes |

**Note on what changed in this update:** item 1 above (the zero-click, page-1-position non-brand queries) only surfaced once the live GSC pull replaced the 5-week-old historical data — the old report's §3 sample sizes were too small to see this pattern with confidence. §3's live 28-day comparison also shows clicks +118% and impressions +172% period-over-period, well beyond what the 26-click historical baseline could show — treat the growth as real and already underway, not something still waiting on a fix.

I'm not proposing new content topics (back pain/sciatica, MPI/whiplash, WCB) beyond what already exists, because the current, most reliable signal (§3) is a stale and very small sample — the task itself says not to rewrite already-improved pages again before a full real 28-day comparison exists. The existing back-pain/MPI/WCB service pages and the one published back-pain-assessment article (`lib/clinicArticles.ts`, "back-pain-sciatica-assessment-winnipeg") already match the priority list in both quality and hedging; the right next step is to *measure* them properly (items 1, 2, 5), not add more pages yet.

## 9. Remaining access blockers (summary)

1. ~~`gscServer` MCP~~ — **resolved this update.** Connected and queried live (§3).
2. GA4 `analytics-mcp`: not installed; needs `gcloud` install + your interactive Google sign-in + GCP project/API setup. `pipx` install kicked off, status pending.
3. ~~`geo-optimizer` MCP~~ — **resolved this update.** Connected and queried live (§4b).
4. Google Business Profile: no MCP/API access in this session at all; the 28 Sep findings in §6 are unverified.
5. OpenSEO (competitor/backlink/keyword-volume research): referenced in multiple historical docs as installed in a *different* assistant session; not available here, and per the task's instructions I have not assumed it transfers.

Only GA4 and GBP access remain outstanding; both need account-side steps only you can do (§7).

## 10. What I did not do

No deploys, no CMS/Sanity content changes, no GBP/account-setting changes, no `git pull`/merge of the 15 commits, no destructive git operations, and no fabricated search volumes, reviews, clinician credentials, or medical-review claims anywhere above. This is analysis and local reporting only, per the handoff's scope.
