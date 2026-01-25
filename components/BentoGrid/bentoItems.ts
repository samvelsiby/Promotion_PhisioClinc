export type BodyPartCategory = 
  | 'Head & Neck'
  | 'Upper Body'
  | 'Back & Spine'
  | 'Lower Body'
  | 'Chronic Conditions'
  | 'Injury Types'
  | 'Surgical'
  | 'Occupational Therapy'

export interface BentoItem {
  title: string
  imageSrc: string
  href: string
  spanClass?: string
  description: string
  category: BodyPartCategory
}

// Most popular/relevant services for homepage (first 9)
const popularServices = [
  'Back Pain & Sciatica Relief',
  'Sports Injuries',
  'Work Injuries, WCB & Work Related Injury',
  'Motor Vehicle Accident Injuries (MPI)',
  'Neck Pain Relief',
  'Shoulder Pain Relief',
  'Hip & Knee Pain Relief',
  'Chronic Pain Relief',
  'Pre & Post-Surgical Rehabilitation',
]

// All items - organized from head to toe
export const allBentoItems: BentoItem[] = [
  // Head to Toe - Anatomical Order
  {
    title: 'TMJ Dysfunction',
    imageSrc: '/bento/TMJ.jpg',
    href: '/services/tmj-dysfunction',
    description: 'Professional treatment for jaw pain, TMJ disorders, and headaches using targeted therapy techniques.',
    category: 'Head & Neck',
  },
  {
    title: 'Neck Pain Relief',
    imageSrc: '/bento/neck.png',
    href: '/services/neck-pain-relief',
    description: 'Relief for neck pain and stiffness through manual therapy and postural correction.',
    category: 'Head & Neck',
  },
  {
    title: 'Shoulder Pain Relief',
    imageSrc: '/bento/shoulder.jpg',
    href: '/services/shoulder-pain-relief',
    description: 'Restore shoulder mobility and strength for rotator cuff injuries and frozen shoulder.',
    category: 'Upper Body',
  },
  {
    title: 'Elbow, Wrist & Hand Pain Relief',
    imageSrc: '/bento/elbowpain.jpg',
    href: '/services/elbow-wrist-hand-pain-relief',
    description: 'Effective care for tennis elbow, carpal tunnel, and wrist injuries.',
    category: 'Upper Body',
  },
  {
    title: 'Back Pain & Sciatica Relief',
    imageSrc: '/bento/backpain.png',
    href: '/services/back-pain-sciatica-relief',
    description: 'Comprehensive relief for back pain and sciatica using proven therapy techniques.',
    category: 'Back & Spine',
  },
  {
    title: 'Hip & Knee Pain Relief',
    imageSrc: '/bento/hip and kneee.jpg',
    href: '/services/hip-knee-pain-relief',
    description: 'Restore mobility and reduce pain from hip and knee conditions including arthritis.',
    category: 'Lower Body',
  },
  {
    title: 'Foot & Ankle Pain Relief',
    imageSrc: '/bento/Foot & Ankle Pain Relief.jpg',
    href: '/services/foot-ankle-pain-relief',
    description: 'Treatment for plantar fasciitis, ankle sprains, and Achilles tendon issues.',
    category: 'Lower Body',
  },
  // Other Conditions & Services
  {
    title: 'Chronic Pain Relief',
    imageSrc: '/bento/new/chronic pain management.webp',
    href: '/services/chronic-pain-relief',
    description: 'Holistic approach to managing chronic pain and improving quality of life.',
    category: 'Chronic Conditions',
  },
  {
    title: 'Arthritis Pain Relief',
    imageSrc: '/bento/Arthritis.avif',
    href: '/services/arthritis-pain-relief',
    description: 'Evidence-based care for arthritis to reduce pain and maintain joint health.',
    category: 'Chronic Conditions',
  },
  {
    title: 'Sports Injuries',
    imageSrc: '/bento/new/sports injurt.webp',
    href: '/services/sports-injuries',
    description: 'Sport-specific rehabilitation to get athletes back to peak performance safely.',
    category: 'Injury Types',
  },
  {
    title: 'Work Injuries, WCB & Work Related Injury',
    imageSrc: '/bento/new/workplace injurty treatment.webp',
    href: '/services/work-injuries',
    description: 'Professional care for workplace injuries with full WCB claim support and documentation.',
    category: 'Injury Types',
  },
  {
    title: 'Motor Vehicle Accident Injuries (MPI)',
    imageSrc: '/bento/Motorvehicel.png',
    href: '/services/motor-vehicle-accident-recovery',
    description: 'Specialized treatment for whiplash and collision injuries with MPI claim support.',
    category: 'Injury Types',
  },
  {
    title: 'Pre & Post-Surgical Rehabilitation',
    imageSrc: '/bento/pre and post op.webp',
    href: '/services/pre-post-surgical-conditions',
    description: 'Optimize surgical outcomes with pre and post-operative rehabilitation programs.',
    category: 'Surgical',
  },
  // Occupational Therapy Services
  {
    title: 'Home Accessibility Assessments',
    imageSrc: '/bento/home acceslity assement.jpg',
    href: '/services/home-accessibility-assessments',
    description: 'Home evaluations and modifications to improve safety and accessibility.',
    category: 'Occupational Therapy',
  },
  {
    title: 'Mobility & Adaptive Equipment',
    imageSrc: '/bento/mobiltu and adaptie equiment.jpg',
    href: '/services/mobility-adaptive-equipment',
    description: 'Assessment and training for mobility aids to enhance independence.',
    category: 'Occupational Therapy',
  },
  {
    title: 'Wheelchair Seating & Positioning',
    imageSrc: '/bento/new/wheel chair psoitons .jpg',
    href: '/services/wheelchair-seating-positioning',
    description: 'Specialized wheelchair seating to optimize comfort and prevent complications.',
    category: 'Occupational Therapy',
  },
  {
    title: 'Pressure Management',
    imageSrc: '/bento/new/pressue managenet.jpg',
    href: '/services/pressure-management',
    description: 'Pressure injury prevention through specialized cushioning and positioning.',
    category: 'Occupational Therapy',
  },
  {
    title: 'Fall Prevention',
    imageSrc: '/bento/Fallsprevention.jpg',
    href: '/services/fall-prevention',
    description: 'Fall risk assessment and prevention through balance training and safety modifications.',
    category: 'Occupational Therapy',
  },
]

// Get items ordered by popularity for homepage
export const getPopularBentoItems = (): BentoItem[] => {
  const popular = popularServices
    .map(title => allBentoItems.find(item => item.title === title))
    .filter((item): item is BentoItem => item !== undefined)
  
  // Add remaining items that aren't in popular list
  const remaining = allBentoItems.filter(item => !popularServices.includes(item.title))
  
  return [...popular, ...remaining]
}

