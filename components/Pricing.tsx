"use client";

import { useState } from "react";
import Link from "next/link";

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$19",
    period: "/month",
    description: "Perfect for small stores just getting started with price monitoring.",
    features: [
      "Track 3 competitors",
      "Up to 50 products",
      "Email alerts",
      "30-day price history",
      "Basic dashboard",
      "Email support",
    ],
    highlighted: false,
    cta: "Start Free Trial",
  },
  {
    name: "Growth",
    price: "$49",
    period: "/month",
    description: "For growing stores that need more comprehensive tracking.",
    features: [
      "Track 10 competitors",
      "Up to 200 products",
      "Instant email alerts",
      "90-day price history",
      "Advanced analytics",
      "CSV exports",
      "Priority support",
      "Slack notifications",
    ],
    highlighted: true,
    cta: "Start Free Trial",
  },
  {
    name: "Pro",
    price: "$99",
    period: "/month",
    description: "For established stores requiring maximum coverage.",
    features: [
      "Unlimited competitors",
      "Unlimited products",
      "Real-time alerts",
      "1-year price history",
      "Custom reports",
      "API access",
      "Dedicated support",
      "Custom integrations",
      "White-label options",
    ],
    highlighted: false,
    cta: "Contact Sales",
  },
];

export default function Pricing(): React.ReactElement {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const handlePlanClick = (planName: string): void => {
    if (typeof window !== "undefined" && (window as Window & { trackPricingView?: (plan: string) => void }).trackPricingView) {
      (window as Window & { trackPricingView: (plan: string) => void }).trackPricingView(planName);
    }
    if (typeof window !== "undefined" && (window as Window & { trackCTAClick?: (name: string, location: string) => void }).trackCTAClick) {
      (window as Window & { trackCTAClick: (name: string, location: string) => void }).trackCTAClick(`select_plan_${planName.toLowerCase()}`, "pricing");
    }
    if (typeof window !== "undefined" && (window as Window & { trackTrialStart?: () => void }).trackTrialStart) {
      (window as Window & { trackTrialStart: () => void }).trackTrialStart();
    }
  };

  const handleBillingToggle = (cycle: "monthly" | "annual"): void => {
    setBillingCycle(cycle);
    if (typeof window !== "undefined" && (window as Window & { trackEvent?: (name: string, params: Record<string, string>) => void }).trackEvent) {
      (window as Window & { trackEvent: (name: string, params: Record<string, string>) => void }).trackEvent("billing_toggle", { cycle });
    }
  };

  const getPrice = (basePrice: string): string => {
    if (billingCycle === "annual") {
      const price = parseInt(basePrice.replace("$", ""));
      const annualPrice = Math.round(price * 0.8);
      return `$${annualPrice}`;
    }
    return basePrice;
  };

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Start with a 14-day free trial. No credit card required.
            Choose the plan that fits your business.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white rounded-xl p-1 shadow-sm border border-slate-200">
            <button
              type="button"
              onClick={() => handleBillingToggle("monthly")}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                billingCycle === "monthly"
                  ? "bg-primary-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-primary-600"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => handleBillingToggle("annual")}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                billingCycle === "annual"
                  ? "bg-primary-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-primary-600"
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier: PricingTier, index: number) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 ${
                tier.highlighted
                  ? "shadow-2xl border-2 border-primary-500 scale-105 z-10"
                  : "shadow-lg border border-slate-100"
              }`}
            >
              {/* Popular Badge */}
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {tier.name}
              </h3>

              {/* Price */}
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold text-slate-900">
                  {getPrice(tier.price)}
                </span>
                <span className="text-slate-500 ml-1">{tier.period}</span>
              </div>

              {/* Description */}
              <p className="text-slate-600 mb-6">{tier.description}</p>

              {/* CTA Button */}
              <Link
                href="#"
                onClick={() => handlePlanClick(tier.name)}
                className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all mb-8 ${
                  tier.highlighted
                    ? "bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl hover:shadow-primary-500/25"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                }`}
              >
                {tier.cta}
              </Link>

              {/* Features List */}
              <ul className="space-y-4">
                {tier.features.map((feature: string, featureIndex: number) => (
                  <li
                    key={featureIndex}
                    className="flex items-start space-x-3"
                  >
                    <svg
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        tier.highlighted ? "text-primary-500" : "text-green-500"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-slate-600">
            <svg
              className="w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>30-day money-back guarantee • Cancel anytime • Secure payments via Stripe</span>
          </div>
        </div>
      </div>
    </section>
  );
}
