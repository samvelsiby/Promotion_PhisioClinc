import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { treatments } from '../treatments'

interface ServicePageProps {
  params: { id: string }
}

export function generateStaticParams() {
  return treatments.map((treatment) => ({ id: treatment.id }))
}

export default function ServicePage({ params }: ServicePageProps) {
  const treatment = treatments.find((item) => item.id === params.id)

  if (!treatment) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8 sm:mb-10">
          <nav
            aria-label="Breadcrumb"
            className="mb-2 text-xs text-gray-500 sm:text-sm"
          >
            <Link
              href="/services"
              className="text-[#e63939] hover:underline"
            >
              Services
            </Link>
            <span className="mx-1">/</span>
            <span className="text-gray-700">{treatment?.title}</span>
          </nav>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e63939] sm:text-sm">
            What We Treat
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl">
            {treatment?.title}
          </h1>
          <p className="mt-3 max-w-2xl text-sm font-medium text-[#e63939] sm:text-base">
            {treatment?.subtitle}
          </p>
        </header>

        <section className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-start">
          {/* Text content */}
          <div className="space-y-4 text-sm leading-relaxed text-gray-700 sm:text-[0.95rem]">
            <p>{treatment?.intro}</p>
            <ul className="mt-2 space-y-2">
              {treatment?.bullets.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#e63939]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 rounded-2xl bg-red-50 p-4 text-xs text-gray-700 sm:text-sm">
              <p className="font-semibold text-[#e63939]">Please note</p>
              <p className="mt-1">
                Every treatment plan is tailored to you. The information on this page is general and
                meant for education only. Your physiotherapist will assess your unique situation and
                recommend the most appropriate approach.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-56 overflow-hidden rounded-3xl bg-gray-100 shadow-sm sm:h-72 lg:h-full">
            {treatment?.imageSrc ? (
              <Image
                src={treatment.imageSrc}
                alt={treatment.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 text-sm text-gray-500">
                Image coming soon
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  )
}
