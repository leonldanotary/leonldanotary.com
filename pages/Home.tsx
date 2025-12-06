import React from 'react';
import { Shield, Clock, Award, FileCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { Section, SectionHeader, Button, StarRating, Badge } from '../components/ui';
import { SERVICES, STATS, TESTIMONIALS, ADP_LOGO } from '../constants';
import { Link } from 'react-router-dom';

const Hero = () => (
  <div className="relative bg-gradient-to-br from-brand-red via-red-800 to-brand-text text-white overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
      <div className="max-w-3xl">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in-up">
          <Award className="w-5 h-5 text-brand-gold mr-2" />
          <span className="text-sm font-medium text-brand-gold">Trusted Legal Document Professionals</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          Expert Legal Assistance <br/>
          <span className="text-brand-gold">When You Need It Most</span>
        </h1>
        <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
          Professional legal document preparation, notary services, and comprehensive support for families and businesses in West Covina and surrounding areas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button variant="secondary" to="/contact" className="text-lg px-8">Schedule Consultation</Button>
          <Button variant="outline" to="/services" className="text-lg px-8 border-white text-white hover:bg-white hover:text-brand-red">Explore Services</Button>
        </div>
        <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
          {STATS.map((stat, idx) => (
            <div key={idx}>
              <div className="text-3xl font-bold text-brand-gold mb-1">{stat.value}</div>
              <div className="text-sm text-gray-300 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const TrustIndicators = () => (
  <div className="bg-white shadow-lg relative z-20 -mt-10 mx-4 md:mx-auto max-w-7xl rounded-xl p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div className="flex items-center space-x-4">
      <div className="p-3 bg-red-50 rounded-lg text-brand-red"><FileCheck size={32} /></div>
      <div>
        <h3 className="font-bold text-gray-900">Licensed LDAs</h3>
        <p className="text-sm text-gray-500">Certified Professionals</p>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <div className="p-3 bg-yellow-50 rounded-lg text-yellow-600"><Award size={32} /></div>
      <div>
        <h3 className="font-bold text-gray-900">ADP Authorized</h3>
        <p className="text-sm text-gray-500">Official Partner</p>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <div className="p-3 bg-blue-50 rounded-lg text-blue-600"><Shield size={32} /></div>
      <div>
        <h3 className="font-bold text-gray-900">Confidential</h3>
        <p className="text-sm text-gray-500">Privacy Priority</p>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <div className="p-3 bg-green-50 rounded-lg text-green-600"><Clock size={32} /></div>
      <div>
        <h3 className="font-bold text-gray-900">Fast Service</h3>
        <p className="text-sm text-gray-500">Same-Day Available</p>
      </div>
    </div>
  </div>
);

const ServicesOverview = () => (
  <Section className="bg-gray-50">
    <SectionHeader 
      title="Comprehensive Legal Services" 
      subtitle="From family matters to business needs, we provide expert assistance across all your legal document requirements." 
    />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {SERVICES.map((service) => (
        <div key={service.id} className={`bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group ${service.id === 'tax-services' ? 'border-brand-gold border-2 relative overflow-hidden' : ''}`}>
           {service.id === 'tax-services' && (
             <div className="absolute top-0 right-0 bg-brand-gold text-brand-text text-xs font-bold px-3 py-1 rounded-bl-lg">ADP PARTNER</div>
           )}
          <div className="mb-6 h-16 w-16 p-3 bg-gray-50 rounded-xl group-hover:bg-brand-red group-hover:text-white transition-colors">
            <img src={service.iconUrl} alt={service.title} className="w-full h-full object-contain" />
          </div>
          <h3 className="text-xl font-bold text-brand-text mb-3">{service.title}</h3>
          <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">{service.shortDescription}</p>
          <ul className="space-y-2 mb-6">
            {service.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-center text-sm text-gray-500">
                <CheckCircle2 size={16} className="text-brand-gold mr-2" /> {feature}
              </li>
            ))}
          </ul>
          <Link to={service.path} className="inline-flex items-center text-brand-red font-semibold hover:text-brand-darkRed">
            Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      ))}
    </div>
  </Section>
);

const AdpPartnership = () => (
  <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 skew-x-12 transform origin-top-right"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2">
          <Badge color="gold">OFFICIAL ADP PARTNER</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-6">Authorized ADP Tax Professional</h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            We bring you the power of industry-leading tax software combined with personalized service. Trust in the same technology that serves millions of businesses nationwide.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {['Certified Tax Preparation', 'Maximum Refund Guarantee', 'Advanced ADP Software', 'Audit Defense Protection'].map(item => (
              <div key={item} className="flex items-center">
                <CheckCircle2 className="text-brand-gold mr-2" size={20} />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
          <Button variant="secondary" to="/services/tax-services">Explore Tax Services</Button>
        </div>
        <div className="lg:w-5/12 flex justify-center">
          <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center">
             <img src={ADP_LOGO} alt="ADP Logo" className="w-48 mx-auto mb-6" />
             <p className="text-gray-600 mb-6 text-sm">Experience the security and accuracy of enterprise-grade tax filing.</p>
             <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <p className="text-brand-text font-bold text-2xl mb-1">Max Refund</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Guaranteed</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <Section className="bg-brand-text text-white" light={false}>
    <SectionHeader title="What Our Clients Say" subtitle="Real stories from people we've helped." centered lightText />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {TESTIMONIALS.map((t) => (
        <div key={t.id} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
          <StarRating rating={t.rating} />
          <p className="mt-6 text-gray-300 italic leading-relaxed">"{t.content}"</p>
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="font-bold text-white">{t.name}</p>
            <p className="text-sm text-brand-gold">{t.role}</p>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

const CallToAction = () => (
  <section className="bg-brand-red text-white py-20 text-center px-4">
    <div className="max-w-4xl mx-auto">
      <div className="inline-block p-4 bg-white/10 rounded-full mb-6 text-brand-gold">
        <Shield size={40} />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
      <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">
        Take the first step towards resolving your legal matters. Contact us today for a free consultation.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button variant="secondary" to="/contact" className="text-lg">Schedule Free Consultation</Button>
        <Button variant="outline" to="/contact" className="text-lg border-white text-white hover:bg-white hover:text-brand-red">Call Now</Button>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-red-200">
        <span className="flex items-center"><CheckCircle2 size={16} className="mr-1" /> Same-Day Appointments</span>
        <span className="flex items-center"><CheckCircle2 size={16} className="mr-1" /> Flexible Payments</span>
        <span className="flex items-center"><CheckCircle2 size={16} className="mr-1" /> Free Initial Consultation</span>
      </div>
    </div>
  </section>
);

const HomePage = () => (
  <>
    <Hero />
    <TrustIndicators />
    <ServicesOverview />
    <AdpPartnership />
    <Testimonials />
    <CallToAction />
  </>
);

export default HomePage;
