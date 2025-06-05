import { SitamaImages, SmartIrrigationImages } from "../components/ProjectCard/hooks/images";
import { Project } from "../components/ProjectCard/types";

export const projects: Project[] = [
    {
      title: 'Sitama',
      description: 'Education Platform that helps simplify internship management for students and lecturers at Politeknik Negeri Semarang. Features a dual-role system with specific functionalities for both students and supervising lecturers.',
      technologies: ['Dart', 'Laravel', 'SQL', 'Firebase'],
      githubUrl: 'https://github.com/Kevin5621/Sitama',
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
      title: 'IoT Smart Irrigation System',
      description: 'An IoT-based smart irrigation system that automates watering plants based on schedules or soil moisture thresholds. It also supports manual control for flexibility.',
      technologies: ['Dart', 'MQTT', 'ESP32', 'Soil Moisture Sensor', 'Relay Module'],
      githubUrl: 'https://github.com/Kevin5621/iot_smart_irigation',
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
    }
  ];