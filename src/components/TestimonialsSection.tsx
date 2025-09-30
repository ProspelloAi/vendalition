"use client";

import { motion } from "framer-motion";
import { IconSparkles } from "@tabler/icons-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Testimonial {
  text: string;
  name: string;
  title: string;
  avatar: string;
  fallback: string;
}

const testimonials: Testimonial[] = [
  {
    text: "An absolute standout! This platform delivers robust tools, effortless connectivity, and usability",
    name: "Brendan",
    title: "owner of plantio",
    avatar: "https://github.com/shadcn.png",
    fallback: "BR",
  },
  {
    text: "A remarkable solution! It provides top-tier features, intuitive interfaces, and reliability",
    name: "Wilson",
    title: "owner of saan",
    avatar: "https://github.com/vercel.png",
    fallback: "WI",
  },
  {
    text: "A genuine innovation! Experience advanced tools, smooth workflows, and high utility",
    name: "mayak",
    title: "owner of deconec",
    avatar: "https://github.com/max.png",
    fallback: "MA",
  },
  {
    text: "A revolutionary platform! Packed with cutting-edge tools, integration ease, and functionality",
    name: "jacychan",
    title: "owner of canacio",
    avatar: "https://github.com/jaredpalmer.png",
    fallback: "JA",
  },
  {
    text: "A real breakthrough! Unlock next-gen features, seamless compatibility, and efficiency",
    name: "jamesli",
    title: "owner of gito",
    avatar: "https://github.com/rauchg.png",
    fallback: "JL",
  },
  {
    text: "A standout choice! Combining advanced features, smooth syncing, and practicality",
    name: "janney",
    title: "owner of ioptp",
    avatar: "https://github.com/timneutkens.png",
    fallback: "JA",
  },
];

const avatarImages = [
  "https://github.com/shadcn.png",
  "https://github.com/vercel.png",
  "https://github.com/max.png",
  "https://github.com/jaredpalmer.png",
];

export default function TestimonialsSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200">
            <IconSparkles className="w-4 h-4 text-gray-700" />
            <span className="text-sm text-gray-700 font-medium">
              Trusted by Innovators Worldwide
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
            What Our Users Say
          </h1>
          <p className="text-gray-600 text-lg">
            Hear from businesses who&apos;ve transformed their workflows with
            our solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-gray-700 text-base leading-relaxed mb-8">
                {testimonial.text}
              </p>

              <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
                <Avatar className="w-12 h-12">
                  <AvatarImage
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <AvatarFallback className="bg-gray-200 text-gray-700 font-medium">
                    {testimonial.fallback}
                  </AvatarFallback>
                </Avatar>
                <div className="border-l-2 border-gray-200 pl-3">
                  <h4 className="text-gray-900 font-semibold text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-xs">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex items-center justify-center gap-3"
        >
          <div className="flex -space-x-3">
            {avatarImages.map((img, idx) => (
              <Avatar key={idx} className="w-10 h-10 border-2 border-white">
                <AvatarImage src={img} alt={`User ${idx + 1}`} />
                <AvatarFallback className="bg-gray-300">
                  U{idx + 1}
                </AvatarFallback>
              </Avatar>
            ))}
          </div>
          <p className="text-sm text-gray-700">
            Trusted by <span className="font-semibold">5,000+</span> innovators
            worldwide
          </p>
        </motion.div>
      </div>
    </div>
  );
}
