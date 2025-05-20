
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection'; // Import the new section
import FeaturedListingsSection from '@/components/FeaturedListingsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection /> {/* Add the new section here */}
        <FeaturedListingsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
