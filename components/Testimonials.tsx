export default function Testimonials() {
  const testimonials: {
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar: string;
    rating: number;
  }[] = [
    {
      quote:
        "PriceHawk has completely transformed how we handle competitor pricing. We used to spend hours every week manually checking prices. Now we get instant alerts and can react within minutes. Our margins have improved by 12% since we started using it.",
      author: "Sarah Mitchell",
      role: "Owner",
      company: "Mitchell's Home Decor",
      avatar: "SM",
      rating: 5,
    },
    {
      quote:
        "As a small WooCommerce store, I couldn't afford expensive enterprise tools. PriceHawk gives me everything I need at a price I can actually afford. The 30-day trend dashboard alone has helped me spot seasonal patterns I never knew existed.",
      author: "David Chen",
      role: "Founder",
      company: "TechGadgets Plus",
      avatar: "DC",
      rating: 5,
    },
    {
      quote:
        "The onboarding was incredibly simple - I was tracking my top 5 competitors within 10 minutes. The email alerts are a game-changer. Last month, I caught a competitor's flash sale within an hour and was able to match their prices immediately.",
      author: "Emma Rodriguez",
      role: "E-commerce Manager",
      company: "Bella Fashion Boutique",
      avatar: "ER",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Loved by E-commerce Merchants
          </h2>
          <p className="text-lg text-gray-600">
            See what Shopify and WooCommerce store owners are saying about PriceHawk.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Rating Stars */}
              <div className="flex items-center mb-4">
                {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                  <svg
                    key={starIndex}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Active Merchants</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">2M+</div>
              <div className="text-primary-100">Prices Tracked</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
              <div className="text-primary-100">Alerts Sent Monthly</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">99.9%</div>
              <div className="text-primary-100">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
