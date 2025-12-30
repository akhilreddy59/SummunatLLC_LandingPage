
export interface Service {
  id: string;
  title: string;
  description: string;
  category: 'Dev' | 'Design' | 'Marketing' | 'AI';
  icon: string;
  details: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  tag: string;
  description: string;
  image: string;
  techStack: string[];
  impact: string;
  liveUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  requirement: string;
  budget: string;
  message: string;
}
