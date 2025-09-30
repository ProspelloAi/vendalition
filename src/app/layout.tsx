import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vendalition | AI-Powered Sales & CRM Platform",
  description:
    "Vendalition is your all-in-one AI-powered sales and CRM platform. Features: Inbound Concierge (AI agent, meeting scheduling, handoff), AI SDR (multi-channel outreach, dynamic sequences, deliverability monitoring), Smart CRM & Pipeline Management (unified view, Kanban, AI deal progression), Lead Scoring & Prioritization (behavioral, firmographic, engagement scoring, prioritized lists, auto updates), Sales Forecasting & Analytics (predictive win probability, dashboards, benchmarking), Conversation Intelligence & Coaching (auto-transcribed calls/chats/emails, win/loss analysis, coaching assistant). Automate, engage, and convert with Vendalition.",
  openGraph: {
    title: "Vendalition | AI-Powered Sales & CRM Platform",
    description:
      "Vendalition is your all-in-one AI-powered sales and CRM platform. Features: Inbound Concierge, AI SDR, Smart CRM, Lead Scoring, Sales Forecasting, Conversation Intelligence.",
    url: "https://Vendalition.com",
    siteName: "Vendalition",
    images: [
      {
        url: "https://Vendalition.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vendalition AI Marketing Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vendalition | AI-Powered Sales & CRM Platform",
    description:
      "Vendalition is your all-in-one AI-powered sales and CRM platform. Features: Inbound Concierge, AI SDR, Smart CRM, Lead Scoring, Sales Forecasting, Conversation Intelligence.",
    site: "@Vendalition",
    images: ["https://Vendalition.com/og-image.png"],
  },
  alternates: {
    canonical: "https://Vendalition.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://Vendalition.com" />
        {/* Structured Data: Organization & Product */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Vendalition",
              url: "https://Vendalition.com",
              logo: "https://Vendalition.com/logo.png",
              sameAs: [
                "https://twitter.com/Vendalition",
                "https://linkedin.com/company/Vendalition",
              ],
              product: {
                "@type": "Product",
                name: "Vendalition AI Sales & CRM Platform",
                description:
                  "AI-powered sales, CRM, analytics, and automation platform.",
                url: "https://Vendalition.com",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Semantic structure for SEO */}
        <header>{/* Navbar here */}</header>
        <main>{children}</main>
        <footer>{/* Footer here */}</footer>
      </body>
    </html>
  );
}
