export default function TrustBadges(): React.ReactElement {
  const badges: Array<{
    icon: React.ReactElement;
    text: string;
  }> = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      text: "SOC 2 Compliant",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      text: "256-bit Encryption",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
      text: "Secure Stripe Payments",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      text: "99.9% Uptime SLA",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-navy-700 bg-navy-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-gray-400 text-sm uppercase tracking-wider">
            Trusted by e-commerce merchants worldwide
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map(
            (
              badge: { icon: React.ReactElement; text: string },
              index: number
            ) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="text-electric-400 mb-2">{badge.icon}</div>
                <p className="text-sm text-gray-400">{badge.text}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
