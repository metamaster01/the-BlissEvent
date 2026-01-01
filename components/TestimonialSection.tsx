"use client";

import { motion, useInView } from "framer-motion";
import { useMemo, useRef } from "react";

type Testimonial = {
  quote: string;
  name: string;
  role?: string;
  featured?: boolean; // middle red card
};

type TestimonialsSectionProps = {
  eyebrow?: string;
  title?: string;
  items?: Testimonial[];
  speedSeconds?: number; // marquee speed
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function TestimonialsSection({
  eyebrow = "Testimonials",
  title = "Feedback From Our Clients",
  speedSeconds = 22,
  items,
}: TestimonialsSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-15% 0px -15% 0px" });

  const data = useMemo<Testimonial[]>(
    () =>
      items ?? [
        {
          quote:
            "The Bliss Events made our wedding absolutely stress-free and beautiful. Every detail was handled perfectly, from decoration to coordination. We could truly enjoy our special day without any worries.",
          name: "Riya & Aman",
        },
        {
          quote:
            "Excellent planning and professional execution. The team understood our requirements clearly and delivered beyond expectations. Our corporate event was managed smoothly and on time.",
          name: "Corporate Client",
          featured: true,
        },
        {
          quote:
            "From the first meeting to the final event, everything was well organized. The decor, vendors, and overall management were flawless. Highly recommended for any special occasion.",
          name: "Neha Sharma",
        },
        {
          quote:
            "The Bliss Events transformed our vision into reality. Their creativity and attention to detail were impressive. Our guests were amazed, and we received countless compliments.",
          name: "Karan & Priya",
          featured: true,
        },
        {
          quote:
            "Professional, reliable, and creative! The team at The Bliss Events took care of everything for our anniversary party. It was a memorable event that we will cherish forever.",
          name: "Anita & Raj",
        }

      ],
    [items]
  );

  // Duplicate list to create seamless loop
  const loop = [...data, ...data];

  return (
    <section ref={sectionRef as any} className="bg-[#fbf5e9] py-16 sm:py-20">
      <div className="mx-auto w-full max-w-full px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, ease }}
          className="text-center font-serif italic tracking-wide text-[#a14b3b]"
        >
          {eyebrow}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.85, ease, delay: 0.06 }}
          className="mt-2 text-center text-4xl font-semibold tracking-tight text-[#241a16] sm:text-5xl"
        >
          {title}
        </motion.h2>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease, delay: 0.1 }}
          className="relative mt-10"
        >
          {/* Edge fades for premium look */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#fbf5e9] to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#fbf5e9] to-transparent sm:w-24" />

          <div className="group overflow-hidden">
            <div
              className="flex w-max gap-6 py-2 will-change-transform"
              style={
                {
                  animation: `mw_marquee ${speedSeconds}s linear infinite`,
                } as React.CSSProperties
              }
              // pause on hover
              data-marquee
            >
              {loop.map((t, idx) => (
                <Card key={`${t.name}-${idx}`} t={t} index={idx} />
              ))}
            </div>

            {/* Pause on hover (pure CSS) */}
            <style jsx>{`
              .group:hover [data-marquee] {
                animation-play-state: paused;
              }

              @keyframes mw_marquee {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
            `}</style>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Card({ t, index }: { t: Testimonial; index: number }) {
  const featured = !!t.featured;

  return (
    <motion.article
      initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.06 + (index % 3) * 0.05 }}
      whileHover={{ y: -6 }}
      className={[
        "relative shrink-0 rounded-2xl p-6 sm:p-7",
        "ring-1 shadow-[0_18px_60px_-45px_rgba(0,0,0,0.55)] backdrop-blur",
        featured
          ? "w-[320px] bg-[#7d1511] text-white ring-white/10 sm:w-[360px]"
          : "w-[320px] bg-white/40 text-[#241a16] ring-black/5 sm:w-[360px]",
      ].join(" ")}
    >
      <div className="text-3xl leading-none opacity-90">“</div>

      <p className={["mt-3 text-sm leading-relaxed", featured ? "text-white/90" : "text-[#241a16]/70"].join(" ")}>
        {t.quote}
      </p>

      <div className="mt-5 flex items-center gap-2">
        <span className={["text-sm font-semibold", featured ? "text-white" : "text-[#241a16]"].join(" ")}>
          — {t.name}
        </span>
        {t.role ? (
          <span className={["text-xs", featured ? "text-white/70" : "text-[#241a16]/55"].join(" ")}>{t.role}</span>
        ) : null}
      </div>
    </motion.article>
  );
}
