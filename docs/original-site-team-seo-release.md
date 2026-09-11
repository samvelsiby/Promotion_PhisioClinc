# Original-site team and SEO release

Based on main f9a6148. The user's release scope is the original website with one new homepage team section and the generated staff portraits. The redesign remains separate and is not part of this release.

## UI scope

- Add a compact “Get to know your physiotherapists” section between the existing Motto and Testimonials sections. Link Ben and Lijo to their existing profiles, with a link to the complete team.
- Use the four generated studio portraits through the existing shared team data, retaining names, credentials, bios, team-directory layout, and profile layouts.
- Preserve the original hero, navigation, global CSS, typefaces, backgrounds, footer, booking controls, other homepage sections, and existing blog content.
- Semantic heading changes retain the existing presentation while giving each content page one H1. Blog body H1s render as H2s with the original typography.

## SEO scope

- Consistent canonical non-www production origin, with a permanent www redirect that preserves paths and query strings.
- Unique titles and descriptions, per-page Open Graph URLs and social sharing images, including a fallback for CMS articles without images.
- MedicalClinic, WebSite, FAQPage, Service, Person, Article, and breadcrumb structured data. FAQ content is shared with the original visible FAQ component. No invented ratings or reviews in structured data.
- Removed the footer's duplicate, invalid Physiotherapy business schema and incorrect .com references. Its visible JSX and styling are unchanged; the root layout supplies the corrected clinic schema.
- Correct centralized clinic address, email, social links and hours using the existing site's clinic information; existing visible layouts remain intact.
- Dynamic sitemap covering existing static pages, treatment pages, team profiles and CMS articles. No artificial build-time last-modified timestamps, and no links to redesign-only routes.
- CMS studio has noindex metadata. Public pages remain indexable.
- Responsive image output sizes, AVIF/WebP formats, and caching configured without altering existing hero markup or source image.

## Verification

- Production build, type checking and lint passed with the existing CMS content.
- Audited all 38 content pages: unique titles, descriptions, correct canonical origin, indexable metadata, one H1 and parseable JSON-LD.
- New homepage section checked at desktop 1280px and mobile 390px/320px; no horizontal overflow. Both portraits load, and Ben's card opens his existing profile correctly.
- Original hero, navigation, footer, global styles, fonts, preloader and floating booking controls verified unchanged against the release base.

The separate owner-review Site, generated redesign pages, new article drafts, and new neighbourhood/contact routes are excluded to honour the request to preserve the original website.
