'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { StrengthDetail } from '@/context/strengths';

interface StrengthBodyProps {
  strength: StrengthDetail;
}

const StrengthBody: React.FC<StrengthBodyProps> = ({ strength }) => {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const statsRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initAnimations = async () => {
      try {
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        
        gsap.registerPlugin(ScrollTrigger);

        // Animate each section on scroll
        sectionsRef.current.forEach((section, index) => {
          if (!section) return;

          const image = section.querySelector('.section-image');
          const content = section.querySelector('.section-content');
          const points = section.querySelectorAll('.point-item');

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'top 30%',
              toggleActions: 'play none none reverse'
            }
          });

          // Animate image with parallax
          if (image) {
            tl.from(image, {
              x: index % 2 === 0 ? 100 : -100,
              opacity: 0,
              duration: 1.2,
              ease: 'power3.out'
            });

            // Parallax on scroll
            gsap.to(image, {
              y: -50,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
              }
            });
          }

          // Animate content
          if (content) {
            tl.from(content, {
              y: 50,
              opacity: 0,
              duration: 0.8,
              ease: 'power3.out'
            }, '-=0.8');
          }

          // Animate points with stagger
          if (points.length > 0) {
            tl.from(points, {
              y: 30,
              opacity: 0,
              duration: 0.6,
              stagger: 0.15,
              ease: 'power2.out'
            }, '-=0.4');
          }
        });

        // Animate stats
        if (statsRef.current) {
          gsap.from(statsRef.current.querySelectorAll('.stat-item'), {
            scale: 0.8,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          });
        }

        // Animate testimonial
        if (testimonialRef.current) {
          gsap.from(testimonialRef.current, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: testimonialRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          });
        }

      } catch (e) {
        console.log('GSAP not available');
      }
    };

    initAnimations();
  }, []);

  const sections = [
    {
      title: strength.sections.whatMakesUsStrong.title,
      points: strength.sections.whatMakesUsStrong.points,
      image: strength.bodyImages.whatMakesUsStrong,
      imagePosition: 'right'
    },
    {
      title: strength.sections.whyItMatters.title,
      points: strength.sections.whyItMatters.points,
      image: strength.bodyImages.whyItMatters,
      imagePosition: 'left'
    },
    {
      title: strength.sections.howItBenefitsYou.title,
      points: strength.sections.howItBenefitsYou.points,
      image: strength.bodyImages.howItBenefitsYou,
      imagePosition: 'right'
    }
  ];

  return (
    <div className="relative w-full bg-gradient-to-b from-white via-[#FAF6EF] to-white">
      
      {/* Sections */}
      {sections.map((section, sectionIndex) => (
        <section 
          key={sectionIndex}
          ref={(el) => { sectionsRef.current[sectionIndex] = el as HTMLDivElement | null; }}
          className="relative py-16 md:py-24 overflow-hidden"
        >
          {/* Background decoration */}
          <div className={`absolute ${sectionIndex % 2 === 0 ? 'right-0' : 'left-0'} top-1/4 w-96 h-96 bg-gradient-to-br from-[#D4AF37]/5 to-[#8B1A1A]/5 rounded-full blur-3xl`} />

          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${section.imagePosition === 'left' ? 'lg:grid-flow-dense' : ''}`}>
              
              {/* Content */}
              <div className={`section-content ${section.imagePosition === 'left' ? 'lg:col-start-2' : ''}`}>
                <h2 
                  className="text-3xl md:text-4xl lg:text-5xl text-[#2C1810] font-bold mb-8"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {section.title}
                </h2>

                <div className="space-y-6">
                  {section.points.map((point, pointIndex) => (
                    <div 
                      key={pointIndex}
                      className="point-item group"
                    >
                      {/* Bullet point with custom design */}
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-[#8B1A1A] group-hover:scale-150 transition-transform duration-300" />
                        <div className="flex-1">
                          <h3 
                            className="text-lg md:text-xl text-[#2C1810] font-bold mb-2 group-hover:text-[#8B1A1A] transition-colors duration-300"
                            style={{ fontFamily: 'Playfair Display, serif' }}
                          >
                            {point.title}
                          </h3>
                          <p 
                            className="text-gray-700 leading-relaxed text-sm md:text-base"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            {point.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className={`section-image relative ${section.imagePosition === 'left' ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
                  {/* Image */}
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8B1A1A]/10 via-transparent to-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Border */}
                  <div className="absolute inset-0 border-4 border-white/30 rounded-3xl" />
                </div>

                {/* Decorative floating element */}
                <div className={`absolute -z-10 ${section.imagePosition === 'left' ? '-right-8' : '-left-8'} top-8 w-32 h-32 border-2 border-[#D4AF37]/20 rounded-3xl rotate-12`} />
              </div>

            </div>
          </div>
        </section>
      ))}

      {/* Stats Section */}
      {strength.stats && strength.stats.length > 0 && (
        <section 
          ref={statsRef}
          className="relative py-20 bg-gradient-to-br from-[#8B1A1A] to-[#A83838] overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {strength.stats.map((stat, index) => (
                <div 
                  key={index}
                  className="stat-item text-center"
                >
                  <div className="mb-4">
                    <h3 
                      className="text-5xl md:text-6xl lg:text-7xl text-white font-bold"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {stat.number}
                    </h3>
                  </div>
                  <p 
                    className="text-[#D4AF37] text-lg md:text-xl font-semibold tracking-wide"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {stat.label}
                  </p>
                  {/* Decorative line */}
                  <div className="mt-4 mx-auto w-16 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial Section */}
      {strength.testimonial && (
        <section className="relative py-20 md:py-28">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div 
              ref={testimonialRef}
              className="max-w-4xl mx-auto"
            >
              <div className="relative bg-gradient-to-br from-[#FFF8F0] to-[#FAF6EF] rounded-3xl p-10 md:p-16 shadow-2xl border-2 border-[#D4AF37]/20">
                
                {/* Quote icon */}
                <div className="absolute -top-6 left-10 w-16 h-16 bg-gradient-to-br from-[#8B1A1A] to-[#A83838] rounded-2xl flex items-center justify-center shadow-xl transform -rotate-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                </div>

                {/* Quote */}
                <blockquote 
                  className="text-xl md:text-2xl lg:text-3xl text-[#2C1810] leading-relaxed mb-8 italic"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  "{strength.testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-1 h-16 bg-gradient-to-b from-[#8B1A1A] to-[#D4AF37] rounded-full" />
                  <div>
                    <p 
                      className="text-lg md:text-xl text-[#2C1810] font-bold"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {strength.testimonial.author}
                    </p>
                    <p 
                      className="text-sm md:text-base text-gray-600"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {strength.testimonial.event}
                    </p>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-6 right-6 w-20 h-20 border-r-2 border-b-2 border-[#D4AF37]/30 rounded-br-3xl" />
              </div>
            </div>
          </div>
        </section>
      )}

    </div>
  );
};

export default StrengthBody;