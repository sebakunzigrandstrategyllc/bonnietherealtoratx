import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturedListingsSection from '@/components/FeaturedListingsSection';
import ListingsIframeSection from '@/components/ListingsIframeSection';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <FeaturedListingsSection />
        <TestimonialsCarousel />
        <ListingsIframeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
