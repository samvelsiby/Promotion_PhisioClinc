import Hero from '@/components/Hero'
import Motto from '@/components/Motto'
import Highlights from '@/components/Highlights'
import BentoGrid from '@/components/BentoGrid'
import BlogPreview from '@/components/BlogPreview'
import FAQ from '@/components/FAQ'

export default function Home() {
  return (
    <main>
      <Hero />
      <Motto />
      <Highlights />
      <BentoGrid />
      <BlogPreview />
      <FAQ />
    </main>
  )
}
