"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Globe } from "@/components/ui/globe";
import { Highlighter } from "@/components/ui/highlighter";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { CalendlyModal } from "@/components/ui/calendly-modal";

export default function Hero() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-b from-white via-gray-50 to-sky-50 -z-10" />

      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <Globe />

      <main id="features" className="relative z-0 ">
        <div className="container mx-auto px-4 py-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="hidden md:inline-flex items-center justify-center w-28 h-28 mb-8 animate-bounce-slow">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2"
              >
                <div className="w-8 h-8 bg-gray-900 rounded transform rotate-45 flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm transform -rotate-45"></div>
                </div>
              </motion.div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-800 mb-4 tracking-tight">
              Agentic AI for Sales
            </h1>
            <p className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 mb-6 tracking-tight">
              From lead to demo to deal — automate the entire journey.
            </p>
            <p className="text-gray-600 text-lg mb-0 animate-fade-in-delay mt-10">
              VendAltion autonomously finds, qualifies and books high-intent
              demos — then hands ready-to-close opportunities to your reps.
            </p>
            <p className="text-gray-600 text-lg animate-fade-in-delay mb-4">
              {" "}
              No extra tabs. No busywork.
            </p>

            <p className="mt-10">
              Turn every{" "}
              <Highlighter action="underline" color="#FF9800">
                conversation into conversion
              </Highlighter>{" "}
              — powered by{" "}
              <Highlighter action="highlight" color="#87CEFA">
                VendAItion
              </Highlighter>{" "}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-2 mt-12">
              <button onClick={() => setIsCalendlyOpen(true)}>
                <InteractiveHoverButton>Request a demo</InteractiveHoverButton>
              </button>

              <button
                onClick={() => setIsCalendlyOpen(true)}
                className="px-8 py-3 bg-[#284390] text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7a4 4 0 118 0 4 4 0 01-8 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 8v6m0 0l-2-2m2 2l2-2"
                  />
                </svg>
                Apply for an 8-week pilot
              </button>
            </div>
            <span className="mt-6 text-gray-500 block text-sm">
              Used by fast-growing sales teams to book more demos and shorten
              sales cycles.
            </span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent via-sky-50/60 to-sky-50 pointer-events-none" />
      </main>
      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
      />
    </>
  );
}
