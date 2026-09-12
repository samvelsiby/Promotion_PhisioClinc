# Homepage consistency and patient journey

The homepage now follows: hero and booking → treatment finder → physiotherapists → patient reviews → direct billing → first visit → recovery articles → FAQs → existing booking footer.

The goal is to answer what the clinic treats, who provides care, what patients say, how billing works, and what to expect before the final booking prompt. This is a design hypothesis, not a measured conversion improvement.

## Changes

- Scoped homepage styles unify 16px card corners, 12px controls, light borders, restrained shadows, section spacing, heading sizes, and white/cool-grey backgrounds. Other pages do not receive the homepage stylesheet.
- Replaced the blue/purple animated insurance strip with a responsive information panel, four representative providers, and a link to the full insurance page. Provider eligibility remains plan-dependent. Corrected the homepage's Medavie logo label to match the actual asset.
- Removed the redundant hero feature strip and the generic Motto block from the homepage, including unexplained 50+/500k+ counters. The founding story and hero photograph remain.
- Replaced image-heavy benefit cards with an actual three-step first-visit explanation based on the existing FAQ content.
- Displayed three existing patient reviews in stationary, fully readable cards and retained access to Google reviews. No ratings or testimonials were invented.
- Replaced the large blog banner with three consistent article cards linked to existing CMS content.
- Removed the homepage preloader, which waited for window load and then delayed access further. Build-reported initial JavaScript decreased from 169 kB to 159 kB; this is not a real-world Core Web Vitals measurement.
- Added accessible treatment-control labels and FAQ expanded/hidden state. Retained the existing clinic schema, one H1, canonical URL, real service links, booking URL, and footer.

## Validation

Production build/type/lint and diff whitespace checks pass. Desktop and mobile checks confirm 16px corners, loaded insurance logos, no horizontal overflow, working treatment search, and working FAQ expansion. The homepage styling is scoped; shared treatment and FAQ components only gain inert styling hooks outside the homepage, plus accessibility attributes.

## Measurement after release

Compare booking-link clicks and telephone clicks with the preceding period when those events are available, and monitor Search Console impressions, clicks, CTR, and position once reporting is ready. A completed booking occurs in the existing external Juvonno flow and cannot be inferred from an outbound website click.
