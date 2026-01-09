"use client";

import Image from "next/image";
import { motion, useInView, animate } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export default function AboutStoryStatsSection() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });

  const stats: Stat[] = useMemo(
    () => [
      { value: 150, suffix: "+", label: "Happy family served" },
      { value: 10, suffix: "+", label: "Years of experience" },
      { value: 12, suffix: "+", label: "Professional wedding planner" },
    ],
    []
  );

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (!inView) return;

    const controls = stats.map((s, idx) =>
      animate(0, s.value, {
        duration: 1.1,
        ease: "easeOut",
        onUpdate: (latest) => {
          setCounts((prev) => {
            const next = [...prev];
            next[idx] = Math.round(latest);
            return next;
          });
        },
      })
    );

    return () => controls.forEach((c) => c.stop());
  }, [inView, stats]);

  return (
    <section ref={ref as any} className="bg-[#fbf5e9] pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* Left */}
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 14, filter: "blur(10px)" }}
              animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.9, ease }}
              className="text-4xl font-semibold tracking-tight text-[#8B2E2E] sm:text-5xl"
            >
              Where Every Celebration
              <br />
              Feels Effortless ✨
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
              animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.85, ease, delay: 0.08 }}
              className="mt-6 max-w-2xl text-sm leading-relaxed text-[#241a16]/70"
            >
              At The Bliss Events, we believe every event should be more than just well-planned—it should feel magical.
              From intimate gatherings to grand celebrations, we turn your ideas into unforgettable experiences with
              creativity, precision, and heart.
              <br />
              <br />
              Founded with a passion for meaningful moments, The Bliss Events was created to take the stress out of planning
              and replace it with excitement, confidence, and joy. We handle every detail so you can truly live in the
              moment.
            </motion.p>

            {/* Stats */}
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {stats.map((s, idx) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 14, scale: 0.98 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.7, ease, delay: 0.1 + idx * 0.08 }}
                  className="rounded-xl bg-[#8B2E2E] px-5 py-4 text-white shadow-[0_22px_60px_-45px_rgba(0,0,0,0.65)]"
                >
                  <div className="text-center text-3xl font-semibold">
                    {counts[idx]}
                    {s.suffix}
                  </div>
                  <div className="mt-2 text-center text-xs text-white/85">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 16, scale: 0.99 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.95, ease, delay: 0.12 }}
          >
            <div className="relative overflow-hidden rounded-[22px] ring-1 ring-black/10 shadow-[0_30px_90px_-70px_rgba(0,0,0,0.65)]">
              <div className="relative aspect-[4/5] w-full sm:aspect-[6/7]">
                <Image
                  src="/about/about-2.png"
                  alt="About image"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
