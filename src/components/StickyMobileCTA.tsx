import React from 'react';
import { Phone, MessageSquare, Mail } from 'lucide-react';

const StickyMobileCTA: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur border-t border-border shadow-elegant">
      <div className="grid grid-cols-3 divide-x divide-border">
        <a
          href="tel:5129230552"
          className="flex flex-col items-center justify-center py-3 text-primary hover:bg-accent/40 transition-smooth"
        >
          <Phone className="h-5 w-5" />
          <span className="text-[11px] mt-1 font-medium">Call</span>
        </a>
        <a
          href="sms:5129230552"
          className="flex flex-col items-center justify-center py-3 text-primary hover:bg-accent/40 transition-smooth"
        >
          <MessageSquare className="h-5 w-5" />
          <span className="text-[11px] mt-1 font-medium">Text</span>
        </a>
        <a
          href="#contact"
          className="flex flex-col items-center justify-center py-3 text-primary hover:bg-accent/40 transition-smooth"
        >
          <Mail className="h-5 w-5" />
          <span className="text-[11px] mt-1 font-medium">Email</span>
        </a>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
