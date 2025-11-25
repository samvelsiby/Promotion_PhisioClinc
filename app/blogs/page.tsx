import Image from 'next/image'
import Link from 'next/link'
import { fetchBlogPosts } from '@/lib/sanity'

export const revalidate = 60

function formatDate(dateString?: string) {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

export default async function BlogsPage() {
  const posts = await fetchBlogPosts()
  const [featured, ...restPosts] = posts

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e63939] sm:text-sm">
            Blog
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl lg:text-[2.6rem]">
            Discover our latest posts
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
            Stay informed with practical guidance, recovery stories, and expert insights from our
            physiotherapy team.
          </p>
        </header>

        {posts.length === 0 ? (
          <p className="text-sm text-gray-500 sm:text-base">
            No blog posts have been published yet. Check back soon.
          </p>
        ) : (
          <div className="mt-4 grid gap-10 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)] lg:items-start">
            <section className="space-y-8">
              {featured && (
                <article className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md">
                  {featured.mainImageUrl && (
                    <div className="relative h-56 w-full sm:h-64">
                      <Image
                        src={featured.mainImageUrl}
                        alt={featured.mainImageAlt || featured.title}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 640px, 100vw"
                      />
                    </div>
                  )}
                  <div className="p-6 sm:p-7">
                    {featured.tag && (
                      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-gray-400">
                        {featured.tag}
                      </p>
                    )}
                    <Link href={`/blogs/${featured.slug}`} className="group mt-1 block">
                      <h2 className="text-lg font-semibold text-gray-900 transition-colors duration-200 group-hover:text-[#e63939] sm:text-xl">
                        {featured.title}
                      </h2>
                    </Link>
                    {featured.excerpt && (
                      <p className="mt-3 text-sm leading-relaxed text-gray-600">
                        {featured.excerpt}
                      </p>
                    )}
                    <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-gray-400">
                      {featured.readTime && <span>{featured.readTime}</span>}
                      {featured.publishedAt && (
                        <span>
                          · {formatDate(featured.publishedAt)}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              )}

              {restPosts.length > 0 && (
                <div className="space-y-4 border-t border-slate-200 pt-6">
                  {restPosts.map((post) => (
                    <article
                      key={post._id}
                      className="group flex flex-col gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm transition-shadow duration-200 hover:shadow-md sm:flex-row sm:items-center sm:gap-5"
                    >
                      <div className="flex-1">
                        {post.tag && (
                          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-gray-400">
                            {post.tag}
                          </p>
                        )}
                        <Link href={`/blogs/${post.slug}`} className="mt-1 block">
                          <h3 className="text-sm font-semibold text-gray-900 transition-colors duration-200 group-hover:text-[#e63939] sm:text-base">
                            {post.title}
                          </h3>
                        </Link>
                        {post.excerpt && (
                          <p className="mt-2 text-sm leading-relaxed text-gray-600">
                            {post.excerpt}
                          </p>
                        )}
                        <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-gray-400">
                          {post.readTime && <span>{post.readTime}</span>}
                          {post.publishedAt && <span>· {formatDate(post.publishedAt)}</span>}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </section>

            <aside className="space-y-6 lg:sticky lg:top-28">
              <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                  Search
                </p>
                <div className="mt-3 flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500">
                  <span className="mr-2 text-sm text-slate-400">
                    
                  </span>
                  <span>Search articles (coming soon)</span>
                </div>
              </div>

              {posts.length > 1 && (
                <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                    Top posts
                  </p>
                  <ul className="mt-4 space-y-3">
                    {posts.slice(0, 4).map((post) => (
                      <li key={post._id}>
                        <Link
                          href={`/blogs/${post.slug}`}
                          className="group block text-sm leading-snug"
                        >
                          <p className="font-medium text-slate-900 transition-colors duration-200 group-hover:text-[#e63939]">
                            {post.title}
                          </p>
                          {post.readTime && (
                            <p className="mt-1 text-xs text-slate-400">{post.readTime}</p>
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
        )}
      </div>
    </main>
  )
}
