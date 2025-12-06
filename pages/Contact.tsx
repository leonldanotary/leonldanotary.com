import React from 'react';
import { Section, SectionHeader, Button } from '../components/ui';
import { COMPANY_INFO } from '../constants';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <>
      <div className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
           <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
           <p className="text-xl text-gray-400">Get in touch for a free consultation</p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-brand-text mb-8">Get In Touch</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
               <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <Phone className="text-brand-red mb-4" size={24} />
                  <h3 className="font-bold mb-2">Phone</h3>
                  <p className="text-gray-600 mb-2">{COMPANY_INFO.phone}</p>
                  <span className="text-xs text-brand-gold font-semibold">Call or Text Anytime</span>
               </div>
               <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <Mail className="text-brand-red mb-4" size={24} />
                  <h3 className="font-bold mb-2">Email</h3>
                  <p className="text-gray-600 mb-2 break-all">{COMPANY_INFO.email}</p>
                  <span className="text-xs text-brand-gold font-semibold">24hr Response Time</span>
               </div>
               <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <MapPin className="text-brand-red mb-4" size={24} />
                  <h3 className="font-bold mb-2">Location</h3>
                  <p className="text-gray-600 mb-2">{COMPANY_INFO.address}</p>
                  <span className="text-xs text-brand-gold font-semibold">Serving LA County</span>
               </div>
               <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <Clock className="text-brand-red mb-4" size={24} />
                  <h3 className="font-bold mb-2">Hours</h3>
                  <p className="text-gray-600 mb-2">{COMPANY_INFO.hours}</p>
                  <span className="text-xs text-brand-gold font-semibold">Weekend by Appt.</span>
               </div>
            </div>
            
            <div className="bg-brand-text text-white p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Service Areas</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                We proudly serve West Covina, Covina, Baldwin Park, La Puente, Azusa, Glendora, Pomona, Walnut, Diamond Bar, El Monte, San Dimas, and surrounding Los Angeles County areas.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h3 className="text-2xl font-bold mb-6 text-brand-text">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition" placeholder="Doe" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition" placeholder="(555) 123-4567" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Interested In</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition bg-white">
                   <option>Select a Service...</option>
                   <option>Family Law</option>
                   <option>Living Trust</option>
                   <option>Small Claims</option>
                   <option>Tax Services</option>
                   <option>Notary</option>
                   <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition" placeholder="How can we help you?"></textarea>
              </div>

              <Button type="submit" className="w-full">Send Message</Button>
              <p className="text-xs text-gray-500 text-center mt-4">We respect your privacy. Your information is kept strictly confidential.</p>
            </form>
          </div>
        </div>
      </Section>
      
      {/* Map Placeholder */}
      <div className="h-96 w-full bg-gray-200 relative">
        <iframe 
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.158732800412!2d-117.9389!3d34.0686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2d665f4c4a4e5%3A0x6284793836858169!2sWest%20Covina%2C%20CA%2091790!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
          width="100%" 
          height="100%" 
          style={{border:0}} 
          allowFullScreen 
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default ContactPage;
