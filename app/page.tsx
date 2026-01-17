// app/page.tsx or pages/index.tsx
import HeroScrollSection from '@/components/HeroScrollSection';
import Navbar from '@/components/navbar';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServiceSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import GallerySection from '@/components/GallerySection';
import WhyUsSection from '@/components/WhyUs';
import TestimonialsSection from '@/components/TestimonialSection';
import PlanCtaSection from '@/components/CTASection';
import ContactFormSection from '@/components/ContactSection';
import Footer from '@/components/footer';
import FAQSection from '@/components/FaqSection';
import WorkStepsSection from '@/components/WorksSection';

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroScrollSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <WorkStepsSection />
      <GallerySection />
      <WhyUsSection />
      <TestimonialsSection />
      <FAQSection />
      <PlanCtaSection />
      <ContactFormSection />
      <Footer />
    
    </div>
  )
  
}