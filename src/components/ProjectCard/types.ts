
export interface ProjectFeatureSection {
  title: string;
  items: string[];
}

export interface ProjectFeatures {
  sections: ProjectFeatureSection[];
}

export interface ProjectMedia {
  image?: string;
  video?: string;
  title: string;
  bannerLight?: string;
  bannerDark?: string;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  image: ProjectMedia[];
  technologies: string[];
  githubUrl: string;
  features?: ProjectFeatures;
  isVisible: boolean;
}

export interface CardAnimationState {
  showTitle: boolean;
  showDescription: boolean;
  showReadMore: boolean;
  showTechnologies: boolean;
  showImage: boolean;
  showContent: boolean;
  showNavButtons: boolean;
  buttonsVisible: boolean;
  titleFinished: boolean;
  descriptionFinished: boolean;
  readMoreFinished: boolean;
  technologiesFinished: boolean;
  cardVisible: boolean;
}

export interface MediaState {
  currentImageIndex: number;
  isFullscreen: boolean;
  isPlaying: boolean;
  preloadedImages: Set<string>;
}

export interface CardStyleProps {
  isHovered: boolean;
  isEntering: boolean;
  isTransitioning: boolean;
  cardVisible: boolean;
  scrollProgress: number;
  theme: string;
}

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
}

export interface ProjectCardProps extends Project {
    index: number;
    isVisible: boolean;
    typewriterDelay: number;
}