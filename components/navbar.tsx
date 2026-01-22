// 'use client';

// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { Menu, X } from 'lucide-react';
// import Link from 'next/link';

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       <nav 
//         className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//           isScrolled ? 'bg-[#7D1F1F]/95 backdrop-blur-md shadow-lg' : 'bg-[#7D1F1F]/95'
//         }`}
//       >
//         <div className="container mx-auto px-6 md:px-12 lg:px-20">
//           <div className="flex items-center justify-between h-20 md:h-24">
//             {/* Logo */}
//             <Link href="/" className="relative w-40 md:w-58 lg:w-64 h-14 md:h-14 lg:h-16">
//               <Image
//               src="/logo-2.png"
//               alt="The Bliss Events"
//               fill
//               className="object-contain"
//               priority
//               />
//             </Link>

//             {/* Desktop Menu */}
//             <div className="hidden lg:flex items-center gap-8 xl:gap-12">
//               <a 
//                 href="/" 
//                 className="text-white hover:text-[#F5D5B0] transition-colors font-medium text-base"
//               >
//                 Home
//               </a>
//               <a 
//                 href="/about" 
//                 className="text-white hover:text-[#F5D5B0] transition-colors font-medium text-base"
//               >
//                 About
//               </a>
//               <a 
//                 href="/services" 
//                 className="text-white hover:text-[#F5D5B0] transition-colors font-medium text-base"
//               >
//                 Services
//               </a>
//               <a 
//                 href="/blogs" 
//                 className="text-white hover:text-[#F5D5B0] transition-colors font-medium text-base"
//               >
//                 Blogs
//               </a>
//               <a 
//                 href="/contact" 
//                 className="text-white hover:text-[#F5D5B0] transition-colors font-medium text-base"
//               >
//                 Contact
//               </a>
//                 <button 
//                 onClick={() => {
//                   const phoneNumber = '917021927602';
//                   const message = encodeURIComponent('Hi, I want to get an inquiry regarding an event. I found your website and would like to know more about your services for weddings, functions, birthdays, and parties.');
//                   window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
//                 }}
//                 className="border-2 border-white text-white px-6 py-2.5 rounded-full hover:bg-white hover:text-[#7D1F1F] transition-all duration-300 font-medium text-base"
//                 >
//                 Chat on WhatsApp
//                 </button>
//             </div>

//             {/* Mobile Menu Button */}
//             <button 
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="lg:hidden w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform"
//             >
//               {isMobileMenuOpen ? (
//                 <X className="w-6 h-6 text-[#7D1F1F]" />
//               ) : (
//                 <Menu className="w-6 h-6 text-[#7D1F1F]" />
//               )}
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Menu Overlay */}
//       <div 
//         className={`fixed inset-0 bg-[#7D1F1F] z-40 lg:hidden transition-transform duration-300 ${
//           isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
//         }`}
//       >
//         <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
//           <a 
//             href="/" 
//             onClick={() => setIsMobileMenuOpen(false)}
//             className="text-white text-2xl font-medium hover:text-[#F5D5B0] transition-colors"
//           >
//             Home
//           </a>
//           <a 
//             href="/about" 
//             onClick={() => setIsMobileMenuOpen(false)}
//             className="text-white text-2xl font-medium hover:text-[#F5D5B0] transition-colors"
//           >
//             About
//           </a>
//           <a 
//             href="/services" 
//             onClick={() => setIsMobileMenuOpen(false)}
//             className="text-white text-2xl font-medium hover:text-[#F5D5B0] transition-colors"
//           >
//             Services
//           </a>
//           <a 
//             href="/blogs" 
//             onClick={() => setIsMobileMenuOpen(false)}
//             className="text-white text-2xl font-medium hover:text-[#F5D5B0] transition-colors"
//           >
//             Blogs
//           </a>
//           <a 
//             href="/contact" 
//             onClick={() => setIsMobileMenuOpen(false)}
//             className="text-white text-2xl font-medium hover:text-[#F5D5B0] transition-colors"
//           >
//             Contact
//           </a>
//           <button 
//             onClick={() => {
//               const phoneNumber = '917021927602';
//               const message = encodeURIComponent('Hi, I want to get an inquiry regarding an event. I found your website and would like to know more about your services for weddings, functions, birthdays, and parties.');
//               window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
//               setIsMobileMenuOpen(false);
//             }}
//             className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#7D1F1F] transition-all duration-300 font-medium text-lg mt-4"
//           >
//             Chat on WhatsApp
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;





// 'use client';

// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { 
//   Menu, X, ChevronDown, Phone, 
//   CalendarHeart, MapPin, Tent, 
//   Palette, Flower2, Users, 
//   DoorOpen, Music, Camera 
// } from 'lucide-react';

// // Full data structure matching your "Card" design
// const servicesList = [
//   { 
//     title: "Wedding Planning", 
//     desc: "End-to-end planning to ensure a smooth, stress-free wedding experience.",
//     slug: "wedding-planning", 
//     icon: CalendarHeart 
//   },
//   { 
//     title: "Destination Weddings", 
//     desc: "Seamless planning and execution for beautiful weddings at breathtaking locations.",
//     slug: "destination-weddings", 
//     icon: MapPin 
//   },
//   { 
//     title: "Stage & Mandap Decor", 
//     desc: "Elegant stage and mandap designs that reflect tradition and style.",
//     slug: "stage-mandap-decor", 
//     icon: Tent 
//   },
//   { 
//     title: "Theme-Based Décor", 
//     desc: "Personalized décor concepts crafted around your unique wedding theme.",
//     slug: "theme-decor", 
//     icon: Palette 
//   },
//   { 
//     title: "Floral Decoration", 
//     desc: "Fresh, premium floral arrangements to enhance every wedding space.",
//     slug: "floral-decoration", 
//     icon: Flower2 
//   },
//   { 
//     title: "Guest Hospitality", 
//     desc: "Warm hospitality and smooth coordination for your guests' comfort.",
//     slug: "guest-management", 
//     icon: Users 
//   },
//   { 
//     title: "Venue Styling", 
//     desc: "Grand entryways and beautifully styled venues that create a lasting impression.",
//     slug: "venue-styling", 
//     icon: DoorOpen 
//   },
//   { 
//     title: "Sound & Light Setup", 
//     desc: "High-quality sound, lighting, and LED solutions for a perfect ambience.",
//     slug: "sound-light", 
//     icon: Music 
//   },
//   { 
//     title: "Photography", 
//     desc: "Capturing timeless moments and emotions with professional expertise.",
//     slug: "photography", 
//     icon: Camera 
//   },
// ];

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleWhatsAppClick = () => {
//     const phoneNumber = '917021927602';
//     const message = encodeURIComponent('Hi, I want to get an inquiry regarding an event.');
//     window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
//   };

//   return (
//     <>
//       <nav 
//         className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//           isScrolled ? 'bg-[#7D1F1F]/95 backdrop-blur-md shadow-xl py-2' : 'bg-[#7D1F1F] py-5'
//         }`}
//       >
//         {/* Main Container - Increased max-width and padding for "Whole Width" feel */}
//         <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-[1600px]">
//           <div className="flex items-center justify-between">
            
//             {/* --- LOGO --- */}
//             <Link href="/" className="relative w-40 md:w-48 lg:w-60 h-14 block shrink-0 z-50">
//               <Image
//                 src="/logo-2.png" 
//                 alt="The Bliss Events"
//                 fill
//                 className="object-contain object-left"
//                 priority
//               />
//             </Link>

//             {/* --- DESKTOP NAVIGATION --- */}
//             <div className="hidden lg:flex items-center gap-10 xl:gap-16">
//               <Link href="/" className="nav-item">Home</Link>
//               <Link href="/about" className="nav-item">About</Link>
              
//               {/* Services Mega Menu Trigger */}
//               <div className="group static h-full flex items-center">
//                 <Link 
//                   href="/services" 
//                   className="nav-item flex items-center gap-1 group-hover:text-[#F5D5B0] py-6"
//                 >
//                   Services 
//                   <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
//                 </Link>

//                 {/* Full Width Dropdown Panel */}
//                 <div 
//                   className="absolute top-full left-0 w-full bg-white shadow-2xl border-t-[5px] border-[#F5D5B0] 
//                              opacity-0 invisible group-hover:opacity-100 group-hover:visible 
//                              transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0"
//                 >
//                   <div className="container mx-auto px-8 py-10 max-w-[1400px]">
//                     {/* Grid Layout imitating your Card Image */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-10">
//                       {servicesList.map((service, index) => (
//                         <Link 
//                           key={index} 
//                           href={`/services/${service.slug}`}
//                           className="group/card flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
//                         >
//                           {/* Icon Box */}
//                           <div className="shrink-0 pt-1">
//                             <service.icon strokeWidth={1.5} size={32} className="text-[#9e2a2b]" />
//                           </div>
                          
//                           {/* Text Content */}
//                           <div>
//                             <h3 className="text-[#7D1F1F] text-[17px] font-semibold mb-2 group-hover/card:text-[#A02F2F] transition-colors">
//                               {service.title}
//                             </h3>
//                             <p className="text-gray-500 text-sm leading-relaxed mb-2">
//                               {service.desc}
//                             </p>
//                             <span className="text-[#F5D5B0] text-xs font-bold uppercase tracking-wider group-hover/card:underline">
//                               Read More
//                             </span>
//                           </div>
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <Link href="/blogs" className="nav-item">Blogs</Link>
//               <Link href="/contact" className="nav-item">Contact</Link>
//             </div>

//             {/* --- RIGHT SIDE BUTTONS (Exact Replica) --- */}
//             <div className="hidden lg:flex items-center gap-6">
//                {/* 1. Get a Quote (White Pill) */}
//                <button 
//                 onClick={handleWhatsAppClick}
//                 className="bg-white text-[#7D1F1F] px-8 py-2.5 rounded-full hover:bg-[#fff0e0] hover:scale-105 transition-all duration-300 font-bold text-[15px] shadow-lg"
//               >
//                 Get a quote
//               </button>

//                {/* 2. Phone Number (Transparent Pill with Border) */}
//                <a 
//                  href="tel:+12068886959" 
//                  className="flex items-center gap-3 border border-white/60 px-6 py-2.5 rounded-full text-white hover:bg-white/10 transition-colors"
//                >
//                   <Phone size={18} className="fill-current" />
//                   <span className="font-semibold tracking-wide">206-888-6959</span>
//                </a>
//             </div>

//             {/* Mobile Menu Toggle */}
//             <button 
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="lg:hidden text-white p-2 z-50 relative"
//             >
//               {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* --- MOBILE MENU OVERLAY --- */}
//       <div 
//         className={`fixed inset-0 bg-[#7D1F1F] z-40 lg:hidden overflow-y-auto transition-transform duration-300 ${
//           isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
//         }`}
//       >
//         <div className="flex flex-col pt-28 pb-10 px-6 min-h-screen">
//           <div className="flex flex-col gap-6 text-lg">
//             <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="mobile-link">Home</Link>
//             <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="mobile-link">About</Link>
            
//             {/* Mobile Services Accordion */}
//             <div className="border-b border-white/10 pb-4">
//               <div 
//                 className="flex items-center justify-between text-white font-medium cursor-pointer"
//                 onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
//               >
//                 <span>Services</span>
//                 <ChevronDown className={`transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
//               </div>
              
//               <div className={`grid transition-all duration-300 ease-in-out overflow-hidden ${isMobileServicesOpen ? 'grid-rows-[1fr] mt-4 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
//                 <div className="overflow-hidden flex flex-col gap-5 pl-2">
//                   <Link 
//                     href="/services"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                     className="text-[#F5D5B0] text-sm font-bold uppercase tracking-wider"
//                   >
//                     View All Services
//                   </Link>
//                   {servicesList.map((service, index) => (
//                     <Link 
//                       key={index}
//                       href={`/services/${service.slug}`}
//                       onClick={() => setIsMobileMenuOpen(false)}
//                       className="text-white/90 text-[15px] flex items-center gap-3"
//                     >
//                       <service.icon size={18} className="text-[#F5D5B0]" />
//                       {service.title}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <Link href="/blogs" onClick={() => setIsMobileMenuOpen(false)} className="mobile-link">Blogs</Link>
//             <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="mobile-link">Contact</Link>
//           </div>

//           <div className="mt-10 flex flex-col gap-5">
//             <button 
//               onClick={() => { handleWhatsAppClick(); setIsMobileMenuOpen(false); }}
//               className="bg-white text-[#7D1F1F] w-full py-3.5 rounded-full font-bold text-lg shadow-lg active:scale-95 transition-transform"
//             >
//               Get a Quote
//             </button>
//             <a 
//               href="tel:+12068886959" 
//               className="flex items-center justify-center gap-3 text-white border border-white/40 w-full py-3.5 rounded-full font-medium"
//             >
//               <Phone size={20} className="fill-white" />
//               206-888-6959
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Styled JSX for Nav Items and Mobile Links */}
//       <style jsx>{`
//         .nav-item {
//           color: white;
//           font-weight: 500;
//           font-size: 17px;
//           transition: color 0.3s ease;
//           letter-spacing: 0.02em;
//         }
//         .nav-item:hover {
//           color: #F5D5B0;
//         }
//         .mobile-link {
//           color: white;
//           font-weight: 500;
//           border-bottom: 1px solid rgba(255,255,255,0.1);
//           padding-bottom: 1rem;
//         }
//       `}</style>
//     </>
//   );
// };

// export default Navbar;



'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  CalendarHeart,
  MapPin,
  Tent,
  Palette,
  Flower2,
  Users,
  DoorOpen,
  Music,
  Camera,
} from 'lucide-react';

const servicesList = [
  // { title: 'Wedding Planning', desc: 'End-to-end planning to ensure a smooth, stress-free wedding experience.', slug: 'wedding-planning', icon: CalendarHeart },
  { title: 'Destination Weddings', desc: 'Seamless planning and execution for beautiful weddings at breathtaking locations.', slug: 'destination-wedding', icon: MapPin },
  { title: 'Resorts & Hotel Booking', desc: 'Seamless accommodation solutions for your events and celebrations.', slug: 'resorts-hotel-booking', icon: Tent },
  { title: 'Event Decoration', desc: 'Personalized décor concepts crafted around your unique wedding theme.', slug: 'event-decoration', icon: Palette },
  // { title: 'Floral Decoration', desc: 'Fresh, premium floral arrangements to enhance every wedding space.', slug: 'floral-decoration', icon: Flower2 },
  { title: 'Photography', desc: 'Capturing timeless moments professionally.', slug: 'photography', icon: Camera },
  { title: 'Sangeet n Entertainment', desc: 'Live performances, DJ services, choreography, and complete entertainment production.', slug: 'sangeet-entertainment', icon: DoorOpen },
  { title: 'Guests Management', desc: 'Complete hospitality management ensuring comfort and seamless experience for all guests.', slug: 'guests-management', icon: Users },
  // { title: 'Sound & Light Setup', desc: 'High-quality sound, lighting, and LED ambience.', slug: 'sound-light', icon: Music },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open(
      'https://wa.me/917021927602?text=Hi,%20I%20want%20to%20get%20an%20inquiry%20regarding%20an%20event.',
      '_blank'
    );
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all ${isScrolled ? 'bg-[#7D1F1F]/95 backdrop-blur-md shadow-xl' : 'bg-[#7D1F1F]'}`}>
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="flex items-center justify-between h-28 py-2">

            {/* LOGO */}
            <Link href="/" className="relative w-84 h-26 shrink-0">
              <Image src="/logo-image-2.png" alt="The Bliss Events" fill className="object-contain object-left" />
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-14">
              <Link href="/" className="nav-item">Home</Link>
              <Link href="/about" className="nav-item">About</Link>

              {/* SERVICES */}
              <div className="relative group">
                <Link href="/services" className="nav-item flex items-center gap-1 py-8">
                  Services
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                </Link>

                {/* FULL WIDTH MEGA MENU */}
                <div className="mega-menu opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-3 group-hover:translate-y-0">
                  <div className="max-w-[1600px] mx-auto px-16  py-4">
                    <div className="grid grid-cols-3 gap-x-8 gap-y-4">
                      {servicesList.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition"
                        >
                          <s.icon size={30} className="text-[#9e2a2b]" />
                          <div>
                            <h3 className="text-[#7D1F1F] font-semibold mb-2">
                              {s.title}
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                              {s.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/blogs" className="nav-item">Blogs</Link>
              <Link href="/contact" className="nav-item">Contact</Link>
            </div>

            {/* DESKTOP CTA */}
            <div className="hidden lg:flex items-center gap-6">
              <button onClick={handleWhatsAppClick} className="bg-white text-[#7D1F1F] px-8 py-2.5 rounded-full font-bold hover:scale-105 transition">
                Get a Quote
              </button>
              <a href="tel:+917021927602" className="flex items-center gap-3 border border-white/60 px-6 py-2.5 rounded-full text-white">
                <Phone size={18} />
                +91 70219 27602
              </a>
            </div>

            {/* MOBILE TOGGLE */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white">
              {mobileOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 bg-[#7D1F1F] z-40 lg:hidden transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="pt-28 px-6 pb-10">
          <Link href="/" onClick={() => setMobileOpen(false)} className="block text-white text-lg border-b border-white/20 pb-4 mb-4">Home</Link>
          <Link href="/about" onClick={() => setMobileOpen(false)} className="block text-white text-lg border-b border-white/20 pb-4 mb-4">About</Link>

          {/* MOBILE SERVICES */}
          <div className="border-b border-white/20 pb-4 mb-4">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex justify-between items-center w-full text-white text-lg"
            >
              Services
              <ChevronDown className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {mobileServicesOpen && (
              <div className="mt-4 space-y-3">
                {servicesList.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 text-white/90 text-base"
                  >
                    <s.icon size={18} className="text-[#F5D5B0]" />
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/blogs" onClick={() => setMobileOpen(false)} className="block text-white text-lg border-b border-white/20 pb-4 mb-4">Blogs</Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)} className="block text-white text-lg">Contact</Link>

          <div className="mt-8 space-y-4">
            <button onClick={handleWhatsAppClick} className="w-full bg-white text-[#7D1F1F] py-3 rounded-full font-bold">
              Get a Quote
            </button>
            <a href="tel:+917021927602" className="flex justify-center items-center gap-3 text-white border border-white/40 py-3 rounded-full">
              <Phone size={18} />
              +91 70219 27602
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
