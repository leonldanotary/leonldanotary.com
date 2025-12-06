import React, { useState } from 'react';
import { Section, SectionHeader } from '../components/ui';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = Array.from(new Set(FAQS.map(f => f.category)));
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredFaqs = activeCategory === "All" ? FAQS : FAQS.filter(f => f.category === activeCategory);

  return (
    <>
      <div className="bg-brand-text text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
           <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
           <p className="text-xl text-gray-400">Common questions about our services and process</p>
        </div>
      </div>

      <Section>
        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
           <button 
             onClick={() => setActiveCategory("All")}
             className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === "All" ? 'bg-brand-red text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
           >
             All Questions
           </button>
           {categories.map(cat => (
             <button 
               key={cat}
               onClick={() => setActiveCategory(cat)}
               className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat ? 'bg-brand-red text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
             >
               {cat}
             </button>
           ))}
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors focus:outline-none"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {isOpen ? <ChevronUp className="text-brand-red" size={20} /> : <ChevronDown className="text-gray-400" size={20} />}
                </button>
                <div 
                  className={`px-6 bg-gray-50 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                >
                  <div className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {faq.answer}
                  </div>
                  {activeCategory === "All" && (
                    <span className="inline-block mt-3 text-xs font-bold text-brand-gold uppercase tracking-wider">{faq.category}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </>
  );
};

export default FaqPage;
