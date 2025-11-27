export interface BentoItem {
  title: string
  imageSrc: string
  href: string
  spanClass?: string
  description: string
}

// All items - most popular/searched first
export const allBentoItems: BentoItem[] = [
  // Most Popular/Searched (Top 9)
  {
    title: 'Back Pain & Sciatica Relief',
    imageSrc: '/bento/Electrotheraputic modalities.png',
    href: '/services/back-pain-sciatica-relief',
    description: 'Comprehensive treatment for lower back pain and sciatica, including manual therapy, exercise, and pain management techniques to restore mobility and reduce nerve-related discomfort.',
  },
  {
    title: 'Sports Injuries',
    imageSrc: '/bento/sport injury rehab.png',
    href: '/services/sports-injuries',
    description: 'Sport-specific rehabilitation for athletes and active individuals. We treat sprains, strains, tendon injuries, and overuse conditions to get you back to peak performance safely.',
  },
  {
    title: 'Motor Vehicle Accident Injuries (MPI)',
    imageSrc: '/bento/Motorvehicel.png',
    href: '/services/motor-vehicle-accident-recovery',
    description: 'Specialized care for whiplash, back pain, headaches, and other collision-related injuries. We help you recover and navigate MPI claims with comprehensive treatment and documentation support.',
  },
  {
    title: 'Work Injuries',
    imageSrc: '/bento/Workplaceinjury.png',
    href: '/services/work-injuries',
    description: 'Treatment for work-related injuries including strains, sprains, repetitive stress injuries, and ergonomic-related pain. We support your recovery and safe return to work.',
  },
  {
    title: 'Chronic Pain Relief',
    imageSrc: '/bento/chronicepain managemnet.png',
    href: '/services/chronic-pain-relief',
    description: 'A whole-person approach to managing long-term pain conditions through movement, education, pacing strategies, and coping techniques to improve your quality of life.',
  },
  {
    title: 'Pre & Post-Surgical Rehabilitation',
    imageSrc: '/bento/pre:post sueguery.png',
    href: '/services/pre-post-surgical-conditions',
    description: 'Pre-operative strengthening and post-operative rehabilitation to optimize surgical outcomes. We help you prepare for surgery and recover safely with customized exercise programs.',
  },
  {
    title: 'Neck Pain Relief',
    imageSrc: '/bento/Electrotheraputic modalities.png',
    href: '/services/neck-pain-relief',
    description: 'Targeted treatment for neck pain, stiffness, and related headaches. Our approach includes manual therapy, exercise, and postural correction to restore comfortable movement.',
  },
  {
    title: 'Hip & Knee Pain Relief',
    imageSrc: '/bento/Electrotheraputic modalities.png',
    href: '/services/hip-knee-pain-relief',
    description: 'Comprehensive care for hip and knee conditions including arthritis, joint pain, and mobility issues. We use exercise, manual therapy, and education to improve function and reduce pain.',
  },
  {
    title: 'Shoulder Pain Relief',
    imageSrc: '/bento/Electrotheraputic modalities.png',
    href: '/services/shoulder-pain-relief',
    description: 'Specialized treatment for shoulder pain, rotator cuff injuries, frozen shoulder, and impingement. We restore range of motion and strength through targeted exercises and hands-on therapy.',
  },
  // Additional items
  {
    title: 'Elbow, Wrist & Hand Pain Relief',
    imageSrc: '/bento/Electrotheraputic modalities.png',
    href: '/services/elbow-wrist-hand-pain-relief',
    description: 'Treatment for tennis elbow, carpal tunnel syndrome, wrist sprains, and hand injuries. We focus on restoring fine motor function and reducing pain in the upper extremities.',
  },
  {
    title: 'Foot & Ankle Pain Relief',
    imageSrc: '/bento/Electrotheraputic modalities.png',
    href: '/services/foot-ankle-pain-relief',
    description: 'Care for foot and ankle conditions including plantar fasciitis, ankle sprains, Achilles tendon issues, and biomechanical problems. We help you walk and move comfortably again.',
  },
  {
    title: 'Arthritis Pain Relief',
    imageSrc: '/bento/chronicepain managemnet.png',
    href: '/services/arthritis-pain-relief',
    description: 'Evidence-based management for osteoarthritis, rheumatoid arthritis, and other joint conditions. We use exercise, manual therapy, and education to reduce pain and maintain joint health.',
  },
  {
    title: 'TMJ Dysfunction',
    imageSrc: '/bento/Acupunture.png',
    href: '/services/tmj-dysfunction',
    description: 'Specialized treatment for temporomandibular joint (TMJ) disorders, jaw pain, and related headaches. We address muscle tension, joint mobility, and bite alignment issues.',
  },
  {
    title: 'Home Accessibility Assessments',
    imageSrc: '/bento/work reconditioning.png',
    href: '/services/home-accessibility-assessments',
    description: 'Comprehensive home evaluations to identify barriers and recommend modifications for improved safety, independence, and accessibility in your living environment.',
  },
  {
    title: 'Mobility & Adaptive Equipment',
    imageSrc: '/bento/work reconditioning.png',
    href: '/services/mobility-adaptive-equipment',
    description: 'Assessment, prescription, and training for mobility aids and adaptive equipment to enhance independence and safety in daily activities and community participation.',
  },
  {
    title: 'Wheelchair Seating & Positioning',
    imageSrc: '/bento/work reconditioning.png',
    href: '/services/wheelchair-seating-positioning',
    description: 'Specialized seating assessments and wheelchair positioning to optimize comfort, function, and prevent secondary complications such as pressure sores and postural issues.',
  },
  {
    title: 'Pressure Management',
    imageSrc: '/bento/work reconditioning.png',
    href: '/services/pressure-management',
    description: 'Assessment and intervention for pressure injury prevention and management, including specialized cushioning, positioning strategies, and skin care education.',
  },
  {
    title: 'Fall Prevention',
    imageSrc: '/bento/work reconditioning.png',
    href: '/services/fall-prevention',
    description: 'Comprehensive fall risk assessment and prevention programs including balance training, home safety modifications, and education to reduce fall risk and maintain independence.',
  },
]

