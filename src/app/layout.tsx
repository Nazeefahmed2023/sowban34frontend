import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Discover Our Products | Premium Online Shopping Store",
  description: "Explore our curated collection of high-quality products. Shop electronics, jewelry, men's and women's clothing with fast shipping and great prices.",
  keywords: "online shopping, products, electronics, fashion, jewelry, clothing",
  authors: [{ name: "AppScrip" }],
  openGraph: {
    title: "Discover Our Products | Premium Online Shopping Store",
    description: "Explore our curated collection of high-quality products",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SchemaMarkup />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
