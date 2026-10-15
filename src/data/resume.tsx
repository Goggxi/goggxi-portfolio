import { Icons } from "@/components/icons";
import { FaGooglePlay, FaAppStore } from "react-icons/fa";
import { FileTextIcon, HomeIcon } from "lucide-react";

export const DATA = {
  name: "Moh Rifkan",
  initials: "MR",
  url: "https://goggxi.github.io",
  location: "Indonesia",
  locationLink: "https://maps.app.goo.gl/SyHoAyNgo591pN2Q7",
  tagline: "Fullstack Software Developer",
  description:
    "I build web, mobile, and backend products end to end, from API design and databases to apps shipped on the Play Store and App Store.",
  summary:
    "I'm a fullstack software developer with more than five years of experience building products for startups, companies, and clients across Indonesia.\n\nI work across the whole stack: **mobile apps** with Flutter and Kotlin, **backend services** with Go, Python (Django REST Framework), and Node.js (NestJS), **web apps and admin dashboards** with React and Next.js, and databases such as PostgreSQL, MongoDB, and Firebase. I care about clean architecture, maintainable code, and taking products all the way from the first design to production and store release.\n\nI enjoy working closely with clients and teams to turn ideas into reliable software. Outside of work, I love traveling and discovering new places.",
  avatarUrl: "/me.jpg",
  badgeUrl: "/goggxi.png",
  skills: [
    "Flutter",
    "Dart",
    "Kotlin",
    "TypeScript",
    "Node.js",
    "NestJS",
    "Next.js",
    "React",
    "Go",
    "Python",
    "Java",
    "PostgreSQL",
    "Supabase",
    "Firebase",
    "MongoDB",
    "Docker",
  ],
  // Generated from this file on every deploy (scripts/build-cv-pdf.sh)
  cvPdfUrl: "/Moh-Rifkan-CV.pdf",
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/cv", icon: FileTextIcon, label: "CV" },
  ],
  contact: {
    email: "goggxi@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Goggxi",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/goggxi",
        icon: Icons.linkedin,
        navbar: true,
      },
      Email: {
        name: "Email",
        url: "mailto:goggxi@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/moh_rifkan",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@moh_rifkan",
        icon: Icons.youtube,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "PT. Rumahlogic Teknologi",
      href: "",
      badges: [],
      location: "Tangerang Selatan, Indonesia",
      title: "Backend Engineer",
      logoUrl: "/rlt.jpg",
      start: "Jul 2024",
      end: "Jul 2025",
      description:
        "As a Backend Engineer at PT Rumahlogic Teknologi, I was responsible for developing web services and microservices, utilizing Python with Django REST Framework and Go with Gin Gonic as the backend technologies. I worked with PostgreSQL and MongoDB for database management, focusing on creating scalable and efficient solutions. My role involved designing and implementing RESTful APIs, managing data storage, and ensuring system performance and reliability. Additionally, I contributed to optimizing application performance and implementing best practices for backend development.",
    },
    {
      company: "Budi Dev",
      badges: [],
      href: "",
      location: "Remote",
      title: "Mobile Developer",
      logoUrl: "/f.png",
      start: "Nov 2022",
      end: "Jan 2023",
      description:
        "As a freelance remote developer with Budi Dev, I contributed to the development of Thor Mobile, an online chatting and marketplace application for NFTs and cryptocurrencies. My responsibilities included implementing user authentication, contact management, and chat functionalities using Flutter, GetStream, DESO, and Firebase. I also set up modular dependency injection and gained experience in creating real-time chat apps, integrating cryptocurrency wallets, and managing tasks with Trello and Jira.",
    },
    {
      company: "RumahBeku Morut",
      href: "https://goggxi.github.io/rbm-pages/",
      badges: [],
      location: "Kolonodale, Indonesia",
      title: "Fullstack Developer",
      logoUrl: "/rbm.png",
      start: "Dec 2021",
      end: null,
      description:
        "As a UI/UX & FullStack Developer at RumahBeku Morut – My Brother Store since December 2021, I have developed multiple applications, including the backend service for RBM using both NestJS (TypeScript) and Golang, which supports RESTful API operations, PostgreSQL, and Firebase authentication. I also created RBM Kasir, a cashier app integrated with Bluetooth printers and cash drawers, and RBM Customer, a consumer shopping app with features for online ordering, product management, and reward redemption. My responsibilities involved product and order management, push notifications, and Docker deployment. I gained experience in maintaining projects, managing servers, and migrating data to Firebase.",
    },
    {
      company: "PT. Grocee Teknologi Indonesia",
      href: "https://www.linkedin.com/company/grocee-indonesia/",
      badges: [],
      location: "Onsite - Makassar, Indonesia",
      title: "Mobile Developer",
      logoUrl: "/grocee_indonesia_logo.jpeg",
      start: "Apr 2021",
      end: "Feb 2023",
      description:
        "Mobile Developer at PT. Grocee Teknologi Indonesia, I developed three applications from scratch: JHK Umat, a comprehensive Catholic community service app with features for scheduling consultations, online prayers, and donations; JHK Imam, a platform for pastors to manage consultations and create sermons; and Dairyfood Manager, an internal tool for PT. DAIRYFOOD INTERNUSA to monitor product performance and manage approvals. I focused on improving UI/UX design, implementing user authentication, and integrating functionalities such as video lectures, online Bible access, and job search capabilities using Flutter, Firebase, and gRPC. Additionally, I handled app deployment to the App Store and Play Store, and gained skills in automated publishing, design patterns, and Figma for layout design.",
    },
    {
      company: "PT. Grafca Digital Teknologi",
      href: "",
      badges: [],
      location: "Jakarta & Yogyakarta, Indonesia",
      title: "Mobile Engineer",
      logoUrl: "",
      start: "Mar 2020",
      end: "May 2020",
      description:
        "As a Mobile Developer at Grafca Digital Teknologi, I developed Qylo Driver, an app for managing customer orders using 100% electric motorcycles. The application includes features for order management, carbon emissions tracking, battery management, wallet functions, and integration with Google Maps for redirection and live tracking. My responsibilities encompassed implementing these features using Flutter, Google Maps API, and Firebase, and I achieved proficiency in securing wallet functionality within the app.",
    },
  ],
  education: [
    {
      school: "SMK Negeri 1 Petasia",
      href: "https://e-learningsmkn1petasia.com/",
      degree: "Computer Network Engineering",
      logoUrl: "/smk.jpg",
      start: "2014",
      end: "2016",
    },
    {
      school: "Universitas DIPA",
      href: "https://site.undipa.ac.id/",
      degree: "Bachelor's Degree in Computer Science",
      logoUrl: "/undipa.png",
      start: "2016",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Boomzza",
      href: "https://www.boomzza.com",
      dates: "Jul 2024 - Present",
      active: true,
      description:
        "Social sports and horse-racing community app for Australian sports fans: a live feed of sport events and race cards, group race chats, realtime messaging, and event reminders. I work across the Flutter app, the NestJS API, the racing data pipeline, and the admin CMS.",
      technologies: ["Flutter", "NestJS", "Supabase", "PostgreSQL", "Python", "Next.js"],
      links: [
        {
          type: "Website",
          href: "https://www.boomzza.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Play Store",
          href: "https://play.google.com/store/apps/details?id=com.roboticc.boomzza",
          icon: <FaGooglePlay className="size-3" />,
        },
        {
          type: "App Store",
          href: "https://apps.apple.com/au/app/boomzza/id6467181447",
          icon: <FaAppStore className="size-3" />,
        },
      ],
      image: "",
      logo: "/projects/boomzza.png",
      video: "",
    },
    {
      title: "ZOOZi",
      href: "https://www.zoozi.com",
      dates: "Jul 2025 - Present",
      active: true,
      description:
        "Duty-free shopping marketplace that connects buyers with verified travelers who buy and deliver items from airport stores worldwide, with escrow payments, traveler payouts, in-app chat, and identity verification. I built the Flutter mobile app, the NestJS API, and the admin dashboard.",
      technologies: ["Flutter", "NestJS", "PostgreSQL", "Next.js", "Stripe", "Firebase"],
      links: [
        {
          type: "Website",
          href: "https://www.zoozi.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      logo: "/projects/zoozi.png",
      video: "",
    },
    {
      title: "Berlian Mamala Resort System",
      href: "",
      dates: "May 2026 - Present",
      active: true,
      description:
        "End-to-end hotel management system for a resort: reservations, front office and night audit, restaurant POS with kitchen display, housekeeping, inventory, HR attendance, gym and pool ticketing, an owner reporting app, and a guest booking site with online payments.",
      technologies: ["NestJS", "PostgreSQL", "Next.js", "Flutter", "Docker", "Midtrans"],
      links: [],
      image: "",
      logo: "/projects/bmr.png",
      video: "",
    },
    {
      title: "Asrar",
      href: "https://asrartv.tech",
      dates: "Aug 2026 - Present",
      active: true,
      description:
        "My own free digital prayer clock for Indonesian mosques. It runs on the mosque TV and is managed from caretakers' phones: Kemenag-standard prayer times, iqamah countdown, murottal and announcement scheduling, multi-screen sync, QRIS donations, and offline support.",
      technologies: ["NestJS", "PostgreSQL", "Next.js", "PWA", "Kotlin", "webOS"],
      links: [
        {
          type: "Website",
          href: "https://asrartv.tech",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/asrar.jpg",
      logo: "",
      video: "",
    },
    {
      title: "VX Laundry",
      href: "https://vx-laundry.pages.dev",
      dates: "Sep 2025 - May 2026",
      active: true,
      description:
        "Multi-outlet laundry management app for owners and staff: order tracking, Bluetooth thermal receipts, WhatsApp digital receipts, loyalty and referral programs, expenses and reports, plus a landing page and a super-admin panel.",
      technologies: ["Flutter", "Supabase", "PostgreSQL", "Next.js"],
      links: [
        {
          type: "Website",
          href: "https://vx-laundry.pages.dev",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      logo: "/projects/vx-laundry.png",
      video: "",
    },
    {
      title: "Kodal",
      href: "",
      dates: "Oct 2026 - Present",
      active: true,
      description:
        "My own chat-based personal shopping and delivery (jastip) app, starting in Morowali Utara. Customers post requests, local couriers reply with quotes in chat, and the same app handles rides, intercity trips, and parcels, with in-app voice calls. Coming soon to the Play Store and App Store.",
      technologies: ["Flutter", "NestJS", "PostgreSQL", "Next.js", "WebSocket", "LiveKit"],
      links: [],
      image: "",
      logo: "/projects/kodal.png",
      video: "",
    },
    {
      title: "RumahBeku Morut",
      href: "https://goggxi.github.io/rbm-pages/",
      dates: "Dec 2021 - Present",
      active: true,
      description:
        "This application is an online shopping service at RumahBeku Morut. Make it easier for customers to find and buy goods available at RumahBeku Morut.",
      technologies: ["Flutter", "TypeScript", "Go", "Firebase", "Google Cloud"],
      links: [
        {
          type: "Website",
          href: "https://goggxi.github.io/rbm-pages/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Play Store",
          href: "https://play.google.com/store/apps/details?id=com.goggxi.rbm_customer_firebase&hl=en_US",
          icon: <FaGooglePlay className="size-3" />,
        },
        {
          type: "App Store",
          href: "https://apps.apple.com/id/app/rumahbeku-morut/id6450600102",
          icon: <FaAppStore className="size-3" />,
        },
      ],
      image: "/rbm-bg.jpg",
      logo: "",
      video: "",
    },
    {
      title: "Grocee",
      href: "https://www.linkedin.com/company/grocee-indonesia/",
      dates: "Apr 2023 - Mar 2024",
      active: true,
      description:
        "Grocee is a local marketplace app specializing in daily essentials and FMCG. It offers a convenient platform for users to browse and purchase household necessities, ensuring quick access to essential products and streamlined shopping experiences.",
      technologies: ["Flutter", "Firebase", "Google Cloud"],
      links: [
        {
          type: "LinkedIn",
          href: "https://www.linkedin.com/company/grocee-indonesia/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      logo: "",
      video:
        "https://firebasestorage.googleapis.com/v0/b/rumahbeku-morut-app.appspot.com/o/public%2Fgrocee.mp4?alt=media&token=7457a26f-4e80-4f32-949b-7a691faa65e5",
    },
    // Hidden for now (MCX concept project)
    // {
    //   title: "Digital Museum Guide (Concept)",
    //   href: "",
    //   dates: "Sep 2026",
    //   active: true,
    //   description:
    //     "Concept project for a private car museum: visitors scan a QR plate next to each car to read its story, specs, and restoration gallery on their phone without installing an app, with on-site exclusive clips, printable QR plates, scan analytics, and a CMS for museum staff.",
    //   technologies: ["NestJS", "PostgreSQL", "Next.js", "QR Code"],
    //   links: [],
    //   image: "",
    //   logo: "",
    //   video: "",
    // },
  ],
} as const;
