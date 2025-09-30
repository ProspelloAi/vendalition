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
  "Seamless Integrations",
  "Real-Time Reports",
  "Personalized Engagement",
  "Customer Retention",
  "Cost-Effective",
  "Smart Spending",
  "Data-Driven Decisions",
  "Increased Efficiency",
  "Seamless Integrations",
  "Real-Time Reports",
  "Personalized Engagement",
  "Customer Retention",
  "Cost-Effective",
  "Smart Spending",
  "Data-Driven Decisions",
  "Increased Efficiency",
  "Optimized Performance",
  "Advanced Analytics",
  "User-Friendly Design",
  "Scalable Solutions",
  "Optimized Performance",
  "Advanced Analytics",
  "User-Friendly Design",
  "Scalable Solutions",
];

export default function ComprehensiveInsights() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 p-6 flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-7xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">
            Comprehensive Insights
          </h2>
          <button className="px-4 py-2 bg-gray-200 rounded-full text-gray-600 text-sm flex items-center gap-2 hover:bg-gray-300 transition-colors">
            <span>Live Oversight</span>
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          </button>
        </div>
        <p className="text-gray-600 mb-8 text-center md:text-left">
          Track every campaign and customer interaction to refine engagement
          strategies
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-500 text-sm">Total Spent</h3>
              <IconEye className="w-5 h-5 text-gray-400" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-4">$682.5</div>
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
              <span className="text-sm">Real-Time Insights</span>
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
            </div>
            <p className="text-gray-600 text-sm mt-2">
              Monitor your campaigns in real time to ensure maximum
              effectiveness and identify areas for improvement
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-500 text-sm">
                Balance <span className="text-green-500">● on track</span>
              </h3>
              <IconChartAreaLine className="w-5 h-5 text-gray-400" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-4">
              <span className="text-green-500">43.50%</span>{" "}
              <span className="text-green-500">+2.45%</span>
            </div>
            <div className="text-gray-500 text-sm mb-4">
              $52.422 <span className="text-red-500">-4.79%</span>
            </div>
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
              <span className="text-sm">Actionable Data</span>
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
            </div>
            <p className="text-gray-600 text-sm mt-2">
              Leverage analytics to enhance workflows, boost engagement, and
              make informed marketing decisions
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
