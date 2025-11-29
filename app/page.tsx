import { HeroVariantTwo } from '@/components/Hero'
import Motto from '@/components/Motto'
import Highlights from '@/components/Highlights'
import BentoGrid from '@/components/BentoGrid'
import BlogPreview from '@/components/BlogPreview'
import FAQ from '@/components/FAQ'
import Preloader from '@/components/Preloader'
import { fetchBlogPosts } from '@/lib/sanity'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pro Motion Physiotherapy - Winnipeg Physiotherapy Clinic',
  description: 'Professional physiotherapy services in Winnipeg, Manitoba. Expert treatment for back pain, sports injuries, work injuries, MVA/MPI claims, and chronic pain. Book your appointment today.',
  openGraph: {
    title: 'Pro Motion Physiotherapy - Winnipeg Physiotherapy Clinic',
    description: 'Professional physiotherapy services in Winnipeg, Manitoba. Expert treatment for back pain, sports injuries, work injuries, MVA/MPI claims, and chronic pain.',
  },
}

export default async function Home() {
  const posts = await fetchBlogPosts(4)

  return (
    <main>
      <Preloader />
      <HeroVariantTwo />
      <BentoGrid />
      <Motto />
      <Highlights />
      <BlogPreview posts={posts} />
      <FAQ />
    </main>
  )
}
