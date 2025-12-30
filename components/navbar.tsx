'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#7D1F1F]/95 backdrop-blur-md shadow-lg' : 'bg-[#7D1F1F]/95'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <div className="relative w-32 md:w-58 lg:w-64 h-10 md:h-14 lg:h-16">
              <Image
                src="/logo-2.png"
                alt="The Bliss Events"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-12">
              <a 
                href="#home" 
                className="text-white hover:text-[#F5D5B0] transition-colors font-medium text-base"
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-white hover:text-[#F5D5B0] transition-colors font-medium text-base"
              >
                About
              </a>
              <a 
                href="/services" 
                className="text-white hover:text-[#F5D5B0] transition-colors font-medium text-base"
              >
                Services
              </a>
              <a 
                href="#contact" 
                className="text-white hover:text-[#F5D5B0] transition-colors font-medium text-base"
              >
                Contact
              </a>
              <button className="border-2 border-white text-white px-6 py-2.5 rounded-full hover:bg-white hover:text-[#7D1F1F] transition-all duration-300 font-medium text-base">
                Chat on WhatsApp
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#7D1F1F]" />
              ) : (
                <Menu className="w-6 h-6 text-[#7D1F1F]" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#7D1F1F] z-40 lg:hidden transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
          <a 
            href="#home" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white text-2xl font-medium hover:text-[#F5D5B0] transition-colors"
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white text-2xl font-medium hover:text-[#F5D5B0] transition-colors"
          >
            About
          </a>
          <a 
            href="#services" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white text-2xl font-medium hover:text-[#F5D5B0] transition-colors"
          >
            Services
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white text-2xl font-medium hover:text-[#F5D5B0] transition-colors"
          >
            Contact
          </a>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#7D1F1F] transition-all duration-300 font-medium text-lg mt-4"
          >
            Chat on WhatsApp
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;