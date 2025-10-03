"use client";

import { motion } from "framer-motion";
import { IconCheck, IconCrown, IconHeart } from "@tabler/icons-react";
import { useState } from "react";

interface PricingFeature {
  text: string;
}

interface PricingPlan {
  name: string;
  priceMonthly?: number;
  isPopular?: boolean;
  features: PricingFeature[];
  description: string;
  buttonText: string;
  buttonVariant?: "trial" | "standard" | "sales";
}

const plans: PricingPlan[] = [
  {
    name: "Starter",
    priceMonthly: 149,
    description: "40k tokens • 300 leads/day • basic dashboards",
    features: [
      { text: "40k tokens" },
      { text: "300 leads/day" },
      { text: "Basic dashboards" },
    ],
    buttonText: "Start trial",
    buttonVariant: "trial",
  },
  {
    name: "Growth",
    priceMonthly: 349,
    isPopular: true,
    description: "150k tokens • 2,000 leads/day • advanced analytics",
    features: [
      { text: "150k tokens" },
      { text: "2,000 leads/day" },
      { text: "Advanced analytics" },
    ],
    buttonText: "Get started",
    buttonVariant: "standard",
  },
  {
    name: "Pro",
    priceMonthly: 699,
    description: "600k tokens • 10,000 leads/day • priority support",
    features: [
      { text: "600k tokens" },
      { text: "10,000 leads/day" },
      { text: "Priority support" },
    ],
    buttonText: "Contact sales",
    buttonVariant: "sales",
  },
];

const enterprisePlan: PricingPlan = {
  name: "Enterprise",
  description: "Custom solutions • Unlimited leads • Dedicated manager",
  features: [
    { text: "Custom integrations" },
    { text: "Unlimited tokens & leads" },
    { text: "Dedicated account manager" },
    { text: "Enterprise security" },
    { text: "SLA guarantees" },
  ],
  buttonText: "Contact sales",
  buttonVariant: "sales",
};

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "monthly"
  );

  const getPrice = (priceMonthly?: number) => {
    if (!priceMonthly) return null;
    if (billingPeriod === "monthly") return priceMonthly;
    return Math.round((priceMonthly * 12 * 0.85) / 12); // Annual pricing (15% off)
  };

  const getAnnualSavings = (priceMonthly?: number) => {
    if (!priceMonthly) return null;
    const yearly = priceMonthly * 12;
    const discounted = yearly * 0.85;
    return Math.round(yearly - discounted);
  };

  const periodLabel =
    billingPeriod === "monthly" ? "/ month" : "/ month (billed annually)";

  return (
    <div
      id="pricing"
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 p-8 flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-7xl">
        {/* Header */}
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

        {/* Title & Billing Switch */}
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

          {/* Animated Toggle */}
          <div className="inline-flex items-center bg-white rounded-xl shadow-sm p-1.5 border border-gray-200 relative">
            <motion.div
              layout
              className={`absolute h-9 w-24 rounded-lg bg-gray-200 z-0 transition-all duration-300 ${
                billingPeriod === "monthly" ? "left-1" : "left-[102px]"
              }`}
            />
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`relative z-10 px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                billingPeriod === "monthly"
                  ? "text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`relative z-10 px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                billingPeriod === "yearly"
                  ? "text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Yearly
            </button>
            <span className="ml-2 px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-lg">
              Save 15%
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 justify-items-center">
          {plans.map((plan, index) => {
            const usdPrice = getPrice(plan.priceMonthly);
            const savings = getAnnualSavings(plan.priceMonthly);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 relative max-w-72 border ${
                  plan.isPopular
                    ? "ring-2 ring-purple-500/20 shadow-purple-500/10 -translate-y-2"
                    : "border-gray-100"
                }`}
              >
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {plan.name}
                    </h3>
                    {plan.isPopular && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full">
                        <IconCrown className="w-3 h-3" />
                        Popular
                      </span>
                    )}
                  </div>

                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold text-gray-900">
                      ${usdPrice}
                    </span>
                    <span className="text-gray-600 text-xs">{periodLabel}</span>
                  </div>

                  {billingPeriod === "yearly" && savings ? (
                    <p className="text-emerald-600 text-xs font-medium mb-2">
                      Save ${savings}/year
                    </p>
                  ) : null}

                  <button
                    className={`w-full py-2 rounded-lg font-medium transition-all flex items-center justify-center gap-2 text-sm ${
                      plan.isPopular
                        ? "bg-gray-900 text-white hover:bg-gray-800"
                        : plan.buttonVariant === "trial"
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : plan.buttonVariant === "sales"
                        ? "bg-gray-800 text-white hover:bg-gray-900"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>

                <div className="border-t border-gray-100 pt-3">
                  <p className="text-xs font-medium text-gray-900 mb-3">
                    {plan.description}
                  </p>
                  <ul className="space-y-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <IconCheck className="w-3 h-3 text-emerald-500 flex-shrink-0" />
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

          {/* Enterprise Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-start-1 md:row-start-2 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-4 shadow-lg border border-purple-200 max-w-72 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 -skew-x-12"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3 justify-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {enterprisePlan.name}
                </h3>
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-semibold rounded-full">
                  Custom
                </span>
              </div>

              <div className="flex items-baseline gap-1 mb-4 justify-center">
                <span className="text-xl font-bold text-gray-900">
                  Contact for Pricing
                </span>
              </div>

              <button className="w-full py-2 rounded-lg font-medium transition-all flex items-center justify-center gap-2 text-sm bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700">
                {enterprisePlan.buttonText}
              </button>
            </div>

            <div className="border-t border-gray-100 pt-3 mt-3">
              <p className="text-xs font-medium text-gray-900 mb-3">
                {enterprisePlan.description}
              </p>
              <ul className="space-y-1">
                {enterprisePlan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <IconCheck className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600">
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Pilot Offer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:col-start-2 md:col-span-2 md:row-start-2 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 shadow-lg max-w-none text-center"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-18">
              Pilot Offer
            </h3>
            <p className="text-gray-600 mb-4">
              8–12 week paid pilot — tailored setup, weekly reviews and a
              conversion playbook.
            </p>
            <button className="px-6 py-2 bg-gray-700 text-white rounded-xl hover:bg-gray-900 transition-all font-medium">
              Contact us for pilot pricing
            </button>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="flex items-center justify-center gap-2 text-gray-600 mt-8"
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
