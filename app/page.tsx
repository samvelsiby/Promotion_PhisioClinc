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
  title: 'Pro Motion Physiotherapy | Physiotherapist St. Vital, Winnipeg MB | St. Anne\'s Road',
  description: 'Registered physiotherapy clinic on St. Anne\'s Road in St. Vital, Winnipeg. Serving St. Boniface, Windsor Park & Fort Richmond. Professional treatment for back pain, sports injuries, MVA/MPI, WCB claims. Direct billing available. Book today!',
  keywords: 'physiotherapy Winnipeg, physiotherapist St. Vital, St. Anne\'s Road physiotherapy, St. Boniface physio, Windsor Park physiotherapy, Fort Richmond physiotherapist, Winnipeg back pain treatment, sports injury clinic Winnipeg, MVA physiotherapy Manitoba, MPI claims Winnipeg, WCB physiotherapy, direct billing physiotherapy Winnipeg',
  openGraph: {
    title: 'Pro Motion Physiotherapy | St. Vital Winnipeg Physiotherapist',
    description: 'Registered physiotherapy clinic on St. Anne\'s Road, Winnipeg. Serving St. Vital, St. Boniface, Windsor Park. Professional care for injuries, pain relief & rehabilitation.',
    locale: 'en_CA',
    type: 'website',
    siteName: 'Pro Motion Physiotherapy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pro Motion Physiotherapy | St. Vital Winnipeg',
    description: 'Professional physiotherapy on St. Anne\'s Road. Serving Winnipeg\'s St. Vital, St. Boniface & surrounding areas.',
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
