// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Service } from "@/context/services";

// interface ServiceDetailHeroProps {
//   service: Service;
// }

// const ServiceDetailHero = ({ service }: ServiceDetailHeroProps) => {
//   const heroRef = useRef<HTMLDivElement>(null);
//   const imageRef = useRef<HTMLDivElement>(null);
//   const contentRef = useRef<HTMLDivElement>(null);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   useEffect(() => {
//     if (!mounted) return;

//     const initAnimations = async () => {
//       try {
//         const { gsap } = await import("gsap");
//         const { ScrollTrigger } = await import("gsap/ScrollTrigger");

//         gsap.registerPlugin(ScrollTrigger);

//         // Breadcrumb animation
//         gsap.from(".breadcrumb", {
//           y: -30,
//           opacity: 0,
//           duration: 0.8,
//           ease: "power3.out",
//           delay: 0.2,
//         });

//         // Title animation with stagger
//         gsap.from(".hero-title", {
//           y: 80,
//           opacity: 0,
//           duration: 1.2,
//           ease: "power4.out",
//           delay: 0.4,
//         });

//         // Tagline animation
//         gsap.from(".hero-tagline", {
//           y: 40,
//           opacity: 0,
//           duration: 1,
//           ease: "power3.out",
//           delay: 0.6,
//         });

//         // Image reveal animation
//         gsap.from(imageRef.current, {
//           scale: 1.2,
//           opacity: 0,
//           duration: 1.4,
//           ease: "power3.out",
//           delay: 0.3,
//         });

//         // Parallax effect on scroll
//         if (window.innerWidth >= 768) {
//           gsap.to(imageRef.current, {
//             y: 100,
//             ease: "none",
//             scrollTrigger: {
//               trigger: heroRef.current,
//               start: "top top",
//               end: "bottom top",
//               scrub: 1,
//             },
//           });
//         }

//         // Fade out content on scroll
//         gsap.to(contentRef.current, {
//           opacity: 0,
//           y: -50,
//           ease: "none",
//           scrollTrigger: {
//             trigger: heroRef.current,
//             start: "top top",
//             end: "50% top",
//             scrub: 1,
//           },
//         });
//       } catch (e) {
//         console.log("GSAP not available");
//       }
//     };

//     initAnimations();
//   }, [mounted]);

//   if (!mounted) return null;

//   return (
//     <section
//       ref={heroRef}
//       className="relative w-full h-[90vh] md:h-[115vh] lg:h-screen overflow-hidden bg-[#8B1A1A] mt-14 py-6"
//     >
//       {/* Background Image with Overlay */}
//       <div ref={imageRef} className="absolute inset-0 w-full h-full">
//         <Image
//           src={service.heroImage}
//           alt={service.title}
//           fill
//           priority
//           className="object-cover"
//           quality={90}
//         />
//         {/* Gradient Overlays */}
//         <div className="absolute inset-0 bg-gradient-to-b from-[#8B1A1A]/70 via-[#8B1A1A]/50 to-[#8B1A1A]/70" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
//       </div>

//       {/* Content */}
//       <div
//         ref={contentRef}
//         className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 h-full flex flex-col justify-between py-8 md:py-12"
//       >
//         {/* Breadcrumb */}
//         <nav className="breadcrumb">
//           <ol
//             className="flex items-center gap-2 text-black/80 text-sm md:text-base"
//             style={{ fontFamily: "Inter, sans-serif" }}
//           >
//             <li>
//               <Link href="/" className="hover:text-white transition-colors">
//                 Home
//               </Link>
//             </li>
//             <li>/</li>
//             <li>
//               <Link
//                 href="/services"
//                 className="hover:text-white transition-colors"
//               >
//                 Services
//               </Link>
//             </li>
//           </ol>
//         </nav>

//         {/* Title and Tagline */}
//         <div className="flex-1 flex flex-col justify-center items-center text-center max-w-5xl mx-auto">
//           <h1
//             className="hero-title text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-white mb-4 md:mb-6 font-normal leading-tight"
//             style={{ fontFamily: "Playfair Display, serif" }}
//           >
//             {service.title}
//           </h1>
//           <p
//             className="hero-tagline text-lg md:text-xl lg:text-2xl text-white/90 font-light tracking-wide"
//             style={{ fontFamily: "Inter, sans-serif" }}
//           >
//             {service.tagline}
//           </p>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="hidden md:flex justify-center pb-8">
//           <div className="animate-bounce">
//             <svg
//               className="w-6 h-6 text-white/70"
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
//             </svg>
//           </div>
//         </div>
//       </div>

//       {/* Decorative Elements */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAF6EF] to-transparent" />
//     </section>
//   );
// };

// export default ServiceDetailHero;



// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Service } from '@/context/services';

// interface ServiceDetailHeroProps {
//   service: Service;
// }

// const ServiceDetailHero = ({ service }: ServiceDetailHeroProps) => {
//   const heroRef = useRef<HTMLDivElement>(null);
//   const imageRef = useRef<HTMLDivElement>(null);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   useEffect(() => {
//     if (!mounted) return;

//     const initAnimations = async () => {
//       try {
//         const { gsap } = await import('gsap');
//         const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        
//         gsap.registerPlugin(ScrollTrigger);

//         // Breadcrumb fade in
//         gsap.from('.breadcrumb', {
//           opacity: 0,
//           y: -20,
//           duration: 0.8,
//           ease: 'power2.out',
//           delay: 0.2,
//         });

//         // Title animation
//         gsap.from('.hero-title', {
//           opacity: 0,
//           y: 50,
//           duration: 1,
//           ease: 'power3.out',
//           delay: 0.4,
//         });

//         // Tagline animation
//         gsap.from('.hero-tagline', {
//           opacity: 0,
//           y: 30,
//           duration: 0.8,
//           ease: 'power2.out',
//           delay: 0.6,
//         });

//         // Image zoom in effect
//         gsap.from(imageRef.current, {
//           scale: 1.1,
//           duration: 1.2,
//           ease: 'power2.out',
//         });

//         // Parallax effect on scroll for desktop
//         if (window.innerWidth >= 768) {
//           gsap.to(imageRef.current, {
//             y: 150,
//             ease: 'none',
//             scrollTrigger: {
//               trigger: heroRef.current,
//               start: 'top top',
//               end: 'bottom top',
//               scrub: true,
//             },
//           });
//         }

//       } catch (e) {
//         console.log('GSAP not available');
//       }
//     };

//     initAnimations();
//   }, [mounted]);

//   // Initialize Lenis smooth scroll
//   useEffect(() => {
//     if (!mounted) return;

//     const initLenis = async () => {
//       try {
//         const Lenis = (await import('@studio-freight/lenis')).default;
//         const lenis = new Lenis({
//           duration: 1.2,
//           easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//           smoothWheel: true,
//         });

//         function raf(time: number) {
//           lenis.raf(time);
//           requestAnimationFrame(raf);
//         }

//         requestAnimationFrame(raf);

//         return () => {
//           lenis.destroy();
//         };
//       } catch (e) {
//         console.log('Lenis not available');
//       }
//     };

//     initLenis();
//   }, [mounted]);

//   if (!mounted) return null;

//   return (
//     <section 
//       ref={heroRef}
//       className="relative w-full pt-20 md:pt-24 lg:pt-28 mt-14 min-h-[85vh] md:min-[95vh] lg:min-h-screen overflow-hidden bg-[#8B1A1A]"
//     >
//       {/* Background Image */}
//       <div 
//         ref={imageRef}
//         className="absolute inset-0 w-full h-full"
//       >
//         <Image
//           src={service.heroImage}
//           alt={service.title}
//           fill
//           priority
//           className="object-cover object-center"
//           quality={95}
//         />
//         {/* Red overlay to match reference */}
//         <div className="absolute inset-0 bg-[#8B1A1A]/60" />
//       </div>

//       {/* Content Container */}
//       <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 min-h-[70vh] md:min-h-[75vh] lg:min-h-[85vh] flex flex-col">
//         {/* Breadcrumb at top */}
//         <nav className="breadcrumb pt-4 md:pt-6 lg:pt-8">
//           <ol className="flex items-center gap-2 text-black/90 text-xs md:text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
//             <li>
//               <Link href="/" className="hover:text-white transition-colors">
//                 Home
//               </Link>
//             </li>
//             <li>/</li>
//             <li>
//               <Link href="/services" className="hover:text-white transition-colors">
//                 Services
//               </Link>
//             </li>
//           </ol>
//         </nav>

//         {/* Title and Tagline - Centered */}
//         <div className="flex-1 flex flex-col justify-center items-center text-center pb-12 md:pb-16">
//           <h1 
//             className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white mb-4 md:mb-6 font-normal leading-[1.1] max-w-5xl"
//             style={{ fontFamily: 'Playfair Display, serif' }}
//           >
//             {service.title}
//           </h1>
//           <p 
//             className="hero-tagline text-base md:text-lg lg:text-xl text-white font-light tracking-wide max-w-2xl px-4"
//             style={{ fontFamily: 'Inter, sans-serif' }}
//           >
//             {service.tagline}
//           </p>
//         </div>
//       </div>

//       {/* Bottom fade to background color */}
//       <div className="absolute bottom-0 left-0 right-0 h-18 md:h-24 bg-gradient-to-t from-[#FAF6EF] to-transparent pointer-events-none" />
//     </section>
//   );
// };

// export default ServiceDetailHero;





'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Service } from '@/context/services';
import { div } from 'framer-motion/client';

interface ServiceDetailHeroProps {
  service: Service;
}

const ServiceDetailHero = ({ service }: ServiceDetailHeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;

    const initAnimations = async () => {
      try {
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);

        gsap.from('.breadcrumb', {
          opacity: 0,
          y: -20,
          duration: 0.8,
          ease: 'power2.out',
          delay: 0.2,
        });

        gsap.from('.hero-title', {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power3.out',
          delay: 0.4,
        });

        gsap.from('.hero-tagline', {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power2.out',
          delay: 0.6,
        });

        gsap.from(imageRef.current, {
          scale: 1.08,
          duration: 1.2,
          ease: 'power2.out',
        });

        if (window.innerWidth >= 768) {
          gsap.to(imageRef.current, {
            y: 140,
            ease: 'none',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          });
        }
      } catch {
        console.log('GSAP not available');
      }
    };

    initAnimations();
  }, [mounted]);

  if (!mounted) return null;

  return (
  

    <section
      ref={heroRef}
      className="
        relative w-full overflow-hidden
        min-h-[90vh] sm:min-h-[95vh] lg:min-h-screen
        bg-[#8B1A1A] mt-20 py-6
      "
    >
      {/* Background Image */}
      <div ref={imageRef} className="absolute inset-0">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          priority
          className="object-cover object-center"
          quality={95}
        />
        {/* Red overlay */}
        <div className="absolute inset-0 bg-[#8B1A1A]/55" />
      </div>

      {/* Content */}
      <div
        className="
          relative z-10 container mx-auto px-6 md:px-12 lg:px-20
          min-h-[90vh] sm:min-h-[95vh] lg:min-h-screen
          flex flex-col
        "
      >
        {/* Breadcrumb */}
        <nav className="breadcrumb pt-6 md:pt-8">
          <ol
            className="flex items-center gap-2 text-white/90 text-xs md:text-sm"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/services" className="hover:text-white transition">
                Services
              </Link>
            </li>
          </ol>
        </nav>

        {/* Center Content */}
        <div className="flex-1 flex flex-col justify-center items-center text-center pb-16 md:pb-20">
          <h1
            className="
              hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
              text-white mb-4 md:mb-6 font-normal leading-[1.1] max-w-5xl
            "
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {service.title}
          </h1>

          <p
            className="
              hero-tagline text-base md:text-lg lg:text-xl
              text-white font-light tracking-wide
              max-w-2xl px-4
            "
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {service.tagline}
          </p>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-10 md:h-12 bg-gradient-to-t from-[#FAF6EF] to-transparent pointer-events-none" />
    </section>
    
  );
};

export default ServiceDetailHero;
