import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { fetchBlogPostBySlug, fetchBlogSlugs, fetchBlogPosts } from '@/lib/sanity'
import { pageMetadata } from '@/lib/metadata'
import JsonLd from '@/components/JsonLd'
import { getArticleSchema, getBreadcrumbSchema } from '@/lib/schema'

export const revalidate = 60

function formatDateLong(dateString?: string) {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

interface BlogPostPageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = await fetchBlogSlugs()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await fetchBlogPostBySlug(params.slug)
  if (!post) notFound()
  const metadata = pageMetadata(`${post.title} | Pro Motion Physiotherapy`, post.excerpt || `Read ${post.title} from Pro Motion Physiotherapy in Winnipeg.`, `/blogs/${post.slug}`, post.mainImageUrl)
  return { ...metadata, openGraph: { ...metadata.openGraph, type: 'article' as const, publishedTime: post.publishedAt || undefined } }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const [post, allPosts] = await Promise.all([
    fetchBlogPostBySlug(params.slug),
    fetchBlogPosts(5),
  ])

  if (!post) {
    notFound()
  }

  const serviceLinks: Record<string, { href: string; label: string }> = {
    'understanding-acl-injuries-recovery-timelines-and-the-path-to-ret1urn-to-play': { href: '/services/sports-injuries', label: 'Sports injury physiotherapy in Winnipeg' },
    'whiplash-after-a-car-accident-mpi-why-your-recovery-deserves-more-than-a-referral': { href: '/services/motor-vehicle-accident-recovery', label: 'Physiotherapy after a motor vehicle collision' },
    'recovering-after-a-motor-vehicle-accident': { href: '/services/motor-vehicle-accident-recovery', label: 'MPI and motor vehicle accident rehabilitation' },
  }
  const serviceLink = serviceLinks[params.slug]
  const topPosts = (allPosts || []).filter((p) => p.slug !== params.slug).slice(0, 4)

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20 lg:py-24">
      <JsonLd data={getArticleSchema({ title: post.title, description: post.excerpt || post.title, path: `/blogs/${post.slug}`, datePublished: post.publishedAt || undefined, image: post.mainImageUrl })} />
      <JsonLd data={getBreadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Blogs', path: '/blogs' }, { name: post.title, path: `/blogs/${post.slug}` }])} />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Breadcrumb"
          className="mb-4 text-xs text-gray-500 sm:text-sm"
        >
          <Link href="/blogs" className="text-[#e63939] hover:underline">
            Blogs
          </Link>
          <span className="mx-1">/</span>
          <span className="text-gray-700">{post.title}</span>
        </nav>

        <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)] lg:items-start">
          <section>
            <header className="mb-6 sm:mb-8">
              {post.tag && (
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-gray-400">
                  {post.tag}
                </p>
              )}
              <h1 className="mt-2 text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl">
                {post.title}
              </h1>
              {(post.publishedAt || post.readTime) && (
                <p className="mt-3 text-xs text-gray-500 sm:text-sm">
                  {post.publishedAt && <span>{formatDateLong(post.publishedAt)}</span>}
                  {post.publishedAt && post.readTime && <span className="mx-1">•</span>}
                  {post.readTime && <span>{post.readTime}</span>}
                </p>
              )}
            </header>

            {post.mainImageUrl && (
              <div className="mb-8 overflow-hidden rounded-3xl bg-gray-100 shadow-sm sm:mb-10">
                <div className="relative h-56 w-full sm:h-72 md:h-80">
                  <Image
                    src={post.mainImageUrl}
                    alt={post.mainImageAlt || post.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 768px, 100vw"
                  />
                </div>
              </div>
            )}

            <article className="prose prose-sm max-w-none text-gray-800 sm:prose-base">
              {Array.isArray(post.body) && post.body.length > 0 ? (
                <PortableText value={post.body} components={{ block: { h1: ({ children }) => <h2 className="!text-[2.1428571em] !font-extrabold !leading-[1.2] !mt-0 !mb-[0.8em] sm:!text-[2.25em] sm:!leading-[1.1111111] sm:!mb-[0.888889em]">{children}</h2> } }} />
              ) : (
                <p>No content available for this post yet.</p>
              )}
              {!!post.relatedLinks?.length && <section aria-labelledby="article-next-steps">
                <h2 id="article-next-steps">Plan your next step</h2>
                <ul>{post.relatedLinks.map(link => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}</ul>
              </section>}
              {serviceLink && <section aria-labelledby="related-clinic-care">
                <h2 id="related-clinic-care">Discuss your recovery with a physiotherapist</h2>
                <p>This article provides general information. Your assessment, goals and any recommendations from your healthcare team determine your individual care plan.</p>
                <p>Explore <Link href={serviceLink.href}>{serviceLink.label}</Link> at Pro Motion in Meadowood, St. Vital, or <Link href="/first-visit">prepare for your first appointment</Link>.</p>
              </section>}
            </article>
          </section>

          <aside className="space-y-6 lg:sticky lg:top-28">
            {topPosts.length > 0 && (
              <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                  More patient guides
                </p>
                <ul className="mt-4 space-y-3">
                  {topPosts.map((item) => (
                    <li key={item._id}>
                      <Link
                        href={`/blogs/${item.slug}`}
                        className="group block text-sm leading-snug"
                      >
                        <p className="font-medium text-slate-900 transition-colors duration-200 group-hover:text-[#e63939]">
                          {item.title}
                        </p>
                        {item.readTime && (
                          <p className="mt-1 text-xs text-slate-400">{item.readTime}</p>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="rounded-2xl bg-[#58595B] px-6 py-7 text-white shadow-md sm:px-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9CA3AF]">
                Need support?
              </p>
              <h3 className="mt-2 text-lg font-semibold sm:text-xl">
                Book an appointment with us
              </h3>
              <p className="mt-3 text-sm text-slate-200">
                Get a personalized assessment and treatment plan to help you move with confidence
                again.
              </p>
              <Link
                href="https://pmphysio.juvonno.com/portal/publicbook.php"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-medium text-[#111827] shadow-sm transition-colors duration-200 hover:bg-slate-100"
              >
                Book now
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
