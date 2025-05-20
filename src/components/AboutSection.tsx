
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=800&auto=format&fit=crop" // Placeholder for Bonnie's photo
              alt="Bonnie, Austin Realtor"
              className="rounded-lg shadow-xl w-full max-w-sm mx-auto md:max-w-none"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Meet Bonnie
            </h2>
            <p className="text-lg text-foreground mb-4">
              Welcome to Austin! I'm Bonnie, your dedicated real estate partner in this vibrant city. With years of experience and a deep love for Austin's unique neighborhoods, I'm committed to helping you find not just a house, but a place you can truly call home.
            </p>
            <p className="text-lg text-foreground mb-4">
              Whether you're buying your first home, seeking a luxury property, or looking to sell, I provide personalized service, expert market insights, and a seamless transaction process. My goal is to make your real estate journey enjoyable and successful.
            </p>
            <p className="text-lg text-foreground">
              Let's explore the Austin market together and find your perfect match!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
