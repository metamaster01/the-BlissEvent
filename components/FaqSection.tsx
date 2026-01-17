'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What services do you offer as a wedding planner?",
      answer: "We offer a comprehensive range of wedding planning services, including destination wedding planning, venue selection, wedding invitations, hospitality and guest management, logistics, wedding decor, event flow management, entertainment activities, pre and post wedding shoots, catering, bar services, makeup artists, vendor & artist management, wedding trousseau and gifting solutions. Your perfect wedding is our mission!"
    },
    {
      question: "How far in advance should we book your wedding planning services?",
      answer: "We recommend booking our services 8-12 months in advance for optimal planning and vendor availability. However, we've successfully planned beautiful weddings with shorter timelines. For destination weddings, we suggest booking at least 10-14 months ahead to secure the best venues and accommodate travel arrangements for your guests."
    },
    {
      question: "Do you handle corporate events and what types of corporate events do you specialize in?",
      answer: "Yes! We specialize in a wide range of corporate events including product launches, annual conferences, team building retreats, award ceremonies, corporate parties, brand activations, and business seminars. Our team ensures seamless execution with professional event management, technical support, and creative concepts that align with your brand identity."
    },
    {
      question: "What is included in your event planning packages?",
      answer: "Our packages are customizable based on your needs. Full-service packages include complete planning from concept to execution, vendor coordination, design and decor, timeline management, on-site coordination, and post-event wrap-up. We also offer partial planning and day-of coordination services. Each package is tailored to ensure your vision comes to life within your budget."
    },
    {
      question: "How do you handle destination weddings and outstation events?",
      answer: "We have extensive experience in destination wedding planning across various locations. Our services include venue scouting, vendor coordination in the destination city, guest accommodation and travel arrangements, local permit management, and on-ground support throughout the event. We conduct multiple site visits to ensure everything is perfectly organized."
    },
    {
      question: "What is your pricing structure and payment process?",
      answer: "Our pricing is customized based on the scope and scale of your event. We offer transparent pricing with detailed quotations covering all services and vendor costs. Typically, we work on a planning fee plus vendor costs model. Payment is structured in installments: an initial booking amount, milestone payments during planning, and final payment before the event. We're happy to discuss a payment plan that works for your budget."
    }
  ];

  const toggleFAQ = (index : any) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fcd34d 0%, #fbbf24 25%, #f59e0b 50%, #fbbf24 75%, #fcd34d 100%)',
      padding: '80px 20px',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '50px' }}>
          <p style={{
            fontStyle: 'italic',
            color: '#92400e',
            fontSize: '18px',
            marginBottom: '10px',
            fontFamily: 'Georgia, serif'
          }}>
            FAQs
          </p>
          <h1 style={{
            fontSize: '48px',
            fontWeight: '700',
            color: '#1f2937',
            lineHeight: '1.2',
            margin: 0
          }}>
            Frequently Asked Questions
          </h1>
        </div>

        {/* FAQ Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                backgroundColor: openIndex === index ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.7)',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '2px solid rgba(0, 0, 0, 0.1)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: openIndex === index 
                  ? '0 20px 50px rgba(0, 0, 0, 0.15)' 
                  : '0 4px 15px rgba(0, 0, 0, 0.08)',
                transform: openIndex === index ? 'translateY(-4px)' : 'translateY(0)',
              }}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '28px 32px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span style={{
                  fontSize: '19px',
                  fontWeight: '600',
                  color: '#1f2937',
                  paddingRight: '20px',
                  lineHeight: '1.5',
                  flex: 1
                }}>
                  {faq.question}
                </span>
                
                {/* Icon */}
                <div style={{
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  backgroundColor: '#1f2937',
                  flexShrink: 0,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                }}>
                  {openIndex === index ? (
                    <Minus style={{ width: '20px', height: '20px', color: 'white' }} />
                  ) : (
                    <Plus style={{ width: '20px', height: '20px', color: 'white' }} />
                  )}
                </div>
              </button>

              {/* Answer Panel */}
              <div style={{
                maxHeight: openIndex === index ? '500px' : '0',
                opacity: openIndex === index ? 1 : 0,
                overflow: 'hidden',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              }}>
                <div style={{ padding: '0 32px 32px 32px' }}>
                  <div style={{
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, #f59e0b, transparent)',
                    marginBottom: '20px',
                  }}></div>
                  <p style={{
                    fontSize: '16px',
                    color: '#4b5563',
                    lineHeight: '1.7',
                    margin: 0,
                  }}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ marginTop: '60px', textAlign: 'center' }}>
          <p style={{
            fontSize: '17px',
            color: '#1f2937',
            marginBottom: '20px',
            fontWeight: '500'
          }}>
            Still have questions?
          </p>
          <button style={{
            backgroundColor: '#1f2937',
            color: 'white',
            padding: '14px 40px',
            borderRadius: '50px',
            fontSize: '16px',
            fontWeight: '600',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#92400e';
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.25)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#1f2937';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
          }}>
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
}