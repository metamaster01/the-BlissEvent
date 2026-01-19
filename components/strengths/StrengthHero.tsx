'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

interface StrengthHeroProps {
  title: string;
  subtitle: string;
  fullDescription: string;
  heroImage: string;
}

const StrengthHero: React.FC<StrengthHeroProps> = ({
  title,
  subtitle,
  fullDescription,
  heroImage
}) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const decorLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initAnimations = async () => {
      try {
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        
        gsap.registerPlugin(ScrollTrigger);

        // Initial animations on load
        const tl = gsap.timeline({ delay: 0.2 });

        // Decorative line animation
        tl.from(decorLineRef.current, {
          scaleX: 0,
          duration: 1,
          ease: 'power3.out'
        });

        // Title animation with split effect
        tl.from(titleRef.current, {
          y: 80,
          opacity: 0,
          duration: 1.2,
          ease: 'power4.out'
        }, '-=0.6');

        // Subtitle fade in
        tl.from(subtitleRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out'
        }, '-=0.8');

        // Description fade in
        tl.from(descRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out'
        }, '-=0.6');

        // Image reveal with scale
        tl.from(imageRef.current, {
          scale: 1.1,
          opacity: 0,
          duration: 1.5,
          ease: 'power3.out'
        }, '-=1');

        // Parallax effect on scroll
        gsap.to(imageRef.current, {
          y: 100,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1
          }
        });

      } catch (e) {
        console.log('GSAP not available');
      }
    };

    initAnimations();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative w-full min-h-[90vh] bg-gradient-to-b from-[#F5F1E8] to-[#FAF6EF] overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#D4AF37]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#8B1A1A]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 pt-24 md:pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="relative z-10">
            {/* Decorative line */}
            <div 
              ref={decorLineRef}
              className="w-24 h-1 bg-gradient-to-r from-[#8B1A1A] to-[#D4AF37] mb-8 origin-left"
            />

            {/* Title with emphasis */}
            <h1 
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#2C1810] leading-tight font-normal mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {title}
            </h1>

            {/* Decorative line after title */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-[#8B1A1A]/30 to-transparent" />
            </div>

            {/* Subtitle */}
            <p 
              ref={subtitleRef}
              className="text-[#8B1A1A] text-lg md:text-xl font-semibold mb-6"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {subtitle}
            </p>

            {/* Description */}
            <p 
              ref={descRef}
              className="text-gray-700 text-base md:text-lg leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {fullDescription}
            </p>

            {/* Decorative accent */}
            <div className="mt-10 flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8B1A1A] to-[#A83838] flex items-center justify-center transform -rotate-12">
                <div className="w-12 h-12 border-2 border-white/30 rounded-xl" />
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF37]/40 to-transparent" />
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div 
              ref={imageRef}
              className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B1A1A]/10 via-transparent to-[#D4AF37]/10 z-10" />
              
              {/* Image */}
              <Image
                src={heroImage}
                alt={title}
                fill
                className="object-cover"
                priority
              />

              {/* Border effect */}
              <div className="absolute inset-0 border-4 border-white/20 rounded-3xl z-20" />
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-[#D4AF37]/30 rounded-3xl -rotate-12 animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-[#8B1A1A]/20 to-[#D4AF37]/20 rounded-2xl rotate-12 backdrop-blur-sm" />
          </div>

        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/50 to-transparent" />
    </section>
  );
};

export default StrengthHero;