import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Open_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";

const headingFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading"
});

const bodyFont = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "Lighthouse Innovation",
  description:
    "Lighthouse Innovation builds future-ready systems that teach, connect, and protect — from gamified learning platforms to resilient communication protocols.",
  metadataBase: new URL("https://www.example-lighthouse-innovation.com"),
  openGraph: {
    title: "Lighthouse Innovation",
    description:
      "Umbrella for LUMEN, EchoToken, and Athena Labs — building systems that teach, connect, and protect.",
    url: "https://www.example-lighthouse-innovation.com",
    siteName: "Lighthouse Innovation",
    images: [
      {
        url: "/og-lighthouse.png",
        width: 1200,
        height: 630,
        alt: "Lighthouse Innovation"
      }
    ],
    locale: "en_GB",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Lighthouse Innovation",
    description:
      "Lighthouse Innovation: LUMEN, EchoToken, Athena Labs — systems for learning, resilient comms, and space R&D.",
    images: ["/og-lighthouse.png"]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable}`}
    >
      <body className="min-h-screen bg-slate-950 text-slate-50 antialiased">
        <ParticlesBackground />
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 pt-20 pb-12">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
