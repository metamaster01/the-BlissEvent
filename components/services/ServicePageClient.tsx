"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import EnquiryDialog from "@/components/services/EnquiryDialog";
import { SERVICES_CATEGORIES } from "@/context/serviceContext";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ServicesPageClient() {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-15% 0px -15% 0px" });

  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedEventType, setSelectedEventType] = useState("");

  const flat = useMemo(() => {
    // filter services by title/desc/category
    const q = query.trim().toLowerCase();
    if (!q) return SERVICES_CATEGORIES;

    return SERVICES_CATEGORIES.map((cat : any) => ({
      ...cat,
      services: cat.services.filter((s : any) => {
        const hay = `${cat.title} ${s.title} ${s.desc}`.toLowerCase();
        return hay.includes(q);
      }),
    })).filter((cat : any) => cat.services.length > 0);
  }, [query]);

  const onEnquiry = (eventType: string) => {
    setSelectedEventType(eventType);
    setOpen(true);
  };

  return (
    <div className="bg-[#fbf5e9]">
      {/* Header */}
      <div ref={headerRef} className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 sm:pt-16 lg:px-8 mt-14">
        <motion.h1
          initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
          animate={headerInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.9, ease }}
          className="text-center font-serif text-5xl font-semibold text-[#8B2E2E] sm:text-6xl"
        >
          Services here
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
          animate={headerInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.85, ease, delay: 0.08 }}
          className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-[#241a16]/70"
        >
          At The Bliss Events, we provide professional end-to-end event planning services to ensure every celebration is seamless, elegant, and stress-free.
          Our team manages every detail so you can enjoy your special moments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, ease, delay: 0.14 }}
          className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <button className="h-10 rounded-full bg-[#8B2E2E] px-6 text-sm font-medium text-white hover:bg-[#7D1F1F] transition">
            Get a Quote
          </button>
          <button className="h-10 rounded-full border border-[#8B2E2E]/30 bg-white/0 px-6 text-sm font-medium text-[#8B2E2E] hover:bg-white/30 transition">
            Chat on WhatsApp
          </button>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, ease, delay: 0.2 }}
          className="mx-auto mt-6 flex w-full max-w-xl items-center gap-2 rounded-full border border-black/10 bg-white/35 px-4 py-2 backdrop-blur"
        >
          <Search className="h-4 w-4 text-[#241a16]/50" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services"
            className="w-full bg-transparent text-sm outline-none placeholder:text-[#241a16]/40"
          />
          <button
            onClick={() => setQuery("")}
            className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs text-[#241a16]/70 hover:bg-black/5 transition"
          >
            <X className="h-3.5 w-3.5" />
            Clear
          </button>
        </motion.div>
      </div>

      {/* Sections */}
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        {flat.map((cat) => (
          <CategoryBlock key={cat.number} cat={cat} onEnquiry={onEnquiry} />
        ))}
      </div>

      <EnquiryDialog open={open} onClose={() => setOpen(false)} eventType={selectedEventType} />
    </div>
  );
}

function CategoryBlock({
  cat,
  onEnquiry,
}: {
  cat: { number: string; title: string; services: { title: string; desc: string; image: string; eventType: string }[] };
  onEnquiry: (eventType: string) => void;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });

  return (
    <section ref={ref} className="py-10 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
        animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.85, ease }}
      >
        <p className="text-[#8B2E2E] font-medium">{cat.number}</p>
        <h2 className="mt-2 text-2xl font-semibold text-[#241a16] sm:text-3xl">{cat.title}</h2>
      </motion.div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cat.services.map((s, idx) => (
          <ServiceCard
            key={s.title}
            s={s}
            index={idx}
            inView={inView}
            onEnquiry={() => onEnquiry(s.eventType)}
          />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({
  s,
  index,
  inView,
  onEnquiry,
}: {
  s: { title: string; desc: string; image: string; eventType: string };
  index: number;
  inView: boolean;
  onEnquiry: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22, filter: "blur(10px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.75, ease, delay: 0.08 + index * 0.06 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <div className="mx-auto w-full max-w-[420px]">
        {/* semicircle image */}
        <div className="relative mx-auto h-[210px] w-[280px] overflow-hidden rounded-t-[999px] rounded-b-none ring-1 ring-black/10 shadow-[0_20px_60px_-45px_rgba(0,0,0,0.55)] sm:h-[230px] sm:w-[300px]">
          <Image src={s.image} alt={s.title} fill className="object-cover" sizes="(max-width: 640px) 50vw, 300px" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/10 opacity-70" />
        </div>

        {/* body */}
        <div className="relative -mt-3 rounded-b-2xl bg-[#f4ead8] px-5 pb-5 pt-6 ring-1 ring-black/5">
          <h3 className="text-center text-sm font-semibold text-[#8B2E2E] sm:text-base">{s.title}</h3>
          <p className="mt-2 text-center text-xs leading-relaxed text-[#241a16]/65 sm:text-sm">
            {s.desc}
          </p>

          {/* Hover reveal bar */}
          <button
            onClick={onEnquiry}
            className="
              absolute left-1/2 top-full mt-3 -translate-x-1/2
              w-[86%] rounded-full bg-[#8B2E2E] py-2 text-sm font-medium text-white
              opacity-0 translate-y-2
              transition duration-300
              group-hover:opacity-100 group-hover:translate-y-0
              focus:opacity-100 focus:translate-y-0
              shadow-[0_18px_50px_-35px_rgba(0,0,0,0.6)]
            "
          >
            Enquiry now
          </button>
        </div>
      </div>
    </motion.div>
  );
}
