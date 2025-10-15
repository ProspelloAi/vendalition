"use client";
import { useEffect } from "react"; // Removed unused useState/useRef
import { Calendar, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCalendlyEventListener, InlineWidget } from "react-calendly"; // CHANGED: InlineWidget

// Your Calendly URL (replace with yours)
const CALENDLY_URL = "https://calendly.com/sahal-pk/30min";

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CalendlyModal({ isOpen, onClose }: CalendlyModalProps) {
  useCalendlyEventListener({
    onEventScheduled: () => {
      onClose();
    },
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      return () => document.removeEventListener("keydown", handleEsc);
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Book a Call
                  </h3>
                  <p className="text-sm text-gray-500">
                    30-minute discovery call
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="h-[calc(90vh-140px)] w-full overflow-auto">
              <InlineWidget
                url={CALENDLY_URL}
                styles={{ height: "100%" }}
                pageSettings={{
                  backgroundColor: "ffffff",
                  primaryColor: "3b82f6",
                  textColor: "4b5563",
                }}
              />
            </div>

            <div className="flex items-center justify-between p-6 border-t border-gray-100 bg-gray-50">
              <div className="text-sm text-gray-500">
                Secure • 30 minutes • No card required
              </div>
              <button
                onClick={onClose}
                className="px-6 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-white transition-colors"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
