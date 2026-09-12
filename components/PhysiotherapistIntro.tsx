import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { teamMembers } from '@/app/team/teamData'

export default function PhysiotherapistIntro() {
  const physiotherapists = teamMembers.filter((member) => member.id === 1 || member.id === 2)

  return (
    <section id="physiotherapists" aria-labelledby="physiotherapists-heading" className="relative w-full scroll-mt-32 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="mb-4 inline-block rounded-full bg-red-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#e63939]">People behind your care</span>
            <h2 id="physiotherapists-heading" className="scroll-mt-32 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">Get to know your physiotherapists.</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-600">A local team that listens, explains, and works with you. Meet the owners of Pro Motion Physiotherapy in St. Vital, Winnipeg.</p>
          </div>
          <Link href="/team" className="inline-flex min-h-11 shrink-0 items-center gap-2 font-semibold text-[#c8101e] hover:underline underline-offset-4">Meet the whole team <ArrowUpRight size={19} aria-hidden="true" /></Link>
        </div>
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-8">
          {physiotherapists.map((member) => (
            <Link key={member.id} href={`/team/${member.slug}`} className="home-card group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c8101e] sm:gap-6 sm:p-6">
              <div className="relative aspect-[3/4] w-24 shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:w-36">
                <Image src={member.imageSrc} alt={member.name.toLowerCase().replace(/\b\w/g, (letter) => letter.toUpperCase())} fill sizes="(max-width: 639px) 96px, 144px" className="object-contain" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xl font-bold leading-tight text-gray-900 group-hover:text-[#c8101e] sm:text-2xl">{member.name.toLowerCase().replace(/\b\w/g, (letter) => letter.toUpperCase())}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base">{member.role}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#c8101e]">Read profile <ArrowUpRight size={17} aria-hidden="true" /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
