import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import './i18n';

import Navbar from './components/NavBar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lang = i18n.resolvedLanguage || i18n.language || 'en';
    document.documentElement.dir = i18n.dir(lang);
    document.documentElement.lang = lang;
  }, [i18n.resolvedLanguage, i18n.language, i18n]);

  return (
    <div className="app-shell">
      <a href="#main-content" className="skip-to-content">
        {t('accessibility.skipToContent', 'Skip to main content')}
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <Gallery />
        <Services />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
