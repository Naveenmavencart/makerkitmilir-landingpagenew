import Header from '@/components/header'
import Hero from '@/components/hero'
import Features from '@/components/features'
import HowItWorks from '@/components/how-it-works'
import EnableSteps from '@/components/enable-steps'
import Pricing from '@/components/pricing'
import Faq from '@/components/Faqsection'
import CTA from '@/components/cta'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <EnableSteps />
      <Pricing />
      <Faq />
      <CTA />
      <Footer />
    </main>
  )
}

