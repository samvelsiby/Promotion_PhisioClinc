# Light navigation, image framing, and SEO — 11 September 2026

## Visual direction

White (#ffffff), graphite text (#25262a), neutral panels (#f6f7f8), logo red (#ec1c24), accessible red links (#c8101e), and grey dividers (#e2e4e8). Source Sans 3 remains the primary typeface. The forward slashes from the clinic logo become restrained outlined background details, with photography and useful grouped content providing visual variety.

The navigation uses the original grey/red logo on white, including the mobile menu. The hero photo renders at its natural proportions, capped at 340px wide on desktop and 290px on mobile. The caption sits below the image. The first-visit section pairs treatment imagery with sequential steps. Article previews have neutral inset backgrounds. Shared page introductions carry the outlined logo motif.

## SEO changes

- Canonical URLs, XML sitemap, robots sitemap reference, and production host redirects now use https://promotionphysiotherapy.ca, matching the live homepage and Search Console indexing evidence.
- Homepage and default descriptions are more concise and focus on the actual St. Vital clinic. Removed the default keyword list and repetitive area references.
- Social sharing metadata has a real treatment image with its correct dimensions.
- Added all four staff profiles to the sitemap.
- Removed generated current-time lastmod fields, which previously implied every page had changed on every build. Future timestamps should come from actual content revisions.
- Removed an invalid PhysicalTherapist schema type; the business remains a MedicalClinic with its existing contact, location, booking, and opening-hour information.

Google guidance: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls and https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap

## Instagram

The homepage now has a branded section linking to the account already configured in the website: @pro.motion.physiotherapy. This is not a live post feed and makes no claim to be one. No fabricated posts, follower counts, or third-party tracking scripts were added.

For an automatic feed, the clinic owner must authorize its Instagram professional account through a supported provider or Meta integration. A managed widget is the simplest option for the static owners' preview. A custom integration on the production Next.js site can cache recent media server-side, keep tokens in environment secrets, and render a small responsive grid with a profile-link fallback. Neither route needs the owner to share a password in chat. Confirm provider and any cost before adding a subscription.

Individual public post embeds are another option once the owner supplies the desired post links and enables embedding. These are manually selected posts, not an automatically synchronized feed.

Meta documentation: https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login/

## Verification and release scope

Main Next.js build and static preview build passed including type/lint checks and CMS content retrieval. Desktop 1280px and mobile 390px/320px checked in-browser; natural hero image ratio preserved; mobile menu opens and Escape closes it; no horizontal overflow on homepage/contact in checked sizes. Canonical tags, robots tags, one-H1 structure, and JSON-LD syntax checked in generated content pages. The services index is intentionally a redirect in the main project.

The owners' preview retains noindex/nofollow, a review banner and colour selector, disabled contact submissions, and its original booking destination. SEO changes in source do not affect the production clinic domain until a separately authorized production launch.
