export interface ProjectImage {
  title: string;
  image: string;
}

export interface WorkResultProject {
  title: string;
  description: string;
  technologies: string[];
  image: ProjectImage[];
}

export const workResultsProjects: WorkResultProject[] = [
    {
      title: 'Internal ERP',
      description: 'Streamlined ERP system handling auth, complex data flows, and role-based access for operations.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
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
    },
    {
      title: 'SalesView',
      description: 'Healthcare CRM for managing leads, sales performance, and territory mapping.',
      technologies: ['Next.js', 'TypeScript', 'TanStack Query', 'Tailwind CSS', 'TurboRepo'],
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
      title: 'Sitama',
      description: 'Dual-role internship management platform for students and lecturers at Politeknik Negeri Semarang.',
      technologies: ['Dart', 'Laravel', 'SQL', 'Firebase'],
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
      title: 'CRM Pharmaceutical',
      description: 'Healthcare CRM with AI insights, 20+ modules, and real-time analytics.',
      technologies: ['Go', 'Next.js', 'TypeScript', 'PostgreSQL', 'Cerebras AI'],
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
      title: 'OriginStamp',
      description: 'A revolutionary Proof of Human Process protocol built on the Internet Computer (ICP), addressing the fundamental crisis of trust in the digital creative economy.',
      technologies: ['Next.js', 'Rust', 'ICP', 'SCSS', 'ITCSS', 'React', 'TypeScript'],
      image: [
        {
          title: 'banner',
          image: '/work/originstamp/banner.png'
        },
        { title: 'Dashboard Overview', image: '/work/originstamp/Screenshot from 2026-01-31 09-47-34.webp' },
        { title: 'Route Optimization', image: '/work/originstamp/Screenshot from 2026-01-31 09-47-54.webp' },
        { title: 'Lead Management', image: '/work/originstamp/Screenshot from 2026-01-31 09-48-31.webp' },
      ]
    },
    {
      title: 'CleanLink',
      description: 'SAAS product for laundry management and POS integrated with IoT for automatic machine control and Midtrans payment gateway.',
      technologies: ['Next.js', 'TypeScript', 'IoT Integration', 'Midtrans', 'SaaS'],
      image: [
        {
          title: 'banner',
          image: '/work/cleanlink/banner.png'
        },
        { title: 'Landing Page', image: '/work/cleanlink/Screenshot 2026-01-31 at 09-26-39 CleanLink - Laundry Service Management System.webp' },
        { title: 'Admin Dashboard', image: '/work/cleanlink/Screenshot 2026-01-31 at 09-32-16 Admin Dashboard Laundry Management.webp' },
        { title: 'Owner Dashboard', image: '/work/cleanlink/Screenshot 2026-01-31 at 09-32-39 Dashboard Owner.webp' },
        { title: 'Branch Management', image: '/work/cleanlink/Screenshot 2026-01-31 at 09-34-02 Branch Management Owner.webp' },
        { title: 'Order Management', image: '/work/cleanlink/Screenshot 2026-01-31 at 09-34-39 Order Management Owner Dashboard.webp' },
        { title: 'Device Management', image: '/work/cleanlink/Screenshot 2026-01-31 at 09-37-40 Device Management Owner.webp' },
        { title: 'Landing Page 2', image: '/work/cleanlink/Screenshot 2026-01-31 at 09-38-37 CleanLink - Laundry Service Management System.webp' }
      ]
    },
];
