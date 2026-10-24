# Keyword optimization release - 20 September 2026

Commit: 02c5eb4, pushed to main.
Production: dpl_vKrLVivZUAYdbi2fzfQQ39VEfjSX, automatically assigned to both clinic domains.

## Completed
- Research: OpenSEO Canada keyword metrics, 51 related suggestions, two Winnipeg search snapshots and one proximity-specific Maps snapshot. 207 credits used, 293 remaining.
- Used existing Search Console export for keyword-to-page priorities. No Canada query met the 50-impression / positions 5-20 threshold; the available sample is small.
- Homepage contextual links to existing back pain, MPI, WCB and first-visit pages. Founder copy preserved.
- TMJ heading and description now explicitly name jaw pain. WCB description now describes assessment and approval limits without guaranteed safe return-to-work wording.
- Distinct booking_click, phone_click and generate_lead events. generate_lead only follows a successful enquiry API response. No patient form values sent in added event parameters.
- Removed manual route page-view sender because GA4 enhanced history measurement is enabled.
- No prices added (user declined). No new duplicate articles or recurring paid rank tracker.

## Validation
Production build, TypeScript, link-event classification / payload / failure-isolation checks passed. Desktop and 390px mobile screenshots reviewed. Public homepage, TMJ and work-injury copy verified. Live JavaScript includes all three event names.

## Outstanding
- Mark generate_lead as a GA4 key event and verify an actual accepted enquiry with clinic coordination. No test message was sent.
- Booking completion is outside this site's domain and needs Juvonno-side support. Booking clicks do not prove completed appointments.
- The detailed report draft and evidence are local. Automatic approval review rejected storing private GSC/GA metrics and local research in OpenSEO shared memory. Explicit approval requested, pending. Do not retry uploading these data without the user's answer.
- OpenSEO Search Console integration is not connected; the independent GSC connector works.
