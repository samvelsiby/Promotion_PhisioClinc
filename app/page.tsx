import Hero from '@/components/Hero'
import Motto from '@/components/Motto'
import Highlights from '@/components/Highlights'
import BentoGrid from '@/components/BentoGrid'
import BlogPreview from '@/components/BlogPreview'
import FAQ from '@/components/FAQ'
import { fetchBlogPosts } from '@/lib/sanity'

export default async function Home() {
  const posts = await fetchBlogPosts(4)

  return (
    <main>
      <Hero />
      <BentoGrid />
      <Motto />
      <Highlights />
      
      <BlogPreview posts={posts} />
      <FAQ />
    </main>
  )
}
