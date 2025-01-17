export interface Screenshot {
  title: string;
  image: string;
}

export interface Project {
  title: string;
  description: string;
  image: Screenshot[];
  technologies: string[];
  githubUrl: string;
}