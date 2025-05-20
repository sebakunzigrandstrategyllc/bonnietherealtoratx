
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react'; // Icon for external link

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531218150217-54595bc2b934?q=80&w=1600&auto=format&fit=crop')" }}>
      {/* This URL is a placeholder for an Austin-specific image. You can replace it later. */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Main Hero Content */}
      <div className="relative z-10 p-8 max-w-3xl animate-fade-in-up flex-grow flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
          Your Trusted Austin Realtor
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8">
          Let's find your dream property in the heart of Texas.
        </p>
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold rounded-md transition-transform duration-300 hover:scale-105"
          // onClick={() => { /* TODO: Implement scheduling functionality or link */ }}
        >
          Schedule a Call
        </Button>
      </div>

      {/* Property Search Placeholder Section */}
      <div className="relative z-10 w-full py-12 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
            Search for Properties
          </h2>
          <div className="bg-card p-6 rounded-lg shadow-xl max-w-2xl mx-auto">
            <p className="text-muted-foreground mb-4">
              Property search widget coming soon! Or, explore listings on your favorite platform:
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button variant="outline" size="lg" className="w-full sm:w-auto hover:bg-accent/10" onClick={() => window.open('https://www.zillow.com/austin-tx/', '_blank')}>
                <ExternalLink className="mr-2 h-5 w-5" />
                View on Zillow
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto hover:bg-accent/10" onClick={() => window.open('https://www.realtor.com/realestateandhomes-search/Austin_TX', '_blank')}>
                <ExternalLink className="mr-2 h-5 w-5" />
                View on Realtor.com
              </Button>
            </div>
            {/* Placeholder for an embedded search widget if preferred */}
            {/* <div className="mt-6 h-64 bg-muted rounded-md flex items-center justify-center text-muted-foreground">
              [Real Estate Property Search Widget Placeholder]
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
