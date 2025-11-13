import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProcessSection } from "@/components/process-section"
import { ExpertiseSection } from "@/components/expertise-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { FloatingWhatsapp } from "@/components/floating-whatsapp"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProcessSection />
      <ExpertiseSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <FloatingWhatsapp />
    </main>
  )
}
