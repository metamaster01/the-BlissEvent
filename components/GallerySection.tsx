'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

type GallerySectionProps = {
  title?: string;
  eyebrow?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  images?: {
    hero: string;
    thumbs: string[];
  };
};

const GallerySection = ({
  eyebrow = "Gallery",
  title = "Our Work Speaks for Us",
  ctaLabel = "View full gallery",
  onCtaClick,
  images,
}: GallerySectionProps) => {
  const data = {
    hero: images?.hero ?? "/gallery-1.png",
    thumbs: images?.thumbs ?? [
      "/gallery-2.png",
      "/gallery-3.png",
      "/gallery-4.png",
      "/gallery-5.png",
    ],
  };

  const sectionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const thumbsRef = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLButtonElement>(null);
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

        // Title animations
        gsap.from('.gallery-eyebrow', {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        });

        gsap.from('.gallery-title', {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        });

        // Hero image - reveal with scale and parallax
        gsap.from(heroRef.current, {
          scale: 0.95,
          opacity: 0,
          y: 60,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        });

        // Parallax effect on hero
        gsap.to(heroRef.current, {
          y: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          }
        });

        // Thumbnail stagger animation with hover prep
        thumbsRef.current.forEach((thumb, index) => {
          if (!thumb) return;

          // Entry animation
          gsap.from(thumb, {
            y: 50,
            opacity: 0,
            scale: 0.9,
            duration: 0.8,
            ease: 'back.out(1.7)',
            delay: 0.4 + index * 0.1,
            scrollTrigger: {
              trigger: thumb,
              start: 'top 90%',
              toggleActions: 'play none none reverse'
            }
          });

          // Subtle parallax on thumbs
          gsap.to(thumb, {
            y: -20 * (index % 2 === 0 ? 1 : -1),
            ease: 'none',
            scrollTrigger: {
              trigger: thumb,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 2,
            }
          });
        });

        // CTA button animation
        gsap.from(ctaRef.current, {
          y: 30,
          opacity: 0,
          scale: 0.9,
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 95%',
            toggleActions: 'play none none reverse'
          }
        });

        // Magnetic effect on CTA button
        const button = ctaRef.current;
        if (button) {
          const handleMouseMove = (e: MouseEvent) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            gsap.to(button, {
              x: x * 0.3,
              y: y * 0.3,
              duration: 0.3,
              ease: 'power2.out'
            });
          };

          const handleMouseLeave = () => {
            gsap.to(button, {
              x: 0,
              y: 0,
              duration: 0.5,
              ease: 'elastic.out(1, 0.5)'
            });
          };

          button.addEventListener('mousemove', handleMouseMove);
          button.addEventListener('mouseleave', handleMouseLeave);

          return () => {
            button.removeEventListener('mousemove', handleMouseMove);
            button.removeEventListener('mouseleave', handleMouseLeave);
          };
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
      id='gallery'
      className="relative overflow-hidden bg-[#fbf5e9] py-14 sm:py-16"
    >
      {/* Decorative glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-black/5 blur-3xl" />
        <div className="absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-black/5 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="gallery-eyebrow font-serif italic tracking-wide text-[#a14b3b]">
            {eyebrow}
          </p>

          <h2 className="gallery-title mt-2 text-4xl font-semibold tracking-tight text-[#241a16] sm:text-5xl">
            {title}
          </h2>
        </div>

        {/* HERO */}
        <div className="mt-8">
          <div ref={heroRef} className="will-change-transform">
            <div className="relative overflow-hidden bg-black/5 shadow-[0_18px_60px_-35px_rgba(0,0,0,0.45)] ring-1 ring-black/5 rounded-[28px] sm:rounded-[34px] rounded-tr-[120px] sm:rounded-tr-[150px] group cursor-pointer">
              <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
                <Image
                  src={data.hero}
                  alt="Gallery hero"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Glossy overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/0 via-white/0 to-white/10" />
              
              {/* Hover shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </div>
          </div>
        </div>

        {/* THUMBS */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {data.thumbs.map((src, i) => (
            <div
              key={src}
              ref={(el) => { thumbsRef.current[i] = el; }}
              className="group relative overflow-hidden rounded-2xl bg-black/5 ring-1 ring-black/5 shadow-[0_16px_45px_-35px_rgba(0,0,0,0.45)] cursor-pointer"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={src}
                  alt={`Gallery thumbnail ${i + 1}`}
                  fill
                  className="object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-2"
                />
              </div>

              {/* Hover sheen */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -left-1/3 top-0 h-full w-1/2 -skew-x-12 bg-white/30 blur-md" />
              </div>

              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-2xl ring-2 ring-[#a14b3b]/0 group-hover:ring-[#a14b3b]/50 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-7 flex justify-center">
          <button
            ref={ctaRef}
            onClick={onCtaClick}
            className="inline-flex items-center gap-2 rounded-full bg-[#f0b24d] px-5 py-2.5 text-sm font-medium text-[#241a16] shadow-[0_14px_40px_-30px_rgba(0,0,0,0.55)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.65)] active:translate-y-0 group"
          >
            {ctaLabel}
            <span className="grid h-7 w-7 place-items-center rounded-full bg-black/10 transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="h-4 w-4" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;