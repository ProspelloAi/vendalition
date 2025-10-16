"use client";

import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { IconEye, IconChartAreaLine } from "@tabler/icons-react";
import { Target } from "lucide-react";

interface ChartData {
  name: string;
  value: number;
}

const data: ChartData[] = [
  { name: "Jan", value: 200 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 400 },
  { name: "Apr", value: 500 },
  { name: "May", value: 600 },
  { name: "Jun", value: 700 },
  { name: "Jul", value: 800 },
  { name: "Aug", value: 900 },
  { name: "Sep", value: 1000 },
  { name: "Oct", value: 1100 },
];

const balanceData: ChartData[] = [
  { name: "Jan", value: 40 },
  { name: "Feb", value: 45 },
  { name: "Mar", value: 50 },
  { name: "Apr", value: 55 },
  { name: "May", value: 60 },
  { name: "Jun", value: 65 },
  { name: "Jul", value: 70 },
  { name: "Aug", value: 68 },
  { name: "Sep", value: 52.422 },
];

const features = [
  "Agentic Conversational Sales",
  "Lead Tracking & Intent Signals",
  "Adaptive Product Demonstrations",
  "CRM-Native Pipeline Automation",
  "Full-Funnel Agent",
  "Actionable Signals",
  "Plug & Deploy",
  "Predictable AI Spend",
];

export default function ComprehensiveInsights() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="w-full bg-gray-50 py-16 -mt-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center"
    >
      {/* Why Choose Us */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md mb-4 sm:mb-6"
      >
        <Target className="w-4 h-4 text-gray-700" />
        <span className="text-xs sm:text-sm font-medium text-gray-700">
          Why Choose Us
        </span>
      </motion.div>

      <div className="max-w-7xl w-full space-y-12 mt-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-3 sm:mb-4 px-2 ">
            Comprehensive Insights
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Full-funnel agent with actionable signals, plug & deploy simplicity,
            and predictable AI spend.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Agentic Conversational Sales",
              icon: <IconEye className="w-5 h-5 text-gray-400" />,
              description:
                "One smart agent handles inbound and outbound conversations across email, chat, WhatsApp, and LinkedIn.",
              chart: (
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip />
                  <Bar dataKey="value" fill="#4C51BF" barSize={20} />
                </BarChart>
              ),
              tag: "Multi-Channel Coverage",
            },
            {
              title: "Lead Tracking & Intent Signals",
              icon: <IconChartAreaLine className="w-5 h-5 text-gray-400" />,
              description:
                "Track millions of web signals and buyer behaviors so you know when a prospect is ready — not just who they are.",
              chart: (
                <LineChart data={balanceData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#4C51BF"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              ),
              tag: "Deep Intent Recognition",
            },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 * idx }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {card.title}
                </h3>
                {card.icon}
              </div>
              <p className="text-gray-600 text-sm mb-4">{card.description}</p>
              <div className="w-full h-52 sm:h-64">
                <ResponsiveContainer width="100%" height="100%">
                  {card.chart}
                </ResponsiveContainer>
              </div>
              <div className="flex items-center gap-2 text-purple-600 mt-4 text-sm">
                <span>{card.tag}</span>
                <span className="w-2 h-2 rounded-full bg-purple-600"></span>
              </div>
              <p className="text-gray-600 text-sm mt-2">
                {card.tag === "Multi-Channel Coverage"
                  ? "Seamlessly engage prospects wherever they are with intelligent automation across all major communication platforms."
                  : "Move beyond basic data to understand true buyer intent with advanced signal processing and behavioral analytics."}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Scrolling Feature Chips */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative w-full overflow-hidden mt-12"
        >
          <div className="flex animate-scroll-right-to-left space-x-4">
            {features.concat(features).map((feature, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-gray-200 text-gray-600 text-sm rounded-full whitespace-nowrap hover:bg-gray-300 transition-colors"
              >
                {feature}
              </span>
            ))}
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </motion.section>
  );
}
