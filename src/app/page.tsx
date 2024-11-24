import { CTA } from "@/components/cta"
import { Faqs } from "@/components/faqs"
import { Features } from "@/components/features"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Integrations } from "@/components/integrations"
import { Introduction } from "@/components/introduction"
import { LogoGrid } from "@/components/logo-grid"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoGrid />
      <Introduction />
      <Features />
      <Integrations />
      <Faqs />
      <CTA />
      <Footer />
    </>
  )
}
