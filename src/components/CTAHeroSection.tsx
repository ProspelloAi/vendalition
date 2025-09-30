"use client";

import { motion } from "framer-motion";
import {
  IconArrowRight,
  IconPlayerPlay,
  IconUsers,
  IconCircleCheck,
} from "@tabler/icons-react";

export default function CTAHeroSection() {
  const monthlyData = [
    { month: "Jan", value: 20 },
    { month: "Feb", value: 35 },
    { month: "Mar", value: 45 },
    { month: "Apr", value: 40 },
    { month: "May", value: 55 },
    { month: "Jun", value: 95 },
    { month: "Jul", value: 50 },
    { month: "Aug", value: 60 },
    { month: "Sep", value: 45 },
    { month: "Oct", value: 40 },
  ];

  const maxValue = Math.max(...monthlyData.map((d) => d.value));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 p-8 flex items-center justify-center">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200">
              <IconUsers className="w-4 h-4 text-gray-700" />
              <span className="text-sm text-gray-700 font-medium">
                Trusted by 10k + businesses
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-6xl font-bold text-gray-900 leading-tight mb-6">
              Build AI-Powered Marketing Now!
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Automate lead generation and customer engagement in diverse and
              dynamic real-world settings
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <button className="group px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
              Get Started
              <IconArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-gray-800 hover:bg-gray-900 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <IconPlayerPlay className="w-3 h-3 fill-white" />
              </div>
              Learn More
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Balance</h3>
              <div className="flex items-center gap-2">
                <IconCircleCheck className="w-5 h-5 text-emerald-500 fill-emerald-500" />
                <span className="text-emerald-500 font-semibold text-sm">
                  On track
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 mb-6 border border-gray-100">
              <p className="text-gray-500 text-sm mb-2">Total Spend</p>
              <p className="text-4xl font-bold text-gray-900">$682.5</p>
            </div>

            <div className="relative h-64">
              <div className="absolute top-0 left-0 right-0 border-t-2 border-dashed border-gray-300"></div>

              <div className="flex items-end justify-between h-full pt-4 gap-2">
                {monthlyData.map((data, index) => (
                  <motion.div
                    key={data.month}
                    initial={{ height: 0 }}
                    animate={{ height: `${(data.value / maxValue) * 100}%` }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.05 }}
                    className="flex-1 flex flex-col items-center gap-2"
                  >
                    <div
                      className={`w-full rounded-lg ${
                        data.month === "Jun" ? "bg-blue-600" : "bg-gray-200"
                      }`}
                      style={{ height: "100%" }}
                    ></div>
                    <span className="text-xs text-gray-400 font-medium">
                      {data.month}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-200 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-40"></div>
        </motion.div>
      </div>
    </div>
  );
}
