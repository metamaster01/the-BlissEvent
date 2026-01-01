'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Wedding & Celebration Events',
    description: 'Weddings, destination weddings, theme weddings, stage & mandap decoration.',
    image: '/service-1.png'
  },
  {
    id: 2,
    title: 'Corporate Events',
    description: 'Conferences, seminars, product launches, annual meetings, corporate parties.',
    image: '/service-2.png'
  },
  {
    id: 3,
    title: 'Social & Personal Events',
    description: 'Birthdays, engagements, anniversaries, baby showers, family functions.',
    image: '/service-3.png'
  },
  {
    id: 4,
    title: 'Stage & Mandap Decoration',
    description: 'Custom stage designs, traditional & modern mandap setups.',
    image: '/service-4.png'
  },
  {
    id: 5,
    title: 'Entertainment & Production',
    description: 'Live performances, DJ services, lighting, and audio production.',
    image: '/service-5.png'
  },
  {
    id: 6,
    title: 'Event Decor & Styling',
    description: 'Complete venue transformation with flowers, drapes, and themed decor.',
    image: '/service-6.png'
  },
  {
    id: 7,
    title: 'Catering & Hospitality',
    description: 'Gourmet catering, live counters, and complete hospitality management.',
    image: '/service-7.png'
  },
  {
    id: 8,
    title: 'DJ & Live Music',
    description: 'Professional DJs and live performers to energize your event.',
    image: '/service-8.png'
  },
  {
    id: 9,
    title: 'Photography & Videography',
    description: 'Professional photography, cinematic videos, drone coverage.',
    image: '/service-9.png'
  }
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
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

        // Section title animation
        gsap.from('.services-title', {
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

        // Horizontal scroll effect - Desktop only
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer && window.innerWidth >= 768) {
          const scrollWidth = scrollContainer.scrollWidth - window.innerWidth;
          
          gsap.to(scrollContainer, {
            x: -scrollWidth,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: () => `+=${scrollWidth + window.innerHeight}`,
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            }
          });

          // Card animations for desktop - stagger
          gsap.from('.service-card-desktop', {
            y: 100,
            opacity: 0,
            scale: 0.9,
            duration: 0.8,
            stagger: 0.15,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: scrollContainerRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          });
        }

        // Button animation
        gsap.from('.view-services-btn', {
          scale: 0,
          opacity: 0,
          duration: 0.6,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.view-services-btn',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
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
    <section 
      ref={sectionRef}
      className="relative w-full min-h-screen bg-gradient-to-b from-[#FAF6EF] to-[#F5F1E8] py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 mb-12 md:mb-16">
        <div className="services-title">
          <p 
            className="text-[#8B1A1A] text-sm md:text-base font-semibold tracking-wider uppercase mb-4"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Our services
          </p>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#2C1810] leading-tight font-normal"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Our Event Management Services
          </h2>
        </div>
      </div>

      {/* Desktop - Horizontal Scroll */}
      <div className="hidden md:block">
        <div 
          ref={scrollContainerRef}
          className="flex gap-8 lg:gap-12 px-6 md:px-12 lg:px-20"
          style={{ width: 'fit-content' }}
        >
          {services.map((service, index) => (
            <DesktopServiceCard 
              key={service.id} 
              service={service} 
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Mobile - Grid Layout */}
      <div className="block md:hidden px-6">
        <div className="grid grid-cols-2 gap-4">
          {services.map((service, index) => (
            <MobileServiceCard 
              key={service.id} 
              service={service} 
              index={index}
            />
          ))}
        </div>
      </div>

      {/* View All Services Button */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 mt-12 md:mt-16">
        <Link href="/services" className="flex justify-center">
        <button className="view-services-btn bg-[#D4AF37] hover:bg-[#C19B2A] text-white px-8 py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
          View all services
        </button>
        </Link>
      </div>
    </section>
  );
};

// Desktop Service Card - NO CURSOR FOLLOWING
const DesktopServiceCard = ({ service, index }: { service: Service; index: number }) => {
  return (
    <div
      className="service-card-desktop flex-shrink-0 w-80 lg:w-96 group cursor-pointer"
    >
      <div className="relative rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
        {/* Image with Rounded Top */}
        <div className="relative h-56 lg:h-64 overflow-hidden rounded-t-3xl">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Gradient Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content */}
        <div className="p-6 lg:p-7">
          <h3 
            className="text-[#8B1A1A] text-lg lg:text-xl font-semibold mb-2 group-hover:text-[#A83838] transition-colors duration-300"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {service.title}
          </h3>
          <p 
            className="text-gray-600 text-sm leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
};

// Mobile Service Card
const MobileServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const initGSAP = async () => {
      try {
        const { gsap } = await import('gsap');
        
        gsap.from(cardRef.current, {
          y: 60,
          opacity: 0,
          scale: 0.9,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'power2.out',
        });
      } catch (e) {
        console.log('GSAP not available');
      }
    };

    initGSAP();
  }, [isVisible, index]);

  return (
    <div
      ref={cardRef}
      className="rounded-2xl overflow-hidden bg-white shadow-md"
    >
      {/* Image with Rounded Top */}
      <div className="relative h-40 overflow-hidden rounded-t-2xl">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-3">
        <h3 
          className="text-[#8B1A1A] text-sm font-semibold mb-1 line-clamp-2"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {service.title}
        </h3>
        <p 
          className="text-gray-600 text-xs leading-relaxed line-clamp-3"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default ServicesSection;