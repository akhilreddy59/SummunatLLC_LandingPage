
import React from 'react';
import { 
  Code2, 
  Palette, 
  TrendingUp, 
  Cpu, 
  Rocket, 
  ShieldCheck, 
  Users, 
  Clock 
} from 'lucide-react';
import { Service, CaseStudy, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Custom Development',
    category: 'Dev',
    description: 'Scalable web and mobile applications tailored to your business needs.',
    icon: 'Code2',
    details: ['Full-stack Web Development', 'Mobile App (iOS/Android)', 'API Integration', 'Cloud Migration']
  },
  {
    id: 's2',
    title: 'UI/UX Design',
    category: 'Design',
    description: 'Human-centric designs that drive engagement and build brand loyalty.',
    icon: 'Palette',
    details: ['User Research', 'Wireframing & Prototyping', 'Visual Identity', 'Design Systems']
  },
  {
    id: 's3',
    title: 'Digital Marketing',
    category: 'Marketing',
    description: 'Data-driven growth strategies to amplify your online presence.',
    icon: 'TrendingUp',
    details: ['SEO Optimization', 'Content Strategy', 'Social Media Management', 'Paid Advertising']
  },
  {
    id: 's4',
    title: 'AI Solutions',
    category: 'AI',
    description: 'Implementing cutting-edge machine learning to automate workflows.',
    icon: 'Cpu',
    details: ['LLM Integration', 'Predictive Analytics', 'Natural Language Processing', 'Computer Vision']
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs1',
    title: 'FinTech Revolution',
    tag: 'Financial Services',
    description: 'A comprehensive banking platform built for the modern generation.',
    // Optimized: using .webp extension
    image: 'https://picsum.photos/seed/fintech/800/1000.webp', 
    techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    impact: 'Increased user retention by 45% and reduced transaction processing time by 60%.',
    liveUrl: '#'
  },
  {
    id: 'cs2',
    title: 'E-commerce AI Agent',
    tag: 'Retail',
    description: 'Intelligent shopping assistant that predicts customer preferences.',
    // Optimized: using .webp extension
    image: 'https://picsum.photos/seed/retail/800/1000.webp',
    techStack: ['Python', 'TensorFlow', 'React Native', 'OpenAI'],
    impact: 'Generated $1.2M in incremental revenue within the first 6 months.',
    liveUrl: '#'
  },
  {
    id: 'cs3',
    title: 'Healthcare Connect',
    tag: 'HealthTech',
    description: 'Telemedicine solution connecting rural areas with specialists.',
    // Optimized: using .webp extension
    image: 'https://picsum.photos/seed/health/800/1000.webp',
    techStack: ['Next.js', 'WebRTC', 'Redis', 'Docker'],
    impact: 'Facilitated over 50,000 successful remote consultations in one year.',
    liveUrl: '#'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'CEO at CloudScale',
    quote: 'SAMMUNAT transformed our legacy system into a high-performance cloud infrastructure. Their attention to detail is unmatched.',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
    rating: 5
  },
  {
    id: 't2',
    name: 'Michael Chen',
    role: 'Product Lead at InnovateX',
    quote: 'The AI solutions provided by SAMMUNAT gave us a significant edge in our market. Highly professional and technically proficient.',
    avatar: 'https://i.pravatar.cc/150?u=michael',
    rating: 5
  },
  {
    id: 't3',
    name: 'Elena Rodriguez',
    role: 'Founder of EcoStart',
    quote: 'Our brand identity was completely revamped. The design team understands the nuances of modern aesthetics perfectly.',
    avatar: 'https://i.pravatar.cc/150?u=elena',
    rating: 5
  }
];

export const TRUST_INDICATORS = [
  { icon: Rocket, label: 'Projects Delivered', value: 250, suffix: '+' },
  { icon: Users, label: 'Happy Clients', value: 120, suffix: '+' },
  { icon: Clock, label: 'Years Experience', value: 8, suffix: '' },
  { icon: ShieldCheck, label: 'Success Rate', value: 99, suffix: '%' }
];

export const PROCESS_STEPS = [
  { title: 'Discovery', desc: 'Deep dive into your business goals and user needs.' },
  { title: 'Strategy', desc: 'Crafting a roadmap for design and development.' },
  { title: 'Execution', desc: 'Agile development with continuous feedback loops.' },
  { title: 'Launch', desc: 'Seamless deployment and post-launch optimization.' }
];

export const SERVICE_ICONS: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-6 h-6" />,
  Palette: <Palette className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
};
