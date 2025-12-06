import React from 'react';
import { Section, SectionHeader, Button } from '../components/ui';
import { FileText, Download, ExternalLink } from 'lucide-react';

const ResourcesPage = () => {
  const downloads = [
    { title: "Living Trust Planning Guide", desc: "Complete guide to estate planning basics." },
    { title: "Divorce Process Checklist", desc: "Step-by-step checklist for California divorce." },
    { title: "Small Claims Guide", desc: "Everything you need to know about small claims." },
    { title: "Tax Prep Checklist", desc: "Documents needed for your tax appointment." }
  ];

  const links = [
    { title: "California Courts Self-Help", url: "#" },
    { title: "IRS Tax Resources", url: "#" },
    { title: "USCIS Forms", url: "#" },
    { title: "CA Secretary of State", url: "#" }
  ];

  return (
    <>
      <div className="bg-brand-text text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
           <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources</h1>
           <p className="text-xl text-gray-400">Helpful guides, forms, and external links</p>
        </div>
      </div>

      <Section>
        <SectionHeader title="Free Downloads" subtitle="Guides to help you prepare for your consultation" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {downloads.map((item, idx) => (
             <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center group">
               <div className="inline-flex p-3 bg-red-50 text-brand-red rounded-full mb-4 group-hover:bg-brand-red group-hover:text-white transition-colors">
                 <FileText size={24} />
               </div>
               <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
               <p className="text-sm text-gray-500 mb-4">{item.desc}</p>
               <Button variant="outline" className="w-full text-sm py-2">
                 <Download size={14} className="mr-2" /> Download
               </Button>
             </div>
           ))}
        </div>
      </Section>

      <Section className="bg-gray-50">
        <SectionHeader title="Helpful Links" subtitle="Government and legal resources" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {links.map((link, idx) => (
            <a key={idx} href={link.url} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-brand-gold hover:shadow-sm transition-all group">
              <span className="font-medium text-gray-700 group-hover:text-brand-text">{link.title}</span>
              <ExternalLink size={16} className="text-gray-400 group-hover:text-brand-gold" />
            </a>
          ))}
        </div>
      </Section>
    </>
  );
};

export default ResourcesPage;
