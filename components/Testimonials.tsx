"use client";

interface Testimonial {
  content: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    content:
      "PriceHawk has saved me at least 10 hours a week. I used to manually check competitor prices every day. Now I just wait for the alerts and react immediately.",
    author: "Sarah Mitchell",
    role: "Owner",
    company: "TrendyFashion Store",
    avatar: "SM",
    rating: 5,
  },
  {
    content:
      "The 30-day price trend dashboard helped me identify when my competitors run sales. I can now plan my promotions strategically. Revenue is up 23% since using PriceHawk.",
    author: "Marcus Chen",
    role: "E-commerce Manager",
    company: "TechGadgets Pro",
    avatar: "MC",
    rating: 5,
  },
  {
    content:
      "As a small Shopify store owner, I couldn't afford expensive enterprise tools. PriceHawk gives me the same insights at a fraction of the cost. Absolute game-changer!",
    author: "Emily Rodriguez",
    role: "Founder",
    company: "Artisan Home Decor",
    avatar: "ER",
    rating: 5,
  },
  {
    content:
      "Setup took literally 5 minutes. I connected my WooCommerce store, added 5 competitor URLs, and started getting alerts the same day. Couldn't be happier!",
    author: "David Park",
    role: "Store Owner",
    company: "FitGear Athletics",
    avatar: "DP",
    rating: 5,
  },
  {
    content:
      "The instant email alerts are incredible. Last week I caught a competitor dropping prices by 20% and matched them within an hour. Saved a ton of potential lost sales.",
    author: "Lisa Thompson",
    role: "Operations Director",
    company: "Beauty Essentials Co",
    avatar: "LT",
    rating: 5,
  },
  {
    content:
      "We track 8 competitors across 150 products. Before PriceHawk, this was impossible to manage. Now our pricing strategy is data-driven and responsive.",
    author: "James Wilson",
    role: "CEO",
    company: "Outdoor Adventure Gear",
    avatar: "JW",
    rating: 5,
  },
];

export default function Testimonials(): React.ReactElement {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Loved by e-commerce merchants
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join hundreds of small businesses that use PriceHawk to stay
            competitive and save time on price monitoring.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial: Testimonial, index: number) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow"
            >
              {/* Rating Stars */}
              <div className="flex space-x-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, starIndex: number) => (
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
              <p className="text-slate-600 mb-6 leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                {/* Avatar */}
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-slate-500">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">500+</p>
              <p className="text-primary-100">Active Users</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">2M+</p>
              <p className="text-primary-100">Prices Tracked</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">98%</p>
              <p className="text-primary-100">Customer Satisfaction</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">10hrs</p>
              <p className="text-primary-100">Saved Weekly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
