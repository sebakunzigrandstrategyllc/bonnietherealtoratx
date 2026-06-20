import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturedListingsSection from '@/components/FeaturedListingsSection';
import ListingsIframeSection from '@/components/ListingsIframeSection';
import ContactSection from '@/components/ContactSection';

const Index: React.FC = () => {
  useEffect(() => {
    document.title = 'Bonnie The Realtor ATX | Trusted Austin, TX Real Estate Agent';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', "Buy or sell your Austin, TX home with Bonnie Francis — a trusted REALTOR® with All City Real Estate. Personal service, local expertise.");
  }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedListingsSection />
      <ListingsIframeSection />
      <ContactSection />
    </>
  );
};

export default Index;
