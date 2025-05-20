
import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming shadcn button

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1600&auto=format&fit=crop')" }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 p-8 max-w-3xl animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
          Bonnie The Realtor ATX
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8">
          Finding Your Perfect Home in Austin, Texas.
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold rounded-md transition-transform duration-300 hover:scale-105" onClick={() => document.getElementById('listings')?.scrollIntoView({ behavior: 'smooth' })}>
          View Featured Listings
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
