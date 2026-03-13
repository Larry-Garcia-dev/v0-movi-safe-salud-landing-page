import { Header } from "@/components/landing/header"
import { HeroCarousel } from "@/components/landing/hero-carousel"
import { ServicesSection } from "@/components/landing/services-section"
import { AboutSection } from "@/components/landing/about-section"
import { StackedCardsSection } from "@/components/landing/stacked-cards-section"
import { Footer } from "@/components/landing/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroCarousel />
      <ServicesSection />
      <AboutSection />
      <StackedCardsSection />
      <Footer />
    </main>
  )
}
