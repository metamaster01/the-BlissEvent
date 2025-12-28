// app/page.tsx or pages/index.tsx
import HeroScrollSection from '@/components/HeroScrollSection';
import Navbar from '@/components/navbar';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServiceSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroScrollSection />
      <AboutSection />
      <ServicesSection />
    </div>
  )
  
}