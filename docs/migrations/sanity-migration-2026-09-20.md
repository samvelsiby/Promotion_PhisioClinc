# Sanity blog consolidation — September 20, 2026

Migrated the 12 previously code-based published articles to project o1vrge91, production. The eight existing Sanity documents retained their original revisions. All 20 slugs are unique. Five generated WebP images were uploaded as Sanity image assets. The migration snapshot is retained only for rollback; it is not imported by the website.

Preserved titles, excerpts, tags, reading times, published calendar dates, all section headings and paragraphs, citations, image alt text, and related links. Dates stored as UTC midnight retain their existing UTC display date. Structured sections became editable Portable Text in the standard Body field. Related links are editable in Studio and continue to supply service-page backlinks.

Removed source-based ordering: listing, featured article and recent-article lists now follow publishedAt descending, with slug ascending as a deterministic tie-breaker. No fake timestamp differences were introduced for the five posts published on the same day. Public queries explicitly exclude drafts and release versions. The embedded Studio exposes newest-first ordering and the related-links field.

Checks: migration compared every new document against its prepared data; old revisions unchanged; public API confirmed 20 unique published posts and five September 20 articles first; production build generated 64 routes; rendered HTML retained every migrated paragraph, image and service backlink. Local fallback content was removed only after remote verification.
