// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import Image from 'next/image';

// const HeroScrollSection = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const waveRef = useRef<HTMLDivElement>(null);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!containerRef.current) return;

//       const scrollY = window.scrollY;
//       const windowHeight = window.innerHeight;

//       // Calculate progress from 0 to 1 based on scroll
//       const maxScroll = windowHeight * 1.5;
//       const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);

//       setScrollProgress(progress);
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll();

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   // Calculate wave scale based on scroll
//   const waveScale = 1 + (scrollProgress * 15); // Grows from 1 to 16x
//   const waveOpacity = scrollProgress > 0.1 ? 1 : scrollProgress * 10;
//   const firstSectionOpacity = 1 - (scrollProgress * 1.5);
//   const secondSectionOpacity = scrollProgress > 0.5 ? (scrollProgress - 0.5) * 2 : 0;

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
//         <div className="container mx-auto px-6 md:px-12 lg:px-20 py-4 md:py-6">
//           <div className="flex items-center justify-between">
//             {/* Logo */}
//             <div className="relative w-32 md:w-40 h-12 md:h-16">
//               <Image
//                 src="/logo.svg"
//                 alt="The Bliss Events"
//                 fill
//                 className="object-contain"
//                 priority
//               />
//             </div>

//             {/* Desktop Menu */}
//             <div className="hidden md:flex items-center gap-8 lg:gap-12">
//               <a href="#home" className="text-white hover:text-white/80 transition-colors font-medium">
//                 Home
//               </a>
//               <a href="#about" className="text-white hover:text-white/80 transition-colors font-medium">
//                 About
//               </a>
//               <a href="#services" className="text-white hover:text-white/80 transition-colors font-medium">
//                 Services
//               </a>
//               <a href="#contact" className="text-white hover:text-white/80 transition-colors font-medium">
//                 Contact
//               </a>
//               <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-[#7D1F1F] transition-all">
//                 Chat on WhatsApp
//               </button>
//             </div>

//             {/* Mobile Menu Button */}
//             <button className="md:hidden w-12 h-12 bg-white rounded-full flex items-center justify-center">
//               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <line x1="3" y1="12" x2="21" y2="12"></line>
//                 <line x1="3" y1="6" x2="21" y2="6"></line>
//                 <line x1="3" y1="18" x2="21" y2="18"></line>
//               </svg>
//             </button>
//           </div>
//         </div>
//       </nav>

//       <div ref={containerRef} className="relative w-full" style={{ height: '250vh' }}>
//         {/* FIRST SECTION - RED BACKGROUND */}
//         <div
//           className="sticky top-0 w-full h-screen overflow-hidden bg-gradient-to-br from-[#9B2C2C] via-[#7D1F1F] to-[#5C0F0F]"
//           style={{ opacity: firstSectionOpacity }}
//         >
//           {/* Top Left Image */}
//           <div className="absolute top-16 left-8 md:top-24 md:left-16 lg:top-32 lg:left-24 w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-lg overflow-hidden shadow-2xl transform -rotate-6 z-10">
//             <Image
//               src="/hero-scroll1.png"
//               alt="Wedding moment"
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>

//           {/* Center Main Tagline */}
//           <div className="absolute inset-0 flex items-center justify-center px-6">
//             <div className="text-center max-w-4xl">
//               <h1
//                 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-white leading-tight font-normal italic"
//                 style={{ fontFamily: 'Playfair Display, serif' }}
//               >
//                 Khushiyaan Aapki,
//               </h1>
//               <h1
//                 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-white leading-tight font-normal italic mt-2"
//                 style={{ fontFamily: 'Playfair Display, serif' }}
//               >
//                 Jimmedari Humari
//               </h1>
//             </div>
//           </div>

//           {/* Bottom Right Image */}
//           <div className="absolute bottom-24 right-8 md:bottom-32 md:right-16 lg:bottom-40 lg:right-24 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-lg overflow-hidden shadow-2xl transform rotate-3 z-10">
//             <Image
//               src="/hero-scroll2.png"
//               alt="Wedding celebration"
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>

//           {/* Bottom Left - Text and Buttons */}
//           <div className="absolute bottom-8 left-8 md:bottom-12 md:left-16 lg:bottom-16 lg:left-24 z-20 max-w-md">
//             <p className="text-white/90 text-sm md:text-base leading-relaxed mb-6 font-light">
//               Turning your special moments into unforgettable celebrations with creativity, precision, and professionalism.
//             </p>

//             <div className="flex flex-wrap gap-4">
//               <button className="bg-white text-[#7D1F1F] px-6 md:px-8 py-3 rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg font-medium">
//                 Get a Quote
//               </button>
//               <button className="border-2 border-white text-white px-6 md:px-8 py-3 rounded-full hover:bg-white hover:text-[#7D1F1F] transition-all duration-300 shadow-lg font-medium">
//                 Chat on WhatsApp
//               </button>
//             </div>
//           </div>

//           {/* Bottom Center - Scroll Indicator */}
//           <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
//             <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-white/40 flex items-center justify-center backdrop-blur-sm">
//               <span className="text-white text-xs md:text-sm font-medium">Scroll</span>
//             </div>
//           </div>

//           {/* Growing Wave/Ellipse Reveal */}
//           <div
//             ref={waveRef}
//             className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pointer-events-none z-30"
//             style={{
//               opacity: waveOpacity,
//               transform: `translate(-50%, 0%) scale(${waveScale})`,
//               transformOrigin: 'center bottom',
//               transition: 'transform 0.1s ease-out, opacity 0.3s ease-out',
//             }}
//           >
//             <svg
//               width="1440"
//               height="320"
//               viewBox="0 0 1440 320"
//               preserveAspectRatio="xMidYMax meet"
//               className="w-screen"
//             >
//               <path
//                 fill="#F5F1E8"
//                 fillOpacity="1"
//                 d="M0,288L120,256C240,224,480,160,720,165.3C960,171,1200,245,1320,282.7L1440,320L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
//               />
//             </svg>
//           </div>
//         </div>

//         {/* SECOND SECTION - LIGHT BACKGROUND */}
//         <div
//           className="sticky top-0 w-full h-screen bg-[#F5F1E8] pointer-events-none"
//           style={{
//             opacity: secondSectionOpacity,
//             pointerEvents: scrollProgress > 0.7 ? 'auto' : 'none'
//           }}
//         >
//           <div className="relative h-full w-full flex items-center justify-center px-6 md:px-12 lg:px-20">
//             <div className="container mx-auto max-w-7xl">
//               <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

//                 {/* LEFT SIDE - Image with decorative elements */}
//                 <div className="relative flex justify-center lg:justify-start">
//                   {/* Decorative line behind */}
//                   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md z-0 opacity-30">
//                     <Image
//                       src="/prop-1.png"
//                       alt="Decorative line"
//                       width={400}
//                       height={400}
//                       className="object-contain"
//                     />
//                   </div>

//                   {/* Main Wedding Image */}
//                   <div className="relative z-10 w-full max-w-md">
//                     <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
//                       <Image
//                         src="/hero-1.png"
//                         alt="Wedding ceremony"
//                         fill
//                         className="object-cover"
//                       />
//                     </div>
//                   </div>

//                   {/* Rotating Badge - Wedding Services */}
//                   <div
//                     className="absolute -top-6 -left-6 md:-top-8 md:-left-8 w-32 h-32 md:w-40 md:h-40 z-20"
//                     style={{
//                       animation: 'spin 20s linear infinite',
//                     }}
//                   >
//                     <Image
//                       src="/prop-2.png"
//                       alt="Wedding Service & Planning"
//                       width={160}
//                       height={160}
//                       className="object-contain"
//                     />
//                   </div>
//                 </div>

//                 {/* RIGHT SIDE - Content */}
//                 <div className="space-y-6 text-center lg:text-left">
//                   <p className="text-[#7D1F1F] text-xs md:text-sm font-semibold tracking-wider uppercase">
//                     Arrive with Love, Celebrate with Joy.
//                   </p>

//                   <h2
//                     className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#8B1A1A] leading-tight font-bold italic"
//                     style={{ fontFamily: 'Playfair Display, serif' }}
//                   >
//                     Khushiyaan Aapki,
//                     <br />
//                     Jimmedari Humari
//                   </h2>

//                   <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
//                     Turning your special moments into unforgettable celebrations with creativity, precision, and professionalism.
//                   </p>

//                   <div className="flex flex-wrap gap-4 pt-6 justify-center lg:justify-start">
//                     <button className="bg-[#7D1F1F] text-white px-8 py-3.5 rounded-full hover:bg-[#5C0F0F] transition-all duration-300 hover:shadow-xl hover:scale-105 font-medium">
//                       Get a Quote
//                     </button>
//                     <button className="border-2 border-[#7D1F1F] text-[#7D1F1F] px-8 py-3.5 rounded-full hover:bg-[#7D1F1F] hover:text-white transition-all duration-300 hover:shadow-xl font-medium">
//                       Chat on WhatsApp
//                     </button>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes spin {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default HeroScrollSection;

// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import Image from 'next/image';

// const HeroScrollSection = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const waveRef = useRef<HTMLDivElement>(null);
//   const firstSectionRef = useRef<HTMLDivElement>(null);
//   const secondSectionRef = useRef<HTMLDivElement>(null);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   useEffect(() => {
//     if (!mounted) return;

//     let lenis: any;

//     // Initialize Lenis for smooth scrolling
//     const initLenis = async () => {
//       try {
//         const Lenis = (await import('@studio-freight/lenis')).default;
//         lenis = new Lenis({
//           duration: 1.2,
//           easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//           smoothWheel: true,
//         });

//         function raf(time: number) {
//           lenis.raf(time);
//           requestAnimationFrame(raf);
//         }
//         requestAnimationFrame(raf);
//       } catch (e) {
//         console.log('Lenis not available');
//       }
//     };

//     initLenis();

//     return () => {
//       if (lenis) lenis.destroy();
//     };
//   }, [mounted]);

//   useEffect(() => {
//     if (!mounted) return;

//     const initGSAP = async () => {
//       try {
//         const { gsap } = await import('gsap');
//         const { ScrollTrigger } = await import('gsap/ScrollTrigger');

//         gsap.registerPlugin(ScrollTrigger);

//         // Main timeline for scroll animation
//         const tl = gsap.timeline({
//           scrollTrigger: {
//             trigger: containerRef.current,
//             start: 'top top',
//             end: '+=150%',
//             scrub: 1,
//             pin: true,
//             anticipatePin: 1,
//           }
//         });

//         // Animate wave growing
//         tl.fromTo(waveRef.current,
//           {
//             scale: 1,
//             y: 0,
//           },
//           {
//             scale: 20,
//             y: -100,
//             duration: 1,
//             ease: 'power2.inOut'
//           },
//           0
//         );

//         // Fade out first section
//         tl.to(firstSectionRef.current, {
//           opacity: 0,
//           duration: 0.5,
//         }, 0.3);

//         // Fade in second section
//         tl.fromTo(secondSectionRef.current,
//           { opacity: 0 },
//           {
//             opacity: 1,
//             duration: 0.5,
//           },
//           0.5
//         );

//         // Animate elements in first section on load
//         gsap.from('.hero-image-1', {
//           x: -100,
//           opacity: 0,
//           duration: 1,
//           ease: 'power3.out',
//           delay: 0.3
//         });

//         gsap.from('.hero-image-2', {
//           x: 100,
//           opacity: 0,
//           duration: 1,
//           ease: 'power3.out',
//           delay: 0.5
//         });

//         gsap.from('.hero-title', {
//           y: 50,
//           opacity: 0,
//           duration: 1,
//           ease: 'power3.out',
//           delay: 0.2
//         });

//         gsap.from('.hero-content-bottom', {
//           y: 50,
//           opacity: 0,
//           duration: 1,
//           ease: 'power3.out',
//           delay: 0.7
//         });

//         // Animate second section elements
//         gsap.from('.second-section-image', {
//           scale: 0.8,
//           opacity: 0,
//           duration: 1,
//           ease: 'power2.out',
//           scrollTrigger: {
//             trigger: secondSectionRef.current,
//             start: 'top 60%',
//           }
//         });

//         gsap.from('.second-section-text', {
//           x: 100,
//           opacity: 0,
//           duration: 1,
//           stagger: 0.2,
//           ease: 'power2.out',
//           scrollTrigger: {
//             trigger: secondSectionRef.current,
//             start: 'top 60%',
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
//     <div ref={containerRef} className="relative w-full h-screen overflow-hidden">
//       {/* FIRST SECTION - RED BACKGROUND */}
//       <div
//         ref={firstSectionRef}
//         className="absolute inset-0 bg-gradient-to-br from-[#A83838] via-[#8B2E2E] to-[#7D1F1F]"
//       >
//         <div className="relative h-full w-full">
//           {/* Grid Layout */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full items-center px-6 md:px-12 lg:px-20 pt-24 md:pt-28">

//             {/* LEFT SIDE - Title */}
//             <div className="flex flex-col justify-center hero-title">
//               <h1
//                 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-tight font-normal italic mb-4"
//                 style={{ fontFamily: 'Playfair Display, serif' }}
//               >
//                 Khushiyaan Aapki,
//               </h1>
//               <h1
//                 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-tight font-normal italic"
//                 style={{ fontFamily: 'Playfair Display, serif' }}
//               >
//                 Jimmedari Humari
//               </h1>

//               {/* Scroll Indicator */}
//               <div className="flex items-center gap-6 mt-12">
//                 <div className="w-20 h-20 md:w-24 md:h-24 border-2 border-[#F5D5B0] rounded-full flex items-center justify-center">
//                   <span className="text-[#F5D5B0] text-sm font-semibold">Scroll</span>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT SIDE - Top Image */}
//             <div className="flex justify-center lg:justify-end hero-image-1">
//               <div className="relative w-full max-w-md h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#F5D5B0] transform -rotate-2 hover:rotate-0 transition-transform duration-500">
//                 <Image
//                   src="/hero-scroll1.png"
//                   alt="Wedding celebration"
//                   fill
//                   className="object-cover"
//                   priority
//                 />
//               </div>
//             </div>
//           </div>

//           {/* BOTTOM SECTION */}
//           <div className="absolute bottom-32 md:bottom-40 left-0 right-0 px-6 md:px-12 lg:px-20">
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">

//               {/* Bottom Left Image */}
//               <div className="lg:col-span-2 hero-image-2">
//                 <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#F5D5B0] transform rotate-2 hover:rotate-0 transition-transform duration-500">
//                   <Image
//                     src="/hero-scroll2.png"
//                     alt="Wedding preparation"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               </div>

//               {/* Bottom Right Content */}
//               <div className="flex flex-col justify-end hero-content-bottom">
//                 <p className="text-white text-base md:text-lg leading-relaxed mb-6 font-light">
//                   Turning your special moments into unforgettable celebrations with creativity, precision, and professionalism.
//                 </p>

//                 <div className="flex flex-col gap-4">
//                   <button className="bg-white text-[#A83838] hover:bg-gray-100 font-semibold py-3 md:py-4 px-6 md:px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
//                     Get a Quote
//                   </button>
//                   <button className="border-2 border-white text-white hover:bg-white hover:text-[#A83838] font-semibold py-3 md:py-4 px-6 md:px-8 rounded-full transition-all duration-300 shadow-lg">
//                     Chat on WhatsApp
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Wave SVG - Always visible at bottom */}
//           <div
//             ref={waveRef}
//             className="absolute bottom-0 left-0 w-full pointer-events-none"
//             style={{
//               transformOrigin: 'center bottom',
//             }}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 1440 320"
//               className="w-full h-auto"
//               preserveAspectRatio="none"
//             >
//               <path
//                 fill="#F5D5B0"
//                 fillOpacity="1"
//                 d="M0,192L120,176C240,160,480,128,720,133.3C960,139,1200,181,1320,202.7L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
//               />
//             </svg>
//           </div>
//         </div>
//       </div>

//       {/* SECOND SECTION - LIGHT BACKGROUND */}
//       <div
//         ref={secondSectionRef}
//         className="absolute inset-0 bg-[#F5D5B0]"
//         style={{ opacity: 0 }}
//       >
//         <div className="relative h-full w-full flex items-center justify-center px-6 md:px-12 lg:px-20 pt-24 md:pt-28">
//           <div className="container mx-auto max-w-7xl">
//             <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

//               {/* LEFT SIDE - Image with decorative elements */}
//               <div className="relative flex justify-center lg:justify-start second-section-image">
//                 {/* Decorative line behind */}

//                 {/* Main Wedding Image */}
//                 <div className="relative z-10 w-full max-w-lg">
//                   <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
//                     <Image
//                       src="/hero-1.png"
//                       alt="Wedding ceremony"
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                 </div>

//                 {/* Rotating Badge - Wedding Services */}
//                 <div
//                   className="absolute -top-8 -left-8 md:-top-12 md:-left-12 w-40 h-40 md:w-48 md:h-48 z-20"
//                   style={{
//                     animation: 'spin 20s linear infinite',
//                   }}
//                 >
//                   <Image
//                     src="/prop-2.png"
//                     alt="Wedding Service & Planning"
//                     width={200}
//                     height={200}
//                     className="object-contain"
//                   />
//                 </div>
//               </div>

//               {/* RIGHT SIDE - Content */}
//               <div className="space-y-8 text-center lg:text-left">

//                 <div className="absolute top-4/12 right-0 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-lg z-50 hidden md:block">
//                   <Image
//                     src="/prop-1.png"
//                     alt="Decorative line"
//                     width={500}
//                     height={500}
//                     className="object-contain"
//                   />
//                 </div>
//                 <p className="text-[#A83838] text-sm md:text-base font-semibold tracking-wider uppercase second-section-text">
//                   Arrive with Love, Celebrate with Joy.
//                 </p>

//                 <h2
//                   className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#8B1A1A] leading-tight font-bold italic second-section-text"
//                   style={{ fontFamily: 'Playfair Display, serif' }}
//                 >
//                   Khushiyaan Aapki,
//                   <br />
//                   Jimmedari Humari
//                 </h2>

//                 <p className="text-[#A83838]/80 text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 second-section-text">
//                   Turning your special moments into unforgettable celebrations with creativity, precision, and professionalism.
//                 </p>

//                 <div className="flex flex-wrap gap-4 pt-6 justify-center lg:justify-start second-section-text">
//                   <button className="bg-[#A83838] text-white px-8 py-4 rounded-full hover:bg-[#8B2E2E] transition-all duration-300 hover:shadow-xl hover:scale-105 font-semibold text-lg">
//                     Get a Quote
//                   </button>
//                   <button className="border-2 border-[#A83838] text-[#A83838] px-8 py-4 rounded-full hover:bg-[#A83838] hover:text-white transition-all duration-300 hover:shadow-xl font-semibold text-lg">
//                     Chat on WhatsApp
//                   </button>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes spin {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HeroScrollSection;

"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import confettiAnimation from "../public/Confetti.json";

const HeroScrollSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const waveRef = useRef<HTMLDivElement>(null);
  const firstSectionRef = useRef<HTMLDivElement>(null);
  const secondSectionRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const confettiShownRef = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let lenis: any;

    const initLenis = async () => {
      try {
        const Lenis = (await import("@studio-freight/lenis")).default;
        lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        });

        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      } catch (e) {
        console.log("Lenis not available");
      }
    };

    initLenis();

    return () => {
      if (lenis) lenis.destroy();
    };
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;

    const initGSAP = async () => {
      try {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");

        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=150%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            onUpdate: (self) => {
              // Show confetti when scroll progress reaches 0.7 (only once)
              if (self.progress > 0.7 && !confettiShownRef.current) {
                confettiShownRef.current = true;
                setShowConfetti(true);
                // Hide confetti after 5 seconds
                setTimeout(() => {
                  setShowConfetti(false);
                }, 5000);
              }
            },
          },
        });

        tl.fromTo(
          waveRef.current,
          {
            scale: 1,
            y: 0,
          },
          {
            scale: 20,
            y: -100,
            duration: 1,
            ease: "power2.inOut",
          },
          0
        );

        tl.to(
          firstSectionRef.current,
          {
            opacity: 0,
            duration: 0.5,
          },
          0.3
        );

        tl.fromTo(
          secondSectionRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.5,
          },
          0.5
        );

        gsap.from(".hero-image-1", {
          x: -100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.3,
        });

        gsap.from(".hero-image-2", {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.5,
        });

        gsap.from(".hero-title", {
          scale: 0.9,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.2,
        });

        gsap.from(".hero-scroll-indicator", {
          scale: 0,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          delay: 1,
        });

        gsap.from(".hero-content-right", {
          x: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.7,
        });

        gsap.from(".second-section-image", {
          scale: 0.8,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: secondSectionRef.current,
            start: "top 60%",
          },
        });

        gsap.from(".second-section-text", {
          x: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: secondSectionRef.current,
            start: "top 60%",
          },
        });
      } catch (e) {
        console.log("GSAP not available");
      }
    };

    initGSAP();
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* FIRST SECTION - RED BACKGROUND */}
      <div
        ref={firstSectionRef}
        className="absolute inset-0 bg-gradient-to-br from-[#A83838] via-[#8B2E2E] to-[#7D1F1F]"
      >
        <div className="relative h-full w-full px-4 md:px-8 lg:px-16 xl:px-20 pt-24 md:pt-28 pb-48 md:pb-56 lg:pb-64">
          {/* Main Title - Centered */}
          <div className="absolute top-2/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center hero-title w-full px-4">
            <h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl text-white leading-tight font-normal italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Khushiyaan Aapki,
            </h1>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl text-white leading-tight font-normal italic mt-2"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Jimmedari Humari
            </h1>
          </div>

          {/* Top Right Image */}
          <div className="absolute top-24 md:top-28 lg:top-28 right-4 md:right-8 lg:right-16 xl:right-24 hero-image-1 z-10">
            <div className="relative w-64 h-48 md:w-56 md:h-56 lg:w-72 lg:h-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#F5D5B0] transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/hero-scroll1.png"
                alt="Wedding celebration"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Bottom Left Image */}
          <div className="absolute bottom-32 md:bottom-40 lg:bottom-48 left-4 md:left-12 lg:left-18 xl:left-20 hero-image-2 z-10">
            <div className="relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#F5D5B0] transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/hero-scroll2.png"
                alt="Wedding preparation"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Bottom Right Content */}
          <div className="absolute bottom-32 md:bottom-40 lg:bottom-48 right-4 md:right-8 lg:right-16 xl:right-24 max-w-xs md:max-w-sm hero-content-right z-10">
            <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed font-light">
              Turning your special moments into unforgettable celebrations with
              creativity, precision, and professionalism.
            </p>
          </div>

          {/* Scroll Indicator - Bottom Left */}
          <div className="absolute bottom-8 md:bottom-12 lg:bottom-16 left-4 md:left-12 lg:left-20 hero-scroll-indicator z-10">
            <div className="w-20 h-20 md:w-24 md:h-24 border-2 border-[#F5D5B0] rounded-full flex items-center justify-center">
              <span className="text-[#F5D5B0] text-xs md:text-sm font-semibold">
                Scroll
              </span>
            </div>
          </div>

          {/* Wave SVG */}
          <div
            ref={waveRef}
            className="absolute bottom-0 left-0 w-full pointer-events-none z-20"
            style={{
              transformOrigin: "center bottom",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 260"
              className="w-full h-auto"
              preserveAspectRatio="none"
            >
              <path
                fill="#F5D5B0"
                fillOpacity="1"
                d="M0,192L120,176C240,160,480,128,720,133.3C960,139,1200,181,1320,202.7L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* SECOND SECTION - LIGHT BACKGROUND */}
      <div
        ref={secondSectionRef}
        className="absolute inset-0 bg-[#F5D5B0]"
        style={{ opacity: 0 }}
      >
        {/* Confetti Animation */}
        {showConfetti && (
          <div className="absolute inset-0 z-50 pointer-events-none flex items-center justify-center">
            <Lottie
              animationData={confettiAnimation}
              loop={false}
              className="w-full h-full max-w-6xl max-h-4xl"
            />
          </div>
        )}

        <div className="relative h-full w-full flex items-center justify-center px-6 md:px-12 lg:px-20 pt-24 md:pt-28">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* LEFT SIDE - Image with decorative elements */}
              <div className="relative flex justify-center lg:justify-start second-section-image">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-sm   z-0 opacity-20">
                  <Image
                    src="/prop-1.png"
                    alt="Decorative line"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>

                <div className="relative z-10 w-full max-w-sm md:max-w-md lg:max-w-lg">
                    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="/hero-1.png"
                            alt="Wedding ceremony"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                <div
                  className="absolute -top-8 -left-8 md:-top-12 md:-left-12 w-20 h-20 md:w-28 md:h-28 z-20"
                  style={{
                    animation: "spin 20s linear infinite",
                  }}
                >
                  <Image
                    src="/prop-2.png"
                    alt="Wedding Service & Planning"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* RIGHT SIDE - Content */}
              <div className="space-y-4 text-center lg:text-left">
                <p className="text-[#A83838] text-sm md:text-base font-semibold tracking-wider uppercase second-section-text">
                  Arrive with Love, Celebrate with Joy.
                </p>

                <h2
                  className="text-4xl md:text-6xl lg:text-7xl text-[#8B1A1A] leading-tight font-bold italic second-section-text"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Khushiyaan Aapki,
                  <br />
                  Jimmedari Humari
                </h2>

                <p className="text-[#A83838]/80 text-md md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 second-section-text">
                  Turning your special moments into unforgettable celebrations
                  with creativity, precision, and professionalism.
                </p>

                <div className="flex flex-wrap gap-4 pt-2 justify-center lg:justify-start second-section-text">
                  <button className="bg-[#A83838] text-white px-8 py-4 rounded-full hover:bg-[#8B2E2E] transition-all duration-300 hover:shadow-xl hover:scale-105 font-semibold text-lg">
                    Get a Quote
                  </button>
                  <button className="border-2 border-[#A83838] text-[#A83838] px-8 py-4 rounded-full hover:bg-[#A83838] hover:text-white transition-all duration-300 hover:shadow-xl font-semibold text-lg">
                    Chat on WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default HeroScrollSection;
