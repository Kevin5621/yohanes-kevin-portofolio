export interface Screenshot {
    image?: string;
    video?: string;
    title: string;
    bannerLight?: string;
    bannerDark?: string;
  }
  
  export interface ProjectFeatures {
    sections: {
      title: string;
      items: string[];
    }[];
  }
  
  export interface Project {
    title: string;
    description: string;
    image: Screenshot[];
    technologies: string[];
    githubUrl: string;
    features?: ProjectFeatures;
    type: 'real' | 'playground';
  }
  
  export interface ProjectCardProps extends Project {
    index: number;
    isVisible: boolean;
    typewriterDelay: number;
    theme: string;
  }