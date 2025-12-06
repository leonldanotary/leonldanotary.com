import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { SERVICES, ADP_LOGO } from '../constants';
import { Section, Button } from '../components/ui';
import { CheckCircle2, FileText, HelpCircle, Phone, ArrowLeft } from 'lucide-react';

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const isTax = service.id === 'tax-services';

  return (
    <>
      {/* Hero */}
      <div className={`relative ${isTax ? 'bg-slate-900' : 'bg-brand-text'} text-white py-24 px-4 overflow-hidden`}>
        {isTax && <div className="absolute top-0 right-0 w-2/3 h-full bg-blue-900/20 skew-x-12"></div>}
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/services" className="inline-flex items-center text-gray-400 hover:text-brand-gold mb-8 transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Back to Services
          </Link>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              {isTax && <div className="inline-block bg-brand-gold text-brand-text px-3 py-1 rounded font-bold text-sm mb-4">OFFICIAL ADP PARTNER</div>}
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">{service.shortDescription}</p>
            </div>
            <div className="w-32 md:w-48 p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
              <img src={service.iconUrl} alt={service.title} className="w-full h-auto drop-shadow-lg" />
            </div>
          </div>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-brand-text mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed text-lg">{service.fullDescription}</p>
              
              {isTax && (
                <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-6 flex flex-col sm:flex-row items-center gap-6">
                  <img src={ADP_LOGO} alt="ADP" className="h-12 w-auto" />
                  <div>
                    <h4 className="font-bold text-gray-900">Maximum Refund Guarantee</h4>
                    <p className="text-sm text-gray-600">If you find a larger refund with another preparer using the same info, we'll refund our fee.</p>
                  </div>
                </div>
              )}
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-text mb-6">Services Offered</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex p-4 border border-gray-100 rounded-lg bg-white shadow-sm hover:border-brand-gold/30 transition-colors">
                    <CheckCircle2 className="text-brand-red mr-3 shrink-0" size={20} />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-brand-text mb-6">The Process</h2>
              <div className="space-y-6">
                {[
                  "Free Consultation",
                  "Document Preparation & Review",
                  "Signing & Notarization (if required)",
                  "Filing & Processing"
                ].map((step, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-brand-text text-white flex items-center justify-center font-bold mr-4 shrink-0">
                      {idx + 1}
                    </div>
                    <span className="font-medium text-gray-800">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 sticky top-24">
              <h3 className="text-xl font-bold mb-2">Pricing</h3>
              <p className="text-3xl font-bold text-brand-red mb-6">{service.pricing}</p>
              <div className="space-y-3 mb-6">
                 <div className="flex items-center text-sm text-gray-600"><CheckCircle2 size={14} className="mr-2 text-green-500"/> Professional Preparation</div>
                 <div className="flex items-center text-sm text-gray-600"><CheckCircle2 size={14} className="mr-2 text-green-500"/> Fast Turnaround</div>
                 <div className="flex items-center text-sm text-gray-600"><CheckCircle2 size={14} className="mr-2 text-green-500"/> Expert Guidance</div>
              </div>
              <Button to="/contact" className="w-full">Get a Quote</Button>
              <div className="mt-4 text-center">
                <a href="tel:+16265550199" className="text-brand-gray text-sm hover:text-brand-red flex items-center justify-center">
                  <Phone size={14} className="mr-2" /> Or call us now
                </a>
              </div>
            </div>

            <div className="bg-brand-bg p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-brand-text mb-4 flex items-center"><HelpCircle size={18} className="mr-2" /> Need Help?</h3>
              <p className="text-sm text-gray-600 mb-4">Not sure if this is the right service for you? We offer free initial consultations to discuss your specific needs.</p>
              <Link to="/contact" className="text-brand-red text-sm font-semibold hover:underline">Contact Support</Link>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-brand-red text-white text-center">
         <h2 className="text-3xl font-bold mb-4">Start Your {service.title} Today</h2>
         <p className="mb-8 opacity-90">Professional, affordable, and trusted by thousands in West Covina.</p>
         <Button variant="secondary" to="/contact">Book Appointment</Button>
      </Section>
    </>
  );
};

export default ServiceDetail;
