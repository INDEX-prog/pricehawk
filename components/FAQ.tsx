"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "How does PriceHawk track competitor prices?",
      answer:
        "PriceHawk uses advanced web scraping technology to monitor your competitors' product pages. Once you add a competitor's URL and the products you want to track, our system automatically checks prices multiple times per day and notifies you of any changes via email.",
    },
    {
      question: "How quickly will I receive alerts when a price changes?",
      answer:
        "Our system checks prices multiple times throughout the day. When a price change is detected, you'll receive an email alert within minutes. This ensures you can react quickly to competitor pricing changes and adjust your strategy accordingly.",
    },
    {
      question: "Do I need any technical skills to use PriceHawk?",
      answer:
        "Not at all! PriceHawk is designed for non-technical users. Our simple onboarding process guides you through adding competitors and products in just a few clicks. Most merchants are fully set up within 5-10 minutes.",
    },
    {
      question: "What e-commerce platforms do you support?",
      answer:
        "PriceHawk works with any e-commerce platform, but we have specialized integrations for Shopify and WooCommerce stores. These integrations allow for easier product matching and more seamless setup.",
    },
    {
      question: "Can I change my plan or cancel anytime?",
      answer:
        "Absolutely! You can upgrade, downgrade, or cancel your subscription at any time from your account settings. If you cancel, you'll have access until the end of your current billing period. We also offer a 30-day money-back guarantee on all plans.",
    },
    {
      question: "Is my data secure with PriceHawk?",
      answer:
        "Yes, security is our top priority. We use HTTPS for all data transmission, implement strict access controls, and regularly test our security systems. Our infrastructure is PCI DSS compliant to ensure your business data remains protected.",
    },
    {
      question: "What's included in the 14-day free trial?",
      answer:
        "The free trial gives you full access to all features of the Growth plan. You can track up to 10 competitors, monitor 250 products, and receive unlimited email alerts. No credit card is required to start, so you can test everything risk-free.",
    },
    {
      question: "How is the price history and trend data displayed?",
      answer:
        "Our dashboard shows price trends over time in easy-to-read charts. Depending on your plan, you can view up to 90 days of historical data. You can see price movements for individual products or compare trends across multiple competitors.",
    },
  ];

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about PriceHawk. Can&apos;t find the answer you&apos;re looking for? 
            Contact our support team.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
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
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="mailto:support@pricehawk.com"
            className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            Contact our support team
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
