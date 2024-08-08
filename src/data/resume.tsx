import { Icons } from "@/components/icons";
import { FaGooglePlay, FaAppStore } from "react-icons/fa";
import { BiSave } from "react-icons/bi";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Moh Rifkan",
  initials: "MR",
  url: "https://goggxi.github.io",
  location: "Tangerang Indonesia, Indonesia",
  locationLink: "https://maps.app.goo.gl/SyHoAyNgo591pN2Q7",
  tagline: "'Kang Ketik Intelek'",
  description:
    "passionate about exploring the latest advancements in technology. Always eager to learn and innovate, I thrive on discovering and mastering cutting-edge tools and techniques to deliver impactful and efficient solutions.",
  summary:
    "I am a software developer with over 3 years of experience. I specialize in both backend and mobile development, with proficiency in programming languages such as Dart, Kotlin, Java, Golang, Python, JavaScript, and TypeScript.\n\nI am passionate about continuous learning and skill development, and I enjoy collaborating with others to achieve common goals. If you're interested in working with me or exploring new opportunities, feel free to reach out via email or messaging. Outside of work, I love traveling and discovering new places.\n\nPlease let me know if you need any additional information.",
  avatarUrl: "/me.jpg",
  badgeUrl: "/goggxi.png",
  skills: [
    "Python",
    "Go",
    "Dart",
    "Node.js",
    "Kotlin",
    "Java",
    "Postgres",
    "MongoDB",
    "Docker",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "mail@mail.com",
    tel: "+1234567890",
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
      Resume: {
        name: "Download Resume",
        url: "https://drive.google.com/file/d/1-sWRECT4gXb9wSIL0WK1qT8odBxIU1lA/view?usp=sharing",
        icon: BiSave,
        navbar: true,
      },
    },
  },

  work: [
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
      company: "PT. Grafca Digital Teknologi",
      href: "",
      badges: [],
      location: "split between Jakarta and Yogyakarta, Indonesia",
      title: "Mobile Engineer",
      logoUrl: "/buildspace.jpg",
      start: "Mar 2020",
      end: "Mei 2020",
      description:
        "As a Mobile Developer at Grafca Digital Teknologi, I developed Qylo Driver, an app for managing customer orders using 100% electric motorcycles. The application includes features for order management, carbon emissions tracking, battery management, wallet functions, and integration with Google Maps for redirection and live tracking. My responsibilities encompassed implementing these features using Flutter, Google Maps API, and Firebase, and I achieved proficiency in securing wallet functionality within the app.",
    },
    // {
    //   company: "Splunk",
    //   href: "https://splunk.com",
    //   badges: [],
    //   location: "San Jose, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/splunk.svg",
    //   start: "January 2019",
    //   end: "April 2019",
    //   description:
    //     "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    // },
    {
      company: "RumahBeku Morut",
      href: "https://goggxi.github.io/rbm-pages/",
      badges: [],
      location: "Kolonodale, Indonesia",
      title: "Fullstack Developer",
      logoUrl: "/rbm.png",
      start: "Des 2021",
      end: null,
      description:
        "As a UI/UX & FullStack Developer at RumahBeku Morut – My Brother Store since December 2021, I have developed multiple applications, including the backend service for RBM using both NestJS (TypeScript) and Golang, which supports RESTful API operations, PostgreSQL, and Firebase authentication. I also created RBM Kasir, a cashier app integrated with Bluetooth printers and cash drawers, and RBM Customer, a consumer shopping app with features for online ordering, product management, and reward redemption. My responsibilities involved product and order management, push notifications, and Docker deployment. I gained experience in maintaining projects, managing servers, and migrating data to Firebase.",
    },
    {
      company: "PT. Rumahlogic Teknologi",
      href: "",
      badges: [],
      location: "Tangerang Selatan, Indonesia",
      title: "Backend Engineer",
      logoUrl: "/rlt.jpg",
      start: "Jul 2024",
      end: null,
      description:
        "As a Backend Engineer at PT Rumahlogic Teknologi, I was responsible for developing web services and microservices, utilizing Python with Django REST Framework and Go with Gin Gonic as the backend technologies. I worked with PostgreSQL and MongoDB for database management, focusing on creating scalable and efficient solutions. My role involved designing and implementing RESTful APIs, managing data storage, and ensuring system performance and reliability. Additionally, I contributed to optimizing application performance and implementing best practices for backend development.",
    },
  ],
  education: [
    {
      school: "SMK Negeri 1 Petasia",
      href: "https://e-learningsmkn1petasia.com/",
      degree: "computer network engineering",
      logoUrl: "/smk.jpg",
      start: "2014",
      end: "2016",
    },
    {
      school: "Universitas DIPA",
      href: "https://site.undipa.ac.id/",
      degree: "Bachelor's Degree of Computer Science",
      logoUrl: "/undipa.png",
      start: "2016",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Grocee",
      href: "https://www.linkedin.com/company/grocee-indonesia/",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Grocee is a local marketplace app specializing in daily essentials and FMCG. It offers a convenient platform for users to browse and purchase household necessities, ensuring quick access to essential products and streamlined shopping experiences.",
      technologies: ["Flutter", "Firebase", "Google Cloud"],
      links: [
        {
          type: "Linkedin",
          href: "https://www.linkedin.com/company/grocee-indonesia/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://firebasestorage.googleapis.com/v0/b/rumahbeku-morut-app.appspot.com/o/public%2Fgrocee.mp4?alt=media&token=7457a26f-4e80-4f32-949b-7a691faa65e5",
    },
    {
      title: "RumahBeku Morut",
      href: "https://goggxi.github.io/rbm-pages/",
      dates: "Des 2021 - Present",
      active: true,
      description:
        "This application is an online shopping service at RumahBeku Morut. Make it easier for customers to find and buy goods available at RumahBeku Morut.",
      technologies: ["Flutter", "Typescript", "Go", "Firebase", "Google Cloud"],
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
      video: "",
    },
    // {
    //   title: "llm.report",
    //   href: "https://llm.report",
    //   dates: "April 2023 - September 2023",
    //   active: true,
    //   description:
    //     "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://llm.report",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/dillionverma/llm.report",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.llm.report/openai-demo.mp4",
    // },
  ],
  hackathons: [
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
  ],
} as const;
