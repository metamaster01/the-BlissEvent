"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import FlowerAnimation from "../public/Flower.json";

const WorkStepsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  const steps = [
    {
      number: "01",
      title: "Share Your Dream With Us",
      description:
        "Share your vision, vibe, and wishlist with us. From an elegant setting and delicious catering to cozy stays for guests, we plan everything within budget to make your special day celebration done in style.",
    },
    {
      number: "02",
      title: "Discover the Perfect Venue",
      description:
        "We provide you with a list of popular venues that blend perfectly with your preferences, vibe, and budget. Explore, feel the vibe, & choose the right spot.",
    },
    {
      number: "03",
      title: "Book Your Spot",
      description:
        "When you pick your ideal venue, we take care of everything and let you focus on other important things, reducing your stress and worries.",
    },
    {
      number: "04",
      title: "Let the Magic Begin",
      description:
        "Celebrate your special day in your style, and we ensure everything is on point as you imagined, so your occasion becomes more beautiful, idyllic, and comfortable.",
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const initAnimations = async () => {
      try {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");

        gsap.registerPlugin(ScrollTrigger);

        // Animate header
        gsap.from(".work-steps-eyebrow", {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        });

        gsap.from(".work-steps-title", {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        });

        // Animate main image
        gsap.from(".work-steps-image", {
          x: -100,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".work-steps-image",
            start: "top 75%",
          },
        });

        // Animate each step with stagger
        steps.forEach((_, index) => {
          gsap.from(`.step-item-${index}`, {
            x: 100,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: `.step-item-${index}`,
              start: "top 85%",
            },
          });

          // Animate step number with scale
          gsap.from(`.step-number-${index}`, {
            scale: 0,
            opacity: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: `.step-item-${index}`,
              start: "top 85%",
            },
          });

          // Animate decorative line
          gsap.from(`.step-line-${index}`, {
            scaleY: 0,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: `.step-item-${index}`,
              start: "top 85%",
            },
          });
        });
      } catch (e) {
        console.log("GSAP not available");
      }
    };

    initAnimations();
  }, [mounted]);

  if (!mounted) return null;

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#FAF8F5] py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p
            className="work-steps-eyebrow text-[#8B2E2E] text-sm md:text-base italic mb-3"
            style={{ fontFamily: "Georgia, serif" }}
          >
            How its work
          </p>
          <h2
            className="work-steps-title text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900"
            style={{ fontFamily: "Inter Tight, sans-serif" }}
          >
            From Vision to Celebration
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* LEFT SIDE - Image */}
          {/* <div className="work-steps-image relative flex justify-center lg:justify-start">
            <div className="absolute inset-0 z-50 pointer-events-none flex top-0 left-2">
              <Lottie
                animationData={FlowerAnimation}
                loop={false}
                className="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 opacity-70 top-0 left-0"
              />
            </div>
            <div className="relative w-full max-w-md lg:max-w-xl xl:max-w-2xl">
              <Image
                src="/work-steps-2.png"
                alt="Wedding couple illustration"
                width={600}
                height={700}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div> */}

          {/* LEFT SIDE - Image */}
          <div className="work-steps-image relative flex justify-center lg:justify-start">
            {/* Flower Animation - Top Left Corner */}
            <div className="absolute -top-24 -left-8 md:-top-32 md:-left-12 lg:-top-48 lg:-left-16 z-50 pointer-events-none">
              <Lottie
                animationData={FlowerAnimation}
                loop={true}
                autoplay={true}
                className="w-84 h-72 md:w-72 md:h-72 lg:w-102 lg:h-118 opacity-80"
              />
            </div>
            <div className="relative w-full max-w-md lg:max-w-xl xl:max-w-2xl">
              <Image
                src="/work-steps-2.png"
                alt="Wedding couple illustration"
                width={600}
                height={700}
                className="w-full object-contain"
                priority
              />
            </div>
          </div>

          {/* RIGHT SIDE - Steps */}
          <div className="space-y-6 md:space-y-7 lg:space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`step-item-${index} flex gap-4 md:gap-6 relative`}
              >
                {/* Step Number with Decorative Line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className={`step-number-${index} w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#8B2E2E] flex items-center justify-center flex-shrink-0`}
                  >
                    <span
                      className="text-white text-lg md:text-xl font-bold"
                      style={{ fontFamily: "Inter Tight, sans-serif" }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Decorative Line - Only show for items except last */}
                  {index < steps.length - 1 && (
                    <div
                      className={`step-line-${index} relative w-0.5 flex-grow mt-3`}
                      style={{
                        transformOrigin: "top center",
                        minHeight: "50px",
                      }}
                    >
                      <Image
                        src="/prop-5.png"
                        alt=""
                        width={20}
                        height={70}
                        className="w-full h-full object-contain opacity-40"
                      />
                    </div>
                  )}
                </div>

                {/* Step Content */}
                <div className="flex-1 pb-4">
                  <h3
                    className="text-lg md:text-xl lg:text-2xl font-bold text-[#8B2E2E] mb-2"
                    style={{ fontFamily: "Inter Tight, sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm md:text-base text-gray-600 leading-relaxed"
                    style={{ fontFamily: "Inter Tight, sans-serif" }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkStepsSection;
