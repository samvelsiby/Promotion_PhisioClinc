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
import { SITE_URL } from '@/lib/constants'
import JsonLd from '@/components/JsonLd'
import { getFaqSchema } from '@/lib/schema'
import PhysiotherapistIntro from '@/components/PhysiotherapistIntro'

export const metadata: Metadata = {
  title: {
    absolute: "Physiotherapy in St. Vital, Winnipeg | Pro Motion Physiotherapy",
  },
  description:
    "Physiotherapy in St. Vital, Winnipeg for pain and injury recovery. Visit our St. Anne’s Road clinic. Direct billing, MPI and WCB support. Book online.",
  openGraph: {
    title:
      "Physiotherapy in St. Vital, Winnipeg | Pro Motion",
    description:
      "Personalized physiotherapy on St. Anne’s Road for pain and injury recovery. Direct billing available. Book your visit online.",
    url: SITE_URL,
    images: [{ url: "/Hero/hero-desktop.jpg", width: 1920, height: 1097, alt: "Hands-on physiotherapy treatment" }],
    locale: "en_CA",
    type: "website",
    siteName: "Pro Motion Physiotherapy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Physiotherapy in St. Vital, Winnipeg | Pro Motion",
    description:
      "Personalized care for pain and injury recovery at our St. Anne’s Road clinic. Book online.",
    images: ["/Hero/hero-desktop.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default async function Home() {
  const posts = await fetchBlogPosts(4)

  return (
    <main>
      <JsonLd data={getFaqSchema()} />
      <Preloader />
      <HeroVariantTwo />
      <BentoGrid />
      <Highlights />
      <InsuranceMarquee />
      <Motto />
      <PhysiotherapistIntro />
      <Testimonials />
      <BlogPreview posts={posts} />
      <FAQ />
    </main>
  )
}
