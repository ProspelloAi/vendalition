"use client";

import { Sparkles } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Logo {
  url: string;
  src: string;
}

export default function Hero() {
  const [logos, setLogos] = useState<Logo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const companyDomains = [
      "apple.com",
      "microsoft.com",
      "amazon.com",
      "facebook.com",
      "tesla.com",
      "netflix.com",
      "spotify.com",
      "uber.com",
      "airbnb.com",
      "twitter.com",
      "linkedin.com",
      "shopify.com",
      "slack.com",
      "zoom.us",
      "dropbox.com",
      "github.com",
    ];

    const fetchLogos = async () => {
      try {
        setLoading(true);
        const logoData: Logo[] = [];
        for (const domain of companyDomains) {
          const src = `https://logo.clearbit.com/${domain}?size=128`;
          const response = await fetch(src, { method: "HEAD" });
          if (response.ok) {
            logoData.push({
              url: `https://www.${domain}`,
              src,
            });
          }
        }
        setLogos(logoData);
        setLoading(false);
      } catch (err) {
        console.log("Error fetching logos:", err);
        setError("Failed to load logos");
        setLoading(false);
      }
    };

    fetchLogos();
  }, []);

  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 -z-10" />
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <main id="features" className="relative z-0 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl mb-8 animate-bounce-slow">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-800 mb-4 tracking-tight">
              Automate. Engage. Convert.
            </h1>
            <p className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-800 mb-6 tracking-tight">
              Powered by AI.
            </p>
            <p className="text-gray-600 text-lg mb-8 animate-fade-in-delay">
              Your journey to AI-powered marketing starts here
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-2">
              <button className="group px-8 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                Get Started
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
              <button className="px-8 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Learn More
              </button>
            </div>
          </div>

          <div className="mt-32 mb-16">
            <p className="text-center text-gray-500 text-sm font-medium mb-12 tracking-wider uppercase">
              Trusted by leading companies
            </p>

            {loading && (
              <p className="text-center text-gray-600">Loading logos...</p>
            )}
            {error && <p className="text-center text-red-600">{error}</p>}

            {!loading && !error && logos.length > 0 && (
              <div className="relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-100 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-100 to-transparent z-10 pointer-events-none" />
                <div className="animate-scroll-right-to-left">
                  <div className="flex items-center gap-12 px-8 min-w-full">
                    {logos.map((logo, index) => (
                      <a
                        key={index}
                        href={logo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0  hover:grayscale transition-all duration-300"
                        aria-label={`Visit ${logo.url}`}
                      >
                        <Image
                          src={logo.src}
                          alt={`Logo for ${logo.url.replace(
                            "https://www.",
                            ""
                          )}`}
                          width={128}
                          height={128}
                          className="h-12 w-auto object-contain"
                          onError={(e) => {
                            e.currentTarget.src = "/fallback-logo.png";
                          }}
                          placeholder="blur"
                          blurDataURL="/placeholder.png"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
