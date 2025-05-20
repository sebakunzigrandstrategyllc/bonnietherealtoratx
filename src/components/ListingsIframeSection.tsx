
import React from 'react';

const ListingsIframeSection: React.FC = () => {
  return (
    <section id="listings-iframe" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
            Browse Listings
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            All listings powered by All City Real Estate.
          </p>
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="aspect-w-16 aspect-h-9 border border-border rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://allcityrealestate.com/listings/"
              title="Real Estate Listings"
              className="w-full h-[600px] md:h-[800px]" // Adjusted height for better viewing
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <p className="mt-4 text-xs text-center text-muted-foreground">
            Note: This is an embedded view of listings from All City Real Estate. For the best experience, you may want to visit their site directly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ListingsIframeSection;
