'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

type WhyChooseItem = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

type WhyChooseSectionProps = {
  eyebrow?: string;
  title?: string;
  imageSrc?: string;
  items?: WhyChooseItem[];
};

const WhyUsSection = ({
  eyebrow = "Why choose us",
  title = "What Makes Us Different",
  imageSrc = "/whychoose.png",
  items,
}: WhyChooseSectionProps) => {
  const defaultItems: WhyChooseItem[] = [
    {
      title: "Professional & Creative Team",
      desc: "Experts who bring your vision to life with creativity and precision.",
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
    },
    {
      title: "Customized Event Planning",
      desc: "Tailored experiences designed around your vision.",
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
    },
    {
      title: "Budget-Friendly Packages",
      desc: "Transparent pricing without compromising quality.",
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
    },
    {
      title: "Reliable Vendor Partnerships",
      desc: "Trusted professionals for seamless coordination.",
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" /></svg>
    },
    {
      title: "100% Client Satisfaction",
      desc: "Your happiness is always our top priority.",
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    },
    {
      title: "Hassle-Free Execution",
      desc: "Smooth, stress-free management from start to finish.",
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
    },
  ];

  const list = items ?? defaultItems;
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
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

        gsap.from('.why-eyebrow', {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        });

        gsap.from('.why-title', {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          delay: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        });

        gsap.from(imageRef.current, {
          x: -80,
          opacity: 0,
          scale: 0.9,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 85%',
          }
        });

        gsap.to(imageRef.current, {
          y: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          }
        });

        itemsRef.current.forEach((item, index) => {
          if (!item) return;

          gsap.from(item, {
            x: 60,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            delay: 0.3 + index * 0.1,
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
            }
          });

          const icon = item.querySelector('.why-icon');
          if (icon) {
            gsap.from(icon, {
              scale: 0,
              rotation: -180,
              duration: 0.8,
              ease: 'back.out(1.7)',
              delay: 0.4 + index * 0.1,
              scrollTrigger: {
                trigger: item,
                start: 'top 90%',
              }
            });
          }
        });

      } catch (e) {
        console.log('GSAP not available');
      }
    };

    initAnimations();
  }, [mounted]);

  if (!mounted) return null;

  return (
    <section ref={sectionRef} className="bg-[#fbf5e9] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="why-eyebrow font-serif italic tracking-wide text-[#a14b3b]">
            {eyebrow}
          </p>
          <h2 className="why-title mt-2 text-4xl font-semibold tracking-tight text-[#241a16] sm:text-5xl">
            {title}
          </h2>
        </div>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-12">
          <div ref={imageRef} className="lg:col-span-6 will-change-transform">
            <div className="relative overflow-hidden bg-black/5 ring-1 ring-black/5 shadow-[0_18px_60px_-35px_rgba(0,0,0,0.45)] rounded-[28px] sm:rounded-[34px] rounded-tl-[140px] sm:rounded-tl-[170px] group cursor-pointer">
              <div className="relative aspect-[4/5] w-full sm:aspect-[6/7]">
                <Image src={imageSrc} alt="Why choose us" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/0 via-white/0 to-white/10" />
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="space-y-4">
              {list.map((item, i) => (
                <div key={item.title} ref={(el) => { itemsRef.current[i] = el; }} className="group flex gap-4 rounded-2xl bg-white/40 p-4 sm:p-5 ring-1 ring-black/5 shadow-[0_16px_45px_-38px_rgba(0,0,0,0.45)] backdrop-blur transition-all duration-300 cursor-pointer hover:bg-white/60 hover:shadow-[0_20px_55px_-35px_rgba(0,0,0,0.55)] hover:scale-[1.02]">
                  <div className="why-icon grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/70 ring-1 ring-black/5 text-[#a14b3b] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-[#241a16] sm:text-[17px] transition-colors duration-300 group-hover:text-[#a14b3b]">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#241a16]/70 transition-colors duration-300 group-hover:text-[#241a16]/90">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;