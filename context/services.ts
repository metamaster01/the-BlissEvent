export interface ServiceDetail {
  title: string;
  bulletPoints: string[];
}

export interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  heroImage: string;
  tagline: string;
  detailedDescription: string;
  serviceDetails: ServiceDetail[];
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Destination Wedding',
    slug: 'destination-wedding',
    description: 'Turn your dream destination wedding into a beautifully choreographed reality.',
    image: '/service-1.png',
    heroImage: '/service/destination-weeding-hero.png',
    tagline: 'Skilled Professionals You Can Trust',
    detailedDescription: 'At The Bliss Event, we design and execute unforgettable destination weddings that feel effortless, elegant, and deeply personal—no matter where in the world you say "I do." From serene beaches to regal forts and luxury resorts, we help you choose the perfect destination based on your vision, guest list, and budget.',
    serviceDetails: [
      {
        title: 'Venue & Destination Selection',
        bulletPoints: [
          'Guest travel coordination',
          'Accommodation planning',
          'Airport transfers & local logistics',
          'Welcome kit & concierge support'
        ]
      },
      {
        title: 'Wedding Design & Décor',
        bulletPoints: [
          'Concept creation & mood boards',
          'Everything is materialized',
          'Stage, theming, aisle & table decor',
          'Lighting & ambience design'
        ]
      },
      {
        title: 'End-to-End Wedding Planning',
        bulletPoints: [
          'Vendor sourcing & negotiations',
          'Budget planning & timeline management',
          'Legal formalities & documentation',
          'On-ground coordination & execution'
        ]
      },
      {
        title: 'Entertainment & Experiences',
        bulletPoints: [
          'DJs, live bands & folk performances',
          'Mehndi & Haldi experiences',
          'Sangeet choreography & shows',
          'After-parties & curated guest activities'
        ]
      },
      {
        title: 'Catering & Culinary Experiences',
        bulletPoints: [
          'Multi-cuisine menus',
          'Regional & destination-inspired food',
          'Custom bar setups & cocktail menus',
          'Tastings & dietary accommodations'
        ]
      },
      {
        title: 'Photography & Videography',
        bulletPoints: [
          'Pre-wedding shoots',
          'Cinematic wedding films',
          'Drone coverage',
          'Same-day edits & memory albums'
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Resorts & Hotel Booking',
    slug: 'resorts-hotel-booking',
    description: 'Seamless accommodation solutions for your events and celebrations.',
    image: '/service/service-12.png',
    heroImage: '/service/service-12.png',
    tagline: 'Your Perfect Stay, Perfectly Planned',
    detailedDescription: 'We understand that finding the right venue and accommodation is crucial for any event. Our resort and hotel booking services ensure your guests experience comfort, luxury, and convenience. From budget-friendly options to five-star luxury resorts, we handle all your booking needs with expert negotiation and personalized service.',
    serviceDetails: [
      {
        title: 'Venue Selection & Site Visits',
        bulletPoints: [
          'Curated resort & hotel recommendations',
          'Virtual & in-person site visits',
          'Capacity analysis & floor planning',
          'Comparison of amenities & pricing'
        ]
      },
      {
        title: 'Group Booking Management',
        bulletPoints: [
          'Bulk room reservations',
          'Special group rates & discounts',
          'Room allocation & guest assignments',
          'Early check-in/late check-out arrangements'
        ]
      },
      {
        title: 'Contract Negotiation',
        bulletPoints: [
          'Best pricing & package deals',
          'Complimentary upgrades & perks',
          'Cancellation policy negotiations',
          'Payment terms & installment options'
        ]
      },
      {
        title: 'Guest Services Coordination',
        bulletPoints: [
          'Welcome kits & room drops',
          'Concierge services setup',
          'Transportation to/from venue',
          'Special requests & dietary needs'
        ]
      },
      {
        title: 'Destination Resorts',
        bulletPoints: [
          'Beach resorts & island getaways',
          'Heritage hotels & palace properties',
          'Hill station retreats',
          'International destination venues'
        ]
      },
      {
        title: 'Additional Services',
        bulletPoints: [
          'Spa & wellness packages',
          'Recreational activities coordination',
          'Business center & conference facilities',
          'On-site event space management'
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Event Decoration',
    slug: 'event-decoration',
    description: 'Complete venue transformation with flowers, drapes, and themed decor.',
    image: '/service/service-13.png',
    heroImage: '/service/service-13.png',
    tagline: 'Transforming Spaces Into Magical Experiences',
    detailedDescription: 'Our event decoration services bring your vision to life with stunning designs that captivate and inspire. From traditional mandap setups to modern minimalist aesthetics, we create immersive environments that reflect your personality and celebrate your special moments. Every detail is meticulously crafted to perfection.',
    serviceDetails: [
      {
        title: 'Theme Conceptualization',
        bulletPoints: [
          'Custom theme development',
          'Mood boards & design presentations',
          'Color palette selection',
          'Style consultation & trend insights'
        ]
      },
      {
        title: 'Floral Arrangements',
        bulletPoints: [
          'Fresh flower installations',
          'Exotic & seasonal blooms',
          'Centerpieces & table arrangements',
          'Floral backdrops & arches'
        ]
      },
      {
        title: 'Stage & Mandap Design',
        bulletPoints: [
          'Traditional mandap setups',
          'Contemporary stage designs',
          'Crystal & LED mandaps',
          'Themed backdrop installations'
        ]
      },
      {
        title: 'Lighting Design',
        bulletPoints: [
          'Ambient & mood lighting',
          'Fairy lights & chandeliers',
          'LED & intelligent lighting',
          'Projection mapping & effects'
        ]
      },
      {
        title: 'Draping & Fabric Decor',
        bulletPoints: [
          'Ceiling drapes & canopies',
          'Fabric walls & dividers',
          'Chair covers & sashes',
          'Table linens & runners'
        ]
      },
      {
        title: 'Special Installations',
        bulletPoints: [
          'Entrance gates & pathways',
          'Photo booth setups',
          'Hanging installations',
          'Signage & personalized elements'
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'Photography',
    slug: 'photography',
    description: 'Professional photography, cinematic videos, drone coverage.',
    image: '/service/service-18.png',
    heroImage: '/service/service-18.png',
    tagline: 'Capturing Moments That Last Forever',
    detailedDescription: 'Our photography services go beyond just taking pictures—we tell your story through artistic imagery and cinematic films. With state-of-the-art equipment and a creative team of photographers and videographers, we capture every emotion, every detail, and every precious moment of your celebration.',
    serviceDetails: [
      {
        title: 'Pre-Event Photography',
        bulletPoints: [
          'Pre-wedding photoshoots',
          'Engagement sessions',
          'Save-the-date shoots',
          'Location scouting & planning'
        ]
      },
      {
        title: 'Wedding Day Coverage',
        bulletPoints: [
          'Candid photography',
          'Traditional posed shots',
          'Detail & décor photography',
          'Guest & family portraits'
        ]
      },
      {
        title: 'Cinematic Videography',
        bulletPoints: [
          'Documentary-style films',
          'Highlight reels & teasers',
          'Same-day edits',
          'Full ceremony & reception coverage'
        ]
      },
      {
        title: 'Drone & Aerial Coverage',
        bulletPoints: [
          'Aerial venue shots',
          'Drone videography',
          'Panoramic group photos',
          'Destination establishing shots'
        ]
      },
      {
        title: 'Post-Production',
        bulletPoints: [
          'Professional photo editing',
          'Color grading & enhancement',
          'Album design & printing',
          'Digital delivery & cloud storage'
        ]
      },
      {
        title: 'Special Features',
        bulletPoints: [
          '360-degree photography',
          'Photo booth services',
          'Instant prints & sharing',
          'Guest video messages'
        ]
      }
    ]
  },
  {
    id: 5,
    title: 'Sangeet n Entertainment',
    slug: 'sangeet-entertainment',
    description: 'Live performances, DJ services, choreography, and complete entertainment production.',
    image: '/service/service-11.png',
    heroImage: '/service/service-11.png',
    tagline: 'Electrifying Entertainment for Unforgettable Celebrations',
    detailedDescription: 'Make your sangeet night and celebrations truly unforgettable with our comprehensive entertainment services. From professional choreographers to celebrity performers, DJs to live bands, we curate entertainment that gets everyone on their feet and creates memories that last a lifetime.',
    serviceDetails: [
      {
        title: 'Professional Choreography',
        bulletPoints: [
          'Sangeet dance choreography',
          'Bride & groom special performances',
          'Family group choreography',
          'Flash mobs & surprise performances'
        ]
      },
      {
        title: 'DJ Services',
        bulletPoints: [
          'Professional celebrity DJs',
          'Custom playlists & music curation',
          'Latest Bollywood & international hits',
          'Live mixing & mashups'
        ]
      },
      {
        title: 'Live Performances',
        bulletPoints: [
          'Live bands & musicians',
          'Classical & folk performers',
          'Celebrity artist bookings',
          'Stand-up comedy acts'
        ]
      },
      {
        title: 'Stage Production',
        bulletPoints: [
          'Sound system & acoustics',
          'LED screens & visual effects',
          'Stage lighting design',
          'Pyrotechnics & special effects'
        ]
      },
      {
        title: 'Interactive Entertainment',
        bulletPoints: [
          'Games & activities',
          'Photo booth with props',
          'Karaoke setup',
          'Dance floor installations'
        ]
      },
      {
        title: 'Theme Parties',
        bulletPoints: [
          'Bollywood night concepts',
          'Retro & decade themes',
          'Cultural & regional entertainment',
          'International theme parties'
        ]
      }
    ]
  },
  {
    id: 6,
    title: 'Guests Management',
    slug: 'guests-management',
    description: 'Complete hospitality management ensuring comfort and seamless experience for all guests.',
    image: '/service/service-17.png',
    heroImage: '/service/service-17.png',
    tagline: 'Exceptional Care for Your Valued Guests',
    detailedDescription: 'We believe that your guests experience is just as important as your own. Our comprehensive guest management services ensure every attendee feels welcomed, comfortable, and well taken care of from the moment they arrive until their departure. We handle all the details so you can focus on celebrating.',
    serviceDetails: [
      {
        title: 'Travel Coordination',
        bulletPoints: [
          'Flight & train booking assistance',
          'Airport/station pickup arrangements',
          'Transport coordination',
          'Itinerary planning & sharing'
        ]
      },
      {
        title: 'Accommodation Management',
        bulletPoints: [
          'Room allocation & assignments',
          'Check-in/check-out coordination',
          'Special requests handling',
          'Room upgrades & amenities'
        ]
      },
      {
        title: 'Welcome Services',
        bulletPoints: [
          'Personalized welcome kits',
          'Information packets & schedules',
          'Local area guides',
          'Emergency contact information'
        ]
      },
      {
        title: 'On-Ground Assistance',
        bulletPoints: [
          'Dedicated guest relations team',
          'Help desk & information counter',
          '24/7 support hotline',
          'Multilingual assistance'
        ]
      },
      {
        title: 'Hospitality Services',
        bulletPoints: [
          'Concierge services',
          'Local sightseeing arrangements',
          'Spa & wellness bookings',
          'Dietary requirements management'
        ]
      },
      {
        title: 'Logistics & Comfort',
        bulletPoints: [
          'Shuttle services between venues',
          'Seating arrangements',
          'Comfort stations & lounges',
          'Gift distribution & favors'
        ]
      }
    ]
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

export const getAllServiceSlugs = (): string[] => {
  return services.map(service => service.slug);
};