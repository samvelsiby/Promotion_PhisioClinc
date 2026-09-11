export interface TeamMember {
  id: number
  name: string
  slug: string
  role: string
  bio: string
  imageSrc: string
  socials: {
    instagram: string
    linkedin: string
  }
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "BEN BASTIN JOSE",
    slug: "ben-bastin-jose",
    role: "Owner | Registered Physiotherapist, BPT",
    bio: "Ben Bastin Jose is a Registered Physiotherapist in Manitoba with over four years of experience delivering compassionate, evidence-based care to clients across a wide range of physical conditions.\n\nHe earned his Bachelor's Degree in Physiotherapy from Mahatma Gandhi University, India, in 2013. After relocating to Canada, Ben successfully completed the Canadian Physiotherapy Competency Examination in September 2021, earning his professional license to practise in Manitoba.\n\nDedicated to lifelong learning, Ben continuously advances his clinical knowledge through postgraduate training and certifications. His treatment philosophy emphasizes a holistic, client-centered approach that integrates hands-on techniques, exercise therapy, and education to help clients restore function and achieve their individual rehabilitation goals.\n\nCurrently, Ben is expanding his expertise by pursuing advanced certifications in Acupuncture, Pediatric Physiotherapy, and Neuro Rehabilitation.\n\nA lifelong sports enthusiast, Ben has actively participated in cricket and basketball, experiences that have deepened his understanding of sports-related injuries and performance recovery. Outside of his professional life, he enjoys fishing and spending quality time with his family.\n\nFluent in English, Hindi, Malayalam, and Tamil, Ben is able to connect with clients from diverse cultural backgrounds with empathy and understanding. His passion for physiotherapy and commitment to patient care led him to establish Pro-Motion Physiotherapy Inc., where he continues to promote movement, wellness, and recovery within his community.",
    imageSrc: "/team/ben-studio.png",
    socials: { instagram: "#", linkedin: "#" }
  },
  {
    id: 2,
    name: "LIJO PAUL",
    slug: "lijo-paul",
    role: "Owner | Registered Physiotherapist, MPT, BPT",
    bio: "Lijo Paul is a dedicated Registered Physiotherapist with over 15 years of experience in clinical practice, teaching, and patient-focused rehabilitation. He completed his Bachelor's in Physiotherapy (2002–2006) from Calicut University, Kerala, India, and earned his Master's in Physiotherapy (2009–2011) in Musculoskeletal Disorders and Sports Injuries from the same university, achieving top academic distinction in both programs.\n\nA committed lifelong learner, Lijo continually enhances his clinical skills through advanced training in manual therapy, soft-tissue release, K-taping, acupuncture, cupping therapy, concussion management, and evidence-based rehabilitation. He has contributed to the advancement of physiotherapy through active participation in research studies and presentation of papers at professional forums.\n\nLijo is equally passionate about community involvement. He has volunteered with the Malayalee Association of Manitoba, St. Jude Syro-Malabar Catholic Church, and several local initiatives, supporting cultural and charitable programs. He truly enjoys working with people from diverse communities and cultural backgrounds, fostering an inclusive, welcoming environment for all his patients.\n\nHe communicates fluently in English, Malayalam, Tamil, and Hindi, helping him build strong therapeutic relationships with individuals from various linguistic and cultural groups.\n\nLijo is dedicated to delivering compassionate, individualized care that helps patients restore movement, reduce pain, and improve their overall quality of life.",
    imageSrc: "/team/lijo-studio.png",
    socials: { instagram: "#", linkedin: "#" }
  },
  {
    id: 3,
    name: "HIMANI UPADHYAY",
    slug: "himani-upadhyay",
    role: "Physiotherapy Assistant (PTA)",
    bio: "",
    imageSrc: "/team/himani-studio.png",
    socials: { instagram: "#", linkedin: "#" }
  },
  {
    id: 4,
    name: "MANVEER",
    slug: "manveer",
    role: "Physiotherapist (Exam Candidate)",
    bio: "Manveer completed her Bachelor of Physiotherapy (BPT) from Guru Nanak Dev University, India, where she developed a solid foundation in evidence-based physiotherapy practice. Following her graduation, she gained valuable voluntary clinical experience in India, working with diverse patient populations and conditions, which further strengthened her hands-on skills and patient-centered approach.\n\nAfter relocating to Canada, she successfully cleared her physiotherapy examination and is working as an exam candidate, continuing to grow professionally within the Canadian healthcare system. She believes in providing compassionate, individualized care, focusing on functional recovery, patient education, and long-term wellness. She is committed to continuous learning, effective communication, and building trust with her patients to help them achieve their rehabilitation goals.\n\nOutside of work, she enjoys traveling to different places, trying a variety of foods, and getting to know people from diverse backgrounds. She is a strong advocate for an active and healthy lifestyle and enjoys staying fit, which aligns closely with her professional philosophy of promoting movement and well-being.",
    imageSrc: "/team/manveer-studio.png",
    socials: { instagram: "#", linkedin: "#" }
  },
  ]

