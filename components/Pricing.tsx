"use client";

import { useState } from "react";
import Link from "next/link";

interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  highlighted: boolean;
  cta: string;
  badge?: string;
}

export default function Pricing() {
  const [isYearly, setIsYearly] = useState<boolean>(false);

  const plans: PricingPlan[] = [
    {
      name: "Starter",
      description: "Perfect for new merchants just getting started with price tracking.",
      monthlyPrice: 19,
      yearlyPrice: 190,
      features: [
        "Track up to 3 competitors",
        "50 product price monitors",
        "Email alerts (up to 50/month)",
        "7-day price history",
        "Basic dashboard",
        "Email support",
      ],
      highlighted: false,
      cta: "Start Free Trial",
    },
    {
      name: "Growth",
      description: "Ideal for growing stores that need more comprehensive monitoring.",
      monthlyPrice: 49,
      yearlyPrice: 490,
      features: [
        "Track up to 10 competitors",
        "250 product price monitors",
        "Unlimited email alerts",
        "30-day price history & trends",
        "Advanced dashboard & analytics",
        "Priority email support",
        "CSV data export",
        "Shopify/WooCommerce integration",
      ],
      highlighted: true,
      cta: "Start Free Trial",
      badge: "Most Popular",
    },
    {
      name: "Pro",
      description: "For established merchants who need maximum coverage and features.",
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        "Track unlimited competitors",
        "1,000 product price monitors",
        "Unlimited email alerts",
        "90-day price history & trends",
        "Full analytics suite",
        "Priority phone & email support",
        "API access",
        "Custom integrations",
        "Dedicated account manager",
        "White-label reports",
      ],
      highlighted: false,
      cta: "Start Free Trial",
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Start with a 14-day free trial. No credit card required. 
            Choose the plan that fits your business needs.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-medium ${!isYearly ? "text-gray-900" : "text-gray-500"}`}>
              Monthly
            </span>
            <button
              type="button"
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isYearly ? "bg-primary-600" : "bg-gray-300"
              }`}
              aria-label="Toggle yearly billing"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isYearly ? "text-gray-900" : "text-gray-500"}`}>
              Yearly
              <span className="ml-1.5 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Save 17%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-white border-2 border-primary-500 shadow-2xl scale-105 z-10"
                  : "bg-white border border-gray-200 shadow-lg"
              }`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-900">$</span>
                  <span className="text-5xl font-bold text-gray-900">
                    {isYearly ? Math.round(plan.yearlyPrice / 12) : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
                {isYearly && (
                  <p className="text-sm text-gray-500 mt-1">
                    Billed ${plan.yearlyPrice}/year
                  </p>
                )}
              </div>

              {/* CTA Button */}
              <Link
                href="#"
                className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 mb-8 ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-primary-600 to-accent-600 text-white hover:shadow-lg hover:-translate-y-0.5"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                {plan.cta}
              </Link>

              {/* Features List */}
              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                        plan.highlighted ? "text-primary-600" : "text-green-500"
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
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-green-50 rounded-xl border border-green-200">
            <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-green-800 font-medium">
              30-day money-back guarantee • No questions asked • Cancel anytime
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
