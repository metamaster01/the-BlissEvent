// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import Image from 'next/image';

// const AboutSection = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const imageRef = useRef<HTMLDivElement>(null);
//   const contentRef = useRef<HTMLDivElement>(null);
//   const circleRef = useRef<HTMLDivElement>(null);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   useEffect(() => {
//     if (!mounted) return;

//     const initGSAP = async () => {
//       try {
//         const { gsap } = await import('gsap');
//         const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        
//         gsap.registerPlugin(ScrollTrigger);

//         // Animate the image container
//         gsap.from(imageRef.current, {
//           x: -100,
//           opacity: 0,
//           duration: 1.2,
//           ease: 'power3.out',
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: 'top 70%',
//             toggleActions: 'play none none reverse'
//           }
//         });

//         // Animate content elements with stagger
//         gsap.from('.about-text-item', {
//           x: 100,
//           opacity: 0,
//           duration: 1,
//           stagger: 0.2,
//           ease: 'power3.out',
//           scrollTrigger: {
//             trigger: contentRef.current,
//             start: 'top 75%',
//             toggleActions: 'play none none reverse'
//           }
//         });

//         // Animate the decorative circle
//         gsap.from(circleRef.current, {
//           scale: 0,
//           opacity: 0,
//           duration: 1.5,
//           ease: 'elastic.out(1, 0.5)',
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: 'top 70%',
//             toggleActions: 'play none none reverse'
//           }
//         });

//         // Animate decorative prop
//         gsap.from('.decorative-prop', {
//           y: 50,
//           opacity: 0,
//           duration: 1,
//           ease: 'power2.out',
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: 'top 60%',
//             toggleActions: 'play none none reverse'
//           }
//         });

//       } catch (e) {
//         console.log('GSAP not available');
//       }
//     };

//     initGSAP();
//   }, [mounted]);

//   if (!mounted) return null;

//   return (
//     <section 
//       ref={sectionRef}
//       className="relative w-full min-h-screen bg-[#F5F1E8] py-16 md:py-24 lg:py-32 overflow-hidden"
//     >
//       {/* Decorative Circle - Top Right */}
//       <div 
//         ref={circleRef}
//         className="absolute top-32 right-0 w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] rounded-full border-2 border-[#D4AF37]/30 -mr-32 md:-mr-48 lg:-mr-64 opacity-50"
//       />

//       <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
//           {/* LEFT SIDE - Image */}
//           <div ref={imageRef} className="relative flex justify-center lg:justify-start">
//             {/* Decorative Prop - Bottom Left */}
//             <div className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 w-24 h-24 md:w-32 md:h-32 z-0 decorative-prop">
//               <Image
//                 src="/prop-3.png"
//                 alt="Decorative element"
//                 width={128}
//                 height={128}
//                 className="object-contain"
//               />
//             </div>

//             {/* Main Image */}
//             <div className="relative w-full max-w-md lg:max-w-lg">
//               <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
//                 <Image
//                   src="/about-1.png"
//                   alt="Wedding couple"
//                   fill
//                   className="object-cover"
//                 />
//               </div>

//               {/* Subtle overlay gradient */}
//               <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#D4AF37]/10 to-transparent pointer-events-none" />
//             </div>
//           </div>

//           {/* RIGHT SIDE - Content */}
//           <div ref={contentRef} className="space-y-6 md:space-y-8 text-center lg:text-left">
//             {/* Small heading */}
//             <p className="text-[#8B1A1A] text-sm md:text-base font-semibold tracking-wider uppercase about-text-item" style={{ fontFamily: 'Inter, sans-serif' }}>
//               About us
//             </p>

//             {/* Main Title */}
//             <h2 
//               className="text-4xl md:text-5xl lg:text-6xl text-[#2C1810] leading-tight font-normal about-text-item"
//               style={{ fontFamily: 'Playfair Display, serif' }}
//             >
//               Creating Memorable Events,
//               <br />
//               <span className="block mt-2">Seamlessly</span>
//             </h2>

//             {/* Description */}
//             <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 about-text-item" style={{ fontFamily: 'Inter, sans-serif' }}>
//               The Bliss Events is a professional event management company offering complete planning and execution services for weddings, corporate events, social gatherings, and special occasions. From concept to completion, we ensure every event is beautifully organized and stress-free.
//             </p>

//             {/* Read More Button */}
//             <div className="pt-4 about-text-item">
//               <button className="group relative inline-flex items-center gap-2 text-[#8B1A1A] font-semibold text-base md:text-lg hover:text-[#A83838] transition-colors duration-300">
//                 <span>Read More</span>
//                 <svg 
//                   className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" 
//                   fill="none" 
//                   viewBox="0 0 24 24" 
//                   stroke="currentColor"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                 </svg>
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8B1A1A] group-hover:w-full transition-all duration-300" />
//               </button>
//             </div>

//             {/* Decorative dots pattern */}
//             <div className="hidden lg:block absolute -bottom-8 right-0 opacity-20 about-text-item">
//               <div className="grid grid-cols-3 gap-2">
//                 {[...Array(9)].map((_, i) => (
//                   <div key={i} className="w-2 h-2 rounded-full bg-[#D4AF37]" />
//                 ))}
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* Subtle decorative wave at bottom */}
//       <div className="absolute bottom-0 left-0 w-full opacity-20">
//         <svg 
//           xmlns="http://www.w3.org/2000/svg" 
//           viewBox="0 0 1440 120"
//           className="w-full h-auto"
//           preserveAspectRatio="none"
//         >
//           <path 
//             fill="#D4AF37" 
//             fillOpacity="0.1" 
//             d="M0,64L120,58.7C240,53,480,43,720,48C960,53,1200,75,1320,85.3L1440,96L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z"
//           />
//         </svg>
//       </div>

//       {/* Additional decorative elements */}
//       <div className="absolute top-1/2 left-8 w-3 h-3 rounded-full bg-[#D4AF37]/40 animate-pulse" />
//       <div className="absolute top-1/3 right-16 w-2 h-2 rounded-full bg-[#D4AF37]/40 animate-pulse delay-150" />
//       <div className="absolute bottom-1/4 left-1/4 w-2 h-2 rounded-full bg-[#D4AF37]/40 animate-pulse delay-300" />

//       <style jsx>{`
//         .delay-150 {
//           animation-delay: 150ms;
//         }
//         .delay-300 {
//           animation-delay: 300ms;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default AboutSection;







'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const halfRingRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const initGSAP = async () => {
      try {
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        
        gsap.registerPlugin(ScrollTrigger);

        // Background color transition from #F5D5B0 to lighter
        gsap.to(sectionRef.current, {
          backgroundColor: '#FAF6EF',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          }
        });

        // Animate the image container
        gsap.from(imageRef.current, {
          x: -100,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        });

        // Animate content elements with stagger
        gsap.from('.about-text-item', {
          x: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        });

        // Animate the half ring
        gsap.from(halfRingRef.current, {
          x: 100,
          opacity: 0,
          rotation: -45,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        });

        // Parallax effect on half ring
        gsap.to(halfRingRef.current, {
          y: -50,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          }
        });

        // Animate decorative props
        gsap.from('.decorative-prop', {
          scale: 0.8,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse'
          }
        });

      } catch (e) {
        console.log('GSAP not available');
      }
    };

    initGSAP();
  }, [mounted]);

  if (!mounted) return null;

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-screen py-16 md:py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: '#F5D5B0' }}
    >
      {/* Half Ring - Bottom Right */}
      <div 
        ref={halfRingRef}
        className="absolute bottom-0 right-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 z-0"
      >
        <Image
          src="/prop-3.png"
          alt="Decorative half ring"
          fill
          className="object-contain object-right-bottom"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* LEFT SIDE - Image */}
          <div ref={imageRef} className="relative flex justify-center lg:justify-start">
            {/* Decorative Props - Side by Side on Sides of Screen */}
            <div className="absolute -left-4 top-1/4 w-16 h-16 md:w-20 md:h-20 z-0 decorative-prop opacity-40">
              <Image
                src="/prop-3.png"
                alt="Decorative element"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>

            <div className="absolute -right-4 top-2/3 w-16 h-16 md:w-20 md:h-20 z-0 decorative-prop opacity-40">
              <Image
                src="/prop-3.png"
                alt="Decorative element"
                width={80}
                height={80}
                className="object-contain transform rotate-180"
              />
            </div>

            {/* Main Image - Reduced Height */}
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '3/3.5' }}>
                <Image
                  src="/about-1.png"
                  alt="Wedding couple"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Content */}
          <div ref={contentRef} className="space-y-6 md:space-y-8 text-center lg:text-left">
            {/* Small heading */}
            <p 
              className="text-[#8B1A1A] text-sm md:text-base font-semibold tracking-wider uppercase about-text-item"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              About us
            </p>

            {/* Main Title */}
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl text-[#2C1810] leading-tight font-normal about-text-item"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Creating Memorable Events,
              <br />
              <span className="block mt-2">Seamlessly</span>
            </h2>

            {/* Description */}
            <p 
              className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 about-text-item"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              The Bliss Events is a professional event management company offering complete planning and execution services for weddings, corporate events, social gatherings, and special occasions. From concept to completion, we ensure every event is beautifully organized and stress-free.
            </p>

            {/* Read More Button */}
            <div className="pt-4 about-text-item">
              <Link href="/about">
              <button className="group relative inline-flex items-center gap-2 text-[#8B1A1A] font-semibold text-base md:text-lg hover:text-[#A83838] transition-colors duration-300">
                <span>Read More</span>
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8B1A1A] group-hover:w-full transition-all duration-300" />
              </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;