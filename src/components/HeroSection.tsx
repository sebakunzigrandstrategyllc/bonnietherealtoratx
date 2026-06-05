import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, ExternalLink, MapPin } from 'lucide-react';
import heroImage from '@/assets/hero-austin.jpg';

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center overflow-hidden grain"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Austin Texas neighborhood at sunset"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'var(--gradient-hero)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/15 backdrop-blur text-primary-foreground/95 text-sm font-medium border border-primary-foreground/20">
            <MapPin className="h-3.5 w-3.5" />
            Austin · Round Rock · Cedar Park · Pflugerville
          </span>

          <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-serif font-semibold text-primary-foreground text-balance leading-[1.05]">
            Your home in Austin,
            <span className="block italic font-normal text-primary-foreground/90">
              found with heart.
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-primary-foreground/90 max-w-xl leading-relaxed">
            I'm Bonnie Francis — a bilingual Realtor® helping families across Greater
            Austin buy, sell, and rent with care, clarity, and zero pressure.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button
              size="lg"
              asChild
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-elegant text-base px-6"
            >
              <a href="tel:5129230552">
                <Phone className="h-4 w-4" />
                Call (512) 923-0552
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary text-base px-6"
            >
              <a href="#listings-iframe">
                <ExternalLink className="h-4 w-4" />
                Browse Listings
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-primary-foreground/85 text-sm"
          >
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground/70" />
              10+ years serving Austin
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground/70" />
              Bilingual — English & Spanish
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground/70" />
              All City Real Estate
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
