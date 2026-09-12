import Image from 'next/image'
import Link from 'next/link'
import { fetchBlogPosts } from '@/lib/sanity'
import { ArrowUpRight, Clock, Calendar, Tag } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const revalidate = 60

function formatDate(dateString?: string) {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    timeZone: 'UTC',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

export default async function BlogsPage({ searchParams }: { searchParams: { q?: string } }) {
  const allPosts = await fetchBlogPosts()
  const query = typeof searchParams.q === 'string' ? searchParams.q.trim().slice(0, 150) : ''
  const posts = allPosts.filter(post => `${post.title} ${post.excerpt || ''} ${post.tag || ''}`.toLowerCase().includes(query.toLowerCase()))
  const [featured, ...restPosts] = posts

  return (
    <main className="min-h-screen bg-white selection:bg-[#e63939]/20">
      {/* Hero Section with Background Image */}
      <section className="relative w-full overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Hero/hero3.jpg"
            alt="Blog hero banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-white"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-white">
                Our Journal
              </span>
            </div>
            <h1 className="text-4xl font-light leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              Physiotherapy guides <br /><span className="font-bold text-white">for Winnipeg.</span>
            </h1>
            <p className="mt-6 text-lg text-white/90 max-w-xl leading-relaxed">
              Practical information about appointments, insurance, MPI, WCB and choosing care in St. Vital.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-12 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <form action="/blogs" method="get" role="search" className="mb-8 flex flex-wrap gap-3 rounded-2xl border border-gray-200 bg-white p-5">
            <label htmlFor="blog-query" className="w-full font-semibold text-gray-900">Find a patient guide</label>
            <input id="blog-query" name="q" type="search" defaultValue={query} maxLength={150} placeholder="Try MPI, WCB or insurance" className="min-w-0 flex-1 rounded-lg border border-gray-300 px-4 py-3 text-gray-900" />
            <button type="submit" className="rounded-lg bg-[#c8101e] px-5 py-3 font-semibold text-white">Search</button>
            {query && <Link href="/blogs" className="w-full py-2 underline">Clear search</Link>}
          </form>
          {posts.length === 0 ? (
            <div className="rounded-3xl bg-white border border-gray-100 p-12 text-center shadow-xl shadow-gray-200/50">
              <p className="text-gray-500 text-lg">No articles match this search. Try “insurance,” “MPI,” or “first,” or clear your search.</p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-start">

              {/* Main Content Area */}
              <div className="space-y-10">
                {/* Featured Post */}
                {featured && (
                  <Link href={`/blogs/${featured.slug}`} className="group block relative">
                    <article className="relative overflow-hidden rounded-[2rem] bg-white border border-gray-100 shadow-xl shadow-gray-200/50 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-200/60 hover:-translate-y-1">
                      <div className="p-8 sm:p-10">
                        {featured.tag && (
                          <div className="mb-4 inline-flex items-center gap-2 text-[#e63939] text-xs font-bold uppercase tracking-widest">
                            <Tag size={12} />
                            {featured.tag}
                          </div>
                        )}
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#e63939] transition-colors leading-tight">
                          {featured.title}
                        </h2>
                        {featured.excerpt && (
                          <p className="text-gray-600 mb-6 leading-relaxed">
                            {featured.excerpt}
                          </p>
                        )}
                        <div className="flex items-center gap-4 text-sm text-gray-400 font-medium">
                          {featured.publishedAt && (
                            <span className="flex items-center gap-1.5">
                              <Calendar size={14} />
                              {formatDate(featured.publishedAt)}
                            </span>
                          )}
                          {featured.readTime && (
                            <span className="flex items-center gap-1.5">
                              <Clock size={14} />
                              {featured.readTime}
                            </span>
                          )}
                        </div>
                      </div>
                    </article>
                  </Link>
                )}

                {/* Recent Posts Grid */}
                {restPosts.length > 0 && (
                  <div className="grid md:grid-cols-2 gap-6">
                    {restPosts.map((post) => (
                      <Link key={post._id} href={`/blogs/${post.slug}`} className="group h-full">
                        <article className="h-full flex flex-col rounded-[1.5rem] bg-white p-6 border border-gray-100 shadow-lg shadow-gray-200/40 transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1">
                          {post.tag && (
                            <p className="text-[#e63939] text-[10px] font-bold uppercase tracking-widest mb-3">
                              {post.tag}
                            </p>
                          )}
                          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#e63939] transition-colors">
                            {post.title}
                          </h3>
                          {post.excerpt && (
                            <p className="text-sm text-gray-600 leading-relaxed mb-4">
                              {post.excerpt}
                            </p>
                          )}

                          <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400 font-medium">
                            <span>{formatDate(post.publishedAt)}</span>
                            <span className="group-hover:translate-x-1 transition-transform text-gray-300 group-hover:text-[#e63939]">
                              <ArrowUpRight size={18} />
                            </span>
                          </div>
                        </article>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <aside className="space-y-8 lg:sticky lg:top-28">
                {/* Top Posts */}
                {posts.length > 1 && (
                  <div className="rounded-3xl bg-white p-8 shadow-lg shadow-gray-200/40 border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">More patient guides</h3>
                    <div className="space-y-6">
                      {posts.slice(0, 4).map((post, i) => (
                        <Link key={post._id} href={`/blogs/${post.slug}`} className="group flex gap-4 items-start">
                          <span className="text-2xl font-bold text-gray-200 select-none group-hover:text-[#e63939]/20 transition-colors">
                            0{i + 1}
                          </span>
                          <div>
                            <h4 className="font-semibold text-gray-900 leading-snug group-hover:text-[#e63939] transition-colors line-clamp-2">
                              {post.title}
                            </h4>
                            {post.readTime && (
                              <p className="text-xs text-gray-400 mt-1">{post.readTime}</p>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Widget */}
                <div className="rounded-[2rem] bg-[#1a1a1a] p-8 text-white shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 -mr-8 -mt-8 h-32 w-32 rounded-full bg-[#e63939] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>

                  <h3 className="relative z-10 text-xl font-bold mb-3">Pain slowing you down?</h3>
                  <p className="relative z-10 text-gray-400 text-sm mb-6 leading-relaxed">
                    Get a personalized assessment and treatment plan to help you move with confidence again.
                  </p>

                  <Button
                    asChild
                    className="relative z-10 w-full bg-white text-black hover:bg-gray-100 font-bold rounded-xl h-12"
                  >
                    <a href="https://pmphysio.juvonno.com/portal/publicbook.php" target="_blank" rel="noopener noreferrer">
                      Book Assessment
                    </a>
                  </Button>
                </div>
              </aside>

            </div>
          )}
        </div>
      </section>
    </main>
  )
}
