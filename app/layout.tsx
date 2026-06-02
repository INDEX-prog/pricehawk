import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PriceHawk - Stay Ahead with Automated Price Tracking",
  description:
    "Empower your e-commerce store with real-time pricing insights. Monitor competitor prices, get instant email alerts, and view price trends on a simple dashboard.",
  keywords: [
    "price tracking",
    "competitor monitoring",
    "e-commerce",
    "Shopify",
    "WooCommerce",
    "price alerts",
    "pricing intelligence",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
