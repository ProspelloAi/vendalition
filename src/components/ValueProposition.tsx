"use client";
import { motion } from "framer-motion";
import { Rocket, Clock, DollarSign, Sparkles } from "lucide-react";
import { JSX } from "react";

interface ValueProp {
  title: string;
  description: string;
  icon: JSX.Element;
  metric: string;
  metricLabel: string;
}

const valueProps: ValueProp[] = [
  {
    title: "Book more qualified demos, faster",
    description:
      "Agentic AI engages leads within seconds and schedules meetings at peak intent.",
    icon: <Rocket className="w-8 h-8 text-sky-600" />,
    metric: "3x",
    metricLabel: "More Demos",
  },
  {
    title: "Shorten sales cycles",
    description:
      "Personalized, real-time demos and automated follow-ups convert faster.",
    icon: <Clock className="w-8 h-8 text-sky-600" />,
    metric: "40%",
    metricLabel: "Faster Close",
  },
  {
    title: "Cut cost per lead",
    description:
      "AI qualification and sequencing reduce SDR workload so reps focus on closing.",
    icon: <DollarSign className="w-8 h-8 text-sky-600" />,
    metric: "60%",
    metricLabel: "Lower Cost",
  },
];

export default function ValueProposition() {
  return (
    <section className="relative py-20 px-6 sm:px-10 bg-gradient-to-b from-white via-sky-50 to-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200 rounded-full shadow-sm">
            <Sparkles className="w-4 h-4 text-sky-600" />
            <span className="text-sm font-medium text-gray-700">
              AI-POWERED TRANSFORMATION
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-6 mb-3">
            Transform Your Sales Pipeline
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the next generation of AI-powered sales acceleration.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-8 text-left"
            >
              {/* Icon + Metric */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-sky-100">
                  {prop.icon}
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-sky-600">
                    {prop.metric}
                  </p>
                  <p className="text-xs text-gray-500">{prop.metricLabel}</p>
                </div>
              </div>

              {/* Text */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                {prop.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {prop.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-gray-50 pointer-events-none" />
    </section>
  );
}
