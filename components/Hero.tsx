"use client";

import Link from "next/link";

export default function Hero(): React.ReactElement {
  const handleCTAClick = (ctaName: string): void => {
    if (typeof window !== "undefined" && (window as Window & { trackCTAClick?: (name: string, location: string) => void }).trackCTAClick) {
      (window as Window & { trackCTAClick: (name: string, location: string) => void }).trackCTAClick(ctaName, "hero");
    }
    if (typeof window !== "undefined" && (window as Window & { trackSignupIntent?: (source: string) => void }).trackSignupIntent) {
      (window as Window & { trackSignupIntent: (source: string) => void }).trackSignupIntent("hero_section");
    }
  };

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
              <span>Trusted by 500+ e-commerce stores</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Stay ahead with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                automated price tracking
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Save hours of manual price checking and stay competitive
              effortlessly! Monitor competitor pricing in real-time and get
              instant email alerts when prices change.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <Link
                href="#pricing"
                onClick={() => handleCTAClick("start_free_trial")}
                className="w-full sm:w-auto bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-xl hover:shadow-primary-500/25 animate-pulse-glow"
              >
                Start Free 14-Day Trial
              </Link>
              <Link
                href="#how-it-works"
                onClick={() => handleCTAClick("watch_demo")}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 text-slate-700 hover:text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg transition-colors border border-slate-200 hover:border-primary-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>See How It Works</span>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-500">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-green-500"
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
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Works with Shopify & WooCommerce</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-green-500"
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
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative lg:pl-8">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-3xl blur-2xl"></div>

              {/* Dashboard Card */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-6 border border-slate-100">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-slate-900">
                    Price Tracking Dashboard
                  </h3>
                  <span className="text-xs text-slate-500">Last 30 days</span>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="text-2xl font-bold text-slate-900">12</p>
                    <p className="text-xs text-slate-500">Competitors</p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4">
                    <p className="text-2xl font-bold text-green-600">+8%</p>
                    <p className="text-xs text-slate-500">Price Advantage</p>
                  </div>
                  <div className="bg-primary-50 rounded-xl p-4">
                    <p className="text-2xl font-bold text-primary-600">47</p>
                    <p className="text-xs text-slate-500">Alerts Sent</p>
                  </div>
                </div>

                {/* Chart Placeholder */}
                <div className="bg-slate-50 rounded-xl p-4 mb-4">
                  <div className="flex items-end justify-between h-32 space-x-2">
                    <div className="w-full bg-primary-200 rounded-t" style={{ height: "40%" }}></div>
                    <div className="w-full bg-primary-300 rounded-t" style={{ height: "60%" }}></div>
                    <div className="w-full bg-primary-400 rounded-t" style={{ height: "45%" }}></div>
                    <div className="w-full bg-primary-500 rounded-t" style={{ height: "80%" }}></div>
                    <div className="w-full bg-primary-400 rounded-t" style={{ height: "65%" }}></div>
                    <div className="w-full bg-primary-600 rounded-t" style={{ height: "90%" }}></div>
                    <div className="w-full bg-accent-500 rounded-t" style={{ height: "100%" }}></div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-slate-400">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>
                </div>

                {/* Alert Preview */}
                <div className="flex items-center space-x-3 bg-orange-50 rounded-xl p-3 border border-orange-100">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900">
                      Competitor dropped price by 15%
                    </p>
                    <p className="text-xs text-slate-500">
                      Nike Air Max 90 • 2 minutes ago
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg animate-float">
                Live Updates
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
