"use client";

import { useState } from "react";
import {
  Target,
  Users,
  Calendar,
  Zap,
  Download,
  ArrowRight,
  Sparkles,
  Activity,
  Clock,
} from "lucide-react";

const hotAccounts = [
  {
    name: "Acme Corp",
    score: 94,
    signal: "Researching CRM integrations",
    action: "Demo template ready",
  },
  {
    name: "TechFlow Inc",
    score: 89,
    signal: "Hiring Sales Director",
    action: "Outreach recommended",
  },
  {
    name: "DataSync Ltd",
    score: 85,
    signal: "Mentioned competitor on LinkedIn",
    action: "Route to AE: Sarah",
  },
  {
    name: "CloudBase",
    score: 82,
    signal: "Downloaded whitepaper",
    action: "Nurture queue assigned",
  },
];

const metrics = [
  {
    label: "Website Visitors",
    value: "2,847",
    period: "Today",
    trend: "+12%",
    icon: Users,
    color: "purple",
  },
  {
    label: "Hot Accounts",
    value: "156",
    period: "Score > 80",
    trend: "+8",
    icon: Target,
    color: "orange",
  },
  {
    label: "Demos Booked",
    value: "42",
    period: "Today",
    trend: "+23%",
    icon: Calendar,
    color: "blue",
  },
  {
    label: "Token Usage",
    value: "12.5k",
    period: "Per Account/Month",
    trend: "Optimal",
    icon: Zap,
    color: "green",
  },
];

const timelineData = [
  {
    time: "2m ago",
    account: "Acme Corp",
    activity: "Visited pricing page 3x",
    intent: 94,
  },
  {
    time: "8m ago",
    account: "TechFlow Inc",
    activity: "Opened outreach email",
    intent: 89,
  },
  {
    time: "15m ago",
    account: "DataSync Ltd",
    activity: "Downloaded case study",
    intent: 85,
  },
  {
    time: "23m ago",
    account: "CloudBase",
    activity: "Engaged with chatbot",
    intent: 82,
  },
];

export default function LeadTrackingDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("daily");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50 px-4 py-12 -mt-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium">
              <Target className="w-4 h-4" />
              <span>LEAD TRACKING</span>
            </div>

            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Find the right buyer at the right time
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              VendAltion continuously scans millions of public signals —
              mentions, product research, job postings, behavioral clues and
              more — to surface high-intent accounts and contacts. We translate
              those signals into{" "}
              <span className="font-semibold text-purple-600">
                timed outreach
              </span>
              , so your agent contacts prospects
              <span className="italic">
                {" "}
                when they&apos;re actively researching or showing interest
              </span>
              .
            </p>

            <div className="space-y-4 pt-4">
              {[
                "See the hottest accounts first — prioritized by intent score.",
                "Get recommended outreach lines and demo templates tailored to the signal.",
                "Route leads to the right AE or nurture queue automatically.",
                "Decrease time-to-contact and increase demo booking rate.",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>

            <button className="mt-8 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group">
              <span>See lead tracking in action</span>
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </button>
          </div>

          {/* Hot Accounts Card */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-purple-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Hot Accounts
                </h3>
              </div>
              <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                Live
              </span>
            </div>

            <div className="space-y-4">
              {hotAccounts.map((account, index) => (
                <div
                  key={index}
                  className="p-4 bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl hover:shadow-md transition-all duration-300 border border-gray-100 group cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-gray-900">
                          {account.name}
                        </h4>
                        <div className="flex items-center gap-1 px-2 py-0.5 bg-orange-100 rounded-full">
                          <span className="text-xs font-bold text-orange-700">
                            {account.score}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{account.signal}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-purple-600 font-medium mt-2">
                    <Sparkles className="w-4 h-4" />
                    <span>{account.action}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Real-Time Dashboard Section */}
        <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20">
                <Activity className="w-4 h-4" />
                <span>REAL-TIME DASHBOARD</span>
              </div>

              <h2 className="text-4xl font-bold text-white leading-tight">
                Live telemetry & reports — know what drives wins
              </h2>

              <p className="text-lg text-purple-200 leading-relaxed">
                The dashboard shows tokens used, leads engaged, demos booked,
                and cost per account — all in one view. Export data, schedule
                reports, and download pilot summaries with one click.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setSelectedPeriod("daily")}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedPeriod === "daily"
                    ? "bg-white text-purple-900"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                Daily
              </button>
              <button
                onClick={() => setSelectedPeriod("weekly")}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedPeriod === "weekly"
                    ? "bg-white text-purple-900"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                Weekly
              </button>
              <button
                onClick={() => setSelectedPeriod("monthly")}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedPeriod === "monthly"
                    ? "bg-white text-purple-900"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                Monthly
              </button>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br from-${metric.color}-400 to-${metric.color}-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="px-2 py-1 bg-green-400/20 text-green-300 rounded-full text-xs font-medium">
                      {metric.trend}
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-purple-200 mb-1">
                    {metric.label}
                  </div>
                  <div className="text-xs text-purple-300">{metric.period}</div>
                </div>
              );
            })}
          </div>

          {/* Activity Timeline & Pilot Report */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Activity Timeline */}
            <div className="lg:col-span-2 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-2 mb-6">
                <Clock className="w-5 h-5 text-purple-300" />
                <h3 className="text-lg font-semibold text-white">
                  Recent Activity
                </h3>
              </div>
              <div className="space-y-4">
                {timelineData.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 pb-4 border-b border-white/10 last:border-0"
                  >
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-white">
                          {item.account}
                        </span>
                        <span className="text-xs text-purple-300">
                          {item.time}
                        </span>
                      </div>
                      <p className="text-sm text-purple-200">{item.activity}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-orange-400 to-red-500 rounded-full"
                            style={{ width: `${item.intent}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-orange-300 font-medium">
                          {item.intent}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pilot Report Card */}
            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl p-6 border border-white/20 shadow-xl">
              <h3 className="text-lg font-semibold text-white mb-4">
                Pilot Report
              </h3>
              <div className="space-y-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-1">46</div>
                  <div className="text-sm text-purple-200">
                    New Leads Generated
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-1">3</div>
                  <div className="text-sm text-purple-200">Deals Closed</div>
                </div>
              </div>
              <button className="w-full px-4 py-3 bg-white text-purple-900 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-300 flex items-center justify-center gap-2 group">
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                <span>Download PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
