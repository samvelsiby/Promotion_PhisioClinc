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
      description: 'TMJ and jaw pain physiotherapy in St. Vital, Winnipeg. Discuss jaw discomfort, chewing and movement at an assessment, including whether dental or medical care is also needed.',
      overview: 'Temporomandibular joint (TMJ) dysfunction affects the jaw joint and surrounding muscles, causing pain, clicking, and limited jaw movement. An assessment can help determine whether physiotherapy is appropriate for your jaw symptoms and whether dental or medical assessment is also needed.',
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
      overview: 'Shoulder pain can significantly impact your ability to perform daily activities and work. Our treatment addresses rotator cuff injuries, frozen shoulder, impingement, and other shoulder conditions through evidence-based techniques.',
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
      overview: 'Upper extremity pain can interfere with work, hobbies, and daily tasks. We provide treatment for conditions affecting the elbow, wrist, and hand, focusing on restoring function and reducing pain.',
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
      description: "Back pain and sciatica physiotherapy in St. Vital, Winnipeg. Book an assessment at Pro-Motion on St. Anne’s Road and discuss a plan for your daily activities.",
      overview: "At Pro-Motion in St. Vital, your back-pain assessment starts with a discussion of your symptoms, daily activities and goals. Your physiotherapist assesses how you move and explains the findings before discussing a care plan. Bring any relevant reports and tell us what makes sitting, walking, work or sleep difficult. The treatment plan and follow-up schedule depend on your assessment.",
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
        'A plan tailored to your symptoms and activity goals',
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
      description: "Sports injury physiotherapy in St. Vital, Winnipeg. Discuss your sport, injury and return-to-activity goals with the team at Pro-Motion. Book an assessment.",
      overview: "Whether you play recreationally or train regularly, tell your physiotherapist about your sport, training schedule and the activities you want to return to. At our St. Vital clinic, an assessment helps shape a rehabilitation plan around your current abilities and goals. Progress and return-to-sport decisions are individual; an appointment does not guarantee a particular recovery date.",
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
        'An individualized plan for return to sport',
        'Reduced risk of re-injury',
        'Exercises matched to your sport and current abilities',
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
      description: 'WCB and work-injury physiotherapy in St. Vital, Winnipeg. Bring your claim details and discuss your job demands, rehabilitation goals and billing arrangements.',
      overview: 'At Pro-Motion on St. Anne’s Road, your work-injury assessment considers the activities your job involves and what is difficult now. Bring any existing work restrictions, medical recommendations and WCB claim details. Your physiotherapist can discuss rehabilitation and progress with you; WCB determines claim eligibility and treatment authorization.',
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
        'Rehabilitation goals linked to your work tasks',
        'Reports prepared for your WCB claim when required',
        'A plan for returning to work that you can discuss with your employer',
        'Advice on setting up your workstation or tasks',
        'Time to ask questions about managing your injury'
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
      description: "Physiotherapy after a car accident in St. Vital, Winnipeg. Contact Pro-Motion about an assessment, MPI claim details and appointment arrangements.",
      overview: "If you are booking after a motor vehicle collision, tell reception and bring any available claim details, medical reports and insurer correspondence. Your physiotherapist will discuss your symptoms and daily activities as part of the assessment. Ask reception about billing arrangements before your visit. Booking an appointment does not confirm MPI coverage or approval of a claim.",
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
        'An assessment of your symptoms and daily activities after the collision',
        'Reports prepared for your MPI claim when required',
        'A treatment plan agreed with you and reviewed as you progress',
        'Support with a gradual return to daily activities',
        'Time to ask questions about what to expect'
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

