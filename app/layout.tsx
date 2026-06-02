import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PriceHawk - Automated Competitor Price Tracking for E-commerce",
  description:
    "Stay ahead with automated price tracking! PriceHawk monitors competitor prices for Shopify and WooCommerce merchants and sends instant email alerts when prices change.",
  keywords:
    "price tracking, competitor monitoring, e-commerce, Shopify, WooCommerce, price alerts, pricing intelligence",
  openGraph: {
    title: "PriceHawk - Automated Competitor Price Tracking",
    description:
      "Save hours of manual price checking. Get instant email alerts when competitors change their prices.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "PriceHawk - Automated Competitor Price Tracking",
    description:
      "Save hours of manual price checking. Get instant email alerts when competitors change their prices.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <html lang="en">
      <body className="bg-navy-900 text-white antialiased">{children}</body>
    </html>
  );
}
