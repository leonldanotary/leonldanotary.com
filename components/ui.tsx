import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  to?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', to, className = '', onClick, type = "button" }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1";
  
  const variants = {
    primary: "border-transparent text-white bg-gradient-to-r from-brand-red to-brand-darkRed hover:from-red-600 hover:to-red-800",
    secondary: "border-transparent text-brand-text bg-brand-gold hover:bg-brand-darkGold",
    outline: "border-brand-red text-brand-red bg-transparent hover:bg-brand-red hover:text-white",
    ghost: "border-transparent text-brand-gray hover:text-brand-red shadow-none hover:shadow-none hover:translate-y-0"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={combinedClasses} onClick={onClick}>
      {children}
    </button>
  );
};

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  light?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id, light = true }) => (
  <section id={id} className={`py-16 md:py-24 ${light ? 'bg-brand-bg' : 'bg-white'} ${className}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </section>
);

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  lightText?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, centered = true, lightText = false }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <h2 className={`text-3xl md:text-4xl font-bold tracking-tight mb-4 ${lightText ? 'text-white' : 'text-brand-text'}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg max-w-2xl mx-auto ${lightText ? 'text-gray-200' : 'text-brand-gray'}`}>
        {subtitle}
      </p>
    )}
  </div>
);

export const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex space-x-1 text-brand-gold">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={16} fill={i < rating ? "currentColor" : "none"} className={i < rating ? "" : "text-gray-300"} />
    ))}
  </div>
);

export const Badge: React.FC<{ children: React.ReactNode; color?: 'red' | 'gold' | 'blue' }> = ({ children, color = 'gold' }) => {
  const colors = {
    red: 'bg-red-100 text-red-800 border-red-200',
    gold: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    blue: 'bg-blue-100 text-blue-800 border-blue-200'
  };
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${colors[color]}`}>
      {children}
    </span>
  );
};
