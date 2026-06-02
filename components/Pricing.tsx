"use client";

import { useState } from "react";
import Link from "next/link";

interface PlanFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: PlanFeature[];
  cta: string;
  popular: boolean;
  checkoutLink: string;
}

export default function Pricing(): React.ReactElement {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  const plans: PricingPlan[] = [
    {
      name: "Starter",
      price: billingPeriod === "monthly" ? "$19" : "$15",
      period: billingPeriod === "monthly" ? "/month" : "/month",
      description: "Perfect for small shops just getting started with price monitoring.",
      features: [
        { text: "Track 3 competitors", included: true },
        { text: "Instant email alerts", included: true },
        { text: "30-day price history", included: true },
        { text: "Basic dashboard", included: true },
        { text: "Email support", included: true },
        { text: "API access", included: false },
        { text: "Custom integrations", included: false },
      ],
      cta: "Start Free Trial",
      popular: false,
      checkoutLink: "/checkout?plan=starter",
    },
    {
      name: "Growth",
      price: billingPeriod === "monthly" ? "$49" : "$39",
      period: billingPeriod === "monthly" ? "/month" : "/month",
      description: "For growing stores that need more comprehensive monitoring.",
      features: [
        { text: "Track 10 competitors", included: true },
        { text: "Instant email alerts", included: true },
        { text: "90-day price history", included: true },
        { text: "Advanced dashboard", included: true },
        { text: "Priority support", included: true },
        { text: "API access", included: true },
        { text: "Custom integrations", included: false },
      ],
      cta: "Start Free Trial",
      popular: true,
      checkoutLink: "/checkout?plan=growth",
    },
    {
      name: "Pro",
      price: billingPeriod === "monthly" ? "$99" : "$79",
      period: billingPeriod === "monthly" ? "/month" : "/month",
      description: "Full power for established merchants with serious competition.",
      features: [
        { text: "Track 25 competitors", included: true },
        { text: "Instant email + SMS alerts", included: true },
        { text: "Unlimited price history", included: true },
        { text: "Premium dashboard", included: true },
        { text: "Dedicated support", included: true },
        { text: "Full API access", included: true },
        { text: "Custom integrations", included: true },
      ],
      cta: "Start Free Trial",
      popular: false,
      checkoutLink: "/checkout?plan=pro",
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Simple, transparent <span className="text-electric-400">pricing</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Start with a 14-day free trial. No credit card required. Cancel anytime.
          </p>

          <div className="inline-flex items-center bg-navy-800 rounded-lg p-1 border border-navy-700">
            <button
              type="button"
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                billingPeriod === "monthly"
                  ? "bg-electric-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBillingPeriod("yearly")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                billingPeriod === "yearly"
                  ? "bg-electric-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan: PricingPlan, index: number) => (
            <div
              key={index}
              className={`relative bg-navy-800 rounded-2xl border ${
                plan.popular
                  ? "border-electric-500 shadow-lg shadow-electric-500/10"
                  : "border-navy-700"
              } p-8`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-electric-500 text-white text-sm font-medium px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400 ml-1">{plan.period}</span>
                </div>
                {billingPeriod === "yearly" && (
                  <p className="text-sm text-green-400 mt-1">Billed annually</p>
                )}
                <p className="text-gray-400 text-sm mt-3">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature: PlanFeature, featureIndex: number) => (
                  <li key={featureIndex} className="flex items-start">
                    {feature.included ? (
                      <svg
                        className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5 text-gray-600 mr-3 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    )}
                    <span className={feature.included ? "text-gray-300" : "text-gray-500"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={`${plan.checkoutLink}&billing=${billingPeriod}`}
                className={`block w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                  plan.popular
                    ? "bg-electric-500 hover:bg-electric-400 text-white"
                    : "bg-navy-700 hover:bg-navy-600 text-white border border-navy-600"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Secure payment via Stripe
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              30-day money-back guarantee
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              Cancel anytime, no questions asked
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
