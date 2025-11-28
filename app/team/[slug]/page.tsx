import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { teamMembers } from '../teamData'
import { Linkedin, Instagram, ArrowLeft } from 'lucide-react'

export function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }))
}

interface TeamMemberPageProps {
  params: {
    slug: string
  }
}

export default function TeamMemberPage({ params }: TeamMemberPageProps) {
  const member = teamMembers.find((m) => m.slug === params.slug)

  if (!member) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Back Button */}
        <Link
          href="/team"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#e63939] transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span className="text-sm font-medium">Back to Team</span>
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="relative w-full lg:w-[40%] bg-gray-200 flex items-center justify-center overflow-hidden h-[400px] lg:h-[600px]">
              <div className="relative w-full h-full">
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-[60%] p-8 md:p-10 lg:p-12">
              <div className="mb-6">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 uppercase tracking-tight mb-2">
                  {member.name}
                </h1>
                <p className="text-sm font-medium uppercase tracking-widest text-gray-500 mb-6">
                  {member.role}
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mb-8">
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#e63939] text-white hover:bg-[#c62828] transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={member.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#e63939] text-white hover:bg-[#c62828] transition-colors"
                >
                  <Instagram size={20} />
                </a>
              </div>

              {/* Bio */}
              <div className="text-gray-600 leading-relaxed text-base space-y-4">
                {member.bio.split('\n\n').map((paragraph: string, idx: number) => (
                  <p key={idx}>{paragraph.trim()}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

