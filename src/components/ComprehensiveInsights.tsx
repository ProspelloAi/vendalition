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
  "Agentic Conversational Sales",
  "Lead Tracking & Intent Signals",
  "Adaptive Product Demonstrations",
  "CRM-Native Pipeline Automation",
  "Full-Funnel Agent",
  "Actionable Signals",
  "Plug & Deploy",
  "Predictable AI Spend",
  "Agentic Conversational Sales",
  "Lead Tracking & Intent Signals",
  "Adaptive Product Demonstrations",
  "CRM-Native Pipeline Automation",
  "Full-Funnel Agent",
  "Actionable Signals",
];

export default function ComprehensiveInsights() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 p-6 flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-7xl -mt-24">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">Key Features</h2>
          <button className="px-4 py-2 bg-gray-200 rounded-full text-gray-600 text-sm flex items-center gap-2 hover:bg-gray-300 transition-colors">
            <span>Why Choose Us</span>
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          </button>
        </div>
        <p className="text-gray-600 mb-8 text-center md:text-left">
          Full-funnel agent with actionable signals, plug & deploy simplicity,
          and predictable AI spend
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-800 font-semibold text-lg">
                Agentic Conversational Sales
              </h3>
              <IconEye className="w-5 h-5 text-gray-400" />
            </div>
            <p className="text-gray-600 text-sm mb-4">
              One smart agent handles inbound and outbound conversations across
              email, chat, WhatsApp and LinkedIn.
            </p>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip />
                <Bar dataKey="value" fill="#4C51BF" barSize={20} />
              </BarChart>
            </ResponsiveContainer>
            <div className="text-purple-600 mt-4 flex items-center gap-2">
              <span className="text-sm">Multi-Channel Coverage</span>
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
            </div>
            <p className="text-gray-600 text-sm mt-2">
              Seamlessly engage prospects wherever they are with intelligent
              automation across all major communication platforms
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-800 font-semibold text-lg">
                Lead Tracking & Intent Signals
              </h3>
              <IconChartAreaLine className="w-5 h-5 text-gray-400" />
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Track millions of web signals and buyer behaviors so you know when
              a prospect is ready — not just who they are.
            </p>
            <ResponsiveContainer width="100%" height={200}>
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
            </ResponsiveContainer>
            <div className="text-purple-600 mt-4 flex items-center gap-2">
              <span className="text-sm">Deep Intent Recognition</span>
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
            </div>
            <p className="text-gray-600 text-sm mt-2">
              Move beyond basic data to understand true buyer intent with
              advanced signal processing and behavioral analytics
            </p>
          </motion.div>
        </div>

        <div className="mt-8 relative overflow-hidden space-y-4">
          <div className="flex animate-scroll-right-to-left">
            <div className="flex items-center gap-4 px-4">
              {features.map((feature, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="px-4 py-2 bg-gray-200 rounded-full text-gray-600 text-sm hover:bg-gray-300 transition-colors whitespace-nowrap"
                >
                  {feature}
                </motion.span>
              ))}
            </div>
            <div className="flex items-center gap-4 px-4">
              {features.map((feature, index) => (
                <motion.span
                  key={`duplicate-${index}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="px-4 py-2 bg-gray-200 rounded-full text-gray-600 text-sm hover:bg-gray-300 transition-colors whitespace-nowrap"
                >
                  {feature}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="flex animate-scroll-left-to-right">
            <div className="flex items-center gap-4 px-4">
              {features.map((feature, index) => (
                <motion.span
                  key={`bottom-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="px-4 py-2 bg-gray-200 rounded-full text-gray-600 text-sm hover:bg-gray-300 transition-colors whitespace-nowrap"
                >
                  {feature}
                </motion.span>
              ))}
            </div>
            <div className="flex items-center gap-4 px-4">
              {features.map((feature, index) => (
                <motion.span
                  key={`bottom-duplicate-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="px-4 py-2 bg-gray-200 rounded-full text-gray-600 text-sm hover:bg-gray-300 transition-colors whitespace-nowrap"
                >
                  {feature}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-100 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-100 to-transparent pointer-events-none" />
        </div>
      </div>
    </motion.div>
  );
}
