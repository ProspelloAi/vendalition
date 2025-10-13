'use client';

import { motion } from 'framer-motion';
import {
  IconSparkles,
  IconArrowRight,
  IconPlayerPlay,
} from '@tabler/icons-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Testimonial {
  text: string;
  name: string;
  title: string;
  avatar: string;
  fallback: string;
}

const testimonials: Testimonial[] = [
  {
    text: 'VendAltion helped us cut SDR time in half and double demo conversions.',
    name: 'Noah Lowe',
    title: 'Head of Sales',
    avatar: 'https://github.com/shadcn.png',
    fallback: 'NL',
  },
  {
    text: 'Real-time intent signals made outreach much more relevant — win rate improved.',
    name: 'Sophia Romero',
    title: 'Head of Growth',
    avatar: 'https://github.com/vercel.png',
    fallback: 'SR',
  },
  {
    text: 'VendAltion reduced manual outreach by 60% and doubled our demo bookings in 6 weeks.',
    name: 'Pilot Customer',
    title: 'Head of Sales',
    avatar: 'https://github.com/max.png',
    fallback: 'PC',
  },
];

const logoAvatars = [
  'https://github.com/shadcn.png',
  'https://github.com/vercel.png',
  'https://github.com/max.png',
  'https://github.com/jaredpalmer.png',
];

export default function PromoTrustCTA() {
  return (
    <div className="flex flex-col">
      <section className=" bg-gradient-to-br from-gray-100 to-gray-200 p-8 flex flex-col items-center justify-center">
        <div className="w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200 mb-5">
              <IconSparkles className="w-4 h-4 text-gray-700" />
              <span className="text-sm text-gray-700 font-medium">
                Used by teams scaling sales operations
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
              Trusted by Early Adopters
            </h1>
            <p className="text-gray-600 text-lg italic mb-2">
              “VendAltion reduced manual outreach by 60% and doubled our demo
              bookings in 6 weeks.”
            </p>
            <p className="text-gray-500 text-sm">
              — Pilot customer, Head of Sales
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-12"
          >
            <p className="text-gray-700 font-semibold text-lg mb-1">
              Shallow signals are noise. Deep signals are money.
            </p>
            <p className="text-gray-500 text-sm">
              VendAltion turns high-intent behavior into timely outreach and
              booked demos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-gray-700 text-base leading-relaxed mb-0">
                  {t.text}
                </p>
                <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={t.avatar} alt={t.name} />
                    <AvatarFallback className="bg-gray-200 text-gray-700 font-medium">
                      {t.fallback}
                    </AvatarFallback>
                  </Avatar>
                  <div className="border-l-2 border-gray-200 pl-3">
                    <h4 className="text-gray-900 font-semibold text-sm">
                      {t.name}
                    </h4>
                    <p className="text-gray-600 text-xs">{t.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex items-center justify-center gap-3 flex-wrap"
          >
            {logoAvatars.map((logo, idx) => (
              <Avatar
                key={idx}
                className="w-16 h-16 border-2 border-white shadow-sm"
              >
                <AvatarImage src={logo} alt={`Customer logo ${idx + 1}`} />
                <AvatarFallback className="bg-gray-300 text-gray-700">
                  C{idx + 1}
                </AvatarFallback>
              </Avatar>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Book your demo today — see agentic AI in action
          </h2>

          <p className="text-gray-500 italic text-sm">
            We’re offline — leave a message and we’ll get back within one
            business day.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button className="group px-8 py-4 bg-blue-500 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
              Get Started
              <IconArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-gray-800 hover:bg-gray-900 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <IconPlayerPlay className="w-3 h-3 fill-white" />
              </div>
              Learn More
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
