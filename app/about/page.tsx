import AboutHeroSection from "@/components/about/AboutHeroSection";
import AboutStoryStatsSection from "@/components/about/AboutStoryStatsSection";
import ContactFormSection from "@/components/ContactSection";
import PlanCtaSection from "@/components/CTASection";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import WhyChooseSection from "@/components/WhyChooseSection";
import WhyUsSection from "@/components/WhyUs";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <AboutHeroSection />
      <AboutStoryStatsSection />
      <WhyChooseSection />
      <WhyUsSection />
      <PlanCtaSection />
      <ContactFormSection />
      <Footer />
    </div>
  )
}