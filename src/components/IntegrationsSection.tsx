"use client";

import { Layers, Clock, Settings } from "lucide-react";
import { useRef, forwardRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 sm:size-14 items-center justify-center rounded-xl sm:rounded-2xl bg-white p-2.5 sm:p-3 shadow-lg hover:shadow-xl transition-shadow duration-300",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export default function Integration() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const slackRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="integrations"
      className="container mx-auto px-4 sm:px-6 py-8 sm:py-20"
    >
      <div className="text-center mb-6 sm:mb-16 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md mb-4 sm:mb-6">
          <Layers className="w-4 h-4 text-gray-700" />
          <span className="text-sm sm:text-sm font-medium text-gray-700">
            Integrations
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-3 sm:mb-4 px-2 mt-8">
          Connects to your stack
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg px-4">
          HubSpot • Salesforce • Pipedrive • Zapier • Mailchimp • Slack — plus
          custom integrations via API.
        </p>
      </div>

      <div
        className="relative max-w-3xl mx-auto h-[300px] sm:h-[400px] lg:h-[450px] mb-12 sm:mb-16 flex items-center justify-center"
        ref={containerRef}
      >
        <style jsx>{`
          @keyframes orbit {
            from {
              transform: rotate(0deg) translateX(120px) rotate(0deg);
            }
            to {
              transform: rotate(360deg) translateX(120px) rotate(-360deg);
            }
          }
          @media (min-width: 640px) {
            @keyframes orbit {
              from {
                transform: rotate(0deg) translateX(160px) rotate(0deg);
              }
              to {
                transform: rotate(360deg) translateX(160px) rotate(-360deg);
              }
            }
          }
          @media (min-width: 1024px) {
            @keyframes orbit {
              from {
                transform: rotate(0deg) translateX(180px) rotate(0deg);
              }
              to {
                transform: rotate(360deg) translateX(180px) rotate(-360deg);
              }
            }
          }
          .orbit-container {
            position: relative;
            width: 100%;
            height: 100%;
          }
          .orbit-item {
            position: absolute;
            top: 50%;
            left: 50%;
            margin: -24px 0 0 -24px;
            animation: orbit 20s linear infinite;
            z-index: 5;
          }
          @media (min-width: 640px) {
            .orbit-item {
              margin: -28px 0 0 -28px;
            }
          }
          .orbit-item:nth-child(4) {
            animation-delay: 0s;
          }
          .orbit-item:nth-child(5) {
            animation-delay: -3.33s;
          }
          .orbit-item:nth-child(6) {
            animation-delay: -6.66s;
          }
          .orbit-item:nth-child(7) {
            animation-delay: -10s;
          }
          .orbit-item:nth-child(8) {
            animation-delay: -13.33s;
          }
          .orbit-item:nth-child(9) {
            animation-delay: -16.66s;
          }
        `}</style>

        <div className="orbit-container">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
            <div
              ref={div4Ref}
              className="size-40 sm:size-52 md:size-64 flex items-center justify-center"
            >
              <Image
                src="/logo.png"
                alt="vandaltion"
                width={300}
                height={300}
                className="object-contain drop-shadow-2xl"
                unoptimized
              />
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] lg:w-[360px] lg:h-[360px] border-2 border-white/60 rounded-full shadow-sm" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] lg:w-[380px] lg:h-[380px] border-2 border-white/40 rounded-full shadow-sm" />

          <div className="orbit-item">
            <Circle
              ref={div1Ref}
              className="bg-gradient-to-br from-orange-50 to-white border border-orange-100/50"
            >
              <Image
                src="/hubspot.png"
                alt="HubSpot"
                width={32}
                height={32}
                className="object-contain w-7 h-7 sm:w-9 sm:h-9"
                unoptimized
              />
            </Circle>
          </div>

          <div className="orbit-item">
            <Circle
              ref={div2Ref}
              className="bg-gradient-to-br from-blue-50 to-white border border-blue-100/50"
            >
              <Image
                src="/salesforce.png"
                alt="Salesforce"
                width={32}
                height={32}
                className="object-contain w-7 h-7 sm:w-9 sm:h-9"
                unoptimized
              />
            </Circle>
          </div>

          <div className="orbit-item">
            <Circle
              ref={div3Ref}
              className="bg-gradient-to-br from-purple-50 to-white border border-purple-100/50"
            >
              <Image
                src="/pipedrive.png"
                alt="Pipedrive"
                width={32}
                height={32}
                className="object-contain w-7 h-7 sm:w-9 sm:h-9"
                unoptimized
              />
            </Circle>
          </div>

          <div className="orbit-item">
            <Circle
              ref={div5Ref}
              className="bg-gradient-to-br from-green-50 to-white border border-green-100/50"
            >
              <Image
                src="/zapier.png"
                alt="Zapier"
                width={32}
                height={32}
                className="object-contain w-7 h-7 sm:w-9 sm:h-9"
                unoptimized
              />
            </Circle>
          </div>

          <div className="orbit-item">
            <Circle
              ref={div6Ref}
              className="bg-gradient-to-br from-yellow-50 to-white border border-yellow-100/50"
            >
              <Image
                src="/mailchimp.png"
                alt="Mailchimp"
                width={32}
                height={32}
                className="object-contain w-7 h-7 sm:w-9 sm:h-9"
                unoptimized
              />
            </Circle>
          </div>

          <div className="orbit-item">
            <Circle
              ref={slackRef}
              className="bg-gradient-to-br from-pink-50 to-white border border-pink-100/50"
            >
              <Image
                src="/slack.png"
                alt="Slack"
                width={32}
                height={32}
                className="object-contain w-7 h-7 sm:w-9 sm:h-9"
                unoptimized
              />
            </Circle>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mb-10 sm:mb-0 animate-slide-up border-b border-gray-200 pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 place-items-center">
          <div className="text-center group cursor-pointer">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg mb-4 group-hover:shadow-xl transition-shadow duration-300">
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
              Seamless Automation
            </h3>
          </div>

          <div className="text-center group cursor-pointer">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg mb-4 group-hover:shadow-xl transition-shadow duration-300">
              <Clock className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
              Real-Time Data Sync
            </h3>
          </div>

          <div className="col-span-2 sm:col-span-1 text-center group cursor-pointer">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg mb-4 group-hover:shadow-xl transition-shadow duration-300">
              <Settings className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
              Customizable Solutions
            </h3>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
