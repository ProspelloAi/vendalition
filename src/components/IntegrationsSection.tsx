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
          Integrates with
        </h2>
        <p className="text-gray-600 text-lg">
          Seamlessly integrate with your favorite tools
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
            d="M 170 80 Q 350 80, 450 240"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8,8"
            className={animate ? "animate-dash" : ""}
            style={{ animationDelay: "0s" }}
          />

          <path
            d="M 170 240 L 450 240"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8,8"
            className={animate ? "animate-dash" : ""}
            style={{ animationDelay: "0.2s" }}
          />

          <path
            d="M 170 400 Q 350 400, 450 240"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8,8"
            className={animate ? "animate-dash" : ""}
            style={{ animationDelay: "0.4s" }}
          />

          {/* Center to Top Right */}
          <path
            d="M 550 240 Q 750 80, 950 80"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8,8"
            className={animate ? "animate-dash" : ""}
            style={{ animationDelay: "0.6s" }}
          />

          {/* Center to Middle Right */}
          <path
            d="M 550 240 L 830 240"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8,8"
            className={animate ? "animate-dash" : ""}
            style={{ animationDelay: "0.8s" }}
          />

          {/* Center to Bottom Right */}
          <path
            d="M 550 240 Q 750 400, 950 400"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8,8"
            className={animate ? "animate-dash" : ""}
            style={{ animationDelay: "1s" }}
          />
        </svg>

        {/* Left Side Icons */}
        <div className="absolute left-0 top-0 animate-fade-in">
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <svg
              className="w-8 h-8 text-gray-800"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          </div>
        </div>

        <div className="absolute left-0 top-1/2 -translate-y-1/2 animate-fade-in delay-100">
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <svg
              className="w-8 h-8 text-gray-800"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </div>
        </div>

        <div className="absolute left-0 bottom-0 animate-fade-in delay-200">
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <svg
              className="w-8 h-8 text-gray-800"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
            </svg>
          </div>
        </div>

        {/* Center Icon */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-scale-in z-10 ml-12 mt-12">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl">
            <Sparkles className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Right Side Icons */}
        <div className="absolute right-0 top-0 animate-fade-in delay-300">
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <svg
              className="w-8 h-8 text-gray-800"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </div>
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 animate-fade-in delay-400">
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <svg
              className="w-8 h-8 text-gray-800"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
          </div>
        </div>

        <div className="absolute right-0 bottom-0 animate-fade-in delay-500">
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <svg
              className="w-8 h-8 text-gray-800"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
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
