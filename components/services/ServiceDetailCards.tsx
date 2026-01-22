// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import { ServiceDetail } from '@/context/services';

// interface ServiceDetailCardsProps {
//   serviceDetails: ServiceDetail[];
//   serviceTitle: string;
// }

// const ServiceDetailCards = ({ serviceDetails, serviceTitle }: ServiceDetailCardsProps) => {
//   const sectionRef = useRef<HTMLDivElement>(null);
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

//         // Section title animation
//         gsap.from('.section-title', {
//           y: 60,
//           opacity: 0,
//           duration: 1,
//           ease: 'power3.out',
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: 'top 80%',
//             toggleActions: 'play none none reverse'
//           }
//         });

//         // Cards stagger animation
//         gsap.from('.detail-card', {
//           y: 80,
//           opacity: 0,
//           scale: 0.95,
//           duration: 0.8,
//           stagger: 0.15,
//           ease: 'power3.out',
//           scrollTrigger: {
//             trigger: '.cards-grid',
//             start: 'top 75%',
//             toggleActions: 'play none none reverse'
//           }
//         });

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
//       className="bg-gradient-to-b from-[#FAF6EF] to-[#F5F1E8] py-16 md:py-20 lg:py-24"
//     >
//       <div className="container mx-auto px-6 md:px-12 lg:px-20">
//         {/* Section Title */}
//         <div className="section-title mb-12 md:mb-16 text-center max-w-3xl mx-auto">
//           <p 
//             className="text-[#8B1A1A] text-sm md:text-base font-semibold tracking-wider uppercase mb-3"
//             style={{ fontFamily: 'Inter, sans-serif' }}
//           >
//             What We Offer
//           </p>
//           <h2 
//             className="text-3xl md:text-4xl lg:text-5xl text-[#2C1810] font-normal leading-tight"
//             style={{ fontFamily: 'Playfair Display, serif' }}
//           >
//             Comprehensive {serviceTitle} Services
//           </h2>
//         </div>

//         {/* Cards Grid */}
//         <div className="cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//           {serviceDetails.map((detail, index) => (
//             <DetailCard key={index} detail={detail} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // Individual Detail Card Component
// const DetailCard = ({ detail, index }: { detail: ServiceDetail; index: number }) => {
//   const cardRef = useRef<HTMLDivElement>(null);
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     const card = cardRef.current;
//     if (!card) return;

//     const handleMouseMove = (e: MouseEvent) => {
//       if (!isHovered) return;
      
//       const rect = card.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;
      
//       const centerX = rect.width / 2;
//       const centerY = rect.height / 2;
      
//       const rotateX = (y - centerY) / 20;
//       const rotateY = (centerX - x) / 20;
      
//       card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
//     };

//     const handleMouseLeave = () => {
//       card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
//     };

//     if (window.innerWidth >= 768) {
//       card.addEventListener('mousemove', handleMouseMove);
//       card.addEventListener('mouseleave', handleMouseLeave);

//       return () => {
//         card.removeEventListener('mousemove', handleMouseMove);
//         card.removeEventListener('mouseleave', handleMouseLeave);
//       };
//     }
//   }, [isHovered]);

//   // Icon mapping based on index
//   const getIcon = (idx: number) => {
//     const icons = [
//       // Leaf/Nature icon
//       <svg key="icon1" className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/>
//       </svg>,
//       // Star icon
//       <svg key="icon2" className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="currentColor"/>
//       </svg>,
//       // Heart icon
//       <svg key="icon3" className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
//       </svg>,
//       // Music note icon
//       <svg key="icon4" className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" fill="currentColor"/>
//       </svg>,
//       // Camera icon
//       <svg key="icon5" className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M12 15.2c1.77 0 3.2-1.43 3.2-3.2 0-1.77-1.43-3.2-3.2-3.2-1.77 0-3.2 1.43-3.2 3.2 0 1.77 1.43 3.2 3.2 3.2zM9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" fill="currentColor"/>
//       </svg>,
//       // Gift icon
//       <svg key="icon6" className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z" fill="currentColor"/>
//       </svg>
//     ];
//     return icons[idx % icons.length];
//   };

//   return (
//     <div
//       ref={cardRef}
//       className="detail-card group"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       style={{ 
//         transformStyle: 'preserve-3d',
//         transition: 'transform 0.3s ease-out'
//       }}
//     >
//       <div className="relative h-full bg-gradient-to-br from-[#8B1A1A] to-[#6B1414] rounded-2xl md:rounded-3xl p-6 md:p-8 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
//         {/* Background Pattern */}
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -translate-y-20 translate-x-20" />
//           <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full translate-y-16 -translate-x-16" />
//         </div>

//         {/* Icon */}
//         <div className="relative z-10 mb-4 md:mb-6 text-[#D4AF37] opacity-80 group-hover:opacity-100 transition-opacity duration-300">
//           {getIcon(index)}
//         </div>

//         {/* Title */}
//         <h3 
//           className="relative z-10 text-xl md:text-2xl text-white font-semibold mb-4 md:mb-5 group-hover:text-[#D4AF37] transition-colors duration-300"
//           style={{ fontFamily: 'Playfair Display, serif' }}
//         >
//           {detail.title}
//         </h3>

//         {/* Bullet Points */}
//         <ul className="relative z-10 space-y-2.5 md:space-y-3">
//           {detail.bulletPoints.map((point, idx) => (
//             <li 
//               key={idx}
//               className="flex items-start gap-3 text-white/90 text-sm md:text-base group-hover:text-white transition-colors duration-300"
//               style={{ 
//                 fontFamily: 'Inter, sans-serif',
//                 animation: `fadeInUp 0.5s ease-out ${idx * 0.1}s both`
//               }}
//             >
//               <span className="text-[#D4AF37] mt-1 flex-shrink-0">
//                 <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
//                 </svg>
//               </span>
//               <span className="leading-relaxed">{point}</span>
//             </li>
//           ))}
//         </ul>

//         {/* Hover Glow Effect */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/5 to-[#D4AF37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//       </div>

//       <style jsx>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ServiceDetailCards;


'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ServiceDetail } from '@/context/services';

interface ServiceDetailCardsProps {
  serviceDetails: ServiceDetail[];
  serviceTitle: string;
}

const ServiceDetailCards = ({ serviceDetails, serviceTitle }: ServiceDetailCardsProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <section ref={sectionRef} className="bg-[#FAF6EF] py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-12 md:mb-16 animate-fade-in-up">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-[#2C1810] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {serviceTitle}
          </h2>
          <p
            className="text-gray-700 text-base md:text-lg max-w-3xl"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            From serene beaches to regal forts and luxury resorts, we help you choose
            the perfect destination based on your vision, guest list, and budget.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {serviceDetails.map((detail, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <DetailCard detail={detail} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

const DetailCard = ({ detail }: { detail: ServiceDetail }) => {
  return (
    <div
      className="
        h-full rounded-3xl p-7 md:p-8
        text-white
        transition-all duration-500 ease-out
        hover:-translate-y-2 hover:scale-[1.02]
      "
      style={{
        background:
          'linear-gradient(135deg, #7A1414 0%, #8B1A1A 45%, #5A0F0F 100%)',
        boxShadow: '0 18px 45px rgba(139, 26, 26, 0.35)',
      }}
    >
      {/* Icon */}
      <div className="mb-6">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/15 flex items-center justify-center">
          <Image
            src="/icon-prop-2.png"
            alt="Service icon"
            width={28}
            height={28}
            className="object-contain"
          />
        </div>
      </div>

      {/* Title */}
      <h3
        className="text-xl md:text-2xl font-semibold mb-4"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        {detail.title}
      </h3>

      {/* Points */}
      <ul className="space-y-3">
        {detail.bulletPoints.map((point, idx) => (
          <li
            key={idx}
            className="flex gap-3 text-white/90 text-sm md:text-base"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceDetailCards;

