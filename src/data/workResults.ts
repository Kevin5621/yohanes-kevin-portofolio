export interface ProjectImage {
  title: string;
  image: string;
}

export interface ProjectFeatureSection {
  title: string;
  items: string[];
}

export interface ProjectFeatures {
  sections: ProjectFeatureSection[];
}

export interface WorkResultProject {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  type: 'real' | 'demo';
  features: ProjectFeatures;
  image: ProjectImage[];
}

export const workResultsProjects: Record<string, WorkResultProject[]> = {
  en: [
    {
      title: 'Sitama',
      description: 'Dual-role internship management platform for students and lecturers at Politeknik Negeri Semarang.',
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
          image: '/work/sitama/converted-8.webp'
        },
        { title: 'Login', image: '/work/sitama/converted.webp' },
        { title: 'Dashboard Student', image: '/work/sitama/converted-1.webp' },
        { title: 'Guidance', image: '/work/sitama/converted-2.webp' },
        { title: 'Logbook Page', image: '/work/sitama/converted-3.webp' },
        { title: 'Add Guidance', image: '/work/sitama/converted-4.webp' },
        { title: 'Profile', image: '/work/sitama/converted-5.webp' },
        { title: 'Dashboard Lecturer', image: '/work/sitama/converted-6.webp' },
        { title: 'Detail Student', image: '/work/sitama/converted-7.webp' },
        { title: 'Guidance Action', image: '/work/sitama/converted-8.webp' },
        { title: 'Score Page', image: '/work/sitama/converted-9.webp' },
        { title: 'Additional 1', image: '/work/sitama/converted-10.webp' },
        { title: 'Additional 2', image: '/work/sitama/converted-11.webp' }
      ]
    },
    {
      title: 'Fiber Monitoring Project',
      description: 'Comprehensive solution for monitoring fiber optic installations with Admin and Field Worker interfaces.',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Turborepo'],
      githubUrl: 'https://github.com/Kevin5621/fiber-monitoring-project',
      type: 'real',
      features: {
        sections: [
          {
            title: 'Admin Dashboard Features',
            items: [
              'Project overview and statistics',
              'Daily report monitoring',
              'Document management',
              'Progress tracking',
              'Project status visualization',
              'Team management',
              'Team performance metrics',
              'Document approval workflow',
              'Project creation and assignment',
              'Comprehensive reporting tools'
            ]
          },
          {
            title: 'Waspang (Field Worker Interface) Features',
            items: [
              'View project details and milestones',
              'Submit daily reports',
              'Upload project documents',
              'Track project activities',
              'Manage project-specific documentation',
              'Report issues and progress',
              'Document upload with categorization',
              'Project milestone tracking',
              'Field issue reporting',
              'Location-based project view'
            ]
          },
          {
            title: 'Shared Features',
            items: [
              'Authentication with Supabase Auth',
              'Responsive design for desktop and mobile',
              'Real-time updates',
              'Document management system',
              'Project tracking and reporting'
            ]
          }
        ]
      },
      image: [
        {
          title: 'banner',
          image: '/work/FiberMonitoringImages/3.png'
        },
        { title: 'admin dashboard', image: '/work/FiberMonitoringImages/adminDashboard.png' },
        { title: 'notification', image: '/work/FiberMonitoringImages/notification.png' },
        { title: 'project list', image: '/work/FiberMonitoringImages/projectList.png' },
        { title: 'map', image: '/work/FiberMonitoringImages/map.png' },
        { title: 'add project', image: '/work/FiberMonitoringImages/addProject.png' },
        { title: 'user management', image: '/work/FiberMonitoringImages/userManagement.png' },
        { title: 'project detail', image: '/work/FiberMonitoringImages/projectDetail.png' },
        { title: 'add milestone photo', image: '/work/FiberMonitoringImages/addMilestone.png' },
        { title: 'add daily report', image: '/work/FiberMonitoringImages/addDailyReport.png' },
        { title: 'login white', image: '/work/FiberMonitoringImages/loginWhite.png' },
        { title: 'login black', image: '/work/FiberMonitoringImages/loginBlack.png' }
      ]
    },
    {
      title: 'Evalique',
      description: 'AI-powered assessment platform for creating, managing, and analyzing training evaluations.',
      technologies: ['Next.js', 'TypeScript', 'Go', 'PostgreSQL', 'Cerebras AI', 'Turborepo'],
      githubUrl: '#',
      type: 'real',
      features: {
        sections: [
          {
            title: 'AI-Powered Assessment Generator',
            items: [
              'Automatic question generation using Cerebras AI',
              'Supports Multiple Choice, True/False, Essay, Heading, Text, Divider',
              'Organized assessment structure with sections and context',
              'Customizable difficulty, topic, and question count'
            ]
          },
          {
            title: 'Google Spreadsheet Integration',
            items: [
              'Auto-sync assessment results to Google Sheets',
              'OAuth2 authentication with Google',
              'Real-time, manual, or scheduled sync options',
              'Structured data export with multiple sheets'
            ]
          },
          {
            title: 'Comprehensive Analytics & Insights',
            items: [
              'Real-time metrics: Visits, Submissions, Completion Rate',
              'Demographic breakdown: Devices, Browsers, OS, Locations',
              'Funnel Analysis and Drop-off tracking',
              'per-question performance analysis'
            ]
          },
          {
            title: 'Assessment Management',
            items: [
              'Question Bank with categories and competencies',
              'Various assessment types: Pre-training, Post-training, Skill evaluation',
              'Flexible scoring: Auto-scoring and Manual review'
            ]
          },
          {
            title: 'User & Access Management',
            items: [
              'RBAC (Admin, Training Admin, Assessor, Participant)',
              'Dynamic permissions per role',
              'Audit trails with GeoIP tracking',
              'JWT-based authentication with token rotation'
            ]
          }
        ]
      },
      image: [
        {
          title: 'banner',
          image: '/work/evalique/banner.png'
        },
        { title: 'Dashboard', image: '/work/evalique/Screenshot from 2026-01-27 20-08-53.webp' },
        { title: 'Assessment Builder', image: '/work/evalique/Screenshot from 2026-01-27 20-11-49.webp' },
        { title: 'Question Bank', image: '/work/evalique/Screenshot from 2026-01-27 20-12-00.webp' },
        { title: 'AI Generator', image: '/work/evalique/Screenshot from 2026-01-27 20-12-10.webp' },
        { title: 'Integration Settings', image: '/work/evalique/Screenshot from 2026-01-27 20-12-18.webp' },
        { title: 'Sync History', image: '/work/evalique/Screenshot from 2026-01-27 20-12-23.webp' },
        { title: 'Analytics Overview', image: '/work/evalique/Screenshot from 2026-01-27 20-12-33.webp' },
        { title: 'Funnel Analysis', image: '/work/evalique/Screenshot from 2026-01-27 20-12-48.webp' },
        { title: 'Submission Detail', image: '/work/evalique/Screenshot from 2026-01-27 20-12-54.webp' },
        { title: 'User Management', image: '/work/evalique/Screenshot from 2026-01-27 20-13-32.webp' },
        { title: 'Role Permissions', image: '/work/evalique/Screenshot from 2026-01-27 20-13-37.webp' },
        { title: 'Audit Logs', image: '/work/evalique/Screenshot from 2026-01-27 20-14-04.webp' }
      ]
    },
    {
      title: 'Portfolio Website',
      description: 'Interactive portfolio showcasing creative projects and experience with smooth animations.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: 'https://github.com/Kevin5621/portofolio-website-digital-marketer-2',
      type: 'real',
      features: {
        sections: [
          {
            title: 'Showcase',
            items: [
              'Animated project gallery with detailed pages',
              'Interactive project reveal effects',
              'Project metrics and achievements display'
            ]
          },
          {
            title: 'Experience & Skills',
            items: [
              'Professional experience timeline',
              'Skills slider with smooth animation',
              'Certificates and recognitions section'
            ]
          },
          {
            title: 'Contact',
            items: [
              'Contact form with validation',
              'Social media integration',
              'Responsive layout for all devices'
            ]
          }
        ]
      },
      image: [
        {
          title: 'banner',
          image: '/work/PortofolioMarketerImages/2.png'
        },
        { title: 'menu', image: '/work/PortofolioMarketerImages/Screenshot 2025-12-16 at 16-12-09 Adhara Eka - Portfolio.webp' },
        { title: 'quotes', image: '/work/PortofolioMarketerImages/Screenshot 2025-12-16 at 16-12-24 Adhara Eka - Portfolio.webp' },
        { title: 'experience', image: '/work/PortofolioMarketerImages/Screenshot 2025-12-16 at 16-12-38 Adhara Eka - Portfolio.webp' },
        { title: 'project list 1', image: '/work/PortofolioMarketerImages/Screenshot 2025-12-16 at 16-12-49 Adhara Eka - Portfolio.webp' },
        { title: 'project list 2', image: '/work/PortofolioMarketerImages/Screenshot 2025-12-16 at 16-13-18 Adhara Eka - Portfolio.webp' },
        { title: 'project detail', image: '/work/PortofolioMarketerImages/Screenshot 2025-12-16 at 16-13-44 Adhara Eka - Portfolio.webp' },
        { title: 'end', image: '/work/PortofolioMarketerImages/Screenshot 2025-12-16 at 16-14-40 Adhara Eka - Portfolio.webp' }
      ]
    },
    {
      title: 'SalesView',
      description: 'Healthcare CRM for managing leads, sales performance, and territory mapping.',
      technologies: ['Next.js', 'TypeScript', 'TanStack Query', 'Tailwind CSS', 'TurboRepo'],
      githubUrl: '#',
      type: 'real',
      features: {
        sections: [
          {
            title: 'Modern Architecture & High Performance',
            items: [
              'Next.js 16 App Router with Server-Side Rendering',
              'Monorepo structure using TurboRepo for modular development',
              'Efficient server state management with TanStack Query (caching & revalidation)',
              'Lightweight client state management with Zustand',
              'Responsive and interactive UI with Framer Motion animations'
            ]
          },
          {
            title: 'Advanced Data Visualization',
            items: [
              'Rich Sales Overview dashboard with comprehensive analytics',
              'Deep analytical charts using Recharts',
              'Leaflet Maps integration for sales territory mapping and accurate client location',
              'Real-time performance metrics and KPIs',
              'Interactive data tables and reports'
            ]
          },
          {
            title: 'Sales Management Features',
            items: [
              'Lead Management with lead scoring and tracking',
              'Sales Pipeline visualization with Kanban board',
              'Visit scheduling and management',
              'Task and reminder system',
              'Route optimization for field sales',
              'Customer account and contact management'
            ]
          },
          {
            title: 'Security & Validation',
            items: [
              'Full TypeScript implementation for type safety',
              'Zod schema validation for complex forms',
              'React Hook Form for form handling',
              'Strong type safety minimizing runtime errors',
              'Secure authentication and authorization'
            ]
          },
          {
            title: 'Consistent Design System',
            items: [
              'Tailwind CSS v4 for modern styling',
              'Radix UI headless components ensuring full accessibility',
              'Consistent design across the entire application',
              'Responsive design for desktop and mobile',
              'Dark/Light theme support'
            ]
          }
        ]
      },
      image: [
        {
          title: 'banner',
          image: '/work/salesview/banner.png'
        },
        { title: 'Dashboard Overview', image: '/work/salesview/Screenshot 2026-01-30 at 12-34-39 CRM Healthcare Platform.webp' },
        { title: 'Route Optimization', image: '/work/salesview/Screenshot 2026-01-30 at 12-34-52 CRM Healthcare Platform.webp' },
        { title: 'Lead Management', image: '/work/salesview/Screenshot 2026-01-30 at 12-35-16 CRM Healthcare Platform.webp' },
        { title: 'Sales Pipeline', image: '/work/salesview/Screenshot 2026-01-30 at 12-35-55 CRM Healthcare Platform.webp' },
        { title: 'Schedule Management', image: '/work/salesview/Screenshot 2026-01-30 at 12-36-06 CRM Healthcare Platform.webp' },
        { title: 'Visit Reports', image: '/work/salesview/Screenshot 2026-01-30 at 12-36-53 CRM Healthcare Platform.webp' },
        { title: 'Task Details', image: '/work/salesview/Screenshot 2026-01-30 at 12-38-03 CRM Healthcare Platform.webp' },
        { title: 'Product Analytics', image: '/work/salesview/Screenshot 2026-01-30 at 12-38-45 CRM Healthcare Platform.webp' },
        { title: 'Territory Management', image: '/work/salesview/Screenshot 2026-01-30 at 12-39-04 CRM Healthcare Platform.webp' },
        { title: 'AI Chatbot', image: '/work/salesview/Screenshot 2026-01-30 at 12-34-26 CRM Healthcare Platform.webp' }
      ]
    },
    {
      title: 'CRM Pharmaceutical',
      description: 'Healthcare CRM with AI insights, 20+ modules, and real-time analytics.',
      technologies: ['Go', 'Next.js', 'TypeScript', 'PostgreSQL', 'Cerebras AI'],
      githubUrl: '#',
      type: 'real',
      features: {
        sections: [
          {
            title: 'Backend Architecture & Security',
            items: [
              'Layered architecture (Handler → Service → Repository)',
              'Multi-level rate limiting (IP, email, global)',
              'JWT authentication with token rotation',
              'Role-based and permission-based access control (RBAC)',
              'CORS whitelist and HSTS security',
              'bcrypt password hashing',
              'WebSocket hub for real-time notifications',
              'Background workers for reminders and token cleanup',
              'Production-safe database migrations',
              'File storage abstraction (Local/R2)'
            ]
          },
          {
            title: 'Core CRM Modules',
            items: [
              'Account & Contact Management with categorization',
              'Lead Management with scoring (0-100) and conversion',
              'Sales Pipeline with Kanban board and deal tracking',
              'Product Management with categories and pricing',
              'Task & Reminder Management with priority levels',
              'Visit Reports with GPS tracking and photo uploads',
              'User Management with roles and permissions',
              'Dashboard with real-time KPIs and statistics',
              'Reports module with Excel export functionality',
              'Activity tracking and timeline visualization'
            ]
          },
          {
            title: 'AI & Analytics Features',
            items: [
              'AI Chatbot with Cerebras LLM integration',
              'Context-aware AI responses for CRM data',
              'Visit report analysis and insights',
              'AI settings management and model selection',
              'Sales funnel visualization and analytics',
              'Sales performance reports',
              'Pipeline forecasting and statistics',
              'Lead scoring and prioritization',
              'Real-time dashboard metrics',
              'Activity trends and visit statistics'
            ]
          },
          {
            title: 'Frontend Features',
            items: [
              'Feature-based architecture with TypeScript',
              'TanStack Query for server state management',
              'Zustand for client state management',
              'React Hook Form with Zod validation',
              'Responsive design with Tailwind CSS',
              'Dark/Light theme support',
              'Internationalization (i18n) with next-intl',
              'Real-time WebSocket notifications',
              'Drag-and-drop Kanban boards',
              'Data tables with sorting, filtering, and pagination',
              'Form validation and error handling',
              'Loading states and empty states'
            ]
          },
          {
            title: 'Infrastructure & DevOps',
            items: [
              'Docker support with multi-stage builds',
              'Docker Compose for development and production',
              'PostgreSQL database with GORM AutoMigrate',
              'Cloudflare R2 for production file storage',
              'Environment-based configuration',
              'Standalone Next.js build optimization',
              'Code splitting and image optimization',
              'Production-ready deployment configuration'
            ]
          }
        ]
      },
      image: [
        {
          title: 'banner',
          image: '/work/CRMFarmasi/banner.png'
        },
        {
          title: 'Dashboard Light',
          image: '/work/CRMFarmasi/dashboardLight.png'
        },
        {
          title: 'Dashboard Dark',
          image: '/work/CRMFarmasi/dashboardDark.png'
        },
        {
          title: 'User Management',
          image: '/work/CRMFarmasi/userManagement.jpg'
        },
        {
          title: 'Account & Contact Management',
          image: '/work/CRMFarmasi/accoutn&contactManager.jpg'
        },
        {
          title: 'Lead Management',
          image: '/work/CRMFarmasi/leadManagement.jpg'
        },
        {
          title: 'Sales Pipeline',
          image: '/work/CRMFarmasi/salesPipeline.jpg'
        },
        {
          title: 'Visit Reports',
          image: '/work/CRMFarmasi/visitReports.jpg'
        },
        {
          title: 'Task & Reminder Management',
          image: '/work/CRMFarmasi/taskReminder.jpg'
        },
        {
          title: 'Reports',
          image: '/work/CRMFarmasi/reports.jpg'
        },
        {
          title: 'AI Chatbot',
          image: '/work/CRMFarmasi/ai.jpg'
        },
        {
          title: 'AI Chatbot Insights',
          image: '/work/CRMFarmasi/ai2.jpg'
        }
      ]
    },
    {
      title: 'Internal ERP',
      description: 'Streamlined ERP system handling auth, complex data flows, and role-based access for operations.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
      githubUrl: '#',
      type: 'real',
      features: {
        sections: [
          {
            title: 'Features',
            items: [
              'Role-based access control',
              'Complex data management',
              'Employee and user management',
              'Financial modules (General Ledger, Budget)',
              'Purchase Orders and Goods Receipts'
            ]
          }
        ]
      },
      image: [
        {
           title: 'banner',
           image: '/work/erp/banner.png'
        },
        { title: 'Companies Data', image: '/work/erp/Screenshot 2026-01-29 at 19-35-56 Companies Data Master.webp' },
        { title: 'Quotations', image: '/work/erp/Screenshot 2026-01-29 at 19-36-36 Quotations Sales.webp' },
        { title: 'User Management', image: '/work/erp/Screenshot 2026-01-29 at 19-42-56 Role Access Management User Management.webp' },
        { title: 'Purchase Orders', image: '/work/erp/Screenshot 2026-01-29 at 19-38-54 Purchase Orders Purchase.webp' },
        { title: 'Employees', image: '/work/erp/Screenshot 2026-01-29 at 19-39-50 Employees Data Master.webp' },
        { title: 'Finance GL', image: '/work/erp/Screenshot 2026-01-29 at 19-46-15 General Ledger Finance.webp' }
      ]
    }
  ],
};
