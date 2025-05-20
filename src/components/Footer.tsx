
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 bg-primary text-primary-foreground text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm">
          &copy; {currentYear} Bonnie The Realtor ATX. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Real Estate Services in Austin, Texas.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
