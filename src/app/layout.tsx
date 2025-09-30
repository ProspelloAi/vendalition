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
  title: "Vendaltion | AI-Powered Sales & CRM Platform",
  description:
    "Vendaltion is your all-in-one AI-powered sales and CRM platform. Features: Inbound Concierge (AI agent, meeting scheduling, handoff), AI SDR (multi-channel outreach, dynamic sequences, deliverability monitoring), Smart CRM & Pipeline Management (unified view, Kanban, AI deal progression), Lead Scoring & Prioritization (behavioral, firmographic, engagement scoring, prioritized lists, auto updates), Sales Forecasting & Analytics (predictive win probability, dashboards, benchmarking), Conversation Intelligence & Coaching (auto-transcribed calls/chats/emails, win/loss analysis, coaching assistant). Automate, engage, and convert with Vendaltion.",
  openGraph: {
    title: "Vendaltion | AI-Powered Sales & CRM Platform",
    description:
      "Vendaltion is your all-in-one AI-powered sales and CRM platform. Features: Inbound Concierge, AI SDR, Smart CRM, Lead Scoring, Sales Forecasting, Conversation Intelligence.",
    url: "https://Vendaltion.com",
    siteName: "Vendaltion",
    images: [
      {
        url: "https://Vendaltion.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vendaltion AI Marketing Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vendaltion | AI-Powered Sales & CRM Platform",
    description:
      "Vendaltion is your all-in-one AI-powered sales and CRM platform. Features: Inbound Concierge, AI SDR, Smart CRM, Lead Scoring, Sales Forecasting, Conversation Intelligence.",
    site: "@Vendaltion",
    images: ["https://Vendaltion.com/og-image.png"],
  },
  alternates: {
    canonical: "https://Vendaltion.com",
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
        <link rel="canonical" href="https://Vendaltion.com" />
        {/* Structured Data: Organization & Product */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Vendaltion",
              url: "https://Vendaltion.com",
              logo: "https://Vendaltion.com/logo.png",
              sameAs: [
                "https://twitter.com/Vendaltion",
                "https://linkedin.com/company/Vendaltion",
              ],
              product: {
                "@type": "Product",
                name: "Vendaltion AI Sales & CRM Platform",
                description:
                  "AI-powered sales, CRM, analytics, and automation platform.",
                url: "https://Vendaltion.com",
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
