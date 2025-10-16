"use client";
import { useState } from "react";
import {
  TrendingUp,
  MessageSquare,
  Target,
  Presentation,
  Database,
  Zap,
} from "lucide-react";
import { DotPattern } from "@/components/ui/dot-pattern";
import { CalendlyModal } from "@/components/ui/calendly-modal";

const features = [
  {
    title: "Agentic Conversational Sales",
    description:
      "One smart agent handles inbound and outbound conversations across email, chat, WhatsApp and LinkedIn.",
    icon: MessageSquare,
    color: "purple",
    stats: [
      { label: "Channels", value: "4+" },
      { label: "Response Time", value: "<2min" },
      { label: "Automation", value: "95%" },
    ],
  },
  {
    title: "Lead Tracking & Intent Signals",
    description:
      "Track millions of web signals and buyer behaviors so you know when a prospect is ready — not just who they are.",
    icon: Target,
    color: "blue",
    stats: [
      { label: "Signals Tracked", value: "1M+" },
      { label: "Accuracy", value: "94%" },
      { label: "Real-time", value: "Yes" },
    ],
  },
  {
    title: "Adaptive Product Demonstrations",
    description:
      "Personalized demos that adjust in real time to prospect interest, voice and behavior.",
    icon: Presentation,
    color: "indigo",
    stats: [
      { label: "Personalization", value: "100%" },
      { label: "Engagement", value: "+65%" },
      { label: "Conversion", value: "+42%" },
    ],
  },
  {
    title: "CRM-Native Pipeline Automation",
    description:
      "Connects to HubSpot, Salesforce and common CRMs — actions, notes and scheduled demos write directly into your pipeline.",
    icon: Database,
    color: "violet",
    stats: [
      { label: "CRM Integrations", value: "10+" },
      { label: "Sync Speed", value: "Instant" },
      { label: "Data Quality", value: "99%" },
    ],
  },
];

const whyUs = [
  {
    title: "Full-funnel agent",
    description: "Not just SDR automation or static demos",
    highlight: "Complete Solution",
  },
  {
    title: "Actionable signals",
    description: "Deep intent > shallow noise",
    highlight: "Real Intelligence",
  },
  {
    title: "Plug & deploy",
    description: "CRM-native connectors for fast pilots",
    highlight: "Quick Start",
  },
  {
    title: "Predictable AI spend",
    description: "Per-account telemetry and overage controls",
    highlight: "Cost Control",
  },
];

const metrics = [
  {
    label: "Active Conversations",
    value: "2,847",
    change: "+12.5%",
    trend: "up",
  },
  { label: "Intent Signals", value: "15.2K", change: "+8.3%", trend: "up" },
  { label: "Demos Scheduled", value: "492", change: "+23.7%", trend: "up" },
  { label: "Pipeline Value", value: "$4.2M", change: "+15.8%", trend: "up" },
];

export default function SalesIntelligenceDashboard() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-10 -mt-12 relative z-10">
      <div className="max-w-7xl mx-auto space-y-10">
        <header className="text-center mb-8 sm:mb-12">
          <div className=" sm:flex  justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-gray-200">
              <Zap className="w-4 h-4 text-gray-700" />
              <span className="text-sm font-medium text-gray-700">
                Sales Intelligence Platform
              </span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Full-funnel agent with actionable signals, plug & deploy simplicity,
            and predictable AI spend
          </p>
        </header>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-20 bg-gradient-to-b from-sky-100/40 to-transparent rounded-full blur-3xl opacity-60" />

        <section aria-labelledby="metrics-heading">
          <h2 id="metrics-heading" className="sr-only">
            Key metrics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {metrics.slice(0, 2).map((metric, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <p className="text-gray-500 text-xs sm:text-sm mb-2">
                  {metric.label}
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                  {metric.value}
                </h3>
                <div className="flex items-center gap-1 text-emerald-500 text-xs sm:text-sm">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="font-medium">{metric.change}</span>
                  <span className="text-gray-500">this month</span>
                </div>
              </div>
            ))}

            {/* Hidden metrics visible on md+ */}
            {metrics.slice(2).map((metric, index) => (
              <div
                key={index}
                className="hidden md:block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <p className="text-gray-500 text-sm mb-2">{metric.label}</p>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {metric.value}
                </h3>
                <div className="flex items-center gap-1 text-emerald-500 text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span className="font-medium">{metric.change}</span>
                  <span className="text-gray-500">this month</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Grid (mobile: show top 2 full-width stacked) */}
        <section aria-labelledby="features-heading">
          <h2 id="features-heading" className="sr-only">
            Features
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {features.slice(0, 2).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <article
                  key={index}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 bg-${feature.color}-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <Icon
                        className={`w-6 h-6 sm:w-7 sm:h-7 text-${feature.color}-600`}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                    {feature.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div
                          className={`text-xl sm:text-2xl font-bold text-${feature.color}-600 mb-1`}
                        >
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-500">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}

            {/* On larger screens, render the remaining features */}
            {features.slice(2).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <article
                  key={index}
                  className="hidden lg:block bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className={`w-14 h-14 bg-${feature.color}-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <Icon className={`w-7 h-7 text-${feature.color}-600`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                    {feature.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div
                          className={`text-2xl font-bold text-${feature.color}-600 mb-1`}
                        >
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-500">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Why Us Section */}
        <section aria-labelledby="whyus-heading">
          <h2 id="whyus-heading" className="sr-only">
            Why choose us
          </h2>
          <div className="bg-gradient-to-r from-[#34b3e1] to-[#284390] rounded-3xl p-6 sm:p-10 shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
              Why Choose Us
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {whyUs.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/20 hover:shadow-lg transition-all duration-300 border border-white/20"
                >
                  <div className="inline-block px-3 py-1 bg-white/25 rounded-full text-white text-[10px] sm:text-xs font-medium mb-3 sm:mb-4">
                    {item.highlight}
                  </div>
                  <h4 className="text-sm sm:text-lg font-bold text-white mb-1 sm:mb-2">
                    {item.title}
                  </h4>
                  <p className="text-white/80 text-xs sm:text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section aria-labelledby="cta-heading">
          <h2 id="cta-heading" className="sr-only">
            Call to action
          </h2>
          <div className="relative w-full flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-[#34b3e1]/10 p-8 sm:p-12 shadow-2xl">
            <DotPattern className="absolute inset-0 z-0 opacity-50 [mask-image:radial-gradient(circle_at_center,white,transparent_80%)]" />
            <div className="relative z-10 flex flex-col items-center text-center">
              <h3 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mb-3 sm:mb-4">
                Ready to transform your sales process?
              </h3>
              <p className="text-gray-700 mb-6 sm:mb-8 max-w-2xl text-sm sm:text-lg leading-relaxed">
                Deploy in minutes with CRM-native connectors and start seeing
                results with predictable AI spend controls
              </p>
              <button
                onClick={() => setIsCalendlyOpen(true)}
                className="px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-[#34b3e1] to-[#284390] text-white font-bold rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
              >
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>

      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
      />
    </div>
  );
}
