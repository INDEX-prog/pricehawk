import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 -z-10" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary-100/50 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-accent-100/50 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full mb-8">
            <span className="w-2 h-2 bg-primary-600 rounded-full mr-2 animate-pulse" />
            <span className="text-sm font-medium text-primary-700">
              Trusted by 500+ Shopify & WooCommerce stores
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Stay Ahead with{" "}
            <span className="gradient-text">Automated Price Tracking</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Save hours of manual price checking and stay competitive effortlessly. 
            Monitor competitor prices, get instant email alerts, and view price trends 
            on a simple dashboard.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="#pricing" className="btn-primary text-lg px-8 py-4 w-full sm:w-auto">
              Start 14-Day Free Trial
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link href="#features" className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto">
              See How It Works
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No credit card required
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Track 3+ competitors
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Instant email alerts
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 pointer-events-none" />
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden mx-auto max-w-5xl">
            <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2 border-b border-gray-200">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-4 text-sm text-gray-500">dashboard.pricehawk.com</span>
            </div>
            <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
              {/* Mock Dashboard Content */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="text-sm text-gray-500 mb-1">Competitors Tracked</div>
                  <div className="text-2xl font-bold text-gray-900">12</div>
                  <div className="text-xs text-green-600 mt-1">↑ 3 new this week</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="text-sm text-gray-500 mb-1">Price Changes Today</div>
                  <div className="text-2xl font-bold text-gray-900">8</div>
                  <div className="text-xs text-amber-600 mt-1">5 drops, 3 increases</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="text-sm text-gray-500 mb-1">Alerts Sent</div>
                  <div className="text-2xl font-bold text-gray-900">24</div>
                  <div className="text-xs text-primary-600 mt-1">Last 30 days</div>
                </div>
              </div>
              {/* Mock Chart */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-semibold text-gray-900">Price Trends - Last 30 Days</span>
                  <span className="text-sm text-gray-500">iPhone 15 Pro Case</span>
                </div>
                <div className="h-32 flex items-end space-x-1">
                  {[40, 45, 42, 50, 48, 55, 52, 58, 54, 60, 58, 62, 55, 65, 62, 68, 64, 70, 65, 72, 68, 75, 70, 78, 72, 80, 75, 82, 78, 85].map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 bg-gradient-to-t from-primary-600 to-primary-400 rounded-t-sm"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
