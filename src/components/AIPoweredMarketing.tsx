"use client";

import { motion } from "framer-motion";
import {
  IconRobot,
  IconRocket,
  IconSettings,
  IconCloudUpload,
  IconGraph,
  IconShieldCheck,
  IconUsers,
  IconBolt,
  IconTrendingUp,
} from "@tabler/icons-react";
import { JSX } from "react";

interface FeatureCard {
  title: string;
  description: string;
  icon: JSX.Element;
}
const features: FeatureCard[] = [
  {
    title: "Campaign Automation",
    description:
      "Create and execute campaigns with ease using AI-driven automation for maximum efficiency",
    icon: <IconRobot className="w-8 h-8 text-purple-600" />,
  },
  {
    title: "Personalized Outreach",
    description:
      "Deliver tailored messages to each customer for more impactful and engaging communication",
    icon: <IconRocket className="w-8 h-8 text-purple-600" />,
  },
  {
    title: "Data Optimization",
    description:
      "Analyze performance with detailed analytics to fine-tune campaigns and boost results",
    icon: <IconSettings className="w-8 h-8 text-purple-600" />,
  },
  {
    title: "Seamless Collaboration",
    description:
      "Seamlessly integrate with existing tools to enhance team productivity and coordination",
    icon: <IconCloudUpload className="w-8 h-8 text-purple-600" />,
  },
  {
    title: "Real-Time Insights",
    description:
      "Monitor customer interactions and adapt strategies in real time for optimal engagement",
    icon: <IconGraph className="w-8 h-8 text-purple-600" />,
  },
  {
    title: "Future-Proof Solutions",
    description:
      "Stay ahead with continuous updates, and built-in adaptability for evolving needs.",
    icon: <IconShieldCheck className="w-8 h-8 text-purple-600" />,
  },
];

const bottomTags = [
  { label: "Expert Collaboration", icon: <IconUsers className="w-4 h-4" /> },
  { label: "Seamless Integration", icon: <IconBolt className="w-4 h-4" /> },
  { label: "Scalable Solutions", icon: <IconTrendingUp className="w-4 h-4" /> },
];

export default function AIPoweredMarketing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200">
            <IconRocket className="w-4 h-4 text-gray-700" />
            <span className="text-sm text-gray-700 font-medium">
              Effortless Deployment
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            AI-Powered Marketing
          </h1>
          <p className="text-gray-600 text-lg">
            Simplify deployment for unmatched scalability and impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-purple-50 rounded-xl mb-5">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-12 pt-8 border-t border-gray-300"
        >
          {bottomTags.map((tag, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-700">
              {tag.icon}
              <span className="text-sm font-medium">{tag.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
