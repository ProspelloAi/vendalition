'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconBrandTwitter,
} from '@tabler/icons-react';

const navigationLinks = [
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Blog', href: '#blog' },
  { label: 'Changelog', href: '#changelog' },
  { label: 'Help & Docs', href: '#docs' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: IconBrandInstagram, href: '#', label: 'Instagram' },
  { icon: IconBrandLinkedin, href: '#', label: 'LinkedIn' },
  { icon: IconBrandYoutube, href: '#', label: 'YouTube' },
  { icon: IconBrandTwitter, href: '#', label: 'Twitter' },
];

export default function Footer() {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white text-sm py-3 px-4 text-center">
        <p className="mb-1">
          <strong>Your buyers are out there.</strong> We show you where. Track
          millions of signals so you never miss a high-intent prospect.
        </p>
        <p>
          <strong>🚀 We’ve raised pre-seed funding</strong> — pilots open now.
          Apply to be an early reference customer.
        </p>
      </div>

      <footer className="bg-gradient-to-br from-gray-100 to-gray-200 border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-8">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <Image
                src="/logo.png"
                alt="VendAItion Logo"
                width={240}
                height={240}
                className="rounded"
              />
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

          <div className="text-sm text-gray-600 space-y-4 mb-10 px-2">
            <p>
              🛡️ <strong>Privacy:</strong> VendAItion respects your privacy. We
              only process data required for pilot performance and can sign a
              DPA on request.{' '}
              <a
                href="#privacy"
                className="underline hover:text-gray-900 font-medium"
              >
                Read our full Privacy Policy
              </a>
              .
            </p>
            <p>
              📝 <strong>Changelog:</strong> See the latest product updates and
              release notes in{' '}
              <a
                href="#changelog"
                className="underline hover:text-gray-900 font-medium"
              >
                Changelog
              </a>
              .
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-6 border-t border-gray-300 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600"
          >
            <p>© 2025 VendAItion CRM</p>
            <div className="flex items-center gap-6">
              <p>
                Made by ❤️{' '}
                <a
                  href="https://VendAItion.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 font-medium hover:underline"
                >
                  VendAItion Technologies
                </a>
              </p>
              <a
                href="mailto:VendAItion@support.com"
                className="text-gray-900 font-medium hover:underline"
              >
                VendAItion@support.com
              </a>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
}
