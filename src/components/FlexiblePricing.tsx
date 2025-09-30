"use client";

import { motion } from "framer-motion";
import { IconCheck, IconCrown, IconHeart } from "@tabler/icons-react";
import { useState } from "react";

interface PricingFeature {
  text: string;
}

interface PricingPlan {
  name: string;
  priceMonthly: number;
  period: string;
  isPopular?: boolean;
  features: PricingFeature[];
  description: string;
}

const plans: PricingPlan[] = [
  {
    name: "Starter",
    priceMonthly: 12,
    period: "user/month",
    description: "Everything in starter plan",
    features: [
      { text: "Unlimited AI usage here" },
      { text: "Premium support" },
      { text: "Customer care on point" },
      { text: "Collaboration tools" },
    ],
  },
  {
    name: "Pro",
    priceMonthly: 17,
    period: "user/month",
    isPopular: true,
    description: "Everything in Pro plan",
    features: [
      { text: "Integrations with 3rd-party" },
      { text: "Advanced analytics" },
      { text: "Team performance tracking" },
      { text: "Top grade security" },
      { text: "Customizable Solutions" },
    ],
  },
  {
    name: "Enterprise",
    priceMonthly: 97,
    period: "user/month",
    description: "Dedicated account manager",
    features: [
      { text: "Custom reports & dashboards" },
      { text: "Most performance usage" },
      { text: "Enterprise-grade security" },
      { text: "Customizable Solutions" },
      { text: "Seamless Integration" },
      { text: "Dedicated account manager" },
    ],
  },
];

export default function FlexiblePricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "monthly"
  );
  const exchangeRate = 3.67;

  const getPrice = (priceMonthly: number, period: string) => {
    const yearlyPrice = priceMonthly * 12 * 0.8;
    const usdPrice =
      period === "monthly" ? priceMonthly : (yearlyPrice / 12).toFixed(2);
    const aedPrice = (Number(usdPrice) * exchangeRate).toFixed(2);
    return { usdPrice, aedPrice };
  };

  return (
    <div
      id="pricing"
      className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8 flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200">
            <div className="w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center">
              <IconCheck className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm text-gray-700 font-medium">
              Transparent Pricing, No Surprises
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Flexible Plans for All
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Choose a plan that fits your goals and scale as you grow
          </p>

          <div className="inline-flex items-center bg-white rounded-xl shadow-sm p-1.5 border border-gray-200">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                billingPeriod === "monthly"
                  ? "bg-gray-200 text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                billingPeriod === "yearly"
                  ? "bg-gray-200 text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Yearly
            </button>
            <span className="ml-2 px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-lg">
              Save 20%
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, index) => {
            const { usdPrice, aedPrice } = getPrice(
              plan.priceMonthly,
              billingPeriod
            );
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow relative ${
                  plan.isPopular ? "ring-2 ring-purple-500" : ""
                }`}
              >
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {plan.name}
                    </h3>
                    {plan.isPopular && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full">
                        <IconCrown className="w-3 h-3" />
                        Popular
                      </span>
                    )}
                  </div>

                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-5xl font-bold text-gray-900">
                      ${usdPrice}
                    </span>
                    <span className="text-gray-600 text-sm">
                      ({aedPrice} AED) /{" "}
                      {billingPeriod === "monthly" ? "month" : "year"}
                    </span>
                  </div>

                  <button
                    className={`w-full py-3.5 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${
                      plan.isPopular
                        ? "bg-gray-800 text-white hover:bg-gray-900"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    <IconCrown className="w-4 h-4" />
                    Get Started
                  </button>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <p className="text-sm font-semibold text-gray-900 mb-4">
                    {plan.description}
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <IconCheck className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex items-center justify-center gap-2 text-gray-600"
        >
          <IconHeart className="w-5 h-5 text-gray-500" />
          <span className="text-sm">
            We donate 2% of your membership to pediatric wellbeing
          </span>
        </motion.div>
      </div>
    </div>
  );
}
