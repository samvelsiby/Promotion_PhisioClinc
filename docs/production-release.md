# Original-site production release — 11 September 2026

The user requested the original production design, with only a homepage physiotherapist introduction and generated staff portraits, plus the SEO improvements for existing pages. Do not push the larger uncommitted redesign in this checkout to main.

Prepared in the isolated worktree `/private/tmp/promotion-original-team-seo`, branch `codex/original-site-team-seo`, based on original main `f9a61480cbb3fe6396be84a283b76d8a946d83bc`.

Release commit `bebd62046364b651dad8e23aeda90c37120bff69` and routing correction `49a7c969bb219b50ad9017716d6077ad0b9c3686` were successfully pushed to `origin/main` at `https://github.com/samvelsiby/Promotion_PhisioClinc`. Vercel reports the corrected deployment completed successfully. The host already redirects the bare domain to www, so canonical URLs and the sitemap use `https://www.promotionphysiotherapy.ca`; no competing application redirect remains. Live verification returned HTTP 200 after one redirect from the bare domain, and the sitemap returned HTTP 200. The final production build passed.

The main workspace intentionally retains the uncommitted full redesign and its previous base. Do not reset it or blindly pull main over those changes. For further production changes, continue from the release worktree or a clean checkout of updated origin/main.

Release details and validation are in the release worktree's `docs/original-site-team-seo-release.md`. All 38 existing content pages passed metadata, H1, canonical, and JSON-LD checks. Original hero, navbar, typefaces, global styling, page layouts, and booking controls were preserved. The footer only lost incorrect hidden duplicate schema; its visible content is identical. All four generated portraits loaded in-browser. No new redesign-only articles, area pages, or contact-page layout were published.

The separate owner-review Site remains unchanged at https://pro-motion-owner-review.samvelsiby.chatgpt.site.

## Follow-up changes

- `91eeafc`: team directory image frames now match the generated portraits' 3:4 proportions.
- `246e71ad24e602b5c797d56de75d5c7a56d17e6e`: user-requested hero-only redesign researched with Mobbin. The existing photograph is cropped in its responsive display frame to exclude the blank left area. Added a location-specific H1, clearer booking and telephone actions, address and practical clinic details. All content beneath the opening hero remains unchanged. Build, type/lint, structured data, single-H1, and 320px/390px/1280px layout checks passed. Pushed to main; see GitHub Vercel status for deployment state.

Research details: `/private/tmp/promotion-original-team-seo/docs/hero-refresh.md`.

Latest mobile hero release: `84f93378367765b295f89ee731da12127637d7be`. Desktop/tablet CSS is unchanged; phone-only rose background, deep-red heading, natural photo shown before text, booking directly beneath photo, and one-shot entrance motion respecting reduced-motion settings. This follows `0377006` (original `/Hero/hero2.jpg` displayed at natural 3:2 proportions, no crop wrapper; Last Minute Physio is a quiet inline link). Original founding story remains. Build and 320px/390px checks passed, and desktop colours/animation state were verified unchanged. All commits are on main in the isolated release worktree; the older owner-review Site is separate and has not been republished.

Creative hero follow-up `37f0f52e25afcf75bce0874f12e42d0bd2712b3c` is pushed to main. It replaces the split hero with brand-slogan display typography, a wide photo, compact founding-story/booking column, and founders link. Original founding text and local physiotherapy H1 context remain. Only hero files changed, plus documentation. Build/type/lint and responsive checks passed. Notes: `/private/tmp/promotion-original-team-seo/docs/hero-brand-composition.md`.

Homepage consistency release `4e92e9efdbee890d391b39a87dfc47c6b5f6643d` is pushed to main. New scoped homepage styling standardizes cards, section spacing, and colours; a static direct-billing panel replaces the gradient marquee; treatment/team/review/billing/first-visit/article/FAQ order supports patient decisions. Removed the homepage preloader and redundant promotional blocks. Hero founding description, photo, footer, and Juvonno booking remain. Build/type/lint and internal link/schema/H1 audits passed. Desktop, 390px and 320px layout checks passed, as did treatment search and FAQ interaction. Research/release details: `/private/tmp/promotion-original-team-seo/docs/homepage-cohesion.md`.

Footer release `67588e2fa8911b198e67eb5c75efb13b9cab4cf4` is pushed to main. It follows the user's switch from a further hero redesign to a footer redesign; the hero was not changed. Added a booking row, consolidated navigation, compact map, shared contact and hours data, and preserved the RTSTICS credit. All 17 internal footer links and the contact anchor passed checks. Build/type/lint passed, with desktop 1440px/1024px and phone 390px/320px layout review. Reference notes: `/private/tmp/promotion-original-team-seo/docs/footer-refresh.md`.

Homepage intro restoration `2627f39` (12 September 2026): restored the logo, motto, and brand-red animated stroke at the user’s request. CSS fades the overlay out after 900ms independently of image/window load, with a hydration cleanup timer and immediate dismissal on keyboard/pointer interaction. Reduced-motion users skip the intro. CSS dismissal also works without JavaScript. Build/type/lint passed; browser confirmed intro removal, unchanged Juvonno link, a single H1, and no desktop overflow. Pushed to main; Vercel reports a successful deployment and the published homepage contains the restored intro. The separate owner-review Site remains unchanged.


Winnipeg patient-information release `e02f471` (12 September 2026): user authorized publishing the prepared website updates while reserving backlink outreach for a later request. Six sourced patient guides, first-visit page, functional journal search, service/article links, insurance clarification, FAQ anchor and UTC article dates are pushed to main. Existing design and Sanity articles are preserved. Deployment verification is recorded in `docs/winnipeg-growth-2026-09-12/release-notes.md`.

Vercel confirmed deployment of `e02f471` complete; all eleven live content/search/sitemap checks passed.

SEO follow-up f1eabb0: preserved e02f471 patient guides/first-visit/FAQ fix. Improved three service descriptions and assessment copy, changed Benefits heading to Care Goals. Production build passed; Vercel deployment successful. Host-level bare-to-www redirect now 308, verified with deep paths/query strings and HTTP-to-HTTPS. Current full crawl is docs/seo-followup/crawl.json in isolated worktree (45 sitemap pages).

Location wording b25c187: added verified Meadowood within St. Vital to homepage metadata, footer, About and first-visit content. Nearby Royalwood, Lavalee, Worthington and Niakwa Place mentioned naturally on visitor pages. Existing design, hero heading and Juvonno retained. Build and generated page checks passed. Research in isolated worktree docs/location-research/location-and-local-search.md.
