'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  IconChevronDown,
  IconCircleCheck,
  IconMail,
} from '@tabler/icons-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How long does setup take?',
    answer: '1–2 weeks for CRM integration and pilot configuration.',
  },
  {
    question: 'Does it work with our CRM?',
    answer: 'Yes — HubSpot and Salesforce are supported. Custom CRMs via API.',
  },
  {
    question: 'How are AI costs handled?',
    answer:
      'Plans include token bundles. Top-up packs and enterprise committed volumes are available.',
  },
  {
    question: 'Can VendAltion book demos in different timezones?',
    answer:
      'Yes — agent schedules meetings in the prospect’s local time and syncs with your reps’ calendars.',
  },
  {
    question: 'Is data secure?',
    answer:
      'Yes — role-based access, configurable retention, and audit logs. We sign DPAs for enterprise customers.',
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 via-purple-50 to-pink-50 p-8 flex flex-col items-center justify-start">
      <div className="w-full max-w-3xl p-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full shadow-sm border border-gray-200">
            <IconCircleCheck className="w-4 h-4 text-gray-700" />
            <span className="text-sm sm:text-base text-gray-700 font-semibold">
              Your Queries, Simplified
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-8"
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Got Questions? We’ve Got Answers
          </h1>
          <p className="text-gray-700 text-sm sm:text-base">
            Explore the most common questions and find solutions quickly.
          </p>
        </motion.div>

        <div className="space-y-3 mb-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300`}
            >
              {/* Colored accent for open card */}
              {openIndex === index && (
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-400 rounded-l-2xl shadow-lg"></div>
              )}

              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-blue-50 focus:bg-blue-50 transition-colors duration-200 relative"
              >
                <span className="text-sm sm:text-base font-medium text-gray-900 pr-3">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <IconChevronDown className="w-5 h-5 text-gray-600" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-4 pt-2">
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-2 text-gray-700 text-sm sm:text-base"
        >
          <IconMail className="w-5 h-5 text-gray-600" />
          <span>
            Still have questions? Email us at{' '}
            <span className="font-semibold">support@vendaltion.com</span>
          </span>
        </motion.div>
      </div>
    </div>
  );
}
