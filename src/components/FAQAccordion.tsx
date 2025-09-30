"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  IconChevronDown,
  IconCircleCheck,
  IconMail,
} from "@tabler/icons-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is Inbound Concierge?",
    answer:
      "AI agent as the first responder to all inbound leads (chat, email, website). Includes meeting scheduling with calendar integration and contextual handoff to human reps when needed.",
  },
  {
    question: "How does AI SDR (Outbound Automation) work?",
    answer:
      "Automated multi-channel outreach across call, email, LinkedIn, WhatsApp, and SMS. Features personalized dynamic sequences per persona/industry with deliverability monitoring and self-optimization.",
  },
  {
    question: "What's included in Smart CRM & Pipeline Management?",
    answer:
      "Unified view of all prospects and accounts with Kanban-style pipeline and drag-and-drop functionality. AI-driven deal progression recommends the next best action for each opportunity.",
  },
  {
    question: "How does Lead Scoring & Prioritization function?",
    answer:
      "Combines behavioral, firmographic, and engagement scoring to generate daily prioritized lead lists for SDRs. The system automatically updates as prospects engage with your content.",
  },
  {
    question: "What insights does Sales Forecasting & Analytics provide?",
    answer:
      "Provides predictive win probability for each deal, pipeline health dashboards, and forecast accuracy benchmarking to help you make data-driven decisions.",
  },
  {
    question: "What is Conversation Intelligence & Coaching?",
    answer:
      "Auto-transcribed calls, chats, and emails with win/loss analysis providing rep-level feedback. Includes a coaching assistant that suggests improvements based on conversation data.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      id="contact"
      className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8 flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200">
            <IconCircleCheck className="w-4 h-4 text-gray-700" />
            <span className="text-sm text-gray-700 font-medium">
              Your Queries, Simplified
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
            Questions? Answers!
          </h1>
          <p className="text-gray-600 text-lg">
            Find quick answers to the most common questions about our platform
          </p>
        </motion.div>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-medium text-gray-900 pr-4">
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
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-2">
                      <p className="text-gray-600 leading-relaxed">
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
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex items-center justify-center gap-2 text-gray-700"
        >
          <IconMail className="w-5 h-5 text-gray-600" />
          <span className="text-sm">
            Feel free to mail us for any enquiries:{" "}
            <span className="font-medium">Vendalition@support.com</span>
          </span>
        </motion.div>
      </div>
    </div>
  );
}
