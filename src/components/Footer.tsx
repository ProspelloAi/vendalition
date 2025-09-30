"use client";

import { motion } from "framer-motion";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconBrandTwitter,
} from "@tabler/icons-react";

const navigationLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Changelog", href: "#changelog" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy", href: "#privacy" },
  { label: "Terms", href: "#terms" },
];

const socialLinks = [
  { icon: IconBrandInstagram, href: "#", label: "Instagram" },
  { icon: IconBrandLinkedin, href: "#", label: "LinkedIn" },
  { icon: IconBrandYoutube, href: "#", label: "YouTube" },
  { icon: IconBrandTwitter, href: "#", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-100 to-gray-200 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-gray-900 rounded transform rotate-45 flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm transform -rotate-45"></div>
            </div>
            <span className="text-2xl font-bold text-gray-900">
              Vendalition
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-lg border-2 border-gray-400 flex items-center justify-center text-gray-600 hover:border-gray-600 hover:text-gray-900 transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {navigationLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-gray-300 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600"
        >
          <p>© 2025 Vendalition CRM</p>
          <div className="flex items-center gap-6">
            <p>
              Made by ❤️{" "}
              <a
                href="https://Vendalition.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 font-medium hover:underline"
              >
                Vendalition Technologies
              </a>
            </p>
            <a
              href="mailto:Vendalition@support.com"
              className="text-gray-900 font-medium hover:underline"
            >
              Vendalition@support.com
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
