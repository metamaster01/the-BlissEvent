// // data/strengths.ts

// export interface StrengthDetail {
//   id: number;
//   slug: string;
//   icon: string;
//   title: string;
//   subtitle: string;
//   shortDescription: string;
//   fullDescription: string;
//   image: string;
//   color: string;
//   sections: {
//     whatMakesUsStrong: {
//       title: string;
//       points: Array<{
//         title: string;
//         description: string;
//       }>;
//     };
//     whyItMatters: {
//       title: string;
//       points: Array<{
//         title: string;
//         description: string;
//       }>;
//     };
//     howItBenefitsYou: {
//       title: string;
//       points: Array<{
//         title: string;
//         description: string;
//       }>;
//     };
//   };
//   stats?: Array<{
//     number: string;
//     label: string;
//   }>;
//   testimonial?: {
//     quote: string;
//     author: string;
//     event: string;
//   };
// }

// export const strengthsData: StrengthDetail[] = [
//   {
//     id: 1,
//     slug: 'experienced-event-team',
//     icon: 'Users',
//     title: 'Experienced Event Team',
//     subtitle: 'Skilled Professionals You Can Trust',
//     shortDescription: 'Our seasoned professionals bring years of expertise to every celebration, ensuring flawless execution from start to finish.',
//     fullDescription: 'At Bliss Event, our team is the backbone of every successful celebration. With years of hands-on experience across weddings, corporate events, and private functions, our planners, designers, and coordinators work seamlessly to manage every element of your event. We focus on planning ahead, anticipating challenges, and executing each moment smoothly—so you can truly enjoy your special day without stress.',
//     image: '/work-1.png',
//     color: 'from-[#FFF8F0] to-[#FFE8D6]',
//     sections: {
//       whatMakesUsStrong: {
//         title: 'What Makes Us Strong',
//         points: [
//           {
//             title: 'Trained Event Planners & Coordinators',
//             description: 'Our team consists of certified professionals who are experts in all aspects of event management, from logistics to creative design.'
//           },
//           {
//             title: 'Dedicated Team for Each Event',
//             description: 'Every event gets a focused team that works exclusively on your celebration, ensuring personalized attention and flawless coordination.'
//           },
//           {
//             title: 'Strong On-Ground Management',
//             description: 'From setup to wrap-up, our on-site team ensures everything runs exactly as planned, handling any challenges with grace and efficiency.'
//           }
//         ]
//       },
//       whyItMatters: {
//         title: 'Why It Matters',
//         points: [
//           {
//             title: 'No Last-Minute Chaos',
//             description: 'We plan in advance to eliminate last-minute stress and unexpected issues, ensuring a smooth experience for you and your guests.'
//           },
//           {
//             title: 'Smooth Coordination',
//             description: 'With experienced hands managing vendors, guests, and schedules, everything flows seamlessly from one moment to the next.'
//           },
//           {
//             title: 'Professional Execution',
//             description: 'Every aspect is delivered with polish—lighting, designs, arrangements, and more are executed to perfection.'
//           }
//         ]
//       },
//       howItBenefitsYou: {
//         title: 'How It Benefits You',
//         points: [
//           {
//             title: 'Peace of Mind',
//             description: 'With our experts handling the details, you can relax and enjoy your event worry-free.'
//           },
//           {
//             title: 'Seamless Event Flow',
//             description: 'From entry to exit, your event feels well-timed and beautifully managed, creating lasting impressions.'
//           },
//           {
//             title: 'Reliable Support',
//             description: 'A dependable team you can trust at every step of your celebration, always ready to solve any challenge.'
//           }
//         ]
//       }
//     },
//     stats: [
//       { number: '500+', label: 'Events Managed' },
//       { number: '15+', label: 'Years Experience' },
//       { number: '50+', label: 'Expert Team Members' }
//     ],
//     testimonial: {
//       quote: 'The team at Bliss Events made our wedding day absolutely perfect. Their experience and professionalism were evident in every detail.',
//       author: 'Priya & Rahul',
//       event: 'Wedding - December 2025'
//     }
//   },
//   {
//     id: 2,
//     slug: 'creative-concepts',
//     icon: 'Sparkles',
//     title: 'Creative Concepts',
//     subtitle: 'Unique Themes Tailored to Your Vision',
//     shortDescription: 'Transform your imagination into reality with our innovative designs and personalized themes that reflect your unique style.',
//     fullDescription: 'Every event tells a story, and we believe yours should be extraordinary. Our creative team specializes in crafting unique, personalized themes that reflect your personality, style, and vision. From elegant traditional setups to contemporary, bold designs—we bring fresh ideas to the table and execute them flawlessly.',
//     image: '/work-2.png',
//     color: 'from-[#FFF0F5] to-[#FFE0EB]',
//     sections: {
//       whatMakesUsStrong: {
//         title: 'What Makes Us Strong',
//         points: [
//           {
//             title: 'Innovative Design Team',
//             description: 'Our designers stay ahead of trends while respecting timeless traditions, creating concepts that are both fresh and meaningful.'
//           },
//           {
//             title: 'Custom Theme Development',
//             description: 'No two events are alike. We develop completely customized themes based on your preferences, cultural elements, and personal style.'
//           },
//           {
//             title: 'Visual Storytelling',
//             description: 'We use decor, lighting, colors, and layouts to tell your unique story through every visual element of the event.'
//           }
//         ]
//       },
//       whyItMatters: {
//         title: 'Why It Matters',
//         points: [
//           {
//             title: 'Memorable Impressions',
//             description: 'Creative, well-executed themes leave lasting impressions on your guests and create unforgettable experiences.'
//           },
//           {
//             title: 'Personal Expression',
//             description: 'Your event becomes a true reflection of who you are, making it deeply personal and meaningful.'
//           },
//           {
//             title: 'Instagram-Worthy Moments',
//             description: 'Beautiful, creative setups provide stunning backdrops for photography and social media sharing.'
//           }
//         ]
//       },
//       howItBenefitsYou: {
//         title: 'How It Benefits You',
//         points: [
//           {
//             title: 'Unique Identity',
//             description: 'Stand out with concepts that are exclusively yours—never replicated or generic.'
//           },
//           {
//             title: 'Enhanced Guest Experience',
//             description: 'Thoughtful design creates an immersive atmosphere that captivates and delights your guests.'
//           },
//           {
//             title: 'Cohesive Aesthetic',
//             description: 'Every element works together harmoniously, from invitations to table settings to stage design.'
//           }
//         ]
//       }
//     },
//     stats: [
//       { number: '200+', label: 'Unique Themes Created' },
//       { number: '98%', label: 'Client Satisfaction' },
//       { number: '30+', label: 'Design Awards' }
//     ],
//     testimonial: {
//       quote: 'They brought our vision to life in ways we never imagined. The creativity and attention to detail were outstanding!',
//       author: 'Anjali & Vikram',
//       event: 'Sangeet Ceremony - October 2025'
//     }
//   },
//   {
//     id: 3,
//     slug: 'end-to-end-solutions',
//     icon: 'Package',
//     title: 'End-to-End Solutions',
//     subtitle: 'Complete Event Management',
//     shortDescription: 'From initial planning to final execution, we handle every aspect of your event with precision and care.',
//     fullDescription: 'Planning an event involves countless moving parts—venue selection, vendor coordination, logistics, design, catering, entertainment, and more. Our end-to-end solutions mean you have one dedicated team managing every single aspect, ensuring seamless coordination and stress-free execution from start to finish.',
//     image: '/work-3.png',
//     color: 'from-[#F0F8FF] to-[#E0EFFF]',
//     sections: {
//       whatMakesUsStrong: {
//         title: 'What Makes Us Strong',
//         points: [
//           {
//             title: 'Comprehensive Service Range',
//             description: 'We cover everything—planning, design, vendor management, logistics, on-ground coordination, and post-event wrap-up.'
//           },
//           {
//             title: 'Single Point of Contact',
//             description: 'One dedicated team handles all aspects, eliminating the stress of managing multiple vendors and coordinators.'
//           },
//           {
//             title: 'Integrated Approach',
//             description: 'All services work together seamlessly, ensuring perfect synchronization between decor, catering, entertainment, and timing.'
//           }
//         ]
//       },
//       whyItMatters: {
//         title: 'Why It Matters',
//         points: [
//           {
//             title: 'Saves Time & Energy',
//             description: 'You don\'t need to coordinate with dozens of different vendors—we handle all communication and management for you.'
//           },
//           {
//             title: 'Consistent Quality',
//             description: 'With one team overseeing everything, quality standards remain high across all aspects of your event.'
//           },
//           {
//             title: 'Better Coordination',
//             description: 'When one team manages everything, there are no gaps, miscommunications, or coordination issues between vendors.'
//           }
//         ]
//       },
//       howItBenefitsYou: {
//         title: 'How It Benefits You',
//         points: [
//           {
//             title: 'Stress-Free Planning',
//             description: 'Focus on enjoying the journey while we handle all the complex logistics and coordination.'
//           },
//           {
//             title: 'Seamless Execution',
//             description: 'Everything runs like clockwork because all elements are managed by one cohesive team.'
//           },
//           {
//             title: 'Cost Efficiency',
//             description: 'Bundled services often provide better value than hiring multiple separate vendors.'
//           }
//         ]
//       }
//     },
//     stats: [
//       { number: '100+', label: 'Vendor Partners' },
//       { number: '24/7', label: 'Support Available' },
//       { number: '99%', label: 'On-Time Delivery' }
//     ],
//     testimonial: {
//       quote: 'Having one team manage everything was the best decision we made. Bliss Events coordinated every detail perfectly!',
//       author: 'Meera & Aditya',
//       event: 'Corporate Gala - November 2025'
//     }
//   },
//   {
//     id: 4,
//     slug: 'on-time-execution',
//     icon: 'Clock',
//     title: 'On-Time Execution',
//     subtitle: 'Timely Delivery with Flawless Coordination',
//     shortDescription: 'Precision timing and meticulous planning ensure your event flows perfectly, keeping every moment on schedule.',
//     fullDescription: 'Timing is everything in event management. A delayed ceremony, a rushed program, or poor coordination can disrupt the entire flow. At Bliss Events, we pride ourselves on punctual, well-timed execution. Every element of your event is scheduled, coordinated, and delivered exactly when it should be—ensuring a smooth, stress-free experience for you and your guests.',
//     image: '/work-4.png',
//     color: 'from-[#F5FFF0] to-[#E5FFD6]',
//     sections: {
//       whatMakesUsStrong: {
//         title: 'What Makes Us Strong',
//         points: [
//           {
//             title: 'Detailed Timeline Planning',
//             description: 'We create minute-by-minute schedules for every event, ensuring nothing is rushed or delayed.'
//           },
//           {
//             title: 'Proactive Problem Solving',
//             description: 'Our team anticipates potential delays and has backup plans ready to keep everything on track.'
//           },
//           {
//             title: 'Synchronized Coordination',
//             description: 'All vendors, performers, and service providers are briefed and coordinated to work in perfect sync.'
//           }
//         ]
//       },
//       whyItMatters: {
//         title: 'Why It Matters',
//         points: [
//           {
//             title: 'Respects Guest Time',
//             description: 'Punctual execution shows respect for your guests\' time and keeps everyone comfortable and engaged.'
//           },
//           {
//             title: 'Maintains Event Flow',
//             description: 'Good timing ensures smooth transitions between ceremonies, performances, meals, and celebrations.'
//           },
//           {
//             title: 'Reduces Stress',
//             description: 'When everything runs on schedule, you can relax knowing the event is progressing as planned.'
//           }
//         ]
//       },
//       howItBenefitsYou: {
//         title: 'How It Benefits You',
//         points: [
//           {
//             title: 'No Delays or Rush',
//             description: 'Every moment unfolds naturally and beautifully, without feeling hurried or dragging on.'
//           },
//           {
//             title: 'Professional Image',
//             description: 'Timely execution reflects professionalism and leaves a positive impression on all attendees.'
//           },
//           {
//             title: 'Maximized Enjoyment',
//             description: 'When things run smoothly, everyone—including you—can fully enjoy and be present in each moment.'
//           }
//         ]
//       }
//     },
//     stats: [
//       { number: '100%', label: 'On-Schedule Events' },
//       { number: '5 min', label: 'Average Buffer Time' },
//       { number: '0', label: 'Major Delays Last Year' }
//     ],
//     testimonial: {
//       quote: 'Everything happened exactly on time. The coordination was impeccable, and our guests were thoroughly impressed!',
//       author: 'Rohan & Simran',
//       event: 'Destination Wedding - September 2025'
//     }
//   }
// ];

// // Helper function to get strength by slug
// export const getStrengthBySlug = (slug: string): StrengthDetail | undefined => {
//   return strengthsData.find(strength => strength.slug === slug);
// };

// // Helper function to get all slugs for static generation
// export const getAllStrengthSlugs = (): string[] => {
//   return strengthsData.map(strength => strength.slug);
// };











// data/strengths.ts

export interface StrengthDetail {
  id: number;
  slug: string;
  icon: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  heroImage: string;
  bodyImages: {
    whatMakesUsStrong: string;
    whyItMatters: string;
    howItBenefitsYou: string;
  };
  color: string;
  sections: {
    whatMakesUsStrong: {
      title: string;
      points: Array<{
        title: string;
        description: string;
      }>;
    };
    whyItMatters: {
      title: string;
      points: Array<{
        title: string;
        description: string;
      }>;
    };
    howItBenefitsYou: {
      title: string;
      points: Array<{
        title: string;
        description: string;
      }>;
    };
  };
  stats?: Array<{
    number: string;
    label: string;
  }>;
  testimonial?: {
    quote: string;
    author: string;
    event: string;
  };
}

export const strengthsData: StrengthDetail[] = [
  {
    id: 1,
    slug: 'experienced-event-team',
    icon: 'Users',
    title: 'Experienced Event Team',
    subtitle: 'Skilled Professionals You Can Trust',
    shortDescription: 'Our seasoned professionals bring years of expertise to every celebration, ensuring flawless execution from start to finish.',
    fullDescription: 'At Bliss Event, our team is the backbone of every successful celebration. With years of hands-on experience across weddings, corporate events, and private functions, our planners, designers, and coordinators work seamlessly to manage every element of your event. We focus on planning ahead, anticipating challenges, and executing each moment smoothly—so you can truly enjoy your special day without stress.',
    image: '/work-1.png',
    heroImage: '/strengths/strength-hero-1.png',
    bodyImages: {
      whatMakesUsStrong: '/strengths/section-1.png',
      whyItMatters: '/strengths/section-2.png',
      howItBenefitsYou: '/strengths/section-1.png'
    },
    color: 'from-[#FFF8F0] to-[#FFE8D6]',
    sections: {
      whatMakesUsStrong: {
        title: 'What Makes Us Strong',
        points: [
          {
            title: 'Trained Event Planners & Coordinators',
            description: 'Our team consists of certified professionals who are experts in all aspects of event management, from logistics to creative design.'
          },
          {
            title: 'Dedicated Team for Each Event',
            description: 'Every event gets a focused team that works exclusively on your celebration, ensuring personalized attention and flawless coordination.'
          },
          {
            title: 'Strong On-Ground Management',
            description: 'From setup to wrap-up, our on-site team ensures everything runs exactly as planned, handling any challenges with grace and efficiency.'
          }
        ]
      },
      whyItMatters: {
        title: 'Why It Matters',
        points: [
          {
            title: 'No Last-Minute Chaos',
            description: 'We plan in advance to eliminate last-minute stress and unexpected issues, ensuring a smooth experience for you and your guests.'
          },
          {
            title: 'Smooth Coordination',
            description: 'With experienced hands managing vendors, guests, and schedules, everything flows seamlessly from one moment to the next.'
          },
          {
            title: 'Professional Execution',
            description: 'Every aspect is delivered with polish—lighting, designs, arrangements, and more are executed to perfection.'
          }
        ]
      },
      howItBenefitsYou: {
        title: 'How It Benefits You',
        points: [
          {
            title: 'Peace of Mind',
            description: 'With our experts handling the details, you can relax and enjoy your event worry-free.'
          },
          {
            title: 'Seamless Event Flow',
            description: 'From entry to exit, your event feels well-timed and beautifully managed, creating lasting impressions.'
          },
          {
            title: 'Reliable Support',
            description: 'A dependable team you can trust at every step of your celebration, always ready to solve any challenge.'
          }
        ]
      }
    },
    stats: [
      { number: '500+', label: 'Events Managed' },
      { number: '15+', label: 'Years Experience' },
      { number: '50+', label: 'Expert Team Members' }
    ],
    testimonial: {
      quote: 'The team at Bliss Events made our wedding day absolutely perfect. Their experience and professionalism were evident in every detail.',
      author: 'Priya & Rahul',
      event: 'Wedding - December 2025'
    }
  },
  {
    id: 2,
    slug: 'creative-concepts',
    icon: 'Sparkles',
    title: 'Creative Concepts',
    subtitle: 'Unique Themes Tailored to Your Vision',
    shortDescription: 'Transform your imagination into reality with our innovative designs and personalized themes that reflect your unique style.',
    fullDescription: 'Every event tells a story, and we believe yours should be extraordinary. Our creative team specializes in crafting unique, personalized themes that reflect your personality, style, and vision. From elegant traditional setups to contemporary, bold designs—we bring fresh ideas to the table and execute them flawlessly.',
    image: '/work-2.png',
    heroImage: '/strengths/strength-hero-1.png',
    bodyImages: {
      whatMakesUsStrong: '/strengths/section-1.png',
      whyItMatters: '/strengths/section-2.png',
      howItBenefitsYou: '/strengths/section-1.png'
    },
    color: 'from-[#FFF0F5] to-[#FFE0EB]',
    sections: {
      whatMakesUsStrong: {
        title: 'What Makes Us Strong',
        points: [
          {
            title: 'Innovative Design Team',
            description: 'Our designers stay ahead of trends while respecting timeless traditions, creating concepts that are both fresh and meaningful.'
          },
          {
            title: 'Custom Theme Development',
            description: 'No two events are alike. We develop completely customized themes based on your preferences, cultural elements, and personal style.'
          },
          {
            title: 'Visual Storytelling',
            description: 'We use decor, lighting, colors, and layouts to tell your unique story through every visual element of the event.'
          }
        ]
      },
      whyItMatters: {
        title: 'Why It Matters',
        points: [
          {
            title: 'Memorable Impressions',
            description: 'Creative, well-executed themes leave lasting impressions on your guests and create unforgettable experiences.'
          },
          {
            title: 'Personal Expression',
            description: 'Your event becomes a true reflection of who you are, making it deeply personal and meaningful.'
          },
          {
            title: 'Instagram-Worthy Moments',
            description: 'Beautiful, creative setups provide stunning backdrops for photography and social media sharing.'
          }
        ]
      },
      howItBenefitsYou: {
        title: 'How It Benefits You',
        points: [
          {
            title: 'Unique Identity',
            description: 'Stand out with concepts that are exclusively yours—never replicated or generic.'
          },
          {
            title: 'Enhanced Guest Experience',
            description: 'Thoughtful design creates an immersive atmosphere that captivates and delights your guests.'
          },
          {
            title: 'Cohesive Aesthetic',
            description: 'Every element works together harmoniously, from invitations to table settings to stage design.'
          }
        ]
      }
    },
    stats: [
      { number: '200+', label: 'Unique Themes Created' },
      { number: '98%', label: 'Client Satisfaction' },
      { number: '30+', label: 'Design Awards' }
    ],
    testimonial: {
      quote: 'They brought our vision to life in ways we never imagined. The creativity and attention to detail were outstanding!',
      author: 'Anjali & Vikram',
      event: 'Sangeet Ceremony - October 2025'
    }
  },
  {
    id: 3,
    slug: 'end-to-end-solutions',
    icon: 'Package',
    title: 'End-to-End Solutions',
    subtitle: 'Complete Event Management',
    shortDescription: 'From initial planning to final execution, we handle every aspect of your event with precision and care.',
    fullDescription: 'Planning an event involves countless moving parts—venue selection, vendor coordination, logistics, design, catering, entertainment, and more. Our end-to-end solutions mean you have one dedicated team managing every single aspect, ensuring seamless coordination and stress-free execution from start to finish.',
    image: '/work-3.png',
    heroImage: '/strengths/strength-hero-1.png',
    bodyImages: {
      whatMakesUsStrong: '/strengths/section-1.png',
      whyItMatters: '/strengths/section-2.png',
      howItBenefitsYou: '/strengths/section-1.png'
    },
    color: 'from-[#F0F8FF] to-[#E0EFFF]',
    sections: {
      whatMakesUsStrong: {
        title: 'What Makes Us Strong',
        points: [
          {
            title: 'Comprehensive Service Range',
            description: 'We cover everything—planning, design, vendor management, logistics, on-ground coordination, and post-event wrap-up.'
          },
          {
            title: 'Single Point of Contact',
            description: 'One dedicated team handles all aspects, eliminating the stress of managing multiple vendors and coordinators.'
          },
          {
            title: 'Integrated Approach',
            description: 'All services work together seamlessly, ensuring perfect synchronization between decor, catering, entertainment, and timing.'
          }
        ]
      },
      whyItMatters: {
        title: 'Why It Matters',
        points: [
          {
            title: 'Saves Time & Energy',
            description: 'You don\'t need to coordinate with dozens of different vendors—we handle all communication and management for you.'
          },
          {
            title: 'Consistent Quality',
            description: 'With one team overseeing everything, quality standards remain high across all aspects of your event.'
          },
          {
            title: 'Better Coordination',
            description: 'When one team manages everything, there are no gaps, miscommunications, or coordination issues between vendors.'
          }
        ]
      },
      howItBenefitsYou: {
        title: 'How It Benefits You',
        points: [
          {
            title: 'Stress-Free Planning',
            description: 'Focus on enjoying the journey while we handle all the complex logistics and coordination.'
          },
          {
            title: 'Seamless Execution',
            description: 'Everything runs like clockwork because all elements are managed by one cohesive team.'
          },
          {
            title: 'Cost Efficiency',
            description: 'Bundled services often provide better value than hiring multiple separate vendors.'
          }
        ]
      }
    },
    stats: [
      { number: '100+', label: 'Vendor Partners' },
      { number: '24/7', label: 'Support Available' },
      { number: '99%', label: 'On-Time Delivery' }
    ],
    testimonial: {
      quote: 'Having one team manage everything was the best decision we made. Bliss Events coordinated every detail perfectly!',
      author: 'Meera & Aditya',
      event: 'Corporate Gala - November 2025'
    }
  },
  {
    id: 4,
    slug: 'on-time-execution',
    icon: 'Clock',
    title: 'On-Time Execution',
    subtitle: 'Timely Delivery with Flawless Coordination',
    shortDescription: 'Precision timing and meticulous planning ensure your event flows perfectly, keeping every moment on schedule.',
    fullDescription: 'Timing is everything in event management. A delayed ceremony, a rushed program, or poor coordination can disrupt the entire flow. At Bliss Events, we pride ourselves on punctual, well-timed execution. Every element of your event is scheduled, coordinated, and delivered exactly when it should be—ensuring a smooth, stress-free experience for you and your guests.',
    image: '/work-4.png',
    heroImage: '/strengths/strength-hero-1.png',
    bodyImages: {
      whatMakesUsStrong: '/strengths/section-1.png',
      whyItMatters: '/strengths/section-2.png',
      howItBenefitsYou: '/strengths/section-1.png'
    },
    color: 'from-[#F5FFF0] to-[#E5FFD6]',
    sections: {
      whatMakesUsStrong: {
        title: 'What Makes Us Strong',
        points: [
          {
            title: 'Detailed Timeline Planning',
            description: 'We create minute-by-minute schedules for every event, ensuring nothing is rushed or delayed.'
          },
          {
            title: 'Proactive Problem Solving',
            description: 'Our team anticipates potential delays and has backup plans ready to keep everything on track.'
          },
          {
            title: 'Synchronized Coordination',
            description: 'All vendors, performers, and service providers are briefed and coordinated to work in perfect sync.'
          }
        ]
      },
      whyItMatters: {
        title: 'Why It Matters',
        points: [
          {
            title: 'Respects Guest Time',
            description: 'Punctual execution shows respect for your guests\' time and keeps everyone comfortable and engaged.'
          },
          {
            title: 'Maintains Event Flow',
            description: 'Good timing ensures smooth transitions between ceremonies, performances, meals, and celebrations.'
          },
          {
            title: 'Reduces Stress',
            description: 'When everything runs on schedule, you can relax knowing the event is progressing as planned.'
          }
        ]
      },
      howItBenefitsYou: {
        title: 'How It Benefits You',
        points: [
          {
            title: 'No Delays or Rush',
            description: 'Every moment unfolds naturally and beautifully, without feeling hurried or dragging on.'
          },
          {
            title: 'Professional Image',
            description: 'Timely execution reflects professionalism and leaves a positive impression on all attendees.'
          },
          {
            title: 'Maximized Enjoyment',
            description: 'When things run smoothly, everyone—including you—can fully enjoy and be present in each moment.'
          }
        ]
      }
    },
    stats: [
      { number: '100%', label: 'On-Schedule Events' },
      { number: '5 min', label: 'Average Buffer Time' },
      { number: '0', label: 'Major Delays Last Year' }
    ],
    testimonial: {
      quote: 'Everything happened exactly on time. The coordination was impeccable, and our guests were thoroughly impressed!',
      author: 'Rohan & Simran',
      event: 'Destination Wedding - September 2025'
    }
  }
];

// Helper function to get strength by slug
export const getStrengthBySlug = (slug: string): StrengthDetail | undefined => {
  return strengthsData.find(strength => strength.slug === slug);
};

// Helper function to get all slugs for static generation
export const getAllStrengthSlugs = (): string[] => {
  return strengthsData.map(strength => strength.slug);
};