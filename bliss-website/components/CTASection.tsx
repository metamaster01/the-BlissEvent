"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle } from "lucide-react";

type PlanCtaSectionProps = {
  bgSrc?: string;
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function PlanCtaSection({
  bgSrc = "/image-3.png",
  title = "Let's Plan Your Perfect Event",
  subtitle = "Whether it’s a wedding, corporate event, or private celebration, The Bliss Events is here to make it extraordinary.",
  primaryLabel = "Get a Quote",
  secondaryLabel = "Chat on WhatsApp",
  onPrimaryClick,
  onSecondaryClick,
}: PlanCtaSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px -15% 0px" });

  return (
    <section ref={ref as any} className="bg-[#fbf5e9]">
      {/* full width */}
      <div className="w-full max-w-full">
        <div className="relative w-full overflow-hidden">
          {/* Reduced a bit */}
          <div
            className="
              relative w-full
              min-h-[360px]
              sm:min-h-[440px]
              md:min-h-[500px]
              lg:min-h-[540px]
            "
          >
            <Image
              src={bgSrc}
              alt="CTA background"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />

            {/* overlays */}
            <div className="absolute inset-0 bg-[#7d1511]/35" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/0" />

            {/* ✅ Center content in the visible area ABOVE curve:
                - use absolute layer
                - use pb = curve height so the “visual center” stays correct
            */}
            <div className="absolute inset-0 flex items-center justify-center px-4 text-center sm:px-6 pb-24 sm:pb-32 lg:pb-[150px]">
              <div className="mx-auto w-full max-w-5xl">
                <motion.h2
                  initial={{ opacity: 0, y: 22, filter: "blur(12px)" }}
                  animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                  transition={{ duration: 0.95, ease }}
                  className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
                >
                  {title}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 16, filter: "blur(10px)" }}
                  animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                  transition={{ duration: 0.9, ease, delay: 0.08 }}
                  className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white/90 sm:text-[15px]"
                >
                  {subtitle}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.9, ease, delay: 0.16 }}
                  className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row"
                >
                  <button
                    onClick={onPrimaryClick}
                    className="
                      inline-flex h-11 items-center justify-center rounded-full
                      bg-white px-10 text-sm font-semibold text-[#7d1511]
                      shadow-[0_18px_55px_-40px_rgba(0,0,0,0.75)]
                      transition
                      hover:-translate-y-0.5 hover:shadow-[0_22px_70px_-45px_rgba(0,0,0,0.85)]
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60
                    "
                  >
                    {primaryLabel}
                  </button>

                  <button
                    onClick={onSecondaryClick}
                    className="
                      inline-flex h-11 items-center justify-center gap-2 rounded-full
                      border border-white/45 bg-white/0 px-9 text-sm font-semibold text-white
                      backdrop-blur-sm transition
                      hover:-translate-y-0.5 hover:bg-white/10
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60
                    "
                  >
                    <MessageCircle className="h-4 w-4" />
                    {secondaryLabel}
                  </button>
                </motion.div>
              </div>
            </div>

            {/* Curve (height matches pb above) */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0">
              <svg
                viewBox="0 0 1440 240"
                className="w-full h-24 sm:h-32 lg:h-[150px]"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,60 C240,210 520,255 720,250 C920,245 1200,195 1440,60 L1440,240 L0,240 Z"
                  fill="#fbf5e9"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* more empty space below curve */}
        <div className="bg-[#fbf5e9]">
          <div className="h-20 sm:h-28 lg:h-36" />
        </div>
      </div>
    </section>
  );
}
