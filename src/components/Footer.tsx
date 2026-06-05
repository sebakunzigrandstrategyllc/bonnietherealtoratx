import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const trecImageUrl = "/lovable-uploads/c98e6f93-9d2d-420c-abad-12a078dadb92.png";
  const iabsPdfUrl = "/lovable-uploads/Information_about_Brokerage_Services_11032025.pdf";

  return (
    <footer className="bg-foreground text-background pt-16 pb-24 md:pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-3">Bonnie Francis</h3>
            <p className="text-background/70 text-sm leading-relaxed mb-5">
              Bilingual Austin Realtor® helping families find home across Greater Austin.
            </p>
            <img
              src="/lovable-uploads/e4db05f2-f1f2-425a-8669-bc04e89ab6b1.png"
              alt="All City Real Estate"
              className="h-16 w-auto bg-background/95 rounded-md p-2"
              loading="lazy"
            />
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-background/80">
              <li><a href="tel:5129230552" className="flex items-center gap-2 hover:text-background"><Phone className="h-4 w-4" /> (512) 923-0552</a></li>
              <li><a href="mailto:bfrancisagent60@gmail.com" className="flex items-center gap-2 hover:text-background"><Mail className="h-4 w-4" /> bfrancisagent60@gmail.com</a></li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" /> 10222 Pecan Park Blvd #10, Austin, TX 78729</li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="/#about" className="hover:text-background">About</a></li>
              <li><a href="/#services" className="hover:text-background">Services</a></li>
              <li><a href="/#listings-iframe" className="hover:text-background">Listings</a></li>
              <li><a href="/testimonials" className="hover:text-background">Testimonials</a></li>
              <li><a href="/#contact" className="hover:text-background">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* TREC compliance */}
        <div className="pt-8 border-t border-background/15 text-xs text-background/70 space-y-2">
          <p>
            TEXAS LAW REQUIRES ALL LICENSE HOLDERS TO PROVIDE THE{' '}
            <Dialog>
              <DialogTrigger asChild>
                <span className="underline cursor-pointer hover:text-background transition-colors">
                  INFORMATION ABOUT BROKERAGE SERVICES
                </span>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px] p-0">
                <DialogHeader className="p-6 pb-0">
                  <DialogTitle>Information About Brokerage Services</DialogTitle>
                </DialogHeader>
                <div className="p-6 pt-2">
                  <iframe src={iabsPdfUrl} title="Information About Brokerage Services" className="w-full h-[70vh] rounded-md border-0" />
                </div>
              </DialogContent>
            </Dialog>{' '}
            TO PROSPECTIVE CLIENTS.
          </p>
          <p>
            <Dialog>
              <DialogTrigger asChild>
                <span className="underline cursor-pointer hover:text-background transition-colors">CONSUMER PROTECTION NOTICE</span>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[700px] p-0">
                <DialogHeader className="p-6 pb-0">
                  <DialogTitle>Consumer Protection Notice</DialogTitle>
                </DialogHeader>
                <div className="p-6 pt-2 max-h-[80vh] overflow-y-auto">
                  <img src={trecImageUrl} alt="Consumer Protection Notice" className="w-full h-auto rounded-md" />
                </div>
              </DialogContent>
            </Dialog>
            : FOR YOUR PROTECTION, READ THE CONSUMER PROTECTION NOTICE.
          </p>
          <p className="pt-3">
            &copy; {currentYear} Bonnie The Realtor ATX. All rights reserved. Proudly affiliated with All City Real Estate. Equal Housing Opportunity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
