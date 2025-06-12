import { 
    SiReact, SiNextdotjs, SiTailwindcss, SiTypescript,
    SiNodedotjs, SiExpress,
    SiFlutter, SiGit, SiDocker,
    SiGo,
    SiSolidity,
    SiSupabase,
  } from 'react-icons/si';
  import { Framework, ProgrammingSkill } from './types';
  
  export const frameworks: Framework[] = [
    // Frontend
    { name: 'React', icon: SiReact, color: 'text-blue-500' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-800 dark:text-gray-200' },
    { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-500' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
    { name: 'Flutter', icon: SiFlutter, color: 'text-blue-400' },
  
    // Backend
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
    { name: 'Express', icon: SiExpress, color: 'text-gray-800 dark:text-gray-200' },
    { name: 'Golang', icon: SiGo, color: 'text-blue-500' },
    { name: 'Supabase', icon: SiSupabase, color: 'text-green-500' },
    { name: 'Solidity', icon: SiSolidity, color: 'text-gray-500' },
  
    // Version Control
    { name: 'Git', icon: SiGit, color: 'text-orange-600' },
  
    // Containerization & DevOps
    { name: 'Docker', icon: SiDocker, color: 'text-blue-600' },
  ];
  
  export const programmingSkills: ProgrammingSkill[] = [
    { name: 'JavaScript', level: 70, color: 'bg-yellow-500' },
    { name: 'TypeScript', level: 80, color: 'bg-blue-600' },
    { name: 'Python', level: 65, color: 'bg-blue-500' },
    { name: 'Dart', level: 90, color: 'bg-cyan-500' },
    { name: 'Go', level: 40, color: 'bg-blue-400' },
    { name: 'Solidity', level: 60, color: 'bg-gray-600' },
  ];