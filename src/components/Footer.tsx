
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 bg-primary text-primary-foreground text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <img src="/lovable-uploads/e4db05f2-f1f2-425a-8669-bc04e89ab6b1.png" alt="All City Real Estate Logo" className="h-10 w-auto mx-auto" />
        </div>
        <p className="text-sm">
          &copy; {currentYear} Bonnie The Realtor ATX. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Real Estate Services in Austin, Texas. Proudly affiliated with All City Real Estate.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
