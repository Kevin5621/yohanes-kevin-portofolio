import { SitamaImages, SmartIrrigationImages, CryptoTrackerImages, PortofolioWebsiteImages, PortofolioMarketerImages, FiberMonitoringImages } from "../components/ProjectCard/hooks/images";
import { Project } from "../components/ProjectCard/types";

export const projects: Project[] = [
  {
    title: 'Sitama',
    description: 'Education Platform that helps simplify internship management for students and lecturers at Politeknik Negeri Semarang. Features a dual-role system with specific functionalities for both students and supervising lecturers.',
    technologies: ['Dart', 'Laravel', 'SQL', 'Firebase'],
    githubUrl: 'https://github.com/Kevin5621/Sitama',
    type: 'real',
    features: {
      sections: [
        {
          title: 'Student Features',
          items: [
            'Submit and track internship progress',
            'Maintain digital logbook',
            'Schedule and manage guidance sessions',
            'Upload reports and documentation',
            'View feedback and scores'
          ]
        },
        {
          title: 'Lecturer Features',
          items: [
            'Review student submissions',
            'Provide feedback on logbook entries',
            'Manage guidance schedules',
            'Assess student performance',
            'Generate progress reports'
          ]
        }
      ]
    },
    image: [
      { 
        title: 'banner', 
        image: SitamaImages.Sbanner,
        bannerLight: SitamaImages.SbannerLight,
        bannerDark: SitamaImages.SbannerDark
      },
      { title: 'Login', image: SitamaImages.login },
      { title: 'Dashboard Student', image: SitamaImages.homeMahasiswa },
      { title: 'Guidance', image: SitamaImages.bimbingan },
      { title: 'Logbook Page', image: SitamaImages.logbook },
      { title: 'Add Guidance', image: SitamaImages.addBimbingan },
      { title: 'Profile', image: SitamaImages.profile },
      { title: 'Dashboard Lecturer', image: SitamaImages.homeDosen },
      { title: 'Detail Student', image: SitamaImages.detailStudent },
      { title: 'Guidance Action', image: SitamaImages.actionBimbingan },
      { title: 'Score Page', image: SitamaImages.detailNilai }
    ]
  },
  {
    title: "Fiber Monitoring Project",
    description: "A monorepo for the Fiber Monitoring Project with different user roles for managing fiber optic installation and monitoring. This project is a comprehensive solution for monitoring fiber optic installation projects. It consists of two main applications: Admin (dashboard for administrators to manage projects, view reports, and monitor overall progress) and Waspang (user interface for field workers to submit reports, track milestones, and manage project documentation).",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase (Auth, Supabase-js)",
      "Turborepo",
      "React",
      "Leaflet",
      "TypeScript",
      "Docker",
      "ExcelJS",
      "jsPDF"
    ],
    githubUrl: "https://github.com/Kevin5621/fiber-monitoring-project",
    type: "real",
    features: {
      sections: [
        {
          title: "Admin Dashboard Features",
          items: [
            "Project overview and statistics",
            "Daily report monitoring",
            "Document management",
            "Progress tracking",
            "Project status visualization",
            "Team management",
            "Team performance metrics",
            "Document approval workflow",
            "Project creation and assignment",
            "Comprehensive reporting tools"
          ]
        },
        {
          title: "Waspang (Field Worker Interface) Features",
          items: [
            "View project details and milestones",
            "Submit daily reports",
            "Upload project documents",
            "Track project activities",
            "Manage project-specific documentation",
            "Report issues and progress",
            "Document upload with categorization",
            "Project milestone tracking",
            "Field issue reporting",
            "Location-based project view"
          ]
        },
        {
          title: "Shared Features",
          items: [
            "Authentication with Supabase Auth",
            "Responsive design for desktop and mobile",
            "Real-time updates",
            "Document management system",
            "Project tracking and reporting"
          ]
        }
      ]
    },
    image: [
      {
        title: "banner",
        image: FiberMonitoringImages.Fbanner,
        bannerLight: FiberMonitoringImages.FbannerLight,
        bannerDark: FiberMonitoringImages.FbannerDark
      },
      { title: 'admin dashboard', image: FiberMonitoringImages.adminDashboard },
      { title: 'notification', image: FiberMonitoringImages.notification },
      { title: 'project list', image: FiberMonitoringImages.projectList },
      { title: 'map', image: FiberMonitoringImages.map },
      { title: 'add project', image: FiberMonitoringImages.addProject },
      { title: 'user management', image: FiberMonitoringImages.userManagement },
      { title: 'project detail', image: FiberMonitoringImages.projectDetail },
      { title: 'add milestone photo', image: FiberMonitoringImages.addMilestone },
      { title: 'add daily report', image: FiberMonitoringImages.addDailyReport },
    ]
  },
  {
    title: "Portfolio Website Digital Marketer",
    description: "A modern, interactive portfolio website to showcase creative projects, professional experience, and contact information. Built with Next.js and React, featuring smooth animations, project galleries, and a responsive design.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/Kevin5621/portofolio-website-digital-marketer-2",
    type: "real",
    features: {
      sections: [
        {
          title: "Showcase",
          items: [
            "Animated project gallery with detailed pages",
            "Interactive project reveal effects",
            "Project metrics and achievements display"
          ]
        },
        {
          title: "Experience & Skills",
          items: [
            "Professional experience timeline",
            "Skills slider with smooth animation",
            "Certificates and recognitions section"
          ]
        },
        {
          title: "Contact",
          items: [
            "Contact form with validation",
            "Social media integration",
            "Responsive layout for all devices"
          ]
        }
      ]
    },
    "image": [
      {
        title: "banner",
        image: PortofolioMarketerImages.Mbanner,
        bannerLight: PortofolioMarketerImages.MbannerLight,
        bannerDark: PortofolioMarketerImages.MbannerDark
      },
      { title: 'menu', image: PortofolioMarketerImages.menu },
      { title: 'quotes', image: PortofolioMarketerImages.addon },
      { title: 'experience', image: PortofolioMarketerImages.experience },
      { title: 'quotes', image: PortofolioMarketerImages.quotes },
      { title: 'horizontal scroll', image: PortofolioMarketerImages.projectlist1 },
      { title: 'project list', image: PortofolioMarketerImages.projectlist2 },
      { title: 'get connect', image: PortofolioMarketerImages.getconnect },
      { title: 'project detail', image: PortofolioMarketerImages.projectDetail },
      { title: 'expertise', image: PortofolioMarketerImages.projectDetailExpertise },
      { title: 'showcase coursel', image: PortofolioMarketerImages.projectDetailShowcase },
      { title: 'end', image: PortofolioMarketerImages.projectDetailEnd }
    ]
  },
  {
    title: 'IoT Smart Irrigation System',
    description: 'An IoT-based smart irrigation system that automates watering plants based on schedules or soil moisture thresholds. It also supports manual control for flexibility.',
    technologies: ['Dart', 'MQTT', 'ESP32', 'Soil Moisture Sensor', 'Relay Module'],
    githubUrl: 'https://github.com/Kevin5621/iot_smart_irigation',
    type: 'playground',
    features: {
      sections: [
        {
          title: 'Core Features',
          items: [
            'Automated watering based on predefined schedules',
            'Real-time soil moisture monitoring with threshold-based triggering',
            'Manual watering control via mobile app or web interface',
            'Data logging and visualization of soil moisture levels',
            'Integration with MQTT for real-time communication'
          ]
        },
        {
          title: 'Hardware Components',
          items: [
            'ESP32 microcontroller for processing and connectivity',
            'Soil moisture sensor for detecting water levels',
            'Relay module to control water pump',
            'Water pump for irrigation',
            'Power supply and wiring setup'
          ]
        }
      ]
    },
    image: [
      { 
        title: 'banner', 
        image: SmartIrrigationImages.Bbanner,
        bannerLight: SmartIrrigationImages.BbannerLight,
        bannerDark: SmartIrrigationImages.BbannerDark
      },
      { title: 'System Overview ON', image: SmartIrrigationImages.systemOverviewON },
      { title: 'System Overview OFF', image: SmartIrrigationImages.systemOverviewOFF },
      { title: 'Control Interface', image: SmartIrrigationImages.controlInterface },
      { title: 'Add Schedule', image: SmartIrrigationImages.scheduleInterface },
      { title: 'Schedule', image: SmartIrrigationImages.dataVisualization },
      { title: 'Hardware Setup', video: SmartIrrigationImages.hardwareSetup }
    ]
  },
  {
    title: "Crypto Price Tracker",
    description: "Crypto Price Tracker is a Chrome extension that allows users to track real-time cryptocurrency prices directly from their browser. It provides a user-friendly interface to monitor your favorite coins and manage your crypto investment portfolio.",
    technologies: ["React", "TypeScript", "Vite", "Chrome Extension APIs", "Fuse.js"],
    githubUrl: "https://github.com/kevin5621/chrome-extension-crypto-tracker",
    type: "playground",
    features: {
      sections: [
        {
          title: "Key Features",
          items: [
            "Real-Time Price Tracking with automatic refreshes every 15 seconds",
            "Fuzzy autocomplete search for cryptocurrencies",
            "In-depth coin details including market cap, 24h volume, and price range",
            "Simple charts to visualize price changes",
            "Portfolio management to track investments and view summaries",
            "Multi-wallet support for organizing assets",
            "Automatic Profit/Loss analysis"
          ]
        }
      ]
    },
    image: [
      {
        title: "banner",
        image: CryptoTrackerImages.Cbanner,
        bannerLight: CryptoTrackerImages.CbannerLight,
        bannerDark: CryptoTrackerImages.CbannerDark
      },
      { title: "Crypto Prices Tab", image: CryptoTrackerImages.cryptoPrices },
      { title: "Portfolio Tab", image: CryptoTrackerImages.cryptoWallets },
      { title: "Add Transaction Dialog", image: CryptoTrackerImages.cryptoAddTransaction }
    ]
  },
  {
    title: "FiveX Agency Website",
    description: "A creative agency website with a distinctive neo-brutalist design. This project features a highly interactive and animated user interface, including a custom glitch-style cursor, smooth scrolling, and dynamic visual elements. The site is structured with dedicated sections for services, portfolio work, and contact information.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/kevin5621/fivex",
    type: "playground",
    features: {
      sections: [
        {
          title: "Core Features",
          items: [
            "Interactive neo-brutalist user interface",
            "Custom glitch-style cursor hook ('useGlitchCursor')",
            "Smooth animated scrolling between sections ('useScrollToSection')",
            "Dynamic animations using Framer Motion",
            "Responsive design for various screen sizes"
          ]
        },
        {
          title: "Key Components",
          items: [
            "Hero section with animated text and a grid-based layout",
            "Services section with distinct cards for different offerings (Video Production, Photography, Web Dev)",
            "Portfolio (Work) section with hover-reveal effects",
            "Detailed contact form with neo-brutalist styling",
            "Separate pages for individual services like Photography and Video Production"
          ]
        }
      ]
    },
    image: [
      {
        title: "banner",
        image: "/path/to/FiveXImages.banner.png",
        bannerLight: "/path/to/FiveXImages.bannerLight.png",
        bannerDark: "/path/to/FiveXImages.bannerDark.png"
      },
      { title: "Hero Section", image: "/path/to/FiveXImages.hero.png" },
      { title: "Services Showcase", image: "/path/to/FiveXImages.services.png" },
      { title: "Work Portfolio", image: "/path/to/FiveXImages.work.png" },
      { title: "Contact Form", image: "/path/to/FiveXImages.contact.png" },
      { title: "Video Production Page", image: "/path/to/FiveXImages.videoPage.png" },
      { title: "Photography Page", image: "/path/to/FiveXImages.photoPage.png" }
    ]
  },
  {
    title: "Portfolio Website",
    description: "An interactive portfolio website for a digital marketer, featuring a 3D navigable solar system to showcase projects. Built with Next.js, Three.js (React Three Fiber), and Framer Motion for a dynamic and engaging user experience.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Three.js (R3F)",
      "Framer Motion",
      "Tailwind CSS",
      "GSAP"
    ],
    githubUrl: "https://github.com/Kevin5621/portofolio-website-digital-marketer",
    type: "playground",
    features: {
      sections: [
        {
          title: "Core Features",
          items: [
            "Interactive 3D solar system for project category navigation, allowing users to click planets to filter projects.",
            "Dynamic page transitions and animations powered by Framer Motion.",
            "Immersive, animated 3D galaxy background created with WebGL.",
            "Project filtering system based on the selected planet (category).",
            "Modal pop-ups for viewing detailed project information without leaving the page."
          ]
        },
        {
          title: "Website Sections",
          items: [
            "A stunning hero section with a 'warp speed' entry animation to engage users from the start.",
            "A comprehensive portfolio section that showcases various projects.",
            "An 'About Me' page detailing skills, professional experience, and social links.",
            "A 'Creative Process' section with a unique animated wave timeline.",
            "A fully functional contact form for user inquiries."
          ]
        }
      ]
    },
    image: [
      {
        title: "banner",
        image: PortofolioWebsiteImages.Pbanner,
        bannerLight: PortofolioWebsiteImages.PbannerLight,
        bannerDark: PortofolioWebsiteImages.PbannerDark,
      },
      { title: "Portfolio 1", image: PortofolioWebsiteImages.portofolio1 },
      { title: "Portfolio 2", image: PortofolioWebsiteImages.portofolio2 },
      { title: "Portfolio 3", image: PortofolioWebsiteImages.portofolio3 },
      { title: "Process", image: PortofolioWebsiteImages.process },
    ]
  }
];