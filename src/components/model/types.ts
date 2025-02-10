export interface Screenshot {
  image?: string;
  video?: string;
  title: string;
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