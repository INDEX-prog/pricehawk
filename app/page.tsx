import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home(): React.ReactElement {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustBadges />
      <Features />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
