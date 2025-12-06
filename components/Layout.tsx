import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, Facebook, Linkedin, Instagram } from 'lucide-react';
import { COMPANY_INFO, NAVIGATION, SERVICES } from '../constants';
import { Button } from './ui';

const TopBar = () => (
  <div className="bg-brand-text text-gray-300 text-sm py-2 hidden md:block">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <div className="flex space-x-6">
        <span className="flex items-center hover:text-brand-gold transition-colors">
          <Phone size={14} className="mr-2" /> {COMPANY_INFO.phone}
        </span>
        <span className="flex items-center hover:text-brand-gold transition-colors">
          <Mail size={14} className="mr-2" /> {COMPANY_INFO.email}
        </span>
        <span className="flex items-center hover:text-brand-gold transition-colors">
          <MapPin size={14} className="mr-2" /> {COMPANY_INFO.address}
        </span>
      </div>
      <div className="flex space-x-4">
        <span>{COMPANY_INFO.hours}</span>
        <div className="flex space-x-3 border-l border-gray-600 pl-4">
          <a href="#" className="hover:text-brand-gold"><Facebook size={14} /></a>
          <a href="#" className="hover:text-brand-gold"><Instagram size={14} /></a>
          <a href="#" className="hover:text-brand-gold"><Linkedin size={14} /></a>
        </div>
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white shadow-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={COMPANY_INFO.logo} alt={COMPANY_INFO.name} className="h-12 w-auto md:h-14" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAVIGATION.map((item) => (
              <div key={item.label} className="relative group">
                <Link 
                  to={item.path} 
                  className={`flex items-center text-sm font-medium transition-colors hover:text-brand-red ${
                    location.pathname === item.path ? 'text-brand-red' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                  {item.dropdown && <ChevronDown size={14} className="ml-1" />}
                </Link>
                
                {item.dropdown && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left">
                    <div className="py-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-brand-red"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex">
            <Button variant="primary" to="/contact" className="px-5 py-2 text-sm">
              Free Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-brand-red focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100 shadow-inner">
          {NAVIGATION.map((item) => (
            <div key={item.label}>
              <Link
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.path ? 'text-brand-red bg-red-50' : 'text-gray-700 hover:text-brand-red hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
              {item.dropdown && (
                <div className="pl-6 space-y-1">
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.path}
                      to={subItem.path}
                      className="block px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-brand-red hover:bg-gray-50"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 pb-2">
            <Button variant="primary" to="/contact" className="w-full text-center justify-center">
              Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-brand-text text-white pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Col 1: About */}
        <div>
          <div className="mb-6 bg-white p-2 rounded w-fit">
            <img src={COMPANY_INFO.logo} alt="Leon LDA Services" className="h-10 w-auto" />
          </div>
          <p className="text-gray-400 mb-6 text-sm leading-relaxed">
            Professional legal document assistance services in West Covina, California. Your trusted partner for family law, estate planning, notary services, and more.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>

        {/* Col 2: Services */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-white border-b-2 border-brand-red inline-block pb-1">Services</h3>
          <ul className="space-y-3">
            {SERVICES.slice(0, 5).map(service => (
              <li key={service.id}>
                <Link to={service.path} className="text-gray-400 hover:text-brand-gold transition-colors text-sm">
                  {service.title}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/services/tax-services" className="text-gray-400 hover:text-brand-gold transition-colors text-sm">
                Tax Preparation
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-white border-b-2 border-brand-red inline-block pb-1">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link to="/about" className="text-gray-400 hover:text-brand-gold transition-colors text-sm">About Us</Link></li>
            <li><Link to="/resources" className="text-gray-400 hover:text-brand-gold transition-colors text-sm">Resources</Link></li>
            <li><Link to="/faq" className="text-gray-400 hover:text-brand-gold transition-colors text-sm">FAQ</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-brand-gold transition-colors text-sm">Contact Us</Link></li>
            <li><Link to="/intake" className="text-gray-400 hover:text-brand-gold transition-colors text-sm">Client Intake Form</Link></li>
          </ul>
        </div>

        {/* Col 4: Contact */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-white border-b-2 border-brand-red inline-block pb-1">Contact Info</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Phone className="mt-1 mr-3 text-brand-red shrink-0" size={18} />
              <span className="text-gray-400 text-sm">{COMPANY_INFO.phone}</span>
            </li>
            <li className="flex items-start">
              <Mail className="mt-1 mr-3 text-brand-red shrink-0" size={18} />
              <span className="text-gray-400 text-sm">{COMPANY_INFO.email}</span>
            </li>
            <li className="flex items-start">
              <MapPin className="mt-1 mr-3 text-brand-red shrink-0" size={18} />
              <span className="text-gray-400 text-sm">{COMPANY_INFO.address}</span>
            </li>
            <li className="mt-4 pt-4 border-t border-gray-800">
              <p className="text-gray-500 text-xs italic">
                Leon LDA Services is not a law firm and cannot provide legal advice. We are authorized Legal Document Assistants. For legal advice, consult a licensed attorney.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="#" className="text-gray-500 hover:text-white text-sm">Privacy Policy</Link>
          <Link to="#" className="text-gray-500 hover:text-white text-sm">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <TopBar />
    <Navbar />
    <main className="flex-grow">
      {children}
    </main>
    <Footer />
  </div>
);
