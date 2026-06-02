import Link from "next/link";

export default function CTA(): React.ReactElement {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-navy-800/50 to-navy-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Ready to stop losing sales to{" "}
          <span className="text-electric-400">competitor pricing?</span>
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join 500+ e-commerce merchants who save hours every week with
          automated price monitoring. Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link
            href="#pricing"
            className="w-full sm:w-auto bg-electric-500 hover:bg-electric-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg shadow-electric-500/25"
          >
            Start Your Free 14-Day Trial
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
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
            Cancel anytime
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
            30-day money-back guarantee
          </div>
        </div>
      </div>
    </section>
  );
}
