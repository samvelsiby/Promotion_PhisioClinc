import { clinicArticles } from '@/lib/clinicArticles'
import { COMPANY_CONTACT, NAP_LINE } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getServiceBySlug, getAllServiceSlugs } from '../serviceData'
import { allBentoItems } from '@/components/BentoGrid/bentoItems'
import { Calendar } from 'lucide-react'
import { pageMetadata } from '@/lib/metadata'
import { getServiceSeoTitle } from '@/lib/serviceSeo'
import JsonLd from '@/components/JsonLd'
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/schema'

interface ServicePageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug)
  if (!service) notFound()
  return pageMetadata(getServiceSeoTitle(service.title), service.description, `/services/${params.slug}`, service.imageSrc)
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  const patientGuides = clinicArticles.filter(article => article.relatedLinks.some(link => link.href === `/services/${params.slug}`))

  // Get related services from the same category
  const relatedServices = allBentoItems
    .filter(item => item.category === service.category && item.href !== `/services/${params.slug}`)
    .slice(0, 5)

  // Get all services for quick links
  const quickLinks = allBentoItems.map(item => ({
    title: item.title,
    href: item.href,
    category: item.category
  }))

  return (
    <main className="min-h-screen bg-gray-50 py-12 sm:py-16 lg:py-20">
      <JsonLd data={getServiceSchema({ name: service.title, description: service.description, path: `/services/${params.slug}` })} />
      <JsonLd data={getBreadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'What We Treat', path: '/what-we-treat' }, { name: service.title, path: `/services/${params.slug}` }])} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-gray-600">
          <Link href="/what-we-treat" className="text-[#EC1C24] hover:underline">
            What We Treat
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{service.title}</span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          {/* Main Content */}
          <div className="space-y-8">
            {/* Header */}
            <header>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#EC1C24] sm:text-sm mb-2">
                {service.category}
              </p>
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl mb-4">
                {service.title}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </header>

            {/* Image */}
            <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden bg-gray-200">
              <Image
                src={service.imageSrc}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 70vw"
                priority
              />
            </div>

            {patientGuides.length > 0 && <section className="rounded-2xl bg-white p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900">Arrange care in St. Vital</h2>
              <p className="mt-4 leading-relaxed text-gray-600">Visit Pro Motion at {NAP_LINE}. Call {COMPANY_CONTACT.PHONE_DISPLAY} to discuss appointment arrangements, or check available appointments online. Tell reception if your visit involves an insurer, MPI, WCB or surgery.</p>
              <p className="mt-4"><Link href="/first-visit" className="font-semibold text-[#c8101e] underline">Prepare for your first visit</Link></p>
              <h3 className="mt-6 text-lg font-semibold">Related patient guides</h3>
              <ul className="mt-3 space-y-3">{patientGuides.map(article => <li key={article.slug}><Link href={`/blogs/${article.slug}`} className="text-[#c8101e] underline underline-offset-4">{article.title}</Link></li>)}</ul>
            </section>}
            {/* Overview */}
            {service.overview && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                <p className="text-gray-700 leading-relaxed">
                  {service.overview}
                </p>
              </section>
            )}

            {/* What We Treat */}
            {service.whatWeTreat.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Treat</h2>
                <ul className="space-y-3">
                  {service.whatWeTreat.map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#EC1C24]" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Treatment Approach */}
            {service.treatmentApproach.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Treatment Approach</h2>
                <ul className="space-y-3">
                  {service.treatmentApproach.map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#EC1C24]" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Benefits */}
            {service.benefits.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Care Goals</h2>
                <ul className="space-y-3">
                  {service.benefits.map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#EC1C24]" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* When to Seek Help */}
            {service.whenToSeekHelp.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">When to Seek Help</h2>
                <ul className="space-y-3">
                  {service.whenToSeekHelp.map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#EC1C24]" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* CTA Section */}
            <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Start Your Treatment?
                </h2>
                <p className="text-gray-600 mb-6">
                  Book an appointment with our experienced team and take the first step toward recovery.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="https://pmphysio.juvonno.com/portal/publicbook.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#EC1C24] px-8 py-4 text-base font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#C41A20] hover:shadow-lg"
                  >
                    <Calendar className="h-5 w-5" />
                    Book Now
                  </Link>
                  <Link
                    href="/about#appointment-form"
                    className="inline-flex items-center justify-center rounded-full border-2 border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-900 transition-all duration-300 hover:border-[#EC1C24] hover:bg-gray-50"
                  >
                    Request Appointment
                  </Link>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar - Quick Links */}
          <aside className="lg:sticky lg:top-8 h-fit space-y-6">
            {/* Other Pages Links */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Navigation</h3>
              <nav className="space-y-2">
                <Link
                  href="/how-we-treat"
                  className="block px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  How We Treat
                </Link>
                <Link
                  href="/insurance"
                  className="block px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Insurance Providers
                </Link>
                <Link
                  href="/#faq"
                  className="block px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  FAQs
                </Link>
                <Link
                  href="/team"
                  className="block px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Meet Our Team
                </Link>
                <Link
                  href="/about"
                  className="block px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  About Us
                </Link>
              </nav>
            </div>

            {/* All Services Links */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">All Services</h3>
              <nav className="space-y-2 max-h-[400px] overflow-y-auto">
                {quickLinks.map((link) => {
                  const isActive = link.href === `/services/${params.slug}`
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                        isActive
                          ? 'bg-[#EC1C24] text-white font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {link.title}
                    </Link>
                  )
                })}
              </nav>
            </div>

            {/* Related Services */}
            {relatedServices.length > 0 && (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mt-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Related Services</h3>
                <nav className="space-y-2">
                  {relatedServices.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>
              </div>
            )}
          </aside>
        </div>
      </div>
    </main>
  )
}
