import { HeroVariantTwo } from '@/components/Hero'
import Motto from '@/components/Motto'
import Highlights from '@/components/Highlights'
import InsuranceMarquee from '@/components/InsuranceMarquee'
import Testimonials from '@/components/Testimonials'
import BentoGrid from '@/components/BentoGrid'
import BlogPreview from '@/components/BlogPreview'
import FAQ from '@/components/FAQ'
import Preloader from '@/components/Preloader'
import { fetchBlogPosts } from '@/lib/sanity'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pro Motion Physiotherapy | Physiotherapist St. Anne\'s Road, Pembina & South Winnipeg',
  description: 'Registered physiotherapy clinic in South Winnipeg located on St. Anne\'s Road. Serving St. Vital, Pembina Highway, South Main, and all of Winnipeg. Professional treatment for back pain, sports injuries, MVA/MPI. Direct billing available.',
  keywords: 'physiotherapy Winnipeg, physiotherapist South Winnipeg, Winnipeg South physiotherapy, physiotherapist St. Vital, St. Anne\'s Road physiotherapy, Pembina Highway physiotherapist, Pembina physiotherapy Winnipeg, South Main Winnipeg physio, Winnipeg back pain treatment, sports injury clinic Winnipeg, MVA physiotherapy Manitoba, MPI claims Winnipeg, WCB physiotherapy, direct billing physiotherapy Winnipeg',
  openGraph: {
    title: 'Pro Motion Physiotherapy | St. Anne\'s Road & South Winnipeg Physiotherapy',
    description: 'Registered physiotherapy clinic on St. Anne\'s Road in South Winnipeg. Serving St. Vital, Pembina, South Main and all of Winnipeg with professional care for injuries, pain relief & rehabilitation.',
    locale: 'en_CA',
    type: 'website',
    siteName: 'Pro Motion Physiotherapy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pro Motion Physiotherapy | South Winnipeg & St. Anne\'s Road',
    description: 'Professional physiotherapy on St. Anne\'s Road in South Winnipeg. Serving St. Vital, Pembina, and the greater Winnipeg area with comprehensive care.',
  },
  alternates: {
    canonical: 'https://promotionphysiotherapy.ca',
  },
}

export default async function Home() {
  const posts = await fetchBlogPosts(4)

  return (
    <main>
      <Preloader />
      <HeroVariantTwo />
      <BentoGrid />
      <Highlights />
      <InsuranceMarquee />
      <Motto />
      <Testimonials />
      <BlogPreview posts={posts} />
      <FAQ />
    </main>
  )
}
