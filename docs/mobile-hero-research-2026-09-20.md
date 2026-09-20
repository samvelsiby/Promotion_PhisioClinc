# Mobile hero: research and direction

Scope: homepage hero below 640px only. Keep desktop/tablet, navigation, subsequent sections, booking provider, local SEO metadata, founding copy, and Last Minute Physio.

## Research

Reviewed Mobbin section images and appointment screens, plus live clinic content. These are visual and usability references, not evidence of measured conversion lift.

- [The Performance Lab](https://mobbin.com/sites/sections/eca587d3-df1d-45ec-920b-9bbb15fd03ad): a dominant movement photograph and confident typography create one composition rather than many cards. Adapt the image emphasis; avoid the aggressive sports-only tone, giant uppercase type, and autoplay video.
- [Ease](https://mobbin.com/sites/sections/6695790f-7142-4e99-86a9-2632963b795d): patient-centred message with contextual photography. Adapt the human focus; its business-software demo workflow is not appropriate for a clinic.
- [Hers](https://mobbin.com/screens/3ecf1a04-6943-4ca2-8d32-7c2613ed9ed6): a coherent colour field, dominant photograph, and clear start action. Adapt hierarchy, not imagery, medical claims, colours, or composition.
- [Headspace booking](https://mobbin.com/screens/df49bfbd-7da0-4a5d-962f-580f39e4d1e9): plain scheduling language and a single next action. Retain Juvonno and make its entry easy to find; do not simulate appointment availability.
- [Myo Yorkville](https://www.myodetox.com/ca/locations/yorkville): puts location, practical visit details, booking, and phone together. Use actual St. Anne's Road details; do not borrow its pricing, outcome claims, or treatments.
- [One Medical](https://www.onemedical.com/): clear access-to-care messaging and direct paths into care. Useful for action hierarchy, not an appropriate visual identity to copy.

## Current problem

At 390px the hero is about 1,045px tall. A pink gradient, short decorative underline, rounded photo frame and shadow, then a separate button make the parts feel assembled. The booking action starts around 567px down the viewport. The treatment photograph itself is useful and already preserves both people; retain it.

## Design plan

Palette, revised after user feedback: plain white #ffffff background; deep blue-green #123f4a main heading; clinic red #c8101e for the second headline line and booking button; supporting teal #146b63 and text #45636b. Keep existing Outfit typography and slogan. No additional fonts or generated photographs. This palette applies only below 640px; the site's logo and desktop identity remain unchanged.

Mobile composition: a plain white opening panel with a two-tone blue-green and red headline, concise patient-facing introduction, and a red booking action. An edge-to-edge, uncropped treatment photograph anchors the panel. The address and two practical visit facts lead into the founding story and existing service links on white. No floating trust cards, decorative gradients, pill badges, review counters, or looping motion.

```
existing navigation
┌──────────────────────────┐
│ local physiotherapy H1   │  white, left aligned
│ existing brand slogan   │
│ short care introduction │
│ [Book an appointment]   │  clinic red, 56px target
│ phone                   │
├──────────────────────────┤
│ existing treatment image│  full 3:2 frame, no crop
├──────────────────────────┤
│ actual clinic address   │
│ opening days / billing  │
│ founding story          │
│ relevant treatment links│
│ Last Minute Physio      │
└──────────────────────────┘
existing following sections
```

Review against brief: avoid a generic coloured card around the existing layout. Connect the heading and action into one surface, remove the photograph's frame and shadow, and keep the brand's actual slogan and founder story. Keep all important copy in server-rendered HTML and a single H1. Retain the existing loading introduction; add no extra hero animation or layout shift. The site's reduced-motion rules remain in place.

## Validation plan

Check 320, 375, 390, 430 and 639px; 640, 768 and 1280px as unchanged desktop/tablet boundaries. Verify photo aspect ratio, readable type, 44px minimum interactive targets, booking/phone/Last Minute destinations, no horizontal overflow, one H1, metadata retention, and reduced-motion rules. Build and type-check. Compare desktop hero geometry with the live baseline.

## Results

- At 320, 375, 390, 430 and 639px, the hero has no horizontal overflow, the full photograph retains its 3:2 aspect ratio, and the booking button is 56px tall. The booking and phone actions, practical-information links and Last Minute Physio link have targets of at least 44px; inline prose links retain their existing styling.
- At 390px, the booking button begins around 315px from the top of the viewport, compared with around 567px before this change. This is a layout improvement, not a claim of measured conversion uplift.
- At 640, 768 and 1280px, all measured visible hero text, links, image and caption have identical geometry, colours, font sizes, line heights and corner radii to the pre-change live site.
- Mobile menu opens and closes correctly. One H1 remains; the canonical URL, Juvonno destination, phone number, Last Minute Physio destination and service links remain intact.
- Existing preloader and reduced-motion handling are unchanged. No dependencies, fonts or image assets were added.
- `npm run build` passed compilation, lint/type validation and generation of all 64 static pages. Local webpack cache writes warned about low disk space, but the production build completed successfully. `git diff --check` passed.

## Colour refinement

The first colour follow-up used seafoam and teal. The latest user-requested refinement removes the tinted background entirely and restores clinic red to “Powered by motion” and the booking button, including a darker red hover state. Layout, font family, text size, photo and content remain unchanged. Focus outlines use teal on white backgrounds and white inside the button. All palette overrides remain inside the phone breakpoint.
