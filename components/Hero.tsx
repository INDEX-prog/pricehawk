import Link from "next/link";

export default function Hero(): React.ReactElement {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-navy-700/50 border border-navy-600 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm text-gray-300">
              Trusted by 500+ e-commerce merchants
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Stay ahead with{" "}
            <span className="text-gradient">automated price tracking</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Save hours of manual price checking. Get instant email alerts when
            competitors change their prices and stay competitive effortlessly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="#pricing"
              className="w-full sm:w-auto bg-electric-500 hover:bg-electric-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg shadow-electric-500/25"
            >
              Start 14-Day Free Trial
            </Link>
            <Link
              href="#how-it-works"
              className="w-full sm:w-auto border border-navy-600 hover:border-navy-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              See How It Works
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-green-400 mr-2"
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
              No credit card required
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-green-400 mr-2"
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
              Setup in under 5 minutes
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-green-400 mr-2"
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
              Cancel anytime
            </div>
          </div>
        </div>

        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent z-10 pointer-events-none"></div>
          <div className="bg-navy-800 rounded-xl border border-navy-700 shadow-2xl overflow-hidden">
            <div className="bg-navy-700 px-4 py-3 flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-sm text-gray-400">
                PriceHawk Dashboard
              </span>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-navy-700/50 rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-1">
                    Competitors Tracked
                  </p>
                  <p className="text-2xl font-bold text-white">12</p>
                </div>
                <div className="bg-navy-700/50 rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-1">Price Changes</p>
                  <p className="text-2xl font-bold text-electric-400">+23</p>
                </div>
                <div className="bg-navy-700/50 rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-1">Time Saved</p>
                  <p className="text-2xl font-bold text-green-400">8h/week</p>
                </div>
              </div>
              <div className="bg-navy-700/30 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <p className="font-medium text-white">
                    30-Day Price Trends
                  </p>
                  <span className="text-xs text-gray-400">Last updated: 2 min ago</span>
                </div>
                <div className="h-32 flex items-end justify-between space-x-2">
                  {[40, 55, 45, 60, 50, 70, 65, 80, 75, 85, 90, 82].map(
                    (height: number, i: number) => (
                      <div
                        key={i}
                        className="flex-1 bg-electric-500/60 rounded-t transition-all hover:bg-electric-400"
                        style={{ height: `${height}%` }}
                      ></div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
