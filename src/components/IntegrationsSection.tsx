"use client";

import { Sparkles, Layers, Clock, Settings } from "lucide-react";
import { useEffect, useState } from "react";

export default function IntegrationsSection() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section id="integrations" className="container mx-auto px-4 py-20">
      {/* Header */}
      <div className="text-center mb-16 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md mb-6">
          <Layers className="w-4 h-4 text-gray-700" />
          <span className="text-sm font-medium text-gray-700">
            Integrations
          </span>
        </div>
        <h2 className="text-5xl md:text-6xl font-light text-gray-800 mb-4">
          Connects to your stack
        </h2>
        <p className="text-gray-600 text-lg">
          HubSpot • Salesforce • Pipedrive • Zapier • Mailchimp — plus custom
          integrations via API.
        </p>
      </div>

      {/* Integration Network */}
      <div className="relative max-w-5xl mx-auto h-[500px] mb-16">
        {/* SVG Lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 0 }}
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E5E7EB" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#9CA3AF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#E5E7EB" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          <path
            d="M 70 40 Q 350 80, 450 240"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5, 20"
            className={animate ? "animate-dash" : ""}
            style={{ animationDelay: "0s" }}
          />

          <path
            d="M 75 255 L 550 250"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5, 20"
            className={animate ? "animate-dash" : ""}
            style={{ animationDelay: "0.2s" }}
          />

          <path
            d="M 70 460 Q 350 400, 450 240"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5, 20"
            className={animate ? "animate-dash" : ""}
            style={{ animationDelay: "0.4s" }}
          />

          {/* Center to Top Right */}
          <path
            d="M 550 240 Q 750 80, 950 40"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5, 20"
            className={animate ? "animate-dash" : ""}
            style={{ animationDelay: "0.6s" }}
          />

          {/* Center to Middle Right */}
          <path
            d="M 550 240 L 980 260"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5, 20"
            className={animate ? "animate-dash" : ""}
            style={{ animationDelay: "0.8s" }}
          />

          {/* Center to Bottom Right */}
          <path
            d="M 550 240 Q 750 400, 950 460"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5, 20"
            className={animate ? "animate-dash" : ""}
            style={{ animationDelay: "1s" }}
          />
        </svg>

        {/* Left Side Icons */}
        <div className="absolute left-0 top-0 animate-fade-in">
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-8 h-8 text-gray-800 font-bold text-xs flex items-center justify-center">
              HubSpot
            </div>
          </div>
        </div>

        <div className="absolute left-0 top-1/2 -translate-y-1/2 animate-fade-in delay-100">
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-8 h-8 text-gray-800 font-bold text-xs flex items-center justify-center">
              Salesforce
            </div>
          </div>
        </div>

        <div className="absolute left-0 bottom-0 animate-fade-in delay-200">
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-8 h-8 text-gray-800 font-bold text-xs flex items-center justify-center">
              Pipedrive
            </div>
          </div>
        </div>

        {/* Center Icon */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-scale-in z-10 ml-16 mt-12">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl">
            <Sparkles className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Right Side Icons */}
        <div className="absolute right-0 top-0 animate-fade-in delay-300">
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-8 h-8 text-gray-800 font-bold text-xs flex items-center justify-center">
              Zapier
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 animate-fade-in delay-400">
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-8 h-8 text-gray-800 font-bold text-xs flex items-center justify-center">
              Mailchimp
            </div>
          </div>
        </div>

        <div className="absolute right-0 bottom-0 animate-fade-in delay-500">
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-8 h-8 text-gray-800 font-bold text-xs flex items-center justify-center">
              API
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-slide-up">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg mb-4">
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Seamless Automation
          </h3>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg mb-4">
            <Clock className="w-6 h-6 text-gray-700" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Real-Time Data Sync
          </h3>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg mb-4">
            <Settings className="w-6 h-6 text-gray-700" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Customizable Solutions
          </h3>
        </div>
      </div>
    </section>
  );
}
