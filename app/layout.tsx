import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque, Baloo_2 } from "next/font/google";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "Ecello Labs — Shipping AI for your business",
  description:
    "Ecello Labs builds AI automation, assistants, and software that take real work off your team's plate. A remote AI & software studio based in Bremerhaven, Germany.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bricolage.variable} ${baloo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-[--color-ink] bg-[--color-paper] leading-relaxed">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
