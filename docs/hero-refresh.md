# Homepage hero refresh

Scope: replace only the opening hero presentation. Preserve the existing navigation, booking destination, photograph, feature cards below the hero, and all other sections and pages.

## Reference research

Reviewed the actual images returned by Mobbin for:

- [Hims](https://mobbin.com/sites/sections/2aac84d2-0606-4ed6-a558-71871c6ee181): clear service proposition, one prominent action, and purposeful photography.
- [Ease](https://mobbin.com/sites/sections/6695790f-7142-4e99-86a9-2632963b795d): readable copy separated from the photography.
- [Biograph](https://mobbin.com/sites/sections/20c4600f-d3e9-49b5-afad-b94dcb8fd0e9): uncluttered headline and bounded image frame.
- [Superpower](https://mobbin.com/sites/sections/7c1e2d1c-3200-4d81-b4ef-b00ae9bfb5fb): concise practical supporting information near the main action.
- [Fresha](https://mobbin.com/sites/sections/f365cff8-e8ea-4525-af1d-d87ee93f0bb3): explicit local-service booking intent.

These patterns informed an original composition; no layout or visual asset was copied.

## Design decisions

Keep Outfit and the site's existing palette: white #ffffff, heading gray #111827, body gray #4b5563, border gray #d1d5db, and accessible red #c8101e for the primary action. Use left-aligned copy and a separate treatment photograph on desktop, stacking the booking controls before the photograph on phones. Avoid decorative gradients, fabricated ratings, and outcome guarantees.

Replace the slogan-only H1 with “Physiotherapy in Winnipeg, built around you.” Keep supporting copy visible on mobile. Give online booking one clear label and offer a distinct telephone alternative. Show St. Vital, the clinic address, seven-day opening, and a link to insurance information.

The original photograph has a large white left third. Crop its presentation using an overflow frame and an enlarged image layer, rather than editing the people or generating a replacement. Desktop and mobile frames preserve faces and the shoulder treatment. Responsive image sources, priority loading, a reserved aspect ratio, and quality 80 support delivery and layout stability. The source photo remains unchanged.

## Validation

Production build, TypeScript, and lint pass. Desktop 1280px and mobile 390px/320px were visually inspected. Both people remain visible, no horizontal overflow occurred, and primary controls measure 56px high. Verified a single crawlable H1 and the existing canonical URL. The feature-card markup beneath the hero is byte-identical to the previous commit. Booking continues to use the existing Juvonno URL. These improvements do not establish a measured conversion or ranking increase.
