"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function AboutHeroSection() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px -15% 0px" });

  return (
    <section ref={ref as any} className="bg-[#fbf5e9] pt-14 sm:pt-16 mt-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 16, filter: "blur(10px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.9, ease }}
          className="text-center font-serif text-5xl font-semibold tracking-tight text-[#8B2E2E] sm:text-6xl"
        >
          About The Bliss Events
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.85, ease, delay: 0.08 }}
          className="mx-auto mt-3 max-w-3xl text-center text-sm text-[#241a16]/70"
        >
          Creating Meaningful Celebrations with Care & Creativity
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.99 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.95, ease, delay: 0.12 }}
          className="mt-10 overflow-hidden rounded-[22px] ring-1 ring-black/10 shadow-[0_30px_90px_-70px_rgba(0,0,0,0.65)]"
        >
          <div className="relative aspect-[16/9] w-full md:aspect-[21/9]">
            <Image
              src="/about/about-1.png"
              alt="About The Bliss Events"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </motion.div>
      </div>

      <div className="h-10 sm:h-14" />
    </section>
  );
}
