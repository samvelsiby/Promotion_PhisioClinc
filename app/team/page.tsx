import Image from 'next/image'
import { Instagram, Linkedin } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TeamMember {
  name: string
  title: string
  bio: string
  imageAlt: string
}

const team: TeamMember[] = [
  {
    name: 'Ben Bastin Jose',
    title: 'Registered Physiotherapist',
    bio:
      'Ben is a Registered Physiotherapist in Manitoba with years of experience delivering compassionate, evidence-based care to clients across a wide range of physical conditions. Dedicated to lifelong learning, he continuously advances his clinical knowledge through postgraduate training and certifications, with a treatment philosophy that emphasizes a holistic, client-centred approach.',
    imageAlt: 'Portrait of Ben Bastin Jose',
  },
  {
    name: 'Lijo Paul',
    title: 'Registered Physiotherapist',
    bio:
      'Lijo is an internationally trained Registered Physiotherapist with extensive clinical experience. He is fluent in multiple languages and is committed to delivering personalized care that respects each patient\'s unique background, goals, and challenges. His practice focuses on evidence-based rehabilitation and clear communication.',
    imageAlt: 'Portrait of Lijo Paul',
  },
  {
    name: 'Bency Thekkineth',
    title: 'Community Occupational Therapist',
    bio:
      'Bency is an experienced and compassionate Community Occupational Therapist with a strong background in community and long-term care. She helps clients restore independence through tailored interventions in mobility, positioning, adaptive equipment, and home safety, always centring care around the person and their goals.',
    imageAlt: 'Portrait of Bency Thekkineth',
  },
]

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] pb-16">
      {/* Hero */}
      <section className="w-full bg-[#e63939] text-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-0">
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Meet the Team
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
            Our physiotherapists deliver evidence-based, one-to-one care to help you move better,
            recover faster, and stay pain free.
          </p>
        </div>
      </section>

      {/* Team cards */}
      <section className="mx-auto mt-10 flex max-w-5xl flex-col gap-8 px-4 sm:px-6 lg:px-0">
        {team.map((member, index) => {
          const imageOnLeft = index % 2 === 0

          return (
            <article
              key={member.name}
              className="overflow-hidden rounded-[32px] bg-white shadow-md"
            >
              <div
                className={cn(
                  'flex flex-col md:flex-row',
                  !imageOnLeft && 'md:flex-row-reverse'
                )}
              >
                {/* Photo + social strip */}
                <div className="relative flex items-end justify-center bg-[#e63939] px-6 pb-6 pt-10 text-white md:w-[34%] md:px-8">
                  {/* Social icons */}
                  <div
                    className={cn(
                      'absolute top-6 flex flex-col gap-3',
                      imageOnLeft ? 'left-6' : 'right-6'
                    )}
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                      <Instagram className="h-4 w-4" />
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                      <Linkedin className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Portrait placeholder – replace /logo.png with real photo paths later */}
                  <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white/80 bg-white/10 sm:h-44 sm:w-44">
                    <Image
                      src="/logo.png"
                      alt={member.imageAlt}
                      fill
                      sizes="160px"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Text content */}
                <div className="flex-1 px-6 py-8 sm:px-8 sm:py-10">
                  <h2 className="text-xl font-bold tracking-wide text-gray-900 sm:text-2xl">
                    {member.name.toUpperCase()}
                  </h2>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-[#e63939]">
                    {member.title}
                  </p>
                  <p className="mt-4 max-w-none text-sm leading-relaxed text-gray-700 sm:text-[0.95rem]">
                    {member.bio}
                  </p>
                </div>
              </div>
            </article>
          )
        })}
      </section>
    </main>
  )
}
