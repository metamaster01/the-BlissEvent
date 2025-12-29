'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const ContactFormSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    event_type: '',
    date: '',
    message: ''
  });

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON || ''
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const initAnimations = async () => {
      try {
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        
        gsap.registerPlugin(ScrollTrigger);

        gsap.from('.contact-eyebrow', {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        });

        gsap.from('.contact-title', {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          delay: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        });

        gsap.from('.contact-form', {
          y: 60,
          opacity: 0,
          scale: 0.95,
          duration: 1,
          ease: 'power3.out',
          delay: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        });

        gsap.from('.form-field', {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 80%',
          }
        });

      } catch (e) {
        console.log('GSAP not available');
      }
    };

    initAnimations();
  }, [mounted]);

  const handleSubmit = async () => {
    if (!formData.name || !formData.phone || !formData.event_type || !formData.date || !formData.message) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('contact-bliss')
        .insert([formData]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        event_type: '',
        date: '',
        message: ''
      });

      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      console.error('Error submitting:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const message = `Hello, I'm interested in event management services. Name: ${formData.name}, Event: ${formData.event_type}`;
    window.open(`https://wa.me/917021927602?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (!mounted) return null;

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-[#A83838] via-[#8B2E2E] to-[#7D1F1F] py-16 md:py-24"
    >
      <div className="absolute bottom-0 left-0 w-full">
        {/* <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path d="M0,64 Q360,0 720,64 T1440,64 L1440,120 L0,120 Z" fill="#D4AF37" opacity="0.15" />
        </svg> */}
      </div>

      <div className="relative container mx-auto px-6 md:px-12 lg:px-20 max-w-4xl">
        <div className="text-center mb-12">
          <p className="contact-eyebrow text-white/90 text-sm md:text-base font-light italic tracking-wide mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ask whatever you need
          </p>
          <h2 className="contact-title text-3xl md:text-4xl lg:text-5xl text-white font-normal" style={{ fontFamily: 'Playfair Display, serif' }}>
            Let's Plan Your Perfect Event
          </h2>
        </div>

        <div className="contact-form bg-white rounded-3xl p-6 md:p-10 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="form-field">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Smith"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#8B2E2E] focus:ring-2 focus:ring-[#8B2E2E]/20 outline-none transition-all duration-300"
              />
            </div>

            <div className="form-field">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+1 (555) 123-4567"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#8B2E2E] focus:ring-2 focus:ring-[#8B2E2E]/20 outline-none transition-all duration-300"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="form-field">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event type <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.event_type}
                onChange={(e) => setFormData({ ...formData, event_type: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#8B2E2E] focus:ring-2 focus:ring-[#8B2E2E]/20 outline-none transition-all duration-300"
              >
                <option value="">Select type</option>
                <option value="wedding">Wedding</option>
                <option value="corporate">Corporate Event</option>
                <option value="birthday">Birthday Party</option>
                <option value="engagement">Engagement</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-field">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#8B2E2E] focus:ring-2 focus:ring-[#8B2E2E]/20 outline-none transition-all duration-300"
              />
            </div>
          </div>

          <div className="form-field mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              placeholder="Hello, I'm interested in event management services by The Bliss Events..."
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#8B2E2E] focus:ring-2 focus:ring-[#8B2E2E]/20 outline-none transition-all duration-300 resize-none"
            />
          </div>

          <div className="form-field grid md:grid-cols-2 gap-4 mb-4">
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-[#8B2E2E] text-white py-3.5 rounded-full font-medium hover:bg-[#7D1F1F] transition-all duration-300 hover:shadow-xl hover:scale-105 disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit inquiry'}
            </button>

            <button
              onClick={handleWhatsApp}
              className="w-full bg-white border-2 border-green-500 text-green-600 py-3.5 rounded-full font-medium hover:bg-green-50 transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp Us
            </button>
          </div>

          {submitStatus === 'success' && (
            <p className="text-green-600 text-sm text-center">✓ Form submitted successfully!</p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-600 text-sm text-center">✗ Please fill all required fields</p>
          )}

          <p className="text-xs text-gray-500 text-center mt-4">
            By submitting this form, you agree to our privacy policy. We'll never share your information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;