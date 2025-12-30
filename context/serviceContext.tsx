export type ServiceItem = {
  id: string;
  title: string;
  desc: string;
  image: string; // /service/service-1.png ...
  eventType: string; // autofill into dialog
};

export type ServiceCategory = {
  number: string; // "01"
  title: string;  // "Wedding & Celebration Events"
  services: ServiceItem[];
};

export const SERVICES_CATEGORIES: ServiceCategory[] = [
  {
    number: "01",
    title: "Wedding & Celebration Events",
    services: [
      {
        id: "wedding-planning",
        title: "Wedding Planning & Decoration",
        desc: "Complete wedding planning with beautiful decor and flawless execution.",
        image: "/service/service-1.png",
        eventType: "Wedding Planning & Decoration",
      },
      {
        id: "destination-weddings",
        title: "Destination Weddings",
        desc: "Expert planning and coordination for memorable destination weddings.",
        image: "/service/service-2.png",
        eventType: "Destination Weddings",
      },
      {
        id: "stage-mandap",
        title: "Stage & Mandap Decoration",
        desc: "Elegant and customized stage & mandap designs.",
        image: "/service/service-3.png",
        eventType: "Stage & Mandap Decoration",
      },
    ],
  },
  {
    number: "02",
    title: "Corporate Events",
    services: [
      {
        id: "conferences",
        title: "Conferences & Seminars",
        desc: "Professional planning with smooth execution and technical support.",
        image: "/service/service-4.png",
        eventType: "Conferences & Seminars",
      },
      {
        id: "product-launches",
        title: "Product Launches",
        desc: "Creative concepts and impactful brand-focused events.",
        image: "/service/service-5.png",
        eventType: "Product Launches",
      },
      {
        id: "annual-meetings",
        title: "Annual Meetings",
        desc: "Well-organized corporate gatherings with seamless coordination.",
        image: "/service/service-6.png",
        eventType: "Annual Meetings",
      },
    ],
  },
  {
    number: "03",
    title: "Social & Personal Events",
    services: [
      {
        id: "birthday-parties",
        title: "Birthday Parties",
        desc: "Fun, creative, and well-managed birthday celebrations.",
        image: "/service/service-7.png",
        eventType: "Birthday Parties",
      },
      {
        id: "engagement-anniversary",
        title: "Engagement & Anniversary Events",
        desc: "Elegant planning for meaningful personal milestones.",
        image: "/service/service-8.png",
        eventType: "Engagement & Anniversary Events",
      },
      {
        id: "baby-shower",
        title: "Baby Shower & Family Functions",
        desc: "Warm, well-coordinated family events with attention to detail.",
        image: "/service/service-9.png",
        eventType: "Baby Shower & Family Functions",
      },
    ],
  },
  {
    number: "04",
    title: "Entertainment & Production",
    services: [
      {
        id: "dj-live",
        title: "DJ & Live Music",
        desc: "Professional DJs and live performers to energize your event.",
        image: "/service/service-10.png",
        eventType: "DJ & Live Music",
      },
      {
        id: "anchors-artists",
        title: "Anchors & Artists",
        desc: "Experienced hosts and performers for smooth event flow.",
        image: "/service/service-11.png",
        eventType: "Anchors & Artists",
      },
      {
        id: "sound-light-led",
        title: "Sound, Light & LED Setup",
        desc: "High-quality technical production for a flawless experience.",
        image: "/service/service-12.png",
        eventType: "Sound, Light & LED Setup",
      },
    ],
  },
  {
    number: "05",
    title: "Event Decor & Styling",
    services: [
      {
        id: "floral",
        title: "Floral Decoration",
        desc: "Fresh, elegant floral designs for every event type.",
        image: "/service/service-13.png",
        eventType: "Floral Decoration",
      },
      {
        id: "theme-decor",
        title: "Theme-Based Decor",
        desc: "Customized decor concepts based on your chosen theme.",
        image: "/service/service-14.png",
        eventType: "Theme-Based Decor",
      },
      {
        id: "entry-gates",
        title: "Entry Gates & Stage Setup",
        desc: "Eye-catching entrances and beautifully designed stages.",
        image: "/service/service-15.png",
        eventType: "Entry Gates & Stage Setup",
      },
    ],
  },
  {
    number: "06",
    title: "Logistics & Support",
    services: [
      {
        id: "venue-selection",
        title: "Venue Selection",
        desc: "Assistance in choosing the perfect venue.",
        image: "/service/service-16.png",
        eventType: "Venue Selection",
      },
      {
        id: "catering",
        title: "Catering Coordination",
        desc: "Vendor coordination for quality food services.",
        image: "/service/service-17.png",
        eventType: "Catering Coordination",
      },
      {
        id: "photo-video",
        title: "Photography & Videography",
        desc: "Professional coverage to capture every special moment.",
        image: "/service/service-18.png",
        eventType: "Photography & Videography",
      },
    ],
  },
];
