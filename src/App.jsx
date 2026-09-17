import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSpread from './components/HeroSpread';
import StatementSpread from './components/StatementSpread';
import ProjectGallery from './components/ProjectGallery';
import ArchiveView from './components/ArchiveView';
import Lightbox from './components/Lightbox';
import AboutDrawer from './components/AboutDrawer';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';
import { ARCHIVE_CATALOG } from './data/portfolioData';

export default function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [inquiryPrint, setInquiryPrint] = useState(null);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleNavigate = (section) => {
    setCurrentSection(section);
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (section === 'projects') {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'archive') {
      const el = document.getElementById('archive');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Find next and prev image for lightbox
  const handleNextImage = () => {
    if (!selectedImage) return;
    const currentIndex = ARCHIVE_CATALOG.findIndex(item => item.image === selectedImage.url);
    if (currentIndex !== -1 && currentIndex < ARCHIVE_CATALOG.length - 1) {
      const nextItem = ARCHIVE_CATALOG[currentIndex + 1];
      setSelectedImage({
        title: nextItem.title,
        url: nextItem.image,
        caption: `${nextItem.series} • ${nextItem.dimensions}`,
        year: nextItem.year,
        exif: `${nextItem.medium} (${nextItem.edition})`
      });
    } else {
      const first = ARCHIVE_CATALOG[0];
      setSelectedImage({
        title: first.title,
        url: first.image,
        caption: `${first.series} • ${first.dimensions}`,
        year: first.year,
        exif: `${first.medium} (${first.edition})`
      });
    }
  };

  const handlePrevImage = () => {
    if (!selectedImage) return;
    const currentIndex = ARCHIVE_CATALOG.findIndex(item => item.image === selectedImage.url);
    if (currentIndex > 0) {
      const prevItem = ARCHIVE_CATALOG[currentIndex - 1];
      setSelectedImage({
        title: prevItem.title,
        url: prevItem.image,
        caption: `${prevItem.series} • ${prevItem.dimensions}`,
        year: prevItem.year,
        exif: `${prevItem.medium} (${prevItem.edition})`
      });
    } else {
      const last = ARCHIVE_CATALOG[ARCHIVE_CATALOG.length - 1];
      setSelectedImage({
        title: last.title,
        url: last.image,
        caption: `${last.series} • ${last.dimensions}`,
        year: last.year,
        exif: `${last.medium} (${last.edition})`
      });
    }
  };

  const handleInquirePrint = (image) => {
    setInquiryPrint(image);
    setIsContactOpen(true);
  };

  return (
    <div className="site-wrapper">
      <Header 
        currentSection={currentSection}
        onNavigate={handleNavigate}
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenContact={() => {
          setInquiryPrint(null);
          setIsContactOpen(true);
        }}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main className="main-content">
        {/* Spread 1: "LE VOYAGE" — Reference Top Spread */}
        <HeroSpread onSelectImage={setSelectedImage} />

        {/* Spread 2: Photographer Bio & Tri-Photo Row — Reference Bottom Spread */}
        <StatementSpread onSelectImage={setSelectedImage} />

        {/* Monograph Series Showcase */}
        <ProjectGallery onSelectImage={setSelectedImage} />

        {/* Complete Studio Archive & Registry */}
        <ArchiveView onSelectImage={setSelectedImage} />
      </main>

      <Footer 
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenContact={() => {
          setInquiryPrint(null);
          setIsContactOpen(true);
        }}
      />

      {/* Lightbox / High-Res Focus Mode */}
      <Lightbox 
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
        onInquire={handleInquirePrint}
      />

      {/* Artist Information & Exhibition Slide-Over */}
      <AboutDrawer 
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        onOpenContact={() => {
          setInquiryPrint(null);
          setIsContactOpen(true);
        }}
      />

      {/* Acquisition & Commission Inquiry Drawer */}
      <ContactModal 
        isOpen={isContactOpen}
        onClose={() => {
          setIsContactOpen(false);
          setInquiryPrint(null);
        }}
        selectedPrint={inquiryPrint}
      />
    </div>
  );
}
