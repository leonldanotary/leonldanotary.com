import React from 'react';
import { Section, SectionHeader, Button } from '../components/ui';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const ServicesPage = () => {
  return (
    <>
      <div className="bg-brand-text text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
           <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Legal Services</h1>
           <p className="text-xl text-gray-400">Comprehensive document assistance for all your legal needs</p>
        </div>
      </div>

      <Section>
        <div className="space-y-24">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
              <div className="lg:w-1/2">
                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex items-center justify-center h-full min-h-[300px]">
                   <img src={service.iconUrl} alt={service.title} className="max-w-[200px] w-full h-auto drop-shadow-md transform hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                   <span className="w-12 h-1 bg-brand-gold mr-4"></span>
                   <span className="text-brand-red font-bold uppercase tracking-wider text-sm">Professional Service</span>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-brand-text">{service.title}</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {service.fullDescription}
                </p>
                <div className="mb-8">
                  <h3 className="font-semibold text-gray-900 mb-4">Key Features:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map(feature => (
                      <div key={feature} className="flex items-center text-gray-600 text-sm">
                        <CheckCircle2 size={16} className="text-brand-gold mr-2 shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-6">
                   <Button variant="primary" to={service.path}>
                     Learn More
                   </Button>
                   <span className="text-gray-500 font-medium">
                     {service.pricing}
                   </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-red text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Why Choose Professional Document Assistance?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 text-left">
             <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="font-bold text-xl mb-3 text-brand-gold">Significant Cost Savings</h3>
                <p className="text-red-100">Save 70-90% compared to attorney fees while ensuring your documents are professional and compliant.</p>
             </div>
             <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="font-bold text-xl mb-3 text-brand-gold">Expertise & Accuracy</h3>
                <p className="text-red-100">Avoid costly mistakes common with DIY forms. We ensure every checkbox and line is correct.</p>
             </div>
             <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="font-bold text-xl mb-3 text-brand-gold">Personalized Service</h3>
                <p className="text-red-100">Unlike online algorithms, we sit down with you to understand your specific situation.</p>
             </div>
             <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="font-bold text-xl mb-3 text-brand-gold">Time Efficiency</h3>
                <p className="text-red-100">We handle the complexity and procedure so you can focus on moving forward with your life.</p>
             </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ServicesPage;
