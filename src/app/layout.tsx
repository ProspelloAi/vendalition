// app/layout.tsx

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'VendAItion | AI-Powered Sales & CRM Platform',
  description:
    'VendAItion is your all-in-one AI-powered sales and CRM platform. Features: Inbound Concierge (AI agent, meeting scheduling, handoff), AI SDR (multi-channel outreach, dynamic sequences, deliverability monitoring), Smart CRM & Pipeline Management (unified view, Kanban, AI deal progression), Lead Scoring & Prioritization (behavioral, firmographic, engagement scoring, prioritized lists, auto updates), Sales Forecasting & Analytics (predictive win probability, dashboards, benchmarking), Conversation Intelligence & Coaching (auto-transcribed calls/chats/emails, win/loss analysis, coaching assistant). Automate, engage, and convert with VendAItion.',
  openGraph: {
    title: 'VendAItion | AI-Powered Sales & CRM Platform',
    description:
      'VendAItion is your all-in-one AI-powered sales and CRM platform. Features: Inbound Concierge, AI SDR, Smart CRM, Lead Scoring, Sales Forecasting, Conversation Intelligence.',
    url: 'https://VendAItion.com',
    siteName: 'VendAItion',
    images: [
      {
        url: 'https://VendAItion.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VendAItion AI Marketing Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VendAItion | AI-Powered Sales & CRM Platform',
    description:
      'VendAItion is your all-in-one AI-powered sales and CRM platform. Features: Inbound Concierge, AI SDR, Smart CRM, Lead Scoring, Sales Forecasting, Conversation Intelligence.',
    site: '@VendAItion',
    images: ['https://VendAItion.com/og-image.png'],
  },
  alternates: {
    canonical: 'https://VendAItion.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://VendAItion.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'VendAItion',
              url: 'https://VendAItion.com',
              logo: 'https://VendAItion.com/logo.png',
              sameAs: [
                'https://twitter.com/VendAItion',
                'https://linkedin.com/company/VendAItion',
              ],
              product: {
                '@type': 'Product',
                name: 'VendAItion AI Sales & CRM Platform',
                description:
                  'AI-powered sales, CRM, analytics, and automation platform.',
                url: 'https://VendAItion.com',
              },
            }),
          }}
        />
      </head>
      <body className="antialiased font-sans bg-white text-gray-900">
        <main>{children}</main>
      </body>
    </html>
  );
}
