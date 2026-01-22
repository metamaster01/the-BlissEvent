// import { Metadata } from 'next';
// import { notFound } from 'next/navigation';
// import { getServiceBySlug, getAllServiceSlugs } from '@/context/services';
// import ServiceDetailHero from '@/components/services/ServiceDetailHero';
// import ServiceDetailCards from '@/components/services/ServiceDetailCards';

// interface ServicePageProps {
//   params: {
//     slug: string;
//   };
// }

// // Generate static paths for all services
// export async function generateStaticParams() {
//   const slugs = getAllServiceSlugs();
//   return slugs.map((slug) => ({
//     slug: slug,
//   }));
// }

// // Generate dynamic metadata for SEO
// export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
//   const  service =  getServiceBySlug(params.slug);

//   if (!service) {
//     return {
//       title: 'Service Not Found',
//     };
//   }

//   // Extract keywords from service details
//   const keywords = [
//     service.title,
//     'event management',
//     'wedding planning',
//     'destination wedding',
//     'event planning services',
//     'Nagpur events',
//     'India wedding planner',
//     ...service.serviceDetails.map(detail => detail.title),
//   ].join(', ');

//   const description = service.detailedDescription.length > 160
//     ? service.detailedDescription.substring(0, 157) + '...'
//     : service.detailedDescription;

//   return {
//     title: `${service.title} | The Bliss Events - Premium Event Management Services`,
//     description: description,
//     keywords: keywords,
//     authors: [{ name: 'The Bliss Event' }],
//     openGraph: {
//       title: `${service.title} - The Bliss Event`,
//       description: description,
//       url: `https://theblissevents.in/services/${params.slug}`,
//       siteName: 'The Bliss Event',
//       images: [
//         {
//           url: service.heroImage,
//           width: 1200,
//           height: 630,
//           alt: service.title,
//         },
//       ],
//       locale: 'en_IN',
//       type: 'website',
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title: `${service.title} - The Bliss Events`,
//       description: description,
//       images: [service.heroImage],
//     },
//     alternates: {
//       canonical: `https://theblissevents.in/services/${params.slug}`,
//     },
//     robots: {
//       index: true,
//       follow: true,
//       googleBot: {
//         index: true,
//         follow: true,
//         'max-video-preview': -1,
//         'max-image-preview': 'large',
//         'max-snippet': -1,
//       },
//     },
//   };
// }

// export default  function ServicePage({ params }: ServicePageProps) {
//   const service = getServiceBySlug(params.slug);

//   if (!service) {
//     notFound();
//   }

//   // JSON-LD structured data for SEO
//   const jsonLd = {
//     '@context': 'https://schema.org',
//     '@type': 'Service',
//     name: service.title,
//     description: service.detailedDescription,
//     provider: {
//       '@type': 'Organization',
//       name: 'The Bliss Events',
//       url: 'https://theblissevents.in',
//       logo: 'https://theblissevents.in/logo.png',
//       address: {
//         '@type': 'PostalAddress',
//         addressLocality: 'Nagpur',
//         addressRegion: 'Maharashtra',
//         addressCountry: 'IN',
//       },
//     },
//     areaServed: {
//       '@type': 'Country',
//       name: 'India',
//     },
//     serviceType: service.title,
//     image: service.heroImage,
//     offers: {
//       '@type': 'Offer',
//       availability: 'https://schema.org/InStock',
//     },
//   };

//   return (
//     <>
//       {/* JSON-LD for SEO */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
//       />

//       <main className="min-h-screen bg-[#FAF6EF]">
//         {/* Hero Section */}
//         <ServiceDetailHero service={service} />

//         {/* Description Section */}
//         <section className="container mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
//           <div className="max-w-4xl">
//             <h2
//               className="text-3xl md:text-4xl lg:text-5xl text-[#2C1810] mb-6 font-normal"
//               style={{ fontFamily: 'Playfair Display, serif' }}
//             >
//               {service.description}
//             </h2>
//             <p
//               className="text-gray-700 text-base md:text-lg leading-relaxed"
//               style={{ fontFamily: 'Inter, sans-serif' }}
//             >
//               {service.detailedDescription}
//             </p>
//           </div>
//         </section>

//         {/* Service Detail Cards */}
//         <ServiceDetailCards serviceDetails={service.serviceDetails} serviceTitle={service.title} />

//         {/* CTA Section */}
//         <section className="container mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
//           <div className="bg-gradient-to-r from-[#8B1A1A] to-[#A83838] rounded-3xl p-8 md:p-12 lg:p-16 text-center">
//             <h3
//               className="text-3xl md:text-4xl lg:text-5xl text-white mb-4 font-normal"
//               style={{ fontFamily: 'Playfair Display, serif' }}
//             >
//               Ready to Make Your Event Unforgettable?
//             </h3>
//             <p
//               className="text-white/90 text-base md:text-lg mb-8 max-w-2xl mx-auto"
//               style={{ fontFamily: 'Inter, sans-serif' }}
//             >
//               Let's discuss your vision and create an extraordinary experience together.
//             </p>
//             <a
//               href="/contact"
//               className="inline-block bg-[#D4AF37] hover:bg-[#C19B2A] text-white px-10 py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
//               style={{ fontFamily: 'Inter, sans-serif' }}
//             >
//               Get in Touch
//             </a>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// }

import { Metadata } from "next";
import { notFound } from "next/navigation";

import { getServiceBySlug, getAllServiceSlugs } from "@/context/services";

import ServiceDetailHero from "@/components/services/ServiceDetailHero";
import ServiceDetailCards from "@/components/services/ServiceDetailCards";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactFormSection from "@/components/ContactSection";
import PlanCtaSection from "@/components/CTASection";
import WhyUsSection from "@/components/WhyUs";
import TestimonialsSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FaqSection";

/* ---------------------------------------------
   Types
--------------------------------------------- */
interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

/* ---------------------------------------------
   Static Params
--------------------------------------------- */
export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

/* ---------------------------------------------
   Metadata (SEO)
--------------------------------------------- */
export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | The Bliss Events",
      description: "The requested service could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const description =
    service.detailedDescription.length > 160
      ? service.detailedDescription.slice(0, 157) + "..."
      : service.detailedDescription;

  const keywords = [
    service.title,
    "event management",
    "wedding planning",
    "destination wedding",
    "event planning services",
    "Nagpur events",
    "India wedding planner",
    ...service.serviceDetails.map((d) => d.title),
  ].join(", ");

  return {
    title: `${service.title} | The Bliss Events - Premium Event Management`,
    description,
    keywords,
    authors: [{ name: "The Bliss Events" }],

    alternates: {
      canonical: `https://theblissevents.in/services/${slug}`,
    },

    openGraph: {
      title: `${service.title} - The Bliss Events`,
      description,
      url: `https://theblissevents.in/services/${slug}`,
      siteName: "The Bliss Events",
      images: [
        {
          url: service.heroImage,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      locale: "en_IN",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `${service.title} - The Bliss Events`,
      description,
      images: [service.heroImage],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

/* ---------------------------------------------
   Page Component
--------------------------------------------- */
export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  /* -------------------------------------------
     JSON-LD Structured Data
  ------------------------------------------- */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.detailedDescription,
    image: service.heroImage,
    serviceType: service.title,
    provider: {
      "@type": "Organization",
      name: "The Bliss Events",
      url: "https://theblissevents.in",
      logo: "https://theblissevents.in/logo.png",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nagpur",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <div>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


      <main className="min-h-screen bg-[#FAF6EF] overflow-x-hidden">

            <Navbar />
    
        {/* Hero */}
        <ServiceDetailHero service={service} />

        {/* Description */}
        <section className="container mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
          <div className="max-w-4xl">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-[#2C1810] mb-6 font-normal"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {service.description}
            </h2>

            <p
              className="text-gray-700 text-base md:text-lg leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {service.detailedDescription}
            </p>
          </div>
        </section>

        {/* Detail Cards */}
        <ServiceDetailCards
          serviceDetails={service.serviceDetails}
          serviceTitle={service.title}
        />

        {/* CTA */}
        {/* <section className="container mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
          <div className="bg-gradient-to-r from-[#8B1A1A] to-[#A83838] rounded-3xl p-8 md:p-12 lg:p-16 text-center">
            <h3
              className="text-3xl md:text-4xl lg:text-5xl text-white mb-4 font-normal"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Ready to Make Your Event Unforgettable?
            </h3>

            <p
              className="text-white/90 text-base md:text-lg mb-8 max-w-2xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Let's discuss your vision and create an extraordinary experience together.
            </p>

            <a
              href="/contact"
              className="inline-block bg-[#D4AF37] hover:bg-[#C19B2A] text-white px-10 py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Get in Touch
            </a>
          </div>

        </section> */}

        <WhyUsSection />
        <TestimonialsSection />
        <FAQSection />
        <PlanCtaSection />
        <ContactFormSection />
        <Footer />
      </main>
    </div>
  );
}
