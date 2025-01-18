import React from 'react';
import { ProjectCard } from './ProjectCard';
import { Project } from './types';

const projects: Project[] = [
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
      { title: 'Login', image: 'src/components/assets/screenshot/login.jpg' },
      { title: 'Dashboard Student', image: 'src/components/assets/screenshot/homeMahasiswa.jpg' },
      { title: 'Guidance', image: 'src/components/assets/screenshot/bimbingan.jpg' },
      { title: 'Logbook Page', image: 'src/components/assets/screenshot/logbook.jpg' },
      { title: 'Add Guidance', image: 'src/components/assets/screenshot/addBimbingan.jpg' },
      { title: 'Profile', image: 'src/components/assets/screenshot/profile.jpg' },
      { title: 'Dashboard Lecturer', image: 'src/components/assets/screenshot/homeDosen.jpg' },
      { title: 'Detail Student', image: 'src/components/assets/screenshot/detailStudent.jpg' },
      { title: 'Guidance Action', image: 'src/components/assets/screenshot/actionBimbingan.jpg' },
      { title: 'Score Page', image: 'src/components/assets/screenshot/detailNilai.jpg' }
    ]
  },
  {
    title: 'Healthify',
    description: 'A health tracking app that helps users monitor their fitness and wellness goals. Includes features for calorie tracking, exercise planning, and health reports.',
    technologies: ['React Native', 'Firebase', 'TypeScript', 'Node.js'],
    githubUrl: 'https://github.com/example/healthify',
    features: {
      sections: [
        {
          title: 'User Features',
          items: [
            'Track daily calorie intake',
            'Log workouts and physical activities',
            'Set and monitor weight loss goals',
            'View personalized health reports',
            'Integrate with wearable devices'
          ]
        },
        {
          title: 'Premium Features',
          items: [
            'Access to advanced fitness plans',
            'Personalized meal recommendations',
            'One-on-one sessions with a nutritionist',
            'Detailed body composition analysis',
            'Priority support'
          ]
        }
      ]
    },
    image: [
      { title: 'Login', image: 'src/components/assets/screenshot/login.jpg' },
      { title: 'Dashboard Student', image: 'src/components/assets/screenshot/homeMahasiswa.jpg' },
      { title: 'Guidance', image: 'src/components/assets/screenshot/bimbingan.jpg' },
      { title: 'Logbook Page', image: 'src/components/assets/screenshot/logbook.jpg' },
      { title: 'Add Guidance', image: 'src/components/assets/screenshot/addBimbingan.jpg' },
      { title: 'Profile', image: 'src/components/assets/screenshot/profile.jpg' },
      { title: 'Dashboard Lecturer', image: 'src/components/assets/screenshot/homeDosen.jpg' },
      { title: 'Detail Student', image: 'src/components/assets/screenshot/detailStudent.jpg' },
      { title: 'Guidance Action', image: 'src/components/assets/screenshot/actionBimbingan.jpg' },
      { title: 'Score Page', image: 'src/components/assets/screenshot/detailNilai.jpg' }
    ]
  },
  {
    title: 'CryptoVault',
    description: 'A secure cryptocurrency wallet and asset management platform. Built on Web3 principles, it allows users to store, send, and receive crypto assets while managing their DeFi investments securely.',
    technologies: ['React', 'Solidity', 'Web3.js', 'Ethereum', 'IPFS'],
    githubUrl: 'https://github.com/example/cryptovault',
    features: {
      sections: [
        {
          title: 'Core Features',
          items: [
            'Create and manage multiple wallets',
            'Send and receive cryptocurrencies securely',
            'View real-time token balances and prices',
            'Integrate with Metamask and WalletConnect',
            'Backup wallet using mnemonic phrases'
          ]
        },
        {
          title: 'DeFi Features',
          items: [
            'Stake tokens to earn rewards',
            'Swap tokens using decentralized exchanges (DEX)',
            'Monitor liquidity pool investments',
            'Participate in governance voting',
            'View historical transaction data'
          ]
        },
        {
          title: 'Security Features',
          items: [
            'Encrypt private keys using AES-256',
            'Biometric authentication (FaceID/Fingerprint)',
            'Multi-signature wallet support',
            'IPFS-based secure file storage',
            'Regular smart contract audits'
          ]
        }
      ]
    },
    image: [
      { title: 'Login', image: 'src/components/assets/screenshot/login.jpg' },
      { title: 'Dashboard Student', image: 'src/components/assets/screenshot/homeMahasiswa.jpg' },
      { title: 'Guidance', image: 'src/components/assets/screenshot/bimbingan.jpg' },
      { title: 'Logbook Page', image: 'src/components/assets/screenshot/logbook.jpg' },
      { title: 'Add Guidance', image: 'src/components/assets/screenshot/addBimbingan.jpg' },
      { title: 'Profile', image: 'src/components/assets/screenshot/profile.jpg' },
      { title: 'Dashboard Lecturer', image: 'src/components/assets/screenshot/homeDosen.jpg' },
      { title: 'Detail Student', image: 'src/components/assets/screenshot/detailStudent.jpg' },
      { title: 'Guidance Action', image: 'src/components/assets/screenshot/actionBimbingan.jpg' },
      { title: 'Score Page', image: 'src/components/assets/screenshot/detailNilai.jpg' }
    ]
  },
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-100 dark:bg-dark transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};