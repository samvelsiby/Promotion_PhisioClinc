import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { fetchBlogPostBySlug, fetchBlogSlugs, fetchBlogPosts } from '@/lib/sanity'

export const revalidate = 60

function formatDateLong(dateString?: string) {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const [post, allPosts] = await Promise.all([
    fetchBlogPostBySlug(params.slug),
    fetchBlogPosts(5),
  ])

  if (!post) {
    notFound()
  }

  const topPosts = (allPosts || []).filter((p) => p.slug !== params.slug).slice(0, 4)

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20 lg:py-24">
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
                <PortableText value={post.body} />
              ) : (
                <p>No content available for this post yet.</p>
              )}
            </article>
          </section>

          <aside className="space-y-6 lg:sticky lg:top-28">
            {topPosts.length > 0 && (
              <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                  Top posts
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
                href="/#contact"
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
