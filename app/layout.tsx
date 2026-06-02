import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PriceHawk - Stay ahead with automated price tracking!",
  description:
    "Automatically monitor competitor pricing for your e-commerce store. Get instant email alerts when competitors change their prices. Perfect for Shopify and WooCommerce merchants.",
  keywords:
    "price tracking, competitor pricing, e-commerce, Shopify, WooCommerce, price monitoring, price alerts",
  authors: [{ name: "PriceHawk" }],
  openGraph: {
    title: "PriceHawk - Automated Price Tracking for E-commerce",
    description:
      "Save hours of manual price checking and stay competitive effortlessly!",
    url: "https://pricehawk.vercel.app",
    siteName: "PriceHawk",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PriceHawk - Automated Price Tracking",
    description:
      "Save hours of manual price checking and stay competitive effortlessly!",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <html lang="fr">
      <head>
        <GoogleAnalytics />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
