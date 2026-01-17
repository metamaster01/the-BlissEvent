// "use client";

// import Image from "next/image";
// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";

// const ease = [0.22, 1, 0.36, 1] as const;

// export default function AboutHeroSection() {
//   const ref = useRef<HTMLElement | null>(null);
//   const inView = useInView(ref, { once: true, margin: "-15% 0px -15% 0px" });

//   return (
//     <section ref={ref as any} className="bg-[#fbf5e9] pt-14 sm:pt-16 mt-14">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <motion.h1
//           initial={{ opacity: 0, y: 16, filter: "blur(10px)" }}
//           animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
//           transition={{ duration: 0.9, ease }}
//           className="text-center font-serif text-5xl font-semibold tracking-tight text-[#8B2E2E] sm:text-6xl"
//         >
//           About The Bliss Events
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
//           animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
//           transition={{ duration: 0.85, ease, delay: 0.08 }}
//           className="mx-auto mt-3 max-w-3xl text-center text-sm text-[#241a16]/70"
//         >
//           Creating Meaningful Celebrations with Care & Creativity
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 18, scale: 0.99 }}
//           animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
//           transition={{ duration: 0.95, ease, delay: 0.12 }}
//           className="mt-10 overflow-hidden rounded-[22px] ring-1 ring-black/10 shadow-[0_30px_90px_-70px_rgba(0,0,0,0.65)]"
//         >
//           <div className="relative aspect-[16/9] w-full md:aspect-[21/9]">
//             <Image
//               src="/about/about-1.png"
//               alt="About The Bliss Events"
//               fill
//               priority
//               className="object-cover"
//               sizes="100vw"
//             />
//           </div>
//         </motion.div>
//       </div>

//       <div className="h-10 sm:h-14" />
//     </section>
//   );
// }



"use client";

import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function AboutHeroSection() {
  const ref = useRef<HTMLElement | null>(null);

  return (
    <section ref={ref} className="bg-[#FAF8F5] pt-16 sm:pt-20 md:pt-24 mt-14">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Header with decorative line */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 sm:w-24 bg-[#8B2E2E]/30"></div>
            <h1
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#8B2E2E] italic"
              style={{ fontFamily: "Georgia, serif" }}
            >
              About The Bliss Event
            </h1>
            <div className="h-px w-16 sm:w-24 bg-[#8B2E2E]/30"></div>
          </div>
        </div>

        {/* Main Title */}
        <h2
          className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6 leading-tight"
          style={{ fontFamily: "Inter Tight, sans-serif" }}
        >
          Celebrations Crafted with Heart,
          <br />
          Style & Precision
          <span className="inline-block ml-2 text-3xl sm:text-4xl md:text-5xl">✨</span>
        </h2>

        {/* Description */}
        <p
          className="mx-auto mt-4 sm:mt-6 max-w-4xl text-center text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed px-4"
          style={{ fontFamily: "Inter Tight, sans-serif" }}
        >
          At The Bliss Event, we don't just plan events — we create emotions, memories, and moments that stay with you forever. Every celebration is thoughtfully designed to reflect your story, your culture, and your vision, while we handle the details behind the scenes.
        </p>

        {/* Image */}
        <div className="mt-10 sm:mt-12 md:mt-16 overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
          <div className="relative aspect-[16/9] w-full md:aspect-[21/9]">
            <img
              src="/about/about-1.png"
              alt="Celebration with friends dancing and enjoying"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="h-12 sm:h-16 md:h-20" />
    </section>
  );
}