
import React from 'react';

const ListingsIframeSection: React.FC = () => {
  return (
    <section id="listings-iframe" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
            Browse Listings
          </h2>
          <div className="mt-2 flex items-center justify-center text-sm text-muted-foreground">
            <span className="mr-2">All listings powered by</span>
            <img src="/lovable-uploads/e4db05f2-f1f2-425a-8669-bc04e89ab6b1.png" alt="All City Real Estate Logo" className="h-6 w-auto" />
          </div>
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
