import React from 'react';
import { Section, SectionHeader } from '../components/ui';
import { Shield, Award, Heart, Users } from 'lucide-react';

const AboutPage = () => {
  return (
    <>
      <div className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
           <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
           <p className="text-xl text-gray-400">Your trusted partner for legal document assistance in West Covina</p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           <div>
             <h2 className="text-3xl font-bold mb-6 text-brand-text">Over 15 Years of Dedicated Service</h2>
             <p className="text-gray-600 mb-4 leading-relaxed">
               Founded over 15 years ago, Leon LDA Services & Notary has been dedicated to providing accessible, professional legal document assistance to families and businesses throughout West Covina and surrounding communities.
             </p>
             <p className="text-gray-600 mb-4 leading-relaxed">
               We understand that navigating the legal system can be overwhelming and expensive. That's why we're committed to offering expert guidance at affordable prices, helping thousands of clients successfully complete their legal matters with confidence.
             </p>
             <p className="text-gray-600 leading-relaxed">
               As certified Legal Document Assistants (LDAs) and authorized ADP tax professionals, we combine extensive knowledge with personalized service. Every client receives individual attention and clear guidance throughout their entire process.
             </p>
           </div>
           <div className="relative">
             <div className="absolute inset-0 bg-brand-gold rounded-2xl transform rotate-3"></div>
             <img 
               src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
               alt="Team meeting" 
               className="relative rounded-2xl shadow-xl w-full h-auto"
             />
           </div>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <SectionHeader title="Our Values" centered />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
           {[
             { title: "Integrity", desc: "We uphold the highest ethical standards in every interaction.", icon: Shield },
             { title: "Excellence", desc: "We're committed to accuracy, quality, and professionalism.", icon: Award },
             { title: "Compassion", desc: "We understand the challenges our clients face and treat everyone with empathy.", icon: Heart },
             { title: "Accessibility", desc: "We make professional legal assistance affordable and available to all.", icon: Users },
           ].map((val, idx) => (
             <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center p-4 bg-brand-red/10 text-brand-red rounded-full mb-6">
                  <val.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-text">{val.title}</h3>
                <p className="text-gray-600 text-sm">{val.desc}</p>
             </div>
           ))}
        </div>
      </Section>

      <Section>
        <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
             <div className="w-32 h-32 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden">
                <img src="https://files.leonldanotary.com/LEONLOGO.png" alt="Leon" className="w-full h-full object-contain p-2" />
             </div>
             <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-brand-text mb-2">Leon</h2>
                <p className="text-brand-red font-semibold mb-4">Founder & Lead Legal Document Assistant</p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
                   {["Certified LDA", "ADP Authorized", "Notary Public", "15+ Years Experience"].map(tag => (
                     <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">{tag}</span>
                   ))}
                </div>
                <p className="text-gray-600 italic">
                  "Our mission is to provide accessible, professional legal document assistance that empowers individuals and families to navigate their legal matters with confidence and peace of mind."
                </p>
             </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default AboutPage;
