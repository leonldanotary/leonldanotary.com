import { ReactNode } from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconUrl: string;
  path: string;
  features: string[];
  pricing?: string;
  heroImage?: string; // Optional placeholder for hero background
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface NavItem {
  label: string;
  path: string;
  dropdown?: NavItem[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface TrustBadge {
  icon: ReactNode;
  title: string;
  description: string;
}
