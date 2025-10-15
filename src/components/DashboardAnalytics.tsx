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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-gray-200">
              <Zap className="w-4 h-4 text-gray-700" />
              <span className="text-sm font-medium text-gray-700">
                Sales Intelligence Platform
              </span>
            </div>
          </div>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Full-funnel agent with actionable signals, plug & deploy simplicity,
            and predictable AI spend
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
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

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
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
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Us Section */}
        <div className="bg-gradient-to-r from-[#34b3e1] to-[#284390] rounded-3xl p-8 md:p-12 shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 hover:shadow-lg transition-all duration-300 border border-white/20"
              >
                <div className="inline-block px-3 py-1 bg-white/25 rounded-full text-white text-xs font-medium mb-4">
                  {item.highlight}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}

        <div className="relative w-full flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-[#34b3e1]/10 p-12 shadow-2xl">
          {/* Dots in background */}
          <DotPattern className="absolute inset-0 z-0 opacity-50 [mask-image:radial-gradient(circle_at_center,white,transparent_80%)]" />

          <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">
              Ready to transform your sales process?
            </h3>

            <p className="text-gray-700 mb-8 max-w-2xl text-center text-lg leading-relaxed">
              Deploy in minutes with CRM-native connectors and start seeing
              results with predictable AI spend controls
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsCalendlyOpen(true)}
                className="px-10 py-4 bg-gradient-to-r from-[#34b3e1] to-[#284390] text-white font-bold rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
              >
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
      />
    </div>
  );
}
