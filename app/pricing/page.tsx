import Header from "@/components/Header";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - PriceHawk | Automated Competitor Price Tracking",
  description:
    "Simple, transparent pricing for automated competitor price monitoring. Start with a 14-day free trial. Plans starting at $19/month.",
};

export default function PricingPage(): React.ReactElement {
  return (
    <main className="min-h-screen pt-16">
      <Header />
      <div className="pt-8">
        <Pricing />
        <FAQ />
      </div>
      <Footer />
    </main>
  );
}
