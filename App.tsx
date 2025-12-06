import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import ContactPage from './pages/Contact';
import FaqPage from './pages/FAQ';
import ResourcesPage from './pages/Resources';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const IntakePlaceholder = () => (
    <div className="py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Client Intake</h1>
        <p>Intake form module placeholder.</p>
    </div>
);

const App = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/intake" element={<IntakePlaceholder />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
