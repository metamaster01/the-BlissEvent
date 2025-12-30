import ContactPageSection from "@/components/contact/ContactPageSection";
import PlanCtaSection from "@/components/CTASection";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <ContactPageSection />
      <PlanCtaSection />
      <Footer />
    </div>
  )
}