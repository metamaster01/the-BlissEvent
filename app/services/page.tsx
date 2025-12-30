import PlanCtaSection from "@/components/CTASection";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ServicesPageClient from "@/components/services/ServicePageClient";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
        <Navbar /> 
        <ServicesPageClient />
        <PlanCtaSection  />
        <Footer />
    </div>
  )
}
