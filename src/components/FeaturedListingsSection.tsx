
import React from 'react';
import ListingCard from './ListingCard';

const listings = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=800&auto=format&fit=crop',
    address: '123 Modern Way, Austin, TX 78704',
    price: '$1,250,000',
    beds: 4,
    baths: 3,
    sqft: 2800,
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop', // Another placeholder
    address: '456 Downtown View, Austin, TX 78701',
    price: '$875,000',
    beds: 2,
    baths: 2,
    sqft: 1500,
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop', // Yet another placeholder
    address: '789 Lakeside Dr, Austin, TX 78746',
    price: '$2,100,000',
    beds: 5,
    baths: 4.5,
    sqft: 4200,
  },
];

const FeaturedListingsSection: React.FC = () => {
  return (
    <section id="listings" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 animate-fade-in-up">
            Featured Listings
          </h2>
          <p className="text-lg text-secondary animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Discover a selection of exceptional properties in Austin.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((listing, index) => (
            <ListingCard key={listing.address} {...listing} delay={`${index * 0.2}s`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListingsSection;
