
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

interface ListingCardProps {
  imageUrl: string;
  address: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  delay?: string;
}

const ListingCard: React.FC<ListingCardProps> = ({ imageUrl, address, price, beds, baths, sqft, delay = '0s' }) => {
  return (
    <div className="bg-card rounded-lg shadow-xl overflow-hidden flex flex-col animate-fade-in-up" style={{ animationDelay: delay }}>
      <img src={imageUrl} alt={address} className="w-full h-56 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-serif font-semibold text-primary mb-1">{price}</h3>
        <div className="flex items-center text-sm text-secondary mb-3">
          <MapPin size={16} className="mr-1 inline-block" />
          <span>{address}</span>
        </div>
        <div className="text-sm text-foreground mb-4 space-x-3">
          <span>{beds} Beds</span>
          <span>&bull;</span>
          <span>{baths} Baths</span>
          <span>&bull;</span>
          <span>{sqft.toLocaleString()} SqFt</span>
        </div>
        <div className="mt-auto">
          <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
