/**
 * Individual treatment pages under /how-we-treat/[slug].
 *
 * Compliance: this copy is advertising under the College of Physiotherapists of
 * Manitoba (CPM) "Advertising and Marketing" practice direction (12 June 2025).
 * Keep every statement truthful, accurate and verifiable. Do not add guarantees,
 * superlatives or comparisons, "specialist" language, discounts, packages or free
 * offers. Run `node scripts/check-treatment-copy.cjs` after editing.
 *
 * `approved` is the clinic sign-off. A page stays out of production, the sitemap
 * and site links until a registered physiotherapist at the clinic has reviewed it
 * (CPM requires them to review and approve marketing prepared by a third party)
 * and, for needling, confirmed who holds the College roster notation.
 * See docs/treatment-pages-compliance-2026-11.md.
 */

export interface TreatmentSection {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
}

export interface TreatmentPage {
  slug: string
  /** Short name used in links and breadcrumbs. */
  name: string
  h1: string
  seoTitle: string
  seoDescription: string
  intro: string
  /** Clinic sign-off. False keeps the page out of production. */
  approved: boolean
  /** True for techniques that need a CPM roster notation. */
  rostered: boolean
  sections: TreatmentSection[]
  faqs: { question: string; answer: string }[]
  related: { label: string; href: string }[]
  sources: { label: string; url: string }[]
}

const CPM_NEEDLES = {
  label: 'College of Physiotherapists of Manitoba: Use of Needles in Practice (practice direction, 7 May 2026)',
  url: 'https://manitobaphysio.com/wp-content/uploads/2026/05/Use-of-Needles-in-Practice.pdf',
}

const NEEDLING_PROVIDER: TreatmentSection = {
  heading: 'Who can provide it in Manitoba',
  paragraphs: [
    'Acupuncture and dry needling are rostered activities for physiotherapists in Manitoba. A physiotherapist may only use a needling technique once the College of Physiotherapists of Manitoba has entered their name on the roster for that technique.',
    'At Pro-Motion, needling is carried out only by a physiotherapist who holds the College notation for the technique being used. Inserting and removing needles is not delegated to assistants, and the physiotherapist stays available to you for the whole treatment.',
    'When you book, ask reception which physiotherapist provides the technique you are interested in. You can confirm any physiotherapist’s registration through the College’s public “Verify a Physiotherapist” page.',
  ],
}

const NEEDLING_PRECAUTIONS = [
  'You are or may be pregnant',
  'You take blood-thinning medication or have a bleeding disorder',
  'You have a weakened immune system or a current infection',
  'You have a pacemaker or other implanted device',
  'You have a metal allergy',
  'You have fainted with needles or blood tests before, or feel anxious about needles',
]

export const treatmentPages: TreatmentPage[] = [
  {
    slug: 'dry-needling',
    name: 'Dry Needling',
    h1: 'Dry Needling in St. Vital, Winnipeg',
    seoTitle: 'Dry Needling in St. Vital, Winnipeg | Pro-Motion',
    seoDescription:
      'Dry needling as part of physiotherapy at Pro-Motion in St. Vital, Winnipeg. What it is, what a session involves, possible side effects and who can provide it.',
    intro:
      'Dry needling uses thin, solid needles placed into tight or tender points in a muscle. At Pro-Motion Physiotherapy on St. Anne’s Road, it is one option your physiotherapist may discuss for muscle-related pain, alongside exercise and hands-on treatment. Whether to try it is always your choice.',
    approved: false,
    rostered: true,
    sections: [
      {
        heading: 'What dry needling is',
        paragraphs: [
          'The College of Physiotherapists of Manitoba describes dry needling as a technique used for myofascial pain and dysfunction, in which thin, solid filament needles are inserted into specific muscle trigger points. Nothing is injected, which is why it is called “dry”.',
          'You may also hear related terms such as trigger point dry needling or intramuscular stimulation. Ask your physiotherapist which approach they use and why.',
        ],
      },
      {
        heading: 'How it differs from acupuncture',
        paragraphs: [
          'Both use the same kind of needle. Acupuncture places needles at specific body points. Dry needling places them in tight or tender bands of muscle found during your assessment. The two are separate rostered activities in Manitoba, each with its own training requirements.',
        ],
      },
      {
        heading: 'When it may be considered',
        bullets: [
          'Muscle tightness or tender points that are limiting how you move',
          'Neck, shoulder, back, hip or leg pain where your assessment points to a muscular contribution',
          'As a short-term addition to an exercise-based plan',
        ],
        paragraphs: [
          'Research on dry needling is still developing. A 2017 systematic review of dry needling by physical therapists found very low- to moderate-quality evidence that it reduces pain in the short term compared with no treatment or sham needling, and found that evidence of long-term benefit was lacking. Results vary from person to person.',
          'For that reason it is normally used together with exercise and education, not on its own. Your physiotherapist will tell you if they think another option suits you better.',
        ],
      },
      {
        heading: 'What a session involves',
        bullets: [
          'An assessment first, to decide whether needling is appropriate for you',
          'A conversation about your options, including treatment without needles',
          'An explanation of possible side effects and what to do if they happen',
          'Your written consent before the first treatment, and again before a new technique or a new area of the body is treated',
          'Single-use, sterile needles',
          'A brief ache or muscle twitch is common when the needle reaches a tender point',
        ],
        paragraphs: ['You can ask your physiotherapist to stop at any time.'],
      },
      {
        heading: 'Possible side effects',
        paragraphs: [
          'Most side effects are minor and short-lived: soreness or aching in the treated muscle for a day or two, a small bruise or a drop of blood at the needle site, and feeling tired, light-headed or faint.',
          'Serious problems are rare but can happen. They include infection, nerve irritation and, when needling near the chest wall, a punctured lung (pneumothorax). Your physiotherapist will explain the risks that apply to the area being treated, what to watch for afterwards and when to seek medical care.',
        ],
      },
      {
        heading: 'Tell your physiotherapist first if',
        bullets: NEEDLING_PRECAUTIONS,
        paragraphs: ['These do not always rule needling out, but they affect whether and how it is used.'],
      },
      NEEDLING_PROVIDER,
      {
        heading: 'Cost and coverage',
        paragraphs: [
          'Dry needling is provided within a physiotherapy appointment. If a technique carries any additional fee, you will be told before it is used. Coverage depends on your own plan, so check what your insurer reimburses.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does dry needling hurt?',
        answer:
          'The needles are thin and many people feel little on insertion. A brief ache or twitch is common when the needle reaches a tender point, and the muscle can feel sore for a day or two afterwards.',
      },
      {
        question: 'Is dry needling the same as acupuncture?',
        answer:
          'No. They use the same kind of needle but are different techniques. Acupuncture uses specific body points, while dry needling targets trigger points in muscle. In Manitoba they are separate rostered activities for physiotherapists.',
      },
      {
        question: 'How many sessions will I need?',
        answer:
          'It varies. Your physiotherapist will review whether needling is helping and will stop using it if it is not. It is usually one part of a plan that also includes exercise.',
      },
      {
        question: 'Can I have physiotherapy without needles?',
        answer:
          'Yes. Needling is optional. Your physiotherapist will discuss other options with you, and you can decline or stop at any time.',
      },
      {
        question: 'Do I need a doctor’s referral?',
        answer:
          'You do not need a referral to see a physiotherapist in Manitoba. Some insurance plans ask for one before they reimburse, so check your plan.',
      },
    ],
    related: [
      { label: 'Acupuncture', href: '/how-we-treat/acupuncture' },
      { label: 'Neck pain', href: '/services/neck-pain-relief' },
      { label: 'Back pain and sciatica', href: '/services/back-pain-sciatica-relief' },
      { label: 'Shoulder pain', href: '/services/shoulder-pain-relief' },
      { label: 'Sports injuries', href: '/services/sports-injuries' },
    ],
    sources: [
      CPM_NEEDLES,
      {
        label: 'Gattie E, Cleland JA, Snodgrass S. The effectiveness of trigger point dry needling for musculoskeletal conditions by physical therapists. J Orthop Sports Phys Ther. 2017;47(3):133-149',
        url: 'https://pubmed.ncbi.nlm.nih.gov/28158962/',
      },
    ],
  },
  {
    slug: 'acupuncture',
    name: 'Acupuncture',
    h1: 'Acupuncture in St. Vital, Winnipeg',
    seoTitle: 'Acupuncture in St. Vital, Winnipeg | Pro-Motion',
    seoDescription:
      'Acupuncture from a physiotherapist as part of your care at Pro-Motion in St. Vital, Winnipeg. What to expect, possible side effects and who can provide it.',
    intro:
      'At Pro-Motion Physiotherapy on St. Anne’s Road, acupuncture is offered by a physiotherapist as one part of a physiotherapy plan for pain. It is optional, and your physiotherapist will discuss other ways of treating your problem as well.',
    approved: false,
    rostered: true,
    sections: [
      {
        heading: 'What acupuncture is',
        paragraphs: [
          'The College of Physiotherapists of Manitoba describes acupuncture as a therapeutic technique in which solid, thin needles are inserted into specific body points to alleviate pain, reduce inflammation and enhance functional recovery.',
          'Here it is provided by a physiotherapist within physiotherapy care. Our physiotherapists are not Traditional Chinese Medicine practitioners, and we do not offer acupuncture for general wellness or for conditions outside physiotherapy practice.',
        ],
      },
      {
        heading: 'When it may be considered',
        bullets: [
          'Persistent low back or neck pain',
          'Shoulder pain',
          'Pain that is making it hard to start or progress an exercise program',
        ],
        paragraphs: [
          'A 2018 analysis that pooled individual patient data from 39 trials concluded that acupuncture is effective for chronic musculoskeletal, headache and shoulder pain. The same analysis found that its advantage over sham acupuncture was smaller than its advantage over no acupuncture. How much it helps differs between people.',
          'Acupuncture does not replace exercise, movement advice or hands-on treatment. Your physiotherapist will explain where, if at all, it fits in your plan.',
        ],
      },
      {
        heading: 'What a session involves',
        bullets: [
          'An assessment first, to decide whether acupuncture is appropriate for you',
          'A conversation about your options, including treatment without needles',
          'An explanation of possible side effects and what to do if they happen',
          'Your written consent before the first treatment, and again before a new technique or a new area of the body is treated',
          'Single-use, sterile needles, left in place for a short period while you rest',
        ],
        paragraphs: ['You can ask your physiotherapist to remove the needles at any time.'],
      },
      {
        heading: 'Possible side effects',
        paragraphs: [
          'Most side effects are minor and short-lived: a small bruise or a drop of blood at a needle site, mild soreness, and feeling tired, light-headed or faint during or after treatment.',
          'Serious problems are rare but can happen. They include infection and, when needling near the chest wall, a punctured lung (pneumothorax). Your physiotherapist will explain the risks that apply to you, what to watch for afterwards and when to seek medical care.',
        ],
      },
      {
        heading: 'Tell your physiotherapist first if',
        bullets: NEEDLING_PRECAUTIONS,
        paragraphs: ['These do not always rule acupuncture out, but they affect whether and how it is used.'],
      },
      NEEDLING_PROVIDER,
      {
        heading: 'Cost and coverage',
        paragraphs: [
          'Acupuncture is provided within a physiotherapy appointment. If a technique carries any additional fee, you will be told before it is used. Insurance plans treat acupuncture differently depending on who provides it, so ask reception how your visit will be receipted and check what your plan reimburses.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is acupuncture from a physiotherapist different from Traditional Chinese Medicine acupuncture?',
        answer:
          'Yes. A physiotherapist uses acupuncture within physiotherapy practice, mainly to help manage pain as part of a wider treatment plan. It is not a Traditional Chinese Medicine consultation.',
      },
      {
        question: 'Does acupuncture hurt?',
        answer:
          'The needles are very thin. Many people feel a brief prick or a dull ache around the needle, which usually settles quickly. Tell your physiotherapist if it is uncomfortable.',
      },
      {
        question: 'Is acupuncture the same as dry needling?',
        answer:
          'No. The needles are similar, but acupuncture uses specific body points and dry needling targets trigger points in muscle. They are separate rostered activities for physiotherapists in Manitoba.',
      },
      {
        question: 'Can I decline acupuncture?',
        answer:
          'Yes. It is optional. Your physiotherapist will discuss other options, and you can decline or stop at any time.',
      },
      {
        question: 'Will my insurance cover it?',
        answer:
          'It depends on your plan. Ask reception how the visit will be receipted, then check with your insurer.',
      },
    ],
    related: [
      { label: 'Dry needling', href: '/how-we-treat/dry-needling' },
      { label: 'Back pain and sciatica', href: '/services/back-pain-sciatica-relief' },
      { label: 'Neck pain', href: '/services/neck-pain-relief' },
      { label: 'Chronic pain', href: '/services/chronic-pain-relief' },
      { label: 'Insurance and direct billing', href: '/insurance' },
    ],
    sources: [
      CPM_NEEDLES,
      {
        label: 'Vickers AJ, et al. Acupuncture for chronic pain: update of an individual patient data meta-analysis. J Pain. 2018;19(5):455-474',
        url: 'https://www.sciencedirect.com/science/article/pii/S1526590017307800',
      },
    ],
  },
  {
    slug: 'cupping-therapy',
    name: 'Cupping Therapy',
    h1: 'Cupping Therapy in St. Vital, Winnipeg',
    seoTitle: 'Cupping Therapy in St. Vital, Winnipeg | Pro-Motion',
    seoDescription:
      'Cupping as part of physiotherapy at Pro-Motion in St. Vital, Winnipeg. What it is, what the research says, the marks it leaves and what to expect.',
    intro:
      'Cupping uses suction cups placed on the skin over a muscle. At Pro-Motion Physiotherapy on St. Anne’s Road, your physiotherapist may suggest it as a small part of a plan built around movement and exercise. It is optional.',
    approved: false,
    rostered: false,
    sections: [
      {
        heading: 'What cupping is',
        paragraphs: [
          'A cup is placed on the skin and air is drawn out, so the skin and the tissue underneath lift slightly into the cup. Cups may be left in one place for a few minutes or moved slowly along a muscle.',
          'We use dry cupping only. The cups stay on the surface of the skin and nothing pierces it.',
        ],
      },
      {
        heading: 'What the research says',
        paragraphs: [
          'The evidence for cupping is limited. The U.S. National Center for Complementary and Integrative Health notes that most research on cupping is of low quality and that the evidence for pain is not strong. Some people report that a tight or sore muscle feels easier for a short time afterwards.',
          'Because of this, cupping is not used on its own. If your physiotherapist suggests it, they will explain what they hope it will add and will stop using it if it is not helping.',
        ],
      },
      {
        heading: 'What a session involves',
        bullets: [
          'An assessment first, and a conversation about your options',
          'An explanation of the marks and other possible side effects',
          'Your consent before cupping is used',
          'Cups applied to the area for a few minutes, usually alongside exercise or hands-on treatment in the same visit',
        ],
        paragraphs: ['You will feel a pulling or tight sensation under the cup. Tell your physiotherapist if it becomes painful.'],
      },
      {
        heading: 'Marks and other side effects',
        paragraphs: [
          'Cupping commonly leaves round red or purple marks on the skin. They are temporary and usually fade over several days, though some last longer. If you would prefer not to have visible marks, for example before an event, say so and choose another option.',
          'Other possible effects are soreness in the area, skin irritation and, less often, blistering. Cupping is not applied over irritated or broken skin.',
        ],
      },
      {
        heading: 'Tell your physiotherapist first if',
        bullets: [
          'You take blood-thinning medication or bruise easily',
          'You have a skin condition, broken skin, sunburn or a rash in the area',
          'You are or may be pregnant',
          'You have reduced sensation in the area',
        ],
      },
      {
        heading: 'Cost and coverage',
        paragraphs: [
          'Cupping is provided within a physiotherapy appointment. If a technique carries any additional fee, you will be told before it is used. Coverage depends on your own plan.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How long do cupping marks last?',
        answer:
          'They are temporary and usually fade over several days. Some marks take longer, depending on your skin and how long the cups were on.',
      },
      {
        question: 'Does cupping hurt?',
        answer:
          'Most people feel a strong pulling sensation, not sharp pain. The area can feel tender afterwards. Tell your physiotherapist if it is painful so the suction can be reduced or the cup removed.',
      },
      {
        question: 'Does cupping work?',
        answer:
          'The research is limited and mostly of low quality. Some people find it eases muscle tightness for a short time. It is used, if at all, alongside exercise and other treatment.',
      },
      {
        question: 'Can I decline cupping?',
        answer: 'Yes. It is optional, and your physiotherapist will discuss other options with you.',
      },
    ],
    related: [
      { label: 'Dry needling', href: '/how-we-treat/dry-needling' },
      { label: 'Sports injuries', href: '/services/sports-injuries' },
      { label: 'Back pain and sciatica', href: '/services/back-pain-sciatica-relief' },
      { label: 'Neck pain', href: '/services/neck-pain-relief' },
    ],
    sources: [
      {
        label: 'National Center for Complementary and Integrative Health: Cupping',
        url: 'https://www.nccih.nih.gov/health/cupping',
      },
    ],
  },
  {
    slug: 'orthotics',
    name: 'Orthotics',
    h1: 'Orthotics and Foot Assessment in St. Vital, Winnipeg',
    seoTitle: 'Orthotics Assessment in St. Vital, Winnipeg | Pro-Motion',
    seoDescription:
      'Foot assessment and orthotics at Pro-Motion Physiotherapy in St. Vital, Winnipeg. When an insole may help, custom or off-the-shelf, and what to ask about cost.',
    intro:
      'Orthotics are inserts worn inside your shoes to change how load is spread through your feet. At Pro-Motion Physiotherapy on St. Anne’s Road, the starting point is an assessment of your foot and the problem you came in with. Not everyone with foot pain needs an orthotic.',
    approved: false,
    rostered: false,
    sections: [
      {
        heading: 'What the assessment covers',
        bullets: [
          'Your symptoms, activities and the footwear you use most',
          'Foot and ankle movement and strength',
          'How you stand and walk',
          'What you have already tried',
        ],
        paragraphs: [
          'Your physiotherapist will then go through the options with you. These may include a change of footwear, exercises, an off-the-shelf insole or a custom-made orthotic. Often more than one is used together.',
        ],
      },
      {
        heading: 'Custom or off-the-shelf',
        paragraphs: [
          'Off-the-shelf insoles are ready-made in standard sizes. Custom orthotics are made from a scan, cast or impression of your feet.',
          'Research on foot orthoses is mixed. For heel pain, a 2018 systematic review found moderate-quality evidence that orthoses reduce pain in the medium term, was uncertain whether the change was large enough to matter to patients, and found no difference between custom and prefabricated devices at any time point. A second 2018 review found that orthoses did not outperform sham devices or other conservative treatment. Your physiotherapist will explain which type, if either, makes sense for your problem.',
        ],
      },
      {
        heading: 'When orthotics may be discussed',
        bullets: [
          'Heel or arch pain',
          'Pain in the ball of the foot',
          'Some ankle, shin and knee problems where your assessment suggests foot mechanics play a part',
        ],
      },
      {
        heading: 'Getting used to them',
        paragraphs: [
          'New orthotics can feel strange at first. Your physiotherapist will explain how to build up wearing time and what to do if they cause rubbing or new discomfort. Orthotics are usually combined with exercises, since strength and movement still matter.',
        ],
      },
      {
        heading: 'Cost and coverage',
        paragraphs: [
          'Ask for the cost before you order. Many extended health plans set their own rules for orthotics, including who must prescribe them, who must supply them and what paperwork is needed. Check with your insurer before ordering so you know what will be reimbursed.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I need custom orthotics?',
        answer:
          'Not necessarily. For some common problems, ready-made insoles have performed about as well as custom devices in research. Your physiotherapist will explain the options after assessing you.',
      },
      {
        question: 'Will my insurance cover orthotics?',
        answer:
          'It depends on your plan. Many plans specify who must prescribe and supply orthotics, so check with your insurer before you order.',
      },
      {
        question: 'How long do orthotics take to get used to?',
        answer:
          'It varies. Most people build up wearing time gradually. Your physiotherapist will give you a plan and explain what to do if they are uncomfortable.',
      },
      {
        question: 'Do I need a doctor’s referral for an assessment?',
        answer:
          'You do not need a referral to see a physiotherapist in Manitoba. Your insurance plan may have its own requirements for orthotics.',
      },
    ],
    related: [
      { label: 'Foot and ankle pain', href: '/services/foot-ankle-pain-relief' },
      { label: 'Hip and knee pain', href: '/services/hip-knee-pain-relief' },
      { label: 'Heel pain on your first steps', href: '/blogs/heel-pain-first-steps-winnipeg' },
      { label: 'Insurance and direct billing', href: '/insurance' },
    ],
    sources: [
      {
        label: 'Whittaker GA, et al. Foot orthoses for plantar heel pain: a systematic review and meta-analysis. Br J Sports Med. 2018;52(5):322-328',
        url: 'https://pubmed.ncbi.nlm.nih.gov/28935689/',
      },
      {
        label: 'Rasenberg N, et al. Efficacy of foot orthoses for the treatment of plantar heel pain: a systematic review and meta-analysis. Br J Sports Med. 2018;52(16):1040-1046',
        url: 'https://pubmed.ncbi.nlm.nih.gov/29555795/',
      },
    ],
  },
]

/**
 * Approved pages are live everywhere. Unapproved pages render only in local
 * development, with a draft banner, so the clinic can review them first.
 */
export function isTreatmentPageVisible(page: TreatmentPage): boolean {
  return page.approved || process.env.NODE_ENV !== 'production'
}

export function getTreatmentPage(slug: string): TreatmentPage | undefined {
  return treatmentPages.find((page) => page.slug === slug)
}

/** Slugs safe to publish: sitemap, static params and public links. */
export function getApprovedTreatmentSlugs(): string[] {
  return treatmentPages.filter((page) => page.approved).map((page) => page.slug)
}
