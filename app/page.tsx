import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { FeaturesSection } from '@/components/features-section'
import { ProductShowcase } from '@/components/product-showcase'
import { PricingSection } from '@/components/pricing-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProductShowcase />
        <PricingSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}