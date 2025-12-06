import { ServiceItem, Testimonial, FaqItem, NavItem, StatItem } from './types';

export const COMPANY_INFO = {
  name: "Leon LDA Services & Notary",
  tagline: "Expert Legal Assistance When You Need It Most",
  phone: "(626) 555-0199", // Placeholder
  email: "info@leonldanotary.com",
  address: "West Covina, CA 91790",
  hours: "Mon-Fri 9:00 AM - 5:00 PM",
  logo: "https://files.leonldanotary.com/LEONLOGO.png",
};

export const NAVIGATION: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { 
    label: 'Services', 
    path: '/services',
    dropdown: [
      { label: 'Family Law', path: '/services/family-law' },
      { label: 'Living Trust', path: '/services/living-trust' },
      { label: 'Small Claims', path: '/services/small-claims' },
      { label: 'Document Serving', path: '/services/document-serving' },
      { label: 'Notary Services', path: '/services/notary-services' },
      { label: 'Tax Services', path: '/services/tax-services' },
      { label: 'Translation', path: '/services/translation' },
    ]
  },
  { label: 'Resources', path: '/resources' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

export const STATS: StatItem[] = [
  { value: "15+", label: "Years Experience" },
  { value: "5000+", label: "Clients Served" },
  { value: "100%", label: "Satisfaction Rate" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'family-law',
    title: "Family Law Documents",
    shortDescription: "Navigate family legal matters with confidence. We provide compassionate assistance for divorce, custody, and support documents.",
    fullDescription: "Family legal matters are deeply personal and often emotionally challenging. We provide compassionate, professional document preparation services for all aspects of family law, helping you navigate divorce, custody, support, and other family legal issues with dignity and confidence. Our experienced team ensures your documents are prepared accurately and filed correctly, giving you peace of mind.",
    iconUrl: "https://files.leonldanotary.com/FAMILYLAWICON.png",
    path: "/services/family-law",
    features: ["Divorce Petitions & Responses", "Child Custody Agreements", "Support Modifications", "Domestic Partnership", "Restraining Orders", "Name Changes"],
    pricing: "Starting at $399"
  },
  {
    id: 'living-trust',
    title: "Living Trusts & Estate",
    shortDescription: "Protect your legacy. Our comprehensive estate planning services ensure your wishes are honored and probate is avoided.",
    fullDescription: "Proper estate planning ensures your wishes are honored, your loved ones are provided for, and your assets are protected. Our comprehensive living trust services help you avoid probate, minimize taxes, and maintain control of your estate. Whether you're planning for the future or updating existing documents, we provide expert guidance every step of the way.",
    iconUrl: "https://files.leonldanotary.com/LIVINGTRUSTICON.png",
    path: "/services/living-trust",
    features: ["Living Trust Creation", "Will Preparation", "Power of Attorney", "Healthcare Directives", "Guardian Designations", "Pour-Over Wills"],
    pricing: "Packages starting at $599"
  },
  {
    id: 'small-claims',
    title: "Small Claims Court",
    shortDescription: "Seek justice for disputes up to $10,000. We guide you through the small claims process with expert document preparation.",
    fullDescription: "Small claims court provides an accessible way to resolve disputes without the cost of hiring an attorney. Whether you're seeking compensation for unpaid debts, property damage, contract breaches, or other grievances up to $10,000, we guide you through every step of the process with professional document preparation and procedural guidance.",
    iconUrl: "https://files.leonldanotary.com/SMALLCLAIMICON.png",
    path: "/services/small-claims",
    features: ["Claims Filing & Service", "Response Preparation", "Court Procedure Guidance", "Evidence Organization", "Post-Judgment Services"],
    pricing: "Starting at $199"
  },
  {
    id: 'document-serving',
    title: "Document Serving",
    shortDescription: "Reliable, court-compliant document delivery. Our registered process servers ensure your documents are served properly.",
    fullDescription: "Proper service of legal documents is critical to the success of any legal proceeding. Our registered process servers ensure your documents are served correctly, on time, and in full compliance with California law. We provide professional, discreet service with complete proof of service for court filing.",
    iconUrl: "https://files.leonldanotary.com/DOCSERVINGICO.png",
    path: "/services/document-serving",
    features: ["Personal Service", "Substituted Service", "Proof of Service Filing", "Rush Service Available", "Skip Tracing"],
    pricing: "Starting at $75"
  },
  {
    id: 'notary-services',
    title: "Notary Services",
    shortDescription: "Certified notary services including mobile notary. Available evenings and weekends by appointment.",
    fullDescription: "As a commissioned California Notary Public, we provide professional notarization services for all your important documents. Whether you need a quick acknowledgment, jurat, or certified copy, we ensure every notarization is performed accurately. Mobile notary service available for your convenience.",
    iconUrl: "https://files.leonldanotary.com/NOTARYICON.png",
    path: "/services/notary-services",
    features: ["Mobile Notary Service", "Loan Signing Agent", "Apostille Services", "Acknowledgments & Jurats", "Same-Day Availability"],
    pricing: "$15 per signature + travel fee"
  },
  {
    id: 'tax-services',
    title: "Tax Preparation",
    shortDescription: "Maximize your refund with ADP-powered tax preparation. Professional, accurate, and backed by audit protection.",
    fullDescription: "As an official ADP tax professional, we bring you the power of industry-leading tax software combined with personalized service. Trust in the same technology that serves millions of businesses nationwide to maximize your refund and ensure compliance.",
    iconUrl: "https://files.leonldanotary.com/TAXADPICON.png",
    path: "/services/tax-services",
    features: ["Individual & Business Taxes", "Maximum Refund Guarantee", "E-File & Fast Refunds", "Audit Defense Protection", "Year-Round Support"],
    pricing: "Starting at $150"
  },
  {
    id: 'translation',
    title: "Translation Services",
    shortDescription: "Professional translation for legal documents and official records. Certified translations accepted by courts and USCIS.",
    fullDescription: "When accuracy matters, trust our professional translation services. We provide certified translations for legal documents, immigration paperwork, academic records, and more. Our translations are accepted by USCIS, courts, universities, and government agencies throughout the United States.",
    iconUrl: "https://files.leonldanotary.com/TRANSLATIONICON.png",
    path: "/services/translation",
    features: ["Certified Translations", "Legal Documents", "USCIS Accepted", "Fast Turnaround", "Notarized Certification"],
    pricing: "Starting at $45/page"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Maria S.",
    role: "Family Law Client",
    content: "Leon helped me through my divorce with such professionalism and compassion. The process was smooth and affordable. I couldn't have done it without their guidance.",
    rating: 5
  },
  {
    id: 2,
    name: "James R.",
    role: "Tax Services Client",
    content: "Best tax service I've ever used! Got a bigger refund than expected and the ADP system made everything so easy. Highly recommend!",
    rating: 5
  },
  {
    id: 3,
    name: "Robert & Linda T.",
    role: "Estate Planning Clients",
    content: "Creating our living trust was seamless. Leon explained everything clearly and made sure we understood each step. Peace of mind achieved!",
    rating: 5
  }
];

export const FAQS: FaqItem[] = [
  { category: "General", question: "What is a Legal Document Assistant (LDA)?", answer: "A Legal Document Assistant is a non-lawyer authorized by the state to assist with legal document preparation. We can prepare documents, provide information about procedures, and file documents, but we cannot provide legal advice or represent you in court." },
  { category: "General", question: "How are you different from an attorney?", answer: "Attorneys provide legal advice and representation. We focus on document preparation and procedural guidance at a fraction of attorney costs. For straightforward matters, LDA services are often all you need." },
  { category: "Family Law", question: "How long does a divorce take in California?", answer: "California has a mandatory 6-month waiting period from the time the respondent is served. The actual time depends on whether it's contested and court schedules." },
  { category: "Living Trusts", question: "What's the difference between a will and a living trust?", answer: "Wills go through probate (court process), become public record, and only take effect after death. Living trusts avoid probate, remain private, and can manage assets if you become incapacitated." },
  { category: "Tax Services", question: "When is the tax filing deadline?", answer: "April 15th for most taxpayers. Extensions available until October 15th." },
  { category: "Notary", question: "Do you provide mobile notary service?", answer: "Yes! We come to your home, office, hospital, or anywhere you need us." },
];

export const ADP_LOGO = "https://files.leonldanotary.com/ADPLOGO.png";