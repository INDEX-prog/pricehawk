"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How does PriceHawk track competitor prices?",
    answer:
      "PriceHawk uses advanced web scraping technology to monitor the product pages you specify. Simply paste the URL of a competitor's product, and our system will check it regularly for price changes. When a change is detected, you'll receive an instant email alert.",
  },
  {
    question: "Which e-commerce platforms do you support?",
    answer:
      "We fully support Shopify and WooCommerce stores. Our integration allows you to connect your store with one click and automatically import your products. You can also manually add products if you use a different platform.",
  },
  {
    question: "How often are prices checked?",
    answer:
      "Prices are checked multiple times per day, depending on your plan. Starter plans check prices every 6 hours, Growth plans every 2 hours, and Pro plans check in near real-time (every 15 minutes).",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes! All plans come with a 14-day free trial. No credit card is required to start. You'll have full access to all features during the trial period so you can see exactly how PriceHawk can help your business.",
  },
  {
    question: "Can I track any competitor website?",
    answer:
      "PriceHawk works with most e-commerce websites. However, some sites with advanced anti-bot protection may have limited compatibility. We recommend starting your free trial to test with your specific competitors.",
  },
  {
    question: "How do I receive price change alerts?",
    answer:
      "Alerts are sent via email by default. Growth and Pro plans also support Slack notifications, SMS alerts (coming soon), and webhook integrations for custom workflows.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We take security seriously. All data is encrypted in transit and at rest. We follow PCI DSS compliance guidelines and never store sensitive payment information. Your competitor tracking data is completely private.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time with no questions asked. If you cancel within the first 30 days, you're eligible for a full refund. Your data remains accessible until the end of your billing period.",
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer:
      "Yes! When you choose annual billing, you save 20% compared to monthly billing. That's like getting over 2 months free every year.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "All plans include email support with response times within 24 hours. Growth plans include priority support (response within 4 hours), and Pro plans include dedicated support with a named account manager.",
  },
];

export default function FAQ(): React.ReactElement {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
    if (typeof window !== "undefined" && (window as Window & { trackEvent?: (name: string, params: Record<string, string>) => void }).trackEvent) {
      (window as Window & { trackEvent: (name: string, params: Record<string, string>) => void }).trackEvent("faq_toggle", { question: faqs[index].question });
    }
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-xl text-slate-600">
            Everything you need to know about PriceHawk. Can&apos;t find the answer
            you&apos;re looking for? Contact our support team.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq: FAQItem, index: number) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-900 pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">Still have questions?</p>
          <a
            href="mailto:support@pricehawk.com"
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>Contact our support team</span>
          </a>
        </div>
      </div>
    </section>
  );
}
