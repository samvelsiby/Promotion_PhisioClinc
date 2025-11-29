import { allBentoItems } from '@/components/BentoGrid/bentoItems'

export interface ServiceDetail {
  slug: string
  title: string
  imageSrc: string
  category: string
  description: string
  overview: string
  whatWeTreat: string[]
  treatmentApproach: string[]
  benefits: string[]
  whenToSeekHelp: string[]
}

// Create slug from title
const createSlug = (title: string): string => {
  return title.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// Generate service details from bento items
export const serviceDetails: ServiceDetail[] = allBentoItems.map((item) => {
  // Extract slug from href (e.g., '/services/tmj-dysfunction' -> 'tmj-dysfunction')
  const slug = item.href.replace('/services/', '').replace(/\/$/, '')
  
  // Base content structure - will be customized per service
  const baseContent: Omit<ServiceDetail, 'slug' | 'title' | 'imageSrc' | 'category'> = {
    description: item.description,
    overview: '',
    whatWeTreat: [],
    treatmentApproach: [],
    benefits: [],
    whenToSeekHelp: []
  }

  // Customize content based on service
  const customContent = getCustomContent(item.title, item.description)
  
  return {
    slug,
    title: item.title,
    imageSrc: item.imageSrc,
    category: item.category,
    ...baseContent,
    ...customContent
  }
})

function getCustomContent(title: string, description: string): Partial<ServiceDetail> {
  const contentMap: Record<string, Partial<ServiceDetail>> = {
    'TMJ Dysfunction': {
      overview: 'Temporomandibular joint (TMJ) dysfunction affects the jaw joint and surrounding muscles, causing pain, clicking, and limited jaw movement. Our specialized approach addresses the root causes of TMJ disorders through comprehensive assessment and targeted treatment.',
      whatWeTreat: [
        'Jaw pain and stiffness',
        'Clicking or popping sounds in the jaw',
        'Difficulty opening or closing the mouth',
        'Headaches related to jaw tension',
        'Ear pain or ringing (tinnitus)',
        'Facial muscle pain',
        'Bite alignment issues',
        'Teeth grinding (bruxism)'
      ],
      treatmentApproach: [
        'Manual therapy to release jaw and neck muscles',
        'Joint mobilization techniques',
        'Postural correction and ergonomic advice',
        'Custom exercise programs for jaw mobility',
        'Stress management and relaxation techniques',
        'Education on jaw mechanics and habits'
      ],
      benefits: [
        'Reduced jaw pain and discomfort',
        'Improved jaw mobility and function',
        'Decreased frequency of headaches',
        'Better sleep quality',
        'Enhanced ability to eat and speak comfortably'
      ],
      whenToSeekHelp: [
        'Persistent jaw pain lasting more than a few days',
        'Difficulty chewing or opening your mouth',
        'Frequent headaches or ear pain',
        'Clicking or locking of the jaw',
        'Pain that interferes with daily activities'
      ]
    },
    'Neck Pain Relief': {
      overview: 'Neck pain is one of the most common complaints we see, often resulting from poor posture, muscle strain, or underlying conditions. Our comprehensive approach combines hands-on therapy, exercise, and education to restore comfortable movement and reduce pain.',
      whatWeTreat: [
        'Acute and chronic neck pain',
        'Stiffness and limited range of motion',
        'Neck-related headaches',
        'Whiplash injuries',
        'Cervical disc problems',
        'Muscle spasms and tension',
        'Postural neck pain',
        'Radiculopathy (nerve pain)'
      ],
      treatmentApproach: [
        'Manual therapy and soft tissue release',
        'Joint mobilization and manipulation',
        'Postural assessment and correction',
        'Strengthening and stretching exercises',
        'Ergonomic workstation evaluation',
        'Pain management strategies'
      ],
      benefits: [
        'Significant pain reduction',
        'Improved neck mobility',
        'Better posture and alignment',
        'Reduced frequency of headaches',
        'Enhanced daily function'
      ],
      whenToSeekHelp: [
        'Neck pain lasting more than a week',
        'Pain radiating to shoulders or arms',
        'Numbness or tingling in arms or hands',
        'Difficulty turning your head',
        'Pain that wakes you from sleep'
      ]
    },
    'Shoulder Pain Relief': {
      overview: 'Shoulder pain can significantly impact your ability to perform daily activities and work. Our specialized treatment addresses rotator cuff injuries, frozen shoulder, impingement, and other shoulder conditions through evidence-based techniques.',
      whatWeTreat: [
        'Rotator cuff injuries and tears',
        'Frozen shoulder (adhesive capsulitis)',
        'Shoulder impingement syndrome',
        'Bursitis and tendinitis',
        'Shoulder instability',
        'Post-surgical shoulder rehabilitation',
        'Arthritis of the shoulder',
        'Referred pain from neck issues'
      ],
      treatmentApproach: [
        'Manual therapy and joint mobilization',
        'Strengthening exercises for rotator cuff',
        'Stretching and flexibility work',
        'Postural correction',
        'Activity modification advice',
        'Progressive exercise programs'
      ],
      benefits: [
        'Restored shoulder range of motion',
        'Reduced pain and inflammation',
        'Improved strength and stability',
        'Ability to return to activities and sports',
        'Better sleep and daily function'
      ],
      whenToSeekHelp: [
        'Shoulder pain affecting daily activities',
        'Difficulty raising your arm',
        'Pain at night that disrupts sleep',
        'Weakness or instability in the shoulder',
        'Recent shoulder injury or trauma'
      ]
    },
    'Elbow, Wrist & Hand Pain Relief': {
      overview: 'Upper extremity pain can interfere with work, hobbies, and daily tasks. We provide specialized treatment for conditions affecting the elbow, wrist, and hand, focusing on restoring function and reducing pain.',
      whatWeTreat: [
        'Tennis elbow (lateral epicondylitis)',
        'Golfer\'s elbow (medial epicondylitis)',
        'Carpal tunnel syndrome',
        'Wrist sprains and strains',
        'De Quervain\'s tenosynovitis',
        'Trigger finger',
        'Hand and finger injuries',
        'Repetitive strain injuries'
      ],
      treatmentApproach: [
        'Manual therapy and soft tissue techniques',
        'Strengthening and stretching exercises',
        'Ergonomic assessments and modifications',
        'Splinting and bracing recommendations',
        'Activity modification strategies',
        'Nerve gliding exercises'
      ],
      benefits: [
        'Reduced pain and inflammation',
        'Improved grip strength',
        'Better fine motor function',
        'Ability to return to work and activities',
        'Prevention of future injuries'
      ],
      whenToSeekHelp: [
        'Persistent elbow, wrist, or hand pain',
        'Numbness or tingling in fingers',
        'Weakness in grip or hand function',
        'Pain that interferes with work or hobbies',
        'Difficulty performing daily tasks'
      ]
    },
    'Back Pain & Sciatica Relief': {
      overview: 'Lower back pain and sciatica are among the most common reasons people seek physiotherapy. Our comprehensive approach addresses both the symptoms and underlying causes to help you regain mobility and reduce pain.',
      whatWeTreat: [
        'Acute and chronic lower back pain',
        'Sciatica and nerve pain',
        'Herniated or bulging discs',
        'Spinal stenosis',
        'Spondylolisthesis',
        'Muscle strains and sprains',
        'Postural back pain',
        'Arthritis-related back pain'
      ],
      treatmentApproach: [
        'Manual therapy and spinal mobilization',
        'Core strengthening exercises',
        'Flexibility and stretching programs',
        'Postural education and correction',
        'Pain management techniques',
        'Functional movement retraining'
      ],
      benefits: [
        'Significant pain reduction',
        'Improved mobility and flexibility',
        'Better posture and body mechanics',
        'Reduced risk of future episodes',
        'Enhanced ability to perform daily activities'
      ],
      whenToSeekHelp: [
        'Back pain lasting more than a few days',
        'Pain radiating down the leg (sciatica)',
        'Numbness or tingling in legs or feet',
        'Difficulty standing or walking',
        'Pain that interferes with sleep or work'
      ]
    },
    'Hip & Knee Pain Relief': {
      overview: 'Hip and knee pain can significantly limit mobility and quality of life. Our treatment addresses arthritis, joint pain, and mobility issues through exercise, manual therapy, and education.',
      whatWeTreat: [
        'Hip and knee arthritis',
        'Hip bursitis',
        'IT band syndrome',
        'Patellofemoral pain syndrome',
        'Meniscal injuries',
        'Hip impingement',
        'Knee ligament sprains',
        'Post-surgical hip and knee rehabilitation'
      ],
      treatmentApproach: [
        'Joint mobilization and manual therapy',
        'Strengthening exercises',
        'Flexibility and range of motion work',
        'Gait analysis and correction',
        'Activity modification advice',
        'Education on joint protection'
      ],
      benefits: [
        'Reduced joint pain',
        'Improved mobility and function',
        'Better strength and stability',
        'Ability to return to activities',
        'Delayed progression of arthritis'
      ],
      whenToSeekHelp: [
        'Persistent hip or knee pain',
        'Difficulty walking or climbing stairs',
        'Stiffness and limited range of motion',
        'Pain that affects daily activities',
        'Recent injury or surgery'
      ]
    },
    'Foot & Ankle Pain Relief': {
      overview: 'Foot and ankle problems can affect your ability to walk, exercise, and perform daily activities. We provide comprehensive care for various foot and ankle conditions.',
      whatWeTreat: [
        'Plantar fasciitis',
        'Ankle sprains and instability',
        'Achilles tendonitis',
        'Bunions and foot deformities',
        'Metatarsalgia',
        'Shin splints',
        'Heel pain',
        'Post-surgical foot and ankle rehabilitation'
      ],
      treatmentApproach: [
        'Manual therapy and soft tissue techniques',
        'Strengthening and balance exercises',
        'Gait analysis and correction',
        'Custom orthotic recommendations',
        'Taping and bracing',
        'Activity modification strategies'
      ],
      benefits: [
        'Reduced foot and ankle pain',
        'Improved walking ability',
        'Better balance and stability',
        'Ability to return to sports and activities',
        'Prevention of future injuries'
      ],
      whenToSeekHelp: [
        'Foot or ankle pain affecting walking',
        'Difficulty bearing weight',
        'Persistent heel or arch pain',
        'Ankle instability or frequent sprains',
        'Pain that limits daily activities'
      ]
    },
    'Chronic Pain Relief': {
      overview: 'Chronic pain requires a whole-person approach that goes beyond just treating symptoms. We use movement, education, and coping strategies to help you manage long-term pain and improve your quality of life.',
      whatWeTreat: [
        'Persistent pain lasting 3+ months',
        'Fibromyalgia',
        'Complex regional pain syndrome',
        'Central sensitization',
        'Chronic fatigue and pain',
        'Pain-related anxiety and depression',
        'Functional limitations due to pain'
      ],
      treatmentApproach: [
        'Gentle movement and exercise programs',
        'Pain education and neuroscience',
        'Pacing strategies and activity modification',
        'Relaxation and stress management',
        'Graded exposure to activities',
        'Multidisciplinary approach'
      ],
      benefits: [
        'Better pain management',
        'Improved function and mobility',
        'Reduced reliance on medications',
        'Enhanced quality of life',
        'Better coping strategies'
      ],
      whenToSeekHelp: [
        'Pain persisting for more than 3 months',
        'Pain affecting daily life and activities',
        'Difficulty managing pain on your own',
        'Pain-related anxiety or depression',
        'Wanting to improve function despite pain'
      ]
    },
    'Arthritis Pain Relief': {
      overview: 'Arthritis affects millions of people, but proper management can significantly improve function and reduce pain. We use evidence-based approaches to help you maintain joint health and stay active.',
      whatWeTreat: [
        'Osteoarthritis',
        'Rheumatoid arthritis',
        'Psoriatic arthritis',
        'Joint stiffness and pain',
        'Reduced mobility due to arthritis',
        'Post-arthroplasty rehabilitation'
      ],
      treatmentApproach: [
        'Joint-friendly exercise programs',
        'Manual therapy and mobilization',
        'Education on joint protection',
        'Pain management techniques',
        'Assistive device recommendations',
        'Lifestyle modifications'
      ],
      benefits: [
        'Reduced joint pain and stiffness',
        'Improved mobility and function',
        'Better strength and stability',
        'Delayed disease progression',
        'Enhanced quality of life'
      ],
      whenToSeekHelp: [
        'Joint pain and stiffness affecting daily life',
        'Difficulty with daily activities',
        'Reduced mobility and function',
        'Wanting to stay active despite arthritis',
        'After joint replacement surgery'
      ]
    },
    'Sports Injuries': {
      overview: 'Athletes and active individuals need specialized care to return to peak performance safely. We provide sport-specific rehabilitation that addresses the unique demands of your activity.',
      whatWeTreat: [
        'Sprains and strains',
        'Tendon injuries (tendinitis, tendinopathy)',
        'Overuse injuries',
        'ACL and other ligament injuries',
        'Muscle tears',
        'Concussion management',
        'Return to sport rehabilitation'
      ],
      treatmentApproach: [
        'Sport-specific assessment',
        'Progressive rehabilitation programs',
        'Strength and conditioning',
        'Biomechanical analysis',
        'Injury prevention strategies',
        'Return to play protocols'
      ],
      benefits: [
        'Faster, safer return to sport',
        'Reduced risk of re-injury',
        'Improved performance',
        'Better movement patterns',
        'Enhanced athletic longevity'
      ],
      whenToSeekHelp: [
        'Sports injury preventing participation',
        'Pain during or after activity',
        'Recurring injuries',
        'Wanting to prevent future injuries',
        'Preparing for return to sport'
      ]
    },
    'Work Injuries, WCB & Work Related Injury': {
      overview: 'Work-related injuries require specialized care and documentation. We provide comprehensive treatment while navigating WCB claims and ensuring your safe return to work.',
      whatWeTreat: [
        'Workplace strains and sprains',
        'Repetitive strain injuries',
        'Ergonomic-related pain',
        'Lifting injuries',
        'Slip and fall injuries',
        'WCB claim injuries',
        'Return to work rehabilitation'
      ],
      treatmentApproach: [
        'Comprehensive injury assessment',
        'WCB claim documentation support',
        'Ergonomic workplace assessments',
        'Progressive rehabilitation programs',
        'Return to work planning',
        'Injury prevention education'
      ],
      benefits: [
        'Faster recovery and return to work',
        'Proper WCB claim documentation',
        'Reduced risk of re-injury',
        'Improved workplace ergonomics',
        'Better understanding of injury management'
      ],
      whenToSeekHelp: [
        'Workplace injury requiring treatment',
        'WCB claim requiring documentation',
        'Pain related to work activities',
        'Need for return to work planning',
        'Ergonomic concerns at work'
      ]
    },
    'Motor Vehicle Accident Injuries (MPI)': {
      overview: 'Motor vehicle accidents can cause complex injuries requiring specialized care. We provide comprehensive treatment while helping you navigate MPI claims with proper documentation.',
      whatWeTreat: [
        'Whiplash and neck injuries',
        'Back pain from collisions',
        'Headaches and migraines',
        'Concussion and brain injury',
        'Soft tissue injuries',
        'Psychological trauma-related pain',
        'Post-accident rehabilitation'
      ],
      treatmentApproach: [
        'Comprehensive accident assessment',
        'MPI claim documentation support',
        'Manual therapy and mobilization',
        'Progressive exercise programs',
        'Pain management strategies',
        'Return to activity planning'
      ],
      benefits: [
        'Comprehensive injury recovery',
        'Proper MPI claim documentation',
        'Reduced pain and improved function',
        'Faster return to daily activities',
        'Better understanding of recovery process'
      ],
      whenToSeekHelp: [
        'Injuries from a motor vehicle accident',
        'Neck or back pain after collision',
        'Headaches following an accident',
        'Need for MPI claim documentation',
        'Difficulty returning to normal activities'
      ]
    },
    'Pre & Post-Surgical Rehabilitation': {
      overview: 'Surgical outcomes are significantly improved with proper pre and post-operative rehabilitation. We help you prepare for surgery and recover safely with customized programs.',
      whatWeTreat: [
        'Pre-surgical conditioning',
        'Post-surgical rehabilitation',
        'Joint replacement recovery',
        'Ligament reconstruction rehab',
        'Spinal surgery rehabilitation',
        'Soft tissue surgery recovery'
      ],
      treatmentApproach: [
        'Pre-operative strengthening',
        'Post-operative exercise programs',
        'Manual therapy and mobilization',
        'Scar tissue management',
        'Functional retraining',
        'Education on recovery process'
      ],
      benefits: [
        'Optimized surgical outcomes',
        'Faster recovery times',
        'Reduced post-surgical complications',
        'Better function and mobility',
        'Smoother return to activities'
      ],
      whenToSeekHelp: [
        'Planning for upcoming surgery',
        'Recently had surgery',
        'Post-surgical pain or stiffness',
        'Difficulty with post-surgical exercises',
        'Wanting to optimize recovery'
      ]
    },
    'Home Accessibility Assessments': {
      overview: 'Home accessibility assessments identify barriers and recommend modifications to improve safety, independence, and accessibility in your living environment.',
      whatWeTreat: [
        'Home safety evaluations',
        'Accessibility barriers',
        'Fall risk in the home',
        'Mobility challenges at home',
        'Bathroom and kitchen modifications',
        'Aging in place planning'
      ],
      treatmentApproach: [
        'Comprehensive home evaluation',
        'Barrier identification',
        'Modification recommendations',
        'Equipment recommendations',
        'Safety education',
        'Follow-up assessments'
      ],
      benefits: [
        'Improved home safety',
        'Enhanced independence',
        'Reduced fall risk',
        'Better accessibility',
        'Peace of mind for families'
      ],
      whenToSeekHelp: [
        'Concerns about home safety',
        'Recent fall or near-fall',
        'Difficulty navigating home',
        'Planning for aging in place',
        'Need for home modifications'
      ]
    },
    'Mobility & Adaptive Equipment': {
      overview: 'Mobility and adaptive equipment can significantly enhance independence and safety. We provide assessment, prescription, and training for various aids and devices.',
      whatWeTreat: [
        'Mobility aid assessment',
        'Wheelchair evaluation',
        'Walking aid prescription',
        'Adaptive equipment needs',
        'Equipment training',
        'Home equipment setup'
      ],
      treatmentApproach: [
        'Comprehensive equipment assessment',
        'Equipment prescription',
        'Training on equipment use',
        'Home setup and modifications',
        'Follow-up and adjustments',
        'Education on maintenance'
      ],
      benefits: [
        'Enhanced independence',
        'Improved safety',
        'Better mobility',
        'Increased confidence',
        'Better quality of life'
      ],
      whenToSeekHelp: [
        'Difficulty with mobility',
        'Need for walking aids',
        'Wheelchair assessment needed',
        'Requiring adaptive equipment',
        'Wanting to improve independence'
      ]
    },
    'Wheelchair Seating & Positioning': {
      overview: 'Proper wheelchair seating and positioning is essential for comfort, function, and preventing complications. We provide specialized assessments and recommendations.',
      whatWeTreat: [
        'Wheelchair seating assessments',
        'Postural issues in wheelchair',
        'Pressure sore prevention',
        'Comfort and positioning',
        'Functional positioning',
        'Custom seating needs'
      ],
      treatmentApproach: [
        'Comprehensive seating assessment',
        'Postural analysis',
        'Cushion and support recommendations',
        'Positioning strategies',
        'Education on pressure relief',
        'Follow-up adjustments'
      ],
      benefits: [
        'Optimal comfort',
        'Better posture and function',
        'Pressure sore prevention',
        'Improved independence',
        'Enhanced quality of life'
      ],
      whenToSeekHelp: [
        'Discomfort in wheelchair',
        'Postural problems',
        'Pressure sore concerns',
        'Need for seating assessment',
        'Wanting to optimize positioning'
      ]
    },
    'Pressure Management': {
      overview: 'Pressure injury prevention and management is crucial for individuals with limited mobility. We provide assessment and intervention to protect skin and prevent complications.',
      whatWeTreat: [
        'Pressure injury prevention',
        'Existing pressure sores',
        'Skin integrity concerns',
        'Positioning for pressure relief',
        'Cushioning needs',
        'Wound care coordination'
      ],
      treatmentApproach: [
        'Pressure risk assessment',
        'Cushion and support recommendations',
        'Positioning strategies',
        'Education on pressure relief',
        'Skin care education',
        'Multidisciplinary coordination'
      ],
      benefits: [
        'Prevention of pressure injuries',
        'Improved skin integrity',
        'Better comfort',
        'Reduced complications',
        'Enhanced quality of life'
      ],
      whenToSeekHelp: [
        'At risk for pressure injuries',
        'Existing pressure sores',
        'Limited mobility',
        'Skin integrity concerns',
        'Need for pressure management'
      ]
    },
    'Fall Prevention': {
      overview: 'Falls are a leading cause of injury, especially in older adults. Our comprehensive fall prevention programs include assessment, training, and home modifications.',
      whatWeTreat: [
        'Fall risk assessment',
        'Balance problems',
        'Fear of falling',
        'Previous falls',
        'Gait and mobility issues',
        'Home safety concerns'
      ],
      treatmentApproach: [
        'Comprehensive fall risk assessment',
        'Balance training programs',
        'Strength and conditioning',
        'Home safety evaluation',
        'Education on fall prevention',
        'Assistive device recommendations'
      ],
      benefits: [
        'Reduced fall risk',
        'Improved balance and confidence',
        'Better strength and mobility',
        'Safer home environment',
        'Enhanced independence'
      ],
      whenToSeekHelp: [
        'Recent fall or near-fall',
        'Fear of falling',
        'Balance problems',
        'Wanting to prevent falls',
        'Concerns about home safety'
      ]
    }
  }

  return contentMap[title] || {
    overview: description,
    whatWeTreat: ['Various conditions related to this area'],
    treatmentApproach: ['Comprehensive assessment and treatment'],
    benefits: ['Improved function and reduced pain'],
    whenToSeekHelp: ['When experiencing pain or functional limitations']
  }
}

// Get all service slugs for static generation
export const getAllServiceSlugs = () => {
  return serviceDetails.map(service => service.slug)
}

// Get service by slug
export const getServiceBySlug = (slug: string): ServiceDetail | undefined => {
  return serviceDetails.find(service => service.slug === slug)
}

