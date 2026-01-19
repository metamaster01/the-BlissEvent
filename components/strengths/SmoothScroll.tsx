'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface SmoothScrollProps {
  children: ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    const initLenis = async () => {
      try {
        // Dynamically import Lenis
        const Lenis = (await import('@studio-freight/lenis')).default;
        
        // Initialize Lenis
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          smoothWheel: true,
        //   smoothTouch: false,
          touchMultiplier: 2,
        });

        lenisRef.current = lenis;

        // Animation frame loop
        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // GSAP integration
        try {
          const { gsap } = await import('gsap');
          const { ScrollTrigger } = await import('gsap/ScrollTrigger');
          
          gsap.registerPlugin(ScrollTrigger);

          // Update ScrollTrigger on Lenis scroll
          lenis.on('scroll', ScrollTrigger.update);

          // Sync Lenis with GSAP ticker
          gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
          });

          gsap.ticker.lagSmoothing(0);
        } catch (e) {
          console.log('GSAP not available for Lenis integration');
        }

        // Cleanup
        return () => {
          lenis.destroy();
          lenisRef.current = null;
        };
      } catch (e) {
        console.log('Lenis not available');
      }
    };

    initLenis();
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;