"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ(): React.ReactElement {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "How does the 14-day free trial work?",
      answer:
        "Start your free trial instantly without entering a credit card. You get full access to all features of your chosen plan for 14 days. At the end of the trial, you can upgrade to continue or simply let it expire – no charges, no commitments.",
    },
    {
      question: "Which e-commerce platforms do you support?",
      answer:
        "PriceHawk is built specifically for Shopify and WooCommerce merchants. We can track competitor prices on virtually any e-commerce website, regardless of what platform they use. Your store platform doesn't matter for using PriceHawk.",
    },
    {
      question: "How quickly will I receive price change alerts?",
      answer:
        "Our system monitors competitor prices multiple times per day. When a price change is detected, you'll receive an email alert within minutes. For Pro plan users, SMS alerts are also available for even faster notifications.",
    },
    {
      question: "Can I track any competitor website?",
      answer:
        "Yes! PriceHawk can monitor prices on most e-commerce websites. Simply enter the product URLs you want to track, and we'll handle the rest. If we encounter any issues with a specific site, our support team will work with you to find a solution.",
    },
    {
      question: "What happens if I need to track more competitors?",
      answer:
        "You can upgrade your plan at any time to track more competitors. Plan upgrades are prorated, so you only pay the difference for the remaining time in your billing cycle. Downgrading is also possible at the end of your billing period.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We use industry-standard encryption for all data transmission and storage. We never share your competitive intelligence data with anyone. Your pricing strategy stays your competitive advantage.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Yes, we offer a 30-day money-back guarantee on all paid plans. If you're not satisfied with PriceHawk for any reason within the first 30 days of your paid subscription, contact us for a full refund.",
    },
  ];

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Frequently asked <span className="text-electric-400">questions</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about PriceHawk.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq: FAQItem, index: number) => (
            <div
              key={index}
              className="bg-navy-800 border border-navy-700 rounded-xl overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-navy-700/50 transition-colors"
              >
                <span className="font-medium pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-electric-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
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
                <div className="px-6 pb-4">
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a
            href="mailto:support@pricehawk.io"
            className="inline-flex items-center text-electric-400 hover:text-electric-300 font-medium"
          >
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
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Contact our support team
          </a>
        </div>
      </div>
    </section>
  );
}
