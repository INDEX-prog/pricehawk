"use client";

import Link from "next/link";

export default function CTA(): React.ReactElement {
  const handleCTAClick = (ctaName: string): void => {
    if (typeof window !== "undefined" && (window as Window & { trackCTAClick?: (name: string, location: string) => void }).trackCTAClick) {
      (window as Window & { trackCTAClick: (name: string, location: string) => void }).trackCTAClick(ctaName, "bottom_cta");
    }
    if (typeof window !== "undefined" && (window as Window & { trackConversion?: (type: string, value: number) => void }).trackConversion) {
      (window as Window & { trackConversion: (type: string, value: number) => void }).trackConversion("cta_bottom_click", 1);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-accent-700 rounded-3xl p-8 md:p-16 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"></div>
          </div>

          {/* Content */}
          <div className="relative text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to outsmart your competition?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join 500+ e-commerce merchants who save hours every week with
              automated price tracking. Start your free 14-day trial today.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#pricing"
                onClick={() => handleCTAClick("start_free_trial")}
                className="w-full sm:w-auto bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-xl hover:bg-primary-50"
              >
                Start Free 14-Day Trial
              </Link>
              <Link
                href="#how-it-works"
                onClick={() => handleCTAClick("see_demo")}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 text-white border-2 border-white/30 hover:border-white px-8 py-4 rounded-xl font-semibold text-lg transition-all"
              >
                <span>See How It Works</span>
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
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-primary-100">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Setup in 5 minutes</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
