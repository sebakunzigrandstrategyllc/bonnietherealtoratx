import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrustStrip from '@/components/TrustStrip';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import NeighborhoodsSection from '@/components/NeighborhoodsSection';
import FeaturedListingsSection from '@/components/FeaturedListingsSection';
import ListingsIframeSection from '@/components/ListingsIframeSection';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import ProcessSection from '@/components/ProcessSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <TrustStrip />
        <AboutSection />
        <ServicesSection />
        <NeighborhoodsSection />
        <FeaturedListingsSection />
        <TestimonialsCarousel />
        <ProcessSection />
        <ListingsIframeSection />
        <ContactSection />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
};

export default Index;
