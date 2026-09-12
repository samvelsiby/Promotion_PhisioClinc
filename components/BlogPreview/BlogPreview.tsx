import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

interface BlogPreviewPost {
  title: string
  slug: string
  excerpt?: string
  tag?: string
  readTime?: string
}

export default function BlogPreview({ posts }: { posts: BlogPreviewPost[] }) {
  if (!posts.length) return null
  return <section aria-labelledby="resources-heading">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl"><h2 id="resources-heading" className="font-bold text-gray-900">Helpful reading for your recovery.</h2><p className="mt-5 text-lg leading-relaxed text-gray-600">Explore advice on injury prevention, rehabilitation, and everyday movement.</p></div>
        <Link href="/blogs" className="inline-flex min-h-12 shrink-0 items-center gap-2 font-semibold text-[#c8101e] underline underline-offset-4">View all articles <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
      </div>
      <div className="grid gap-5 md:grid-cols-3">{posts.slice(0,3).map(post=><article key={post.slug} className="home-card flex flex-col p-6 sm:p-8">
        {post.tag && <p className="mb-3 text-sm text-gray-600">{post.tag}</p>}
        <h3 className="text-xl font-semibold leading-snug text-gray-900"><Link href={`/blogs/${post.slug}`} className="hover:text-[#c8101e]">{post.title}</Link></h3>
        {post.excerpt && <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-gray-600">{post.excerpt}</p>}
        <Link href={`/blogs/${post.slug}`} aria-label={`Read ${post.title}`} className="mt-auto inline-flex min-h-12 items-center gap-2 pt-5 text-sm font-semibold text-[#c8101e]">Read article <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
      </article>)}</div>
    </div>
  </section>
}
