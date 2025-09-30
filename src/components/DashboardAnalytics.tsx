"use client";

import { TrendingUp, TrendingDown } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const salesData = [
  { name: "5k", value: 28 },
  { name: "10k", value: 35 },
  { name: "15k", value: 45 },
  { name: "20k", value: 40 },
  { name: "25k", value: 50 },
  { name: "30k", value: 58 },
  { name: "35k", value: 48 },
  { name: "40k", value: 65 },
  { name: "45k", value: 62 },
  { name: "50k", value: 68 },
  { name: "55k", value: 65 },
  { name: "60k", value: 70 },
];

const dealsData = [
  {
    id: 1,
    product: "Apple Watch",
    location: "6096 Marjolaine Landing",
    date: "12.09.2019 - 12.53 PM",
    piece: 423,
    avatar: "👤",
  },
  {
    id: 2,
    product: "Apple Watch",
    location: "6096 Marjolaine Landing",
    date: "12.09.2019 - 12.53 PM",
    piece: 423,
    avatar: "👤",
  },
  {
    id: 3,
    product: "Apple Watch",
    location: "6096 Marjolaine Landing",
    date: "12.09.2019 - 12.53 PM",
    piece: 423,
    avatar: "👤",
  },
];

const customerData = [
  { name: "Active", value: 34249 },
  { name: "Inactive", value: 1420 },
];

const COLORS = ["#8B5CF6", "#E0E7FF"];

export default function DashboardAnalytics() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-gray-500 text-sm mb-1">Total User</p>
              <h3 className="text-3xl font-bold text-gray-800">50,789</h3>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <svg
                className="w-6 h-6 text-purple-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-1 text-emerald-500 text-sm">
            <TrendingUp className="w-4 h-4" />
            <span className="font-medium">8.5%</span>
            <span className="text-gray-500">Up from yesterday</span>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 delay-100">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-gray-500 text-sm mb-1">Total Order</p>
              <h3 className="text-3xl font-bold text-gray-800">20393</h3>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <svg
                className="w-6 h-6 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-1 text-emerald-500 text-sm">
            <TrendingUp className="w-4 h-4" />
            <span className="font-medium">1.3%</span>
            <span className="text-gray-500">Up from past week</span>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 delay-200">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-gray-500 text-sm mb-1">Total Sales</p>
              <h3 className="text-3xl font-bold text-gray-800">$60,000</h3>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <svg
                className="w-6 h-6 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-1 text-red-500 text-sm">
            <TrendingDown className="w-4 h-4" />
            <span className="font-medium">4.3%</span>
            <span className="text-gray-500">Down from yesterday</span>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 delay-300">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-gray-500 text-sm mb-1">Total Pending</p>
              <h3 className="text-3xl font-bold text-gray-800">5040</h3>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <svg
                className="w-6 h-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-1 text-emerald-500 text-sm">
            <TrendingUp className="w-4 h-4" />
            <span className="font-medium">1.8%</span>
            <span className="text-gray-500">Up from yesterday</span>
          </div>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg animate-fade-in-delay-3">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            Sales Details
          </h2>
          <select className="px-4 py-2 bg-purple-50 text-purple-600 rounded-lg border-none outline-none cursor-pointer hover:bg-purple-100 transition-colors">
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </select>
        </div>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={salesData}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis
                dataKey="name"
                stroke="#9CA3AF"
                style={{ fontSize: "12px" }}
              />
              <YAxis
                stroke="#9CA3AF"
                style={{ fontSize: "12px" }}
                ticks={[0, 20, 40, 60, 80, 100]}
                domain={[0, 100]}
                label={{ value: "100%", position: "top", offset: 10 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#8B5CF6",
                  border: "none",
                  borderRadius: "8px",
                  color: "white",
                  padding: "8px 12px",
                }}
                formatter={(value: number) => [`${value.toLocaleString()}`, ""]}
                labelFormatter={() => ""}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#8B5CF6"
                strokeWidth={2}
                fill="url(#colorValue)"
                dot={{ fill: "#8B5CF6", r: 0 }}
                activeDot={{ r: 6, fill: "#8B5CF6" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg animate-fade-in">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Deals Details
            </h2>
            <select className="px-4 py-2 bg-purple-50 text-purple-600 rounded-lg border-none outline-none cursor-pointer hover:bg-purple-100 transition-colors text-sm">
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 text-sm font-medium text-gray-600">
                    Product Name
                  </th>
                  <th className="text-left py-4 px-4 text-sm font-medium text-gray-600">
                    Location
                  </th>
                  <th className="text-left py-4 px-4 text-sm font-medium text-gray-600">
                    Date - Time
                  </th>
                  <th className="text-left py-4 px-4 text-sm font-medium text-gray-600">
                    Piece
                  </th>
                </tr>
              </thead>
              <tbody>
                {dealsData.map((deal, index) => (
                  <tr
                    key={deal.id}
                    className={`border-b border-gray-100 hover:bg-purple-50/50 transition-colors ${
                      index === dealsData.length - 1 ? "opacity-40" : ""
                    }`}
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-sm">
                          {deal.avatar}
                        </div>
                        <span className="text-gray-700 font-medium">
                          {deal.product}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-600 text-sm">
                      {deal.location}
                    </td>
                    <td className="py-4 px-4 text-gray-600 text-sm">
                      {deal.date}
                    </td>
                    <td className="py-4 px-4 text-gray-700 font-medium">
                      {deal.piece}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg animate-fade-in">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">
            Customers
          </h2>

          <div className="flex justify-center mb-8">
            <div className="relative">
              <ResponsiveContainer width={200} height={200}>
                <PieChart>
                  <Pie
                    data={customerData}
                    cx={100}
                    cy={100}
                    innerRadius={70}
                    outerRadius={90}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {customerData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 mb-2">
                34,249
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-gray-600">New</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 mb-2">1420</div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-3 h-3 bg-purple-200 rounded-full"></div>
                <span className="text-sm text-gray-600">Returning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
