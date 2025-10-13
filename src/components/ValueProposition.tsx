'use client';

import { motion } from 'framer-motion';
import { IconRocket, IconClock, IconCurrencyDollar } from '@tabler/icons-react';
import { ChartCandlestick } from 'lucide-react';
import { JSX } from 'react';

interface ValueProp {
  title: string;
  description: string;
  icon: JSX.Element;
}

const valueProps: ValueProp[] = [
  {
    title: 'Book more qualified demos, faster',
    description:
      'Agentic AI engages leads within seconds and schedules meetings at peak intent.',
    icon: <IconRocket className="w-8 h-8 text-[#34b3e1]" />,
  },
  {
    title: 'Shorten sales cycles',
    description:
      'Personalized, real-time demos and automated follow-ups convert faster.',
    icon: <IconClock className="w-8 h-8 text-blue-600" />,
  },
  {
    title: 'Cut cost per lead',
    description:
      'AI qualification and sequencing reduce SDR workload so reps focus on closing.',
    icon: <IconCurrencyDollar className="w-8 h-8 text-emerald-600" />,
  },
];

export default function ValueProposition() {
  return (
    <section className="relative py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Dotted Pattern Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle, #9ca3af 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md">
            <ChartCandlestick className="w-4 h-4 text-gray-700" />
            <span className="text-sm font-medium text-gray-700">
              VALUE PROPOSITION
            </span>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full border border-gray-100">
                {/* Icon Container */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {prop.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {prop.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {prop.description}
                </p>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gray-200 transition-all duration-300"></div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
