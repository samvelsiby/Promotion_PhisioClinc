export interface Treatment {
  id: string
  title: string
  subtitle: string
  intro: string
  bullets: string[]
  imageSrc?: string
}

export const treatments: Treatment[] = [
  {
    id: 'electrotherapeutic-modalities',
    title: 'Electrotherapeutic Modalities',
    subtitle: 'Targeted pain relief and tissue healing using gentle electrical currents.',
    intro:
      "Electrotherapeutic modalities are evidence-based tools that help reduce pain, calm irritated tissues, and support your body's natural healing process. They are often used alongside hands-on therapy and exercise to speed recovery and make movement more comfortable.",
    bullets: [
      'Common tools include TENS, IFC, therapeutic ultrasound, and neuromuscular electrical stimulation (NMES).',
      'Can help decrease pain, muscle spasm, swelling, and stiffness so you can move more freely.',
      'Often used early in care when pain limits your ability to participate fully in exercise or manual therapy.',
      'Always tailored to your comfort level with close monitoring of intensity and treatment time.',
    ],
    imageSrc: '/bento/Electrotheraputic modalities.png',
  },
  {
    id: 'pre-post-surgical-conditions',
    title: 'Pre / Post Surgical Conditions',
    subtitle: 'Preparing for surgery and recovering with confidence afterward.',
    intro:
      'Physiotherapy before and after surgery can significantly improve your outcomes. We help you build strength, manage pain, and regain mobility so you can return to daily activities as safely and quickly as possible.',
    bullets: [
      'Pre-operative programs focus on education, swelling control, and strengthening to improve your readiness for surgery.',
      'Post-operative rehab supports wound protection, pain and swelling management, and safe progression of mobility.',
      'Customized home exercise programs help you continue making progress between visits.',
      'We communicate with your surgical team as needed to align with post-op protocols and restrictions.',
    ],
    imageSrc: '/bento/pre:post sueguery.png',
  },
  {
    id: 'motor-vehicle-accident-recovery',
    title: 'Motor Vehicle Accident Recovery',
    subtitle: 'Helping you move forward after a collision-related injury.',
    intro:
      'Car accidents can lead to whiplash, back pain, headaches, and other soft tissue or joint injuries. Our goal is to relieve pain, restore movement, and help you feel safe and confident returning to driving, work, and daily life.',
    bullets: [
      'Thorough assessment of neck, back, and related injuries following a collision.',
      'Manual therapy, exercise, and education to address whiplash-associated disorders and other soft tissue injuries.',
      'Graded return-to-activity plans that respect your pain levels and recovery timeline.',
      'Support with paperwork and communication related to motor vehicle insurance claims when applicable.',
    ],
    imageSrc: '/bento/Motorvehicel.png',
  },
  {
    id: 'work-reconditioning-program',
    title: 'Work Reconditioning Program',
    subtitle: 'Bridging the gap between injury recovery and safe return to work.',
    intro:
      'Work reconditioning is a structured, goal-oriented program designed to help you rebuild the strength, endurance, and movement patterns needed for your job. We simulate real work tasks so you can return with confidence and reduced risk of re-injury.',
    bullets: [
      'Individualized programs based on the physical demands of your workplace and role.',
      'Focus on lifting techniques, posture, and movement patterns that protect your joints and spine.',
      'Progressive strengthening and cardiovascular conditioning to match your job requirements.',
      'Education on pacing, breaks, and body mechanics to support long-term success at work.',
    ],
    imageSrc: '/bento/work reconditioning.png',
  },
  {
    id: 'sports-injury-rehabilitation',
    title: 'Sports Injury Rehabilitation',
    subtitle: 'Getting you back to the activities and sports you love.',
    intro:
      'Whether you are a recreational athlete or a competitive performer, sports injuries can be frustrating. We provide sport-specific rehab that helps you recover safely, restore performance, and lower the chance of re-injury.',
    bullets: [
      'Treatment for sprains, strains, tendon injuries, joint pain, and overuse conditions.',
      'Hands-on techniques and exercise progressions tailored to your sport and position.',
      'Balance, agility, and strengthening drills to rebuild confidence and performance.',
      'Guidance on return-to-play timelines and injury prevention strategies.',
    ],
    imageSrc: '/bento/sport injury rehab.png',
  },
  {
    id: 'acupuncture-dry-needling',
    title: 'Acupuncture & Dry Needling',
    subtitle: 'Fine needles used to reduce pain, release tension, and support healing.',
    intro:
      'Acupuncture and dry needling are safe, regulated techniques where very thin needles are inserted into specific points or tight muscle bands. These methods can help reduce pain, improve blood flow, and decrease muscle tension as part of a comprehensive physiotherapy plan.',
    bullets: [
      'May be used for headaches, neck and back pain, tendon issues, and persistent muscle tightness.',
      "Can calm irritated nerves, promote relaxation, and support your body's natural healing response.",
      'Always performed by trained clinicians using single-use, sterile needles.',
      'Offered as an optional adjunct—your treatment plan is always based on your comfort and preferences.',
    ],
    imageSrc: '/bento/Acupunture.png',
  },
  {
    id: 'chronic-pain-management',
    title: 'Chronic Pain Management',
    subtitle: 'Supporting long-term pain conditions with movement, education, and coping strategies.',
    intro:
      'Chronic pain is complex and affects every part of life—sleep, mood, work, and relationships. We use a whole-person approach that combines movement, education, and pacing strategies to help you gain control and improve quality of life.',
    bullets: [
      'Focus on safe, graded activity rather than complete rest, to keep joints and muscles healthy.',
      'Education about pain science to help you understand what your body is experiencing.',
      'Breathing, relaxation, and pacing techniques to manage flare-ups more confidently.',
      'Collaboration with your broader healthcare team where appropriate.',
    ],
    imageSrc: '/bento/chronicepain managemnet.png',
  },
  {
    id: 'workplace-injury-treatment',
    title: 'Workplace Injury Treatment',
    subtitle: 'Helping you recover from work-related injuries and navigate return-to-work plans.',
    intro:
      'Workplace injuries can happen suddenly or build up over time from repetitive tasks and poor ergonomics. We help you recover physically while also supporting safe, sustainable return-to-work plans.',
    bullets: [
      'Assessment of injury history, job demands, and contributing ergonomic factors.',
      'Treatment for strains, sprains, repetitive stress injuries, and ergonomic-related pain.',
      'Education on proper lifting, workstation setup, and movement breaks to protect your body.',
      'Guidance with documentation and communication for work-related claims when needed.',
    ],
    imageSrc: '/bento/Workplaceinjury.png',
  },
]
