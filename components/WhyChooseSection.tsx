
//first code with the desktop view design only


// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import { Users, Sparkles, Package, Clock } from "lucide-react";

// interface FeatureCard {
//   id: number;
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   image: string;
//   color: string;
// }

// const features: FeatureCard[] = [
//   {
//     id: 1,
//     icon: <Users className="w-8 h-8" />,
//     title: "Experienced Event Team",
//     description: "Skilled professionals with years of hands-on experience.",
//     image: "/work-1.png",
//     color: "from-[#FFF8F0] to-[#FFE8D6]",
//   },
//   {
//     id: 2,
//     icon: <Sparkles className="w-8 h-8" />,
//     title: "Creative Concepts",
//     description: "Unique themes and ideas tailored to your vision.",
//     image: "/work-2.png",
//     color: "from-[#FFF0F5] to-[#FFE0EB]",
//   },
//   {
//     id: 3,
//     icon: <Package className="w-8 h-8" />,
//     title: "End-to-End Solutions",
//     description: "Complete event management from planning to execution.",
//     image: "/work-3.png",
//     color: "from-[#F0F8FF] to-[#E0EFFF]",
//   },
//   {
//     id: 4,
//     icon: <Clock className="w-8 h-8" />,
//     title: "On-Time Execution",
//     description: "Timely delivery with flawless coordination.",
//     image: "/work-4.png",
//     color: "from-[#F5FFF0] to-[#E5FFD6]",
//   },
// ];

// const WhyChooseSection = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const fullImageRef = useRef<HTMLDivElement>(null);
//   const piecesContainerRef = useRef<HTMLDivElement>(null);
//   const piecesRef = useRef<(HTMLDivElement | null)[]>([]);
//   const cardsContainerRef = useRef<HTMLDivElement>(null);
//   const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
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

//         // Title animation - fade in
//         gsap.from(".why-choose-title", {
//           y: 50,
//           opacity: 0,
//           duration: 1,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 80%",
//             toggleActions: "play none none reverse",
//           },
//         });

//         // Set initial states
//         gsap.set(piecesContainerRef.current, { opacity: 0 });
//         gsap.set(cardsContainerRef.current, { opacity: 0 });

//         // Main animation timeline
//         const tl = gsap.timeline({
//           scrollTrigger: {
//             trigger: containerRef.current,
//             start: "top 20%",
//             end: "+=300%",
//             scrub: 1,
//             pin: true,
//             anticipatePin: 1,
//           },
//         });

//         // Step 1: Fade out full image and show pieces
//         tl.to(
//           fullImageRef.current,
//           {
//             opacity: 0,
//             duration: 0.5,
//           },
//           "+=0.8"
//         );

//         tl.to(
//           piecesContainerRef.current,
//           {
//             opacity: 1,
//             duration: 0.3,
//           },
//           "<0.2"
//         );

//         // Step 2: Create gaps between pieces
//         tl.to(
//           piecesRef.current[0],
//           {
//             x: "-20%",
//             duration: 2,
//             ease: "power2.out",
//           },
//           "+=0.5"
//         );

//         tl.to(
//           piecesRef.current[1],
//           {
//             x: "-7%",
//             duration: 2,
//             ease: "power2.out",
//           },
//           "<"
//         );

//         tl.to(
//           piecesRef.current[2],
//           {
//             x: "7%",
//             duration: 2,
//             ease: "power2.out",
//           },
//           "<"
//         );

//         tl.to(
//           piecesRef.current[3],
//           {
//             x: "20%",
//             duration: 2,
//             ease: "power2.out",
//           },
//           "<"
//         );

//         // Step 3: Flip all pieces 180 degrees
//         tl.to(
//           piecesRef.current,
//           {
//             rotationY: 180,
//             duration: 1.5,
//             ease: "power2.inOut",
//             stagger: 0.15,
//           },
//           "+=0.8"
//         );

//         // Step 4: Hide pieces, show cards with exciting animation
//         tl.to(
//           piecesContainerRef.current,
//           {
//             opacity: 0,
//             duration: 0.3,
//           },
//           "<0.8"
//         );

//         tl.to(
//           cardsContainerRef.current,
//           {
//             opacity: 1,
//             duration: 0.5,
//           },
//           "<0.2"
//         );

//         // Animate cards with scale and bounce
//         tl.from(
//           cardsRef.current,
//           {
//             rotationY: 180,
//             scale: 0.6,
//             y: 50,
//             duration: 1.2,
//             stagger: 0.15,
//             ease: "elastic.out(1, 0.6)",
//           },
//           "<0.3"
//         );
//       } catch (e) {
//         console.log("GSAP not available");
//       }
//     };

//     initAnimations();
//   }, [mounted]);

//   if (!mounted) return null;

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full min-h-screen bg-gradient-to-b from-[#F5F1E8] to-[#FAF6EF] py-16 md:py-20 overflow-hidden"
//     >
//       {/* Title - STAYS ON TOP, NOT PINNED */}
//       <div className="container mx-auto px-6 md:px-12 lg:px-20 mb-4 md:mb-8">
//         <div className="why-choose-title">
//           <p
//             className="text-[#8B1A1A] text-sm md:text-base font-semibold tracking-wider uppercase pb-4"
//             style={{ fontFamily: "Inter, sans-serif" }}
//           >
//             Our strengths
//           </p>
//           <h2
//             className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#2C1810] leading-tight font-normal"
//             style={{ fontFamily: "Playfair Display, serif" }}
//           >
//             Why Clients Trust The Bliss Events
//           </h2>
//         </div>
//       </div>

//       {/* Animation Container - CENTERED PROPERLY */}
//       <div
//         ref={containerRef}
//         className="relative w-full flex items-center justify-center py-4 md:py-8 lg:py-12"
//       >
//         <div className="relative w-full max-w-7xl mx-auto px-4 md:px-6">
//           {/* Container with fixed aspect ratio for proper centering - REDUCED HEIGHT */}
//           <div className="relative w-full" style={{ paddingBottom: "35%" }}>
//             {/* Full Image - Initial State - PROPERLY CENTERED */}
//             <div
//               ref={fullImageRef}
//               className="absolute inset-0 flex items-center justify-center"
//             >
//               <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
//                 <Image
//                   src="/work-final.png"
//                   alt="Our work"
//                   fill
//                   className="object-cover object-center"
//                   priority
//                 />
//               </div>
//             </div>

//             {/* Split Pieces Container */}
//             <div
//               ref={piecesContainerRef}
//               className="absolute inset-0 flex items-center justify-center"
//             >
//               <div className="relative w-full h-full">
//                 <div className="flex items-center justify-center h-full w-full gap-0">
//                   {features.map((feature, index) => (
//                     <div
//                       key={feature.id}
//                       ref={(el) => {
//                         piecesRef.current[index] = el;
//                       }}
//                       className="relative flex-1 h-full"
//                       style={{
//                         perspective: "2000px",
//                         transformStyle: "preserve-3d",
//                       }}
//                     >
//                       <div
//                         className="relative w-full h-full overflow-hidden shadow-xl"
//                         style={{ backfaceVisibility: "hidden" }}
//                       >
//                         <Image
//                           src={feature.image}
//                           alt={feature.title}
//                           fill
//                           className="object-cover object-center"
//                           priority
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Cards Container - EXCITING DESIGN */}
//             <div
//               ref={cardsContainerRef}
//               className="absolute inset-0 flex items-center justify-center"
//             >
//               <div className="relative w-full h-full px-2 md:px-4">
//                 <div className="flex items-stretch justify-center h-full w-full gap-3 md:gap-6">
//                   {features.map((feature, index) => (
//                     <div
//                       key={`card-${feature.id}`}
//                       ref={(el) => {
//                         cardsRef.current[index] = el;
//                       }}
//                       className="relative flex-1 h-full group cursor-pointer"
//                       style={{
//                         perspective: "2000px",
//                         transformStyle: "preserve-3d",
//                         maxWidth: "350px",
//                       }}
//                     >
//                       <div
//                         className={`relative w-full h-full bg-gradient-to-br ${feature.color} rounded-3xl p-5 md:p-8 shadow-xl border-2 border-white hover:border-[#D4AF37] flex flex-col justify-center transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2`}
//                       >
//                         {/* Decorative glow effect on hover */}
//                         <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover:from-[#D4AF37]/20 group-hover:to-[#D4AF37]/10 transition-all duration-500" />

//                         {/* Decorative corner circle */}
//                         <div className="absolute top-4 right-4 w-20 h-20 rounded-full border-2 border-[#D4AF37]/20 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" />

//                         {/* Icon - Animated on hover */}
//                         <div className="relative w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#8B1A1A] to-[#A83838] rounded-2xl flex items-center justify-center text-white mb-4 md:mb-6 shadow-lg flex-shrink-0 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
//                           {feature.icon}
//                         </div>

//                         {/* Content */}
//                         <h3
//                           className="text-base md:text-xl lg:text-2xl text-[#2C1810] font-bold mb-2 md:mb-3 group-hover:text-[#8B1A1A] transition-colors duration-300"
//                           style={{ fontFamily: "Playfair Display, serif" }}
//                         >
//                           {feature.title}
//                         </h3>

//                         <p
//                           className="text-gray-700 text-xs md:text-sm leading-relaxed group-hover:text-gray-900 transition-colors duration-300"
//                           style={{ fontFamily: "Inter, sans-serif" }}
//                         >
//                           {feature.description}
//                         </p>

//                         {/* Decorative bottom element */}
//                         <div className="absolute bottom-4 right-4 w-8 h-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
//                           <div className="w-full h-full border-b-2 border-r-2 border-[#D4AF37] rounded-br-2xl" />
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Extra scroll space */}
//       {/* <div className="h-screen" /> */}
//     </section>
//   );
// };

// export default WhyChooseSection;













//Upto date code with mobile view updation into cards





// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import Image from 'next/image';
// import { Users, Sparkles, Package, Clock } from 'lucide-react';

// interface FeatureCard {
//   id: number;
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   image: string;
//   color: string;
// }

// const features: FeatureCard[] = [
//   {
//     id: 1,
//     icon: <Users className="w-8 h-8" />,
//     title: 'Experienced Event Team',
//     description: 'Skilled professionals with years of hands-on experience.',
//     image: '/work-1.png',
//     color: 'from-[#FFF8F0] to-[#FFE8D6]'
//   },
//   {
//     id: 2,
//     icon: <Sparkles className="w-8 h-8" />,
//     title: 'Creative Concepts',
//     description: 'Unique themes and ideas tailored to your vision.',
//     image: '/work-2.png',
//     color: 'from-[#FFF0F5] to-[#FFE0EB]'
//   },
//   {
//     id: 3,
//     icon: <Package className="w-8 h-8" />,
//     title: 'End-to-End Solutions',
//     description: 'Complete event management from planning to execution.',
//     image: '/work-3.png',
//     color: 'from-[#F0F8FF] to-[#E0EFFF]'
//   },
//   {
//     id: 4,
//     icon: <Clock className="w-8 h-8" />,
//     title: 'On-Time Execution',
//     description: 'Timely delivery with flawless coordination.',
//     image: '/work-4.png',
//     color: 'from-[#F5FFF0] to-[#E5FFD6]'
//   }
// ];

// const WhyChooseSection = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const fullImageRef = useRef<HTMLDivElement>(null);
//   const piecesContainerRef = useRef<HTMLDivElement>(null);
//   const piecesRef = useRef<(HTMLDivElement | null)[]>([]);
//   const cardsContainerRef = useRef<HTMLDivElement>(null);
//   const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
//   const mobileCardsRef = useRef<(HTMLDivElement | null)[]>([]);
//   const mobileContainerRef = useRef<HTMLDivElement>(null);
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

//         // Title animation - fade in
//         gsap.from('.why-choose-title', {
//           y: 50,
//           opacity: 0,
//           duration: 1,
//           ease: 'power3.out',
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: 'top 80%',
//             toggleActions: 'play none none reverse'
//           }
//         });

//         // Set initial states
//         gsap.set(piecesContainerRef.current, { opacity: 0 });
//         gsap.set(cardsContainerRef.current, { opacity: 0 });

//         // Main animation timeline
//         const tl = gsap.timeline({
//           scrollTrigger: {
//             trigger: containerRef.current,
//             start: 'top 20%',
//             end: '+=300%',
//             scrub: 1,
//             pin: true,
//             anticipatePin: 1,
//           }
//         });

//         // Step 1: Fade out full image and show pieces
//         tl.to(fullImageRef.current, {
//           opacity: 0,
//           duration: 0.5,
//         }, '+=0.8');

//         tl.to(piecesContainerRef.current, {
//           opacity: 1,
//           duration: 0.3,
//         }, '<0.2');

//         // Step 2: Create gaps between pieces
//         tl.to(piecesRef.current[0], {
//           x: '-20%',
//           duration: 2,
//           ease: 'power2.out'
//         }, '+=0.5');

//         tl.to(piecesRef.current[1], {
//           x: '-7%',
//           duration: 2,
//           ease: 'power2.out'
//         }, '<');

//         tl.to(piecesRef.current[2], {
//           x: '7%',
//           duration: 2,
//           ease: 'power2.out'
//         }, '<');

//         tl.to(piecesRef.current[3], {
//           x: '20%',
//           duration: 2,
//           ease: 'power2.out'
//         }, '<');

//         // Step 3: Flip all pieces 180 degrees
//         tl.to(piecesRef.current, {
//           rotationY: 180,
//           duration: 1.5,
//           ease: 'power2.inOut',
//           stagger: 0.15
//         }, '+=0.8');

//         // Step 4: Hide pieces, show cards with exciting animation
//         tl.to(piecesContainerRef.current, {
//           opacity: 0,
//           duration: 0.3,
//         }, '<0.8');

//         tl.to(cardsContainerRef.current, {
//           opacity: 1,
//           duration: 0.5,
//         }, '<0.2');

//         // Animate cards with scale and bounce
//         tl.from(cardsRef.current, {
//           rotationY: 180,
//           scale: 0.6,
//           y: 50,
//           duration: 1.2,
//           stagger: 0.15,
//           ease: 'elastic.out(1, 0.6)'
//         }, '<0.3');

//         // Mobile stacking animation - only on mobile
//         if (window.innerWidth < 768) {
//           gsap.set(mobileCardsRef.current, { y: 100, opacity: 0 });

//           mobileCardsRef.current.forEach((card, index) => {
//             gsap.to(card, {
//               y: 0,
//               opacity: 1,
//               duration: 0.8,
//               ease: 'power3.out',
//               scrollTrigger: {
//                 trigger: card,
//                 start: 'top 85%',
//                 end: 'top 60%',
//                 scrub: 1,
//               }
//             });
//           });
//         }

//       } catch (e) {
//         console.log('GSAP not available');
//       }
//     };

//     initAnimations();
//   }, [mounted]);

//   if (!mounted) return null;

//   return (
//     <section 
//       ref={sectionRef}
//       className="relative w-full min-h-screen bg-gradient-to-b from-[#F5F1E8] to-[#FAF6EF] py-16 md:py-20 overflow-hidden"
//     >
//       {/* Title - STAYS ON TOP, NOT PINNED */}
//       <div className="container mx-auto px-6 md:px-12 lg:px-20 mb-8 md:mb-12">
//         <div className="why-choose-title">
//           <p 
//             className="text-[#8B1A1A] text-sm md:text-base font-semibold tracking-wider uppercase mb-4"
//             style={{ fontFamily: 'Inter, sans-serif' }}
//           >
//             Our strengths
//           </p>
//           <h2 
//             className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#2C1810] leading-tight font-normal"
//             style={{ fontFamily: 'Playfair Display, serif' }}
//           >
//             Why Clients Trust The Bliss Events
//           </h2>
//         </div>
//       </div>

//       {/* Animation Container - CENTERED PROPERLY */}
//       <div 
//         ref={containerRef}
//         className="hidden md:block relative w-full flex items-center justify-center py-4 md:py-8"
//       >
//         <div className="relative w-full max-w-7xl mx-auto px-4 md:px-6">
          
//           {/* Container with fixed aspect ratio for proper centering - REDUCED HEIGHT */}
//           <div className="relative w-full" style={{ paddingBottom: '35%' }}>
            
//             {/* Full Image - Initial State - PROPERLY CENTERED */}
//             <div 
//               ref={fullImageRef}
//               className="absolute inset-0 flex items-center justify-center"
//             >
//               <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
//                 <Image
//                   src="/work-final.png"
//                   alt="Our work"
//                   fill
//                   className="object-cover object-center"
//                   priority
//                 />
//               </div>
//             </div>

//             {/* Split Pieces Container */}
//             <div 
//               ref={piecesContainerRef}
//               className="absolute inset-0 flex items-center justify-center"
//             >
//               <div className="relative w-full h-full">
//                 <div className="flex items-center justify-center h-full w-full gap-0">
//                   {features.map((feature, index) => (
//                     <div
//                       key={feature.id}
//                       ref={(el) => { piecesRef.current[index] = el; }}
//                       className="relative flex-1 h-full"
//                       style={{
//                         perspective: '2000px',
//                         transformStyle: 'preserve-3d'
//                       }}
//                     >
//                       <div className="relative w-full h-full overflow-hidden shadow-xl" style={{ backfaceVisibility: 'hidden' }}>
//                         <Image
//                           src={feature.image}
//                           alt={feature.title}
//                           fill
//                           className="object-cover object-center"
//                           priority
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Cards Container - EXCITING DESIGN */}
//             <div 
//               ref={cardsContainerRef}
//               className="absolute inset-0 flex items-center justify-center"
//             >
//               <div className="relative w-full h-full px-2 md:px-4">
//                 <div className="flex items-stretch justify-center h-full w-full gap-3 md:gap-6">
//                   {features.map((feature, index) => (
//                     <div
//                       key={`card-${feature.id}`}
//                       ref={(el) => { cardsRef.current[index] = el; }}
//                       className="relative flex-1 h-full group cursor-pointer"
//                       style={{
//                         perspective: '2000px',
//                         transformStyle: 'preserve-3d',
//                         maxWidth: '350px'
//                       }}
//                     >
//                       <div className={`relative w-full h-full bg-gradient-to-br ${feature.color} rounded-3xl p-5 md:p-8 shadow-xl border-2 border-white hover:border-[#D4AF37] flex flex-col justify-center transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2`}>
//                         {/* Decorative glow effect on hover */}
//                         <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover:from-[#D4AF37]/20 group-hover:to-[#D4AF37]/10 transition-all duration-500" />
                        
//                         {/* Decorative corner circle */}
//                         <div className="absolute top-4 right-4 w-20 h-20 rounded-full border-2 border-[#D4AF37]/20 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" />

//                         {/* Icon - Animated on hover */}
//                         <div className="relative w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#8B1A1A] to-[#A83838] rounded-2xl flex items-center justify-center text-white mb-4 md:mb-6 shadow-lg flex-shrink-0 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
//                           {feature.icon}
//                         </div>

//                         {/* Content */}
//                         <h3 
//                           className="text-base md:text-xl lg:text-2xl text-[#2C1810] font-bold mb-2 md:mb-3 group-hover:text-[#8B1A1A] transition-colors duration-300"
//                           style={{ fontFamily: 'Playfair Display, serif' }}
//                         >
//                           {feature.title}
//                         </h3>
                        
//                         <p 
//                           className="text-gray-700 text-xs md:text-sm leading-relaxed group-hover:text-gray-900 transition-colors duration-300"
//                           style={{ fontFamily: 'Inter, sans-serif' }}
//                         >
//                           {feature.description}
//                         </p>

//                         {/* Decorative bottom element */}
//                         <div className="absolute bottom-4 right-4 w-8 h-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
//                           <div className="w-full h-full border-b-2 border-r-2 border-[#D4AF37] rounded-br-2xl" />
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* MOBILE VIEW - Stacking Cards Animation */}
//       <div 
//         ref={mobileContainerRef}
//         className="md:hidden relative w-full px-4 py-8"
//       >
//         <div className="space-y-6">
//           {features.map((feature, index) => (
//             <div
//               key={`mobile-card-${feature.id}`}
//               ref={(el) => { mobileCardsRef.current[index] = el; }}
//               className="relative w-full group cursor-pointer"
//             >
//               <div className={`relative w-full bg-gradient-to-br ${feature.color} rounded-3xl p-6 shadow-xl border-2 border-white hover:border-[#D4AF37] transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]`}
//                 style={{ minHeight: '280px' }}
//               >
//                 {/* Decorative glow effect on hover */}
//                 <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover:from-[#D4AF37]/20 group-hover:to-[#D4AF37]/10 transition-all duration-500" />
                
//                 {/* Decorative corner circle */}
//                 <div className="absolute top-4 right-4 w-16 h-16 rounded-full border-2 border-[#D4AF37]/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />

//                 {/* Icon */}
//                 <div className="relative w-14 h-14 bg-gradient-to-br from-[#8B1A1A] to-[#A83838] rounded-2xl flex items-center justify-center text-white mb-5 shadow-lg transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
//                   {feature.icon}
//                 </div>

//                 {/* Content */}
//                 <h3 
//                   className="text-xl text-[#2C1810] font-bold mb-3 group-hover:text-[#8B1A1A] transition-colors duration-300"
//                   style={{ fontFamily: 'Playfair Display, serif' }}
//                 >
//                   {feature.title}
//                 </h3>
                
//                 <p 
//                   className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition-colors duration-300"
//                   style={{ fontFamily: 'Inter, sans-serif' }}
//                 >
//                   {feature.description}
//                 </p>

//                 {/* Decorative bottom element */}
//                 <div className="absolute bottom-4 right-4 w-8 h-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
//                   <div className="w-full h-full border-b-2 border-r-2 border-[#D4AF37] rounded-br-2xl" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Extra scroll space */}
//       {/* <div className="h-screen" /> */}
//     </section>
//   );
// };

// export default WhyChooseSection;



'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Sparkles, Package, Clock, ArrowRight } from 'lucide-react';

interface FeatureCard {
  id: number;
  slug: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  color: string;
  highlights: string[];
}

const features: FeatureCard[] = [
  {
    id: 1,
    slug: 'experienced-event-team',
    icon: <Users className="w-8 h-8" />,
    title: 'Experienced Event Team',
    subtitle: 'Skilled Professionals You Can Trust',
    description: 'Our seasoned professionals bring years of expertise to every celebration, ensuring flawless execution from start to finish.',
    image: '/work-1.png',
    color: 'from-[#FFF8F0] to-[#FFE8D6]',
    highlights: ['500+ Events', 'Expert Planners', '24/7 Support']
  },
  {
    id: 2,
    slug: 'creative-concepts',
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Creative Concepts',
    subtitle: 'Unique Themes Tailored to Your Vision',
    description: 'Transform your imagination into reality with our innovative designs and personalized themes that reflect your unique style.',
    image: '/work-2.png',
    color: 'from-[#FFF0F5] to-[#FFE0EB]',
    highlights: ['Custom Themes', 'Award-Winning Designs', 'Visual Storytelling']
  },
  {
    id: 3,
    slug: 'end-to-end-solutions',
    icon: <Package className="w-8 h-8" />,
    title: 'End-to-End Solutions',
    subtitle: 'Complete Event Management',
    description: 'From initial planning to final execution, we handle every aspect of your event with precision and care.',
    image: '/work-3.png',
    color: 'from-[#F0F8FF] to-[#E0EFFF]',
    highlights: ['Full Service', 'Single Contact', 'Seamless Flow']
  },
  {
    id: 4,
    slug: 'on-time-execution',
    icon: <Clock className="w-8 h-8" />,
    title: 'On-Time Execution',
    subtitle: 'Timely Delivery with Flawless Coordination',
    description: 'Precision timing and meticulous planning ensure your event flows perfectly, keeping every moment on schedule.',
    image: '/work-4.png',
    color: 'from-[#F5FFF0] to-[#E5FFD6]',
    highlights: ['100% On-Time', 'Zero Delays', 'Perfect Sync']
  }
];

const WhyChooseSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const fullImageRef = useRef<HTMLDivElement>(null);
  const piecesContainerRef = useRef<HTMLDivElement>(null);
  const piecesRef = useRef<(HTMLDivElement | null)[]>([]);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const mobileCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const initAnimations = async () => {
      try {
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        
        gsap.registerPlugin(ScrollTrigger);

        gsap.from('.why-choose-title', {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        });

        gsap.set(piecesContainerRef.current, { opacity: 0 });
        gsap.set(cardsContainerRef.current, { opacity: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 20%',
            end: '+=300%',
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          }
        });

        tl.to(fullImageRef.current, {
          opacity: 0,
          duration: 0.5,
        }, '+=0.8');

        tl.to(piecesContainerRef.current, {
          opacity: 1,
          duration: 0.3,
        }, '<0.2');

        tl.to(piecesRef.current[0], {
          x: '-20%',
          duration: 2,
          ease: 'power2.out'
        }, '+=0.5');

        tl.to(piecesRef.current[1], {
          x: '-7%',
          duration: 2,
          ease: 'power2.out'
        }, '<');

        tl.to(piecesRef.current[2], {
          x: '7%',
          duration: 2,
          ease: 'power2.out'
        }, '<');

        tl.to(piecesRef.current[3], {
          x: '20%',
          duration: 2,
          ease: 'power2.out'
        }, '<');

        tl.to(piecesRef.current, {
          rotationY: 180,
          duration: 1.5,
          ease: 'power2.inOut',
          stagger: 0.15
        }, '+=0.8');

        tl.to(piecesContainerRef.current, {
          opacity: 0,
          duration: 0.3,
        }, '<0.8');

        tl.to(cardsContainerRef.current, {
          opacity: 1,
          duration: 0.5,
        }, '<0.2');

        tl.from(cardsRef.current, {
          rotationY: 180,
          scale: 0.6,
          y: 50,
          duration: 1.2,
          stagger: 0.15,
          ease: 'elastic.out(1, 0.6)'
        }, '<0.3');

        if (window.innerWidth < 768) {
          gsap.set(mobileCardsRef.current, { y: 100, opacity: 0 });

          mobileCardsRef.current.forEach((card) => {
            gsap.to(card, {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'top 60%',
                scrub: 1,
              }
            });
          });
        }

      } catch (e) {
        console.log('GSAP not available');
      }
    };

    initAnimations();
  }, [mounted]);

  if (!mounted) return null;

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-screen bg-gradient-to-b from-[#F5F1E8] to-[#FAF6EF] py-16 md:py-20 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 mb-8 md:mb-12">
        <div className="why-choose-title">
          <p 
            className="text-[#8B1A1A] text-sm md:text-base font-semibold tracking-wider uppercase mb-4"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Our strengths
          </p>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#2C1810] leading-tight font-normal"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Why Clients Trust The Bliss Events
          </h2>
        </div>
      </div>

      {/* DESKTOP VIEW */}
      <div 
        ref={containerRef}
        className="hidden md:block relative w-full flex items-center justify-center py-4 md:py-8"
      >
        <div className="relative w-full max-w-7xl mx-auto px-4 md:px-6">
          <div className="relative w-full" style={{ paddingBottom: '40%' }}>
            
            <div 
              ref={fullImageRef}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/work-final.png"
                  alt="Our work"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

            <div 
              ref={piecesContainerRef}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative w-full h-full">
                <div className="flex items-center justify-center h-full w-full gap-0">
                  {features.map((feature, index) => (
                    <div
                      key={feature.id}
                      ref={(el) => { piecesRef.current[index] = el; }}
                      className="relative flex-1 h-full"
                      style={{
                        perspective: '2000px',
                        transformStyle: 'preserve-3d'
                      }}
                    >
                      <div className="relative w-full h-full overflow-hidden shadow-xl" style={{ backfaceVisibility: 'hidden' }}>
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          fill
                          className="object-cover object-center"
                          priority
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div 
              ref={cardsContainerRef}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative w-full h-full px-2 md:px-4">
                <div className="flex items-stretch justify-center h-full w-full gap-3 md:gap-6">
                  {features.map((feature, index) => (
                    <div
                      key={`card-${feature.id}`}
                      ref={(el) => { cardsRef.current[index] = el; }}
                      className="relative flex-1 h-full group cursor-pointer"
                      style={{
                        perspective: '2000px',
                        transformStyle: 'preserve-3d',
                        maxWidth: '350px'
                      }}
                    >
                      <div className={`relative w-full h-full bg-gradient-to-br ${feature.color} rounded-3xl p-5 md:p-6 lg:p-7 shadow-xl border-2 border-white group-hover:border-[#D4AF37] flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2`}>
                        
                        {/* Decorative glow */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover:from-[#D4AF37]/20 group-hover:to-[#D4AF37]/10 transition-all duration-500" />
                        
                        {/* Corner circle */}
                        <div className="absolute top-4 right-4 w-16 h-16 rounded-full border-2 border-[#D4AF37]/20 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" />

                        {/* Top content */}
                        <div className="relative z-10">
                          {/* Icon */}
                          <div className="relative w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#8B1A1A] to-[#A83838] rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg flex-shrink-0 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                            {feature.icon}
                          </div>

                          {/* Subtitle */}
                          <p 
                            className="text-[10px] md:text-xs text-[#8B1A1A] font-semibold uppercase tracking-wide mb-2 opacity-80"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            {feature.subtitle}
                          </p>

                          {/* Title */}
                          <h3 
                            className="text-base md:text-lg lg:text-xl text-[#2C1810] font-bold mb-3 group-hover:text-[#8B1A1A] transition-colors duration-300 leading-tight"
                            style={{ fontFamily: 'Playfair Display, serif' }}
                          >
                            {feature.title}
                          </h3>
                          
                          {/* Description */}
                          <p 
                            className="text-gray-700 text-[11px] md:text-xs leading-relaxed group-hover:text-gray-900 transition-colors duration-300 mb-4"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            {feature.description}
                          </p>

                          {/* Highlights */}
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {feature.highlights.map((highlight, idx) => (
                              <span 
                                key={idx}
                                className="px-2 py-1 bg-white/60 group-hover:bg-[#D4AF37]/20 rounded-full text-[9px] md:text-[10px] font-medium text-[#2C1810] transition-all duration-300"
                                style={{ fontFamily: 'Inter, sans-serif' }}
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Bottom Learn More button */}
                        <div className="relative z-10 mt-auto">
                          <Link 
                            href={`/strengths/${feature.slug}`}
                            className="inline-flex items-center gap-2 text-[#8B1A1A] font-semibold text-xs md:text-sm group-hover:gap-3 transition-all duration-300 border-b-2 border-[#8B1A1A] pb-1"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            Learn More
                            <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                          </Link>
                        </div>

                        {/* Decorative bottom element */}
                        <div className="absolute bottom-4 right-4 w-6 h-6 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                          <div className="w-full h-full border-b-2 border-r-2 border-[#D4AF37] rounded-br-2xl" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div 
        ref={mobileContainerRef}
        className="md:hidden relative w-full px-4 py-8"
      >
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div
              key={`mobile-card-${feature.id}`}
              ref={(el) => { mobileCardsRef.current[index] = el; }}
              className="relative w-full group cursor-pointer"
            >
              <div className={`relative w-full bg-gradient-to-br ${feature.color} rounded-3xl p-6 shadow-xl border-2 border-white hover:border-[#D4AF37] transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]`}>
                
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover:from-[#D4AF37]/20 group-hover:to-[#D4AF37]/10 transition-all duration-500" />
                
                <div className="absolute top-4 right-4 w-14 h-14 rounded-full border-2 border-[#D4AF37]/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="relative w-14 h-14 bg-gradient-to-br from-[#8B1A1A] to-[#A83838] rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                    {feature.icon}
                  </div>

                  {/* Subtitle */}
                  <p 
                    className="text-xs text-[#8B1A1A] font-semibold uppercase tracking-wide mb-2 opacity-80"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {feature.subtitle}
                  </p>

                  {/* Title */}
                  <h3 
                    className="text-xl text-[#2C1810] font-bold mb-3 group-hover:text-[#8B1A1A] transition-colors duration-300"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p 
                    className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition-colors duration-300 mb-4"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {feature.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {feature.highlights.map((highlight, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1.5 bg-white/60 group-hover:bg-[#D4AF37]/20 rounded-full text-xs font-medium text-[#2C1810] transition-all duration-300"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Learn More button */}
                  <Link 
                    href={`/strengths/${feature.slug}`}
                    className="inline-flex items-center gap-2 text-[#8B1A1A] font-semibold text-sm group-hover:gap-3 transition-all duration-300 border-b-2 border-[#8B1A1A] pb-1"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>

                <div className="absolute bottom-4 right-4 w-6 h-6 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                  <div className="w-full h-full border-b-2 border-r-2 border-[#D4AF37] rounded-br-2xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;


//update code with mobile view animation but not added into main code due ot element duplication


// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import Image from 'next/image';
// import { Users, Sparkles, Package, Clock } from 'lucide-react';

// interface FeatureCard {
//   id: number;
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   image: string;
//   color: string;
// }

// const features: FeatureCard[] = [
//   {
//     id: 1,
//     icon: <Users className="w-8 h-8" />,
//     title: 'Experienced Event Team',
//     description: 'Skilled professionals with years of hands-on experience.',
//     image: '/work-1.png',
//     color: 'from-[#FFF8F0] to-[#FFE8D6]'
//   },
//   {
//     id: 2,
//     icon: <Sparkles className="w-8 h-8" />,
//     title: 'Creative Concepts',
//     description: 'Unique themes and ideas tailored to your vision.',
//     image: '/work-2.png',
//     color: 'from-[#FFF0F5] to-[#FFE0EB]'
//   },
//   {
//     id: 3,
//     icon: <Package className="w-8 h-8" />,
//     title: 'End-to-End Solutions',
//     description: 'Complete event management from planning to execution.',
//     image: '/work-3.png',
//     color: 'from-[#F0F8FF] to-[#E0EFFF]'
//   },
//   {
//     id: 4,
//     icon: <Clock className="w-8 h-8" />,
//     title: 'On-Time Execution',
//     description: 'Timely delivery with flawless coordination.',
//     image: '/work-4.png',
//     color: 'from-[#F5FFF0] to-[#E5FFD6]'
//   }
// ];

// const WhyChooseSection = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const fullImageRef = useRef<HTMLDivElement>(null);
//   const piecesContainerRef = useRef<HTMLDivElement>(null);
//   const piecesRef = useRef<(HTMLDivElement | null)[]>([]);
//   const cardsContainerRef = useRef<HTMLDivElement>(null);
//   const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
//   const mobileCardsRef = useRef<(HTMLDivElement | null)[]>([]);
//   const mobileContainerRef = useRef<HTMLDivElement>(null);
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

//         // Title animation - fade in
//         gsap.from('.why-choose-title', {
//           y: 50,
//           opacity: 0,
//           duration: 1,
//           ease: 'power3.out',
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: 'top 80%',
//             toggleActions: 'play none none reverse'
//           }
//         });

//         // Set initial states
//         gsap.set(piecesContainerRef.current, { opacity: 0 });
//         gsap.set(cardsContainerRef.current, { opacity: 0 });

//         // Main animation timeline
//         const tl = gsap.timeline({
//           scrollTrigger: {
//             trigger: containerRef.current,
//             start: 'top 20%',
//             end: '+=300%',
//             scrub: 1,
//             pin: true,
//             anticipatePin: 1,
//           }
//         });

//         // Step 1: Fade out full image and show pieces
//         tl.to(fullImageRef.current, {
//           opacity: 0,
//           duration: 0.5,
//         }, '+=0.8');

//         tl.to(piecesContainerRef.current, {
//           opacity: 1,
//           duration: 0.3,
//         }, '<0.2');

//         // Step 2: Create gaps between pieces
//         tl.to(piecesRef.current[0], {
//           x: '-20%',
//           duration: 2,
//           ease: 'power2.out'
//         }, '+=0.5');

//         tl.to(piecesRef.current[1], {
//           x: '-7%',
//           duration: 2,
//           ease: 'power2.out'
//         }, '<');

//         tl.to(piecesRef.current[2], {
//           x: '7%',
//           duration: 2,
//           ease: 'power2.out'
//         }, '<');

//         tl.to(piecesRef.current[3], {
//           x: '20%',
//           duration: 2,
//           ease: 'power2.out'
//         }, '<');

//         // Step 3: Flip all pieces 180 degrees
//         tl.to(piecesRef.current, {
//           rotationY: 180,
//           duration: 1.5,
//           ease: 'power2.inOut',
//           stagger: 0.15
//         }, '+=0.8');

//         // Step 4: Hide pieces, show cards with exciting animation
//         tl.to(piecesContainerRef.current, {
//           opacity: 0,
//           duration: 0.3,
//         }, '<0.8');

//         tl.to(cardsContainerRef.current, {
//           opacity: 1,
//           duration: 0.5,
//         }, '<0.2');

//         // Animate cards with scale and bounce
//         tl.from(cardsRef.current, {
//           rotationY: 180,
//           scale: 0.6,
//           y: 50,
//           duration: 1.2,
//           stagger: 0.15,
//           ease: 'elastic.out(1, 0.6)'
//         }, '<0.3');

//       } catch (e) {
//         console.log('GSAP not available');
//       }
//     };

//     initAnimations();
//   }, [mounted]);

//   if (!mounted) return null;

//   return (
//     <section 
//       ref={sectionRef}
//       className="relative w-full min-h-screen bg-gradient-to-b from-[#F5F1E8] to-[#FAF6EF] py-16 md:py-20 overflow-hidden"
//     >
//       {/* Title - STAYS ON TOP, NOT PINNED */}
//       <div className="container mx-auto px-6 md:px-12 lg:px-20 mb-8 md:mb-12">
//         <div className="why-choose-title">
//           <p 
//             className="text-[#8B1A1A] text-sm md:text-base font-semibold tracking-wider uppercase mb-4"
//             style={{ fontFamily: 'Inter, sans-serif' }}
//           >
//             Our strengths
//           </p>
//           <h2 
//             className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#2C1810] leading-tight font-normal"
//             style={{ fontFamily: 'Playfair Display, serif' }}
//           >
//             Why Clients Trust The Bliss Events
//           </h2>
//         </div>
//       </div>

//       {/* Animation Container - CENTERED PROPERLY */}
//       <div 
//         ref={containerRef}
//         className="relative w-full flex items-center justify-center py-4 md:py-8"
//       >
//         <div className="relative w-full max-w-7xl mx-auto px-4 md:px-6">
          
//           {/* Container with fixed aspect ratio for proper centering - REDUCED HEIGHT */}
//           <div className="relative w-full" style={{ paddingBottom: '35%' }}>
            
//             {/* Full Image - Initial State - PROPERLY CENTERED */}
//             <div 
//               ref={fullImageRef}
//               className="absolute inset-0 flex items-center justify-center"
//             >
//               <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
//                 <Image
//                   src="/work-final.png"
//                   alt="Our work"
//                   fill
//                   className="object-cover object-center"
//                   priority
//                 />
//               </div>
//             </div>

//             {/* Split Pieces Container */}
//             <div 
//               ref={piecesContainerRef}
//               className="absolute inset-0 flex items-center justify-center"
//             >
//               <div className="relative w-full h-full">
//                 <div className="flex items-center justify-center h-full w-full gap-0">
//                   {features.map((feature, index) => (
//                     <div
//                       key={feature.id}
//                       ref={(el) => { piecesRef.current[index] = el; }}
//                       className="relative flex-1 h-full"
//                       style={{
//                         perspective: '2000px',
//                         transformStyle: 'preserve-3d'
//                       }}
//                     >
//                       <div className="relative w-full h-full overflow-hidden shadow-xl" style={{ backfaceVisibility: 'hidden' }}>
//                         <Image
//                           src={feature.image}
//                           alt={feature.title}
//                           fill
//                           className="object-cover object-center"
//                           priority
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Cards Container - EXCITING DESIGN */}
//             <div 
//               ref={cardsContainerRef}
//               className="absolute inset-0 flex items-center justify-center"
//             >
//               <div className="relative w-full h-full px-2 md:px-4">
//                 <div className="flex items-stretch justify-center h-full w-full gap-3 md:gap-6">
//                   {features.map((feature, index) => (
//                     <div
//                       key={`card-${feature.id}`}
//                       ref={(el) => { cardsRef.current[index] = el; }}
//                       className="relative flex-1 h-full group cursor-pointer"
//                       style={{
//                         perspective: '2000px',
//                         transformStyle: 'preserve-3d',
//                         maxWidth: '350px'
//                       }}
//                     >
//                       <div className={`relative w-full h-full bg-gradient-to-br ${feature.color} rounded-3xl p-5 md:p-8 shadow-xl border-2 border-white hover:border-[#D4AF37] flex flex-col justify-center transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2`}>
//                         {/* Decorative glow effect on hover */}
//                         <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover:from-[#D4AF37]/20 group-hover:to-[#D4AF37]/10 transition-all duration-500" />
                        
//                         {/* Decorative corner circle */}
//                         <div className="absolute top-4 right-4 w-20 h-20 rounded-full border-2 border-[#D4AF37]/20 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" />

//                         {/* Icon - Animated on hover */}
//                         <div className="relative w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#8B1A1A] to-[#A83838] rounded-2xl flex items-center justify-center text-white mb-4 md:mb-6 shadow-lg flex-shrink-0 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
//                           {feature.icon}
//                         </div>

//                         {/* Content */}
//                         <h3 
//                           className="text-base md:text-xl lg:text-2xl text-[#2C1810] font-bold mb-2 md:mb-3 group-hover:text-[#8B1A1A] transition-colors duration-300"
//                           style={{ fontFamily: 'Playfair Display, serif' }}
//                         >
//                           {feature.title}
//                         </h3>
                        
//                         <p 
//                           className="text-gray-700 text-xs md:text-sm leading-relaxed group-hover:text-gray-900 transition-colors duration-300"
//                           style={{ fontFamily: 'Inter, sans-serif' }}
//                         >
//                           {feature.description}
//                         </p>

//                         {/* Decorative bottom element */}
//                         <div className="absolute bottom-4 right-4 w-8 h-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
//                           <div className="w-full h-full border-b-2 border-r-2 border-[#D4AF37] rounded-br-2xl" />
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* Extra scroll space */}
//       {/* <div className="h-screen" /> */}
//     </section>
//   );
// };

// export default WhyChooseSection;