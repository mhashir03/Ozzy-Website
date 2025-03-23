import { HeroSection } from "@/app/components/hero-section"
import { FeatureSection } from "@/app/components/feature-section"
import { HowItWorks } from "@/app/components/how-it-works"
import { DownloadSection } from "@/app/components/download-section"
import { Footer } from "@/app/components/footer"
import { Navbar } from "@/app/components/navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <main>
        <HeroSection />
        <FeatureSection />
        <HowItWorks />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  )
}

