export default function HowItWorks(): React.ReactElement {
  const steps: Array<{
    number: string;
    title: string;
    description: string;
  }> = [
    {
      number: "01",
      title: "Add Your Competitors",
      description:
        "Enter the URLs of up to 3+ competitor product pages you want to track. Takes less than 2 minutes.",
    },
    {
      number: "02",
      title: "We Monitor 24/7",
      description:
        "Our system automatically checks prices multiple times per day and tracks every change.",
    },
    {
      number: "03",
      title: "Get Instant Alerts",
      description:
        "Receive email notifications the moment a competitor changes their price. React fast, stay competitive.",
    },
    {
      number: "04",
      title: "Analyze & Act",
      description:
        "Use your 30-day dashboard to spot trends, understand patterns, and make smarter pricing decisions.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How <span className="text-electric-400">PriceHawk</span> works
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get started in minutes and never manually check competitor prices
            again.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map(
            (
              step: { number: string; title: string; description: string },
              index: number
            ) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-electric-500/50 to-transparent -translate-x-4"></div>
                )}
                <div className="bg-navy-800 border border-navy-700 rounded-xl p-6 relative">
                  <div className="text-4xl font-bold text-electric-500/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            )
          )}
        </div>

        <div className="mt-16 bg-gradient-to-r from-electric-500/10 via-electric-500/5 to-electric-500/10 rounded-2xl border border-electric-500/20 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Real results from real merchants
              </h3>
              <p className="text-gray-300 mb-6">
                &ldquo;PriceHawk saved me hours every week. I used to spend my mornings
                checking competitor sites. Now I just check my email and
                dashboard. Game changer for my Shopify store!&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-electric-500 rounded-full flex items-center justify-center font-bold text-lg">
                  JM
                </div>
                <div className="ml-4">
                  <p className="font-semibold">Jessica Martinez</p>
                  <p className="text-sm text-gray-400">
                    Owner, StyleBox Boutique
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-navy-800/80 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-electric-400">8h+</p>
                <p className="text-sm text-gray-400">Saved weekly</p>
              </div>
              <div className="bg-navy-800/80 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-green-400">23%</p>
                <p className="text-sm text-gray-400">Revenue increase</p>
              </div>
              <div className="bg-navy-800/80 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-yellow-400">156</p>
                <p className="text-sm text-gray-400">Price alerts received</p>
              </div>
              <div className="bg-navy-800/80 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-purple-400">5 min</p>
                <p className="text-sm text-gray-400">Setup time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
