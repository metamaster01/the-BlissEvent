// import { Metadata } from 'next';
// import { notFound } from 'next/navigation';
// import { getStrengthBySlug, getAllStrengthSlugs } from '@/context/strengths';
// import StrengthHero from '@/components/strengths/StrengthHero';
// import StrengthBody from '@/components/strengths/StrengthBody';
// import SmoothScroll from '@/components/strengths/SmoothScroll';

// interface StrengthPageProps {
//   params: {
//     slug: string;
//   };
// }

// // Generate static params for all strengths
// export async function generateStaticParams() {
//   const slugs = getAllStrengthSlugs();
//   return slugs.map((slug) => ({
//     slug: slug,
//   }));
// }

// // Generate metadata for SEO
// export async function generateMetadata({ params }: StrengthPageProps): Promise<Metadata> {
//   const strength = getStrengthBySlug(params.slug);

//   if (!strength) {
//     return {
//       title: 'Strength Not Found | The Bliss Events',
//       description: 'The requested strength page could not be found.'
//     };
//   }

//   const title = `${strength.title} | The Bliss Events`;
//   const description = strength.shortDescription;
//   const url = `https://theblissevents.com/strengths/${params.slug}`;

//   return {
//     title,
//     description,
//     keywords: [
//       strength.title,
//       'event management',
//       'wedding planning',
//       'event planning',
//       'The Bliss Events',
//       'Mumbai events',
//       'professional event planners',
//       strength.subtitle,
//       ...strength.sections.whatMakesUsStrong.points.map(p => p.title),
//       ...strength.sections.whyItMatters.points.map(p => p.title),
//       ...strength.sections.howItBenefitsYou.points.map(p => p.title)
//     ],
//     authors: [{ name: 'The Bliss Events' }],
//     creator: 'The Bliss Events',
//     publisher: 'The Bliss Events',
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
//     openGraph: {
//       type: 'website',
//       locale: 'en_US',
//       url,
//       title,
//       description,
//       siteName: 'The Bliss Events',
//       images: [
//         {
//           url: strength.heroImage,
//           width: 1200,
//           height: 630,
//           alt: strength.title,
//         },
//         {
//           url: strength.image,
//           width: 800,
//           height: 600,
//           alt: `${strength.title} - The Bliss Events`,
//         }
//       ],
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title,
//       description,
//       images: [strength.heroImage],
//       creator: '@theblissevents',
//     },
//     alternates: {
//       canonical: url,
//     },
//     category: 'Event Management',
//   };
// }

// export default function StrengthPage({ params }: StrengthPageProps) {
//   const strength = getStrengthBySlug(params.slug);

//   if (!strength) {
//     notFound();
//   }

//   // JSON-LD structured data for SEO
//   const jsonLd = {
//     '@context': 'https://schema.org',
//     '@type': 'Service',
//     'name': strength.title,
//     'description': strength.fullDescription,
//     'provider': {
//       '@type': 'Organization',
//       'name': 'The Bliss Events',
//       'url': 'https://theblissevents.com',
//       'logo': 'https://theblissevents.com/logo.png',
//       'contactPoint': {
//         '@type': 'ContactPoint',
//         'telephone': '+91-XXXXXXXXXX',
//         'contactType': 'customer service',
//         'areaServed': 'IN',
//         'availableLanguage': ['en', 'hi']
//       },
//       'address': {
//         '@type': 'PostalAddress',
//         'addressLocality': 'Mumbai',
//         'addressRegion': 'Maharashtra',
//         'addressCountry': 'IN'
//       }
//     },
//     'serviceType': strength.title,
//     'areaServed': {
//       '@type': 'Place',
//       'name': 'Mumbai, Maharashtra, India'
//     },
//     'aggregateRating': strength.stats ? {
//       '@type': 'AggregateRating',
//       'ratingValue': '4.9',
//       'reviewCount': '500'
//     } : undefined,
//     'offers': {
//       '@type': 'Offer',
//       'availability': 'https://schema.org/InStock',
//       'price': 'Contact for pricing',
//       'priceCurrency': 'INR'
//     }
//   };

//   const breadcrumbJsonLd = {
//     '@context': 'https://schema.org',
//     '@type': 'BreadcrumbList',
//     'itemListElement': [
//       {
//         '@type': 'ListItem',
//         'position': 1,
//         'name': 'Home',
//         'item': 'https://theblissevents.com'
//       },
//       {
//         '@type': 'ListItem',
//         'position': 2,
//         'name': 'Our Strengths',
//         'item': 'https://theblissevents.com/#strengths'
//       },
//       {
//         '@type': 'ListItem',
//         'position': 3,
//         'name': strength.title,
//         'item': `https://theblissevents.com/strengths/${params.slug}`
//       }
//     ]
//   };

//   return (
//     <>
//       {/* Structured Data */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
//       />
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
//       />

//       {/* Smooth Scroll Wrapper */}
//       <SmoothScroll>
//         <main className="min-h-screen">
//           <StrengthHero
//             title={strength.title}
//             subtitle={strength.subtitle}
//             fullDescription={strength.fullDescription}
//             heroImage={strength.heroImage}
//           />
          
//           <StrengthBody strength={strength} />
//         </main>
//       </SmoothScroll>
//     </>
//   );
// }




import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getStrengthBySlug, getAllStrengthSlugs } from '@/context/strengths';
import StrengthHero from '@/components/strengths/StrengthHero';
import StrengthBody from '@/components/strengths/StrengthBody';
import SmoothScroll from '@/components/strengths/SmoothScroll';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ContactFormSection from '@/components/ContactSection';

interface StrengthPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/* -----------------------------------------
   Generate static params
------------------------------------------ */
export async function generateStaticParams() {
  const slugs = getAllStrengthSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

/* -----------------------------------------
   Generate Metadata (SEO)
------------------------------------------ */
export async function generateMetadata(
  { params }: StrengthPageProps
): Promise<Metadata> {

  const { slug } = await params;
  const strength = getStrengthBySlug(slug);

  if (!strength) {
    return {
      title: 'Strength Not Found | The Bliss Events',
      description: 'The requested strength page could not be found.',
    };
  }

  const title = `${strength.title} | The Bliss Events`;
  const description = strength.shortDescription;
  const url = `https://theblissevents.com/strengths/${slug}`;

  return {
    title,
    description,
    keywords: [
      strength.title,
      'event management',
      'wedding planning',
      'event planning',
      'The Bliss Events',
      'Mumbai events',
      'professional event planners',
      strength.subtitle,
      ...strength.sections.whatMakesUsStrong.points.map(p => p.title),
      ...strength.sections.whyItMatters.points.map(p => p.title),
      ...strength.sections.howItBenefitsYou.points.map(p => p.title),
    ],
    authors: [{ name: 'The Bliss Events' }],
    creator: 'The Bliss Events',
    publisher: 'The Bliss Events',
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      siteName: 'The Bliss Events',
      images: [
        {
          url: strength.heroImage,
          width: 1200,
          height: 630,
          alt: strength.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [strength.heroImage],
    },
    alternates: {
      canonical: url,
    },
  };
}

/* -----------------------------------------
   Page Component
------------------------------------------ */
export default async function StrengthPage(
  { params }: StrengthPageProps
) {
  const { slug } = await params;
  const strength = getStrengthBySlug(slug);

  if (!strength) {
    notFound();
  }

  /* JSON-LD */
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: strength.title,
    description: strength.fullDescription,
    provider: {
      '@type': 'Organization',
      name: 'The Bliss Events',
      url: 'https://theblissevents.com',
      logo: 'https://theblissevents.com/logo.png',
    },
    areaServed: {
      '@type': 'Place',
      name: 'Mumbai, Maharashtra, India',
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://theblissevents.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Our Strengths',
        item: 'https://theblissevents.com/#strengths',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: strength.title,
        item: `https://theblissevents.com/strengths/${slug}`,
      },
    ],
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Navbar />

      <SmoothScroll>
        <main className="min-h-screen">
          <StrengthHero
            title={strength.title}
            subtitle={strength.subtitle}
            fullDescription={strength.fullDescription}
            heroImage={strength.heroImage}
          />
          <StrengthBody strength={strength} />
        </main>
      </SmoothScroll>

      <ContactFormSection />

      <Footer />
    </>
  );
}
