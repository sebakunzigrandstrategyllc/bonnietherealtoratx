import React from 'react';
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const credentials = [
  { abbr: 'GRI', full: "Graduate, REALTOR® Institute" },
  { abbr: 'AHWD', full: 'At Home With Diversity' },
  { abbr: 'ABR', full: "Accredited Buyer's Representative" },
  { abbr: 'EHO', full: 'Equal Housing Opportunity' },
  { abbr: 'REALTOR®', full: 'Member, National Association of REALTORS®' },
  { abbr: 'MLS', full: 'Multiple Listing Service' },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const trecImageUrl = "/lovable-uploads/c98e6f93-9d2d-420c-abad-12a078dadb92.png";
  const iabsPdfUrl = "/lovable-uploads/Information_about_Brokerage_Services_11032025.pdf";

  return (
    <footer className="py-10 bg-primary text-primary-foreground text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <img
            src="/lovable-uploads/e4db05f2-f1f2-425a-8669-bc04e89ab6b1.png"
            alt="All City Real Estate Logo"
            loading="lazy"
            decoding="async"
            className="h-24 w-auto mx-auto"
          />
        </div>

        <p className="text-xs">
          Real Estate Services in Austin, Texas. Proudly affiliated with All City Real Estate.
        </p>

        {/* Quick links */}
        <nav className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs">
          <Link to="/" className="underline-offset-2 hover:underline">Home</Link>
          <span aria-hidden="true" className="opacity-40">·</span>
          <a href="/#about" className="underline-offset-2 hover:underline">About</a>
          <span aria-hidden="true" className="opacity-40">·</span>
          <a href="/#listings-iframe" className="underline-offset-2 hover:underline">Listings</a>
          <span aria-hidden="true" className="opacity-40">·</span>
          <Link to="/testimonials" className="underline-offset-2 hover:underline">Testimonials</Link>
          <span aria-hidden="true" className="opacity-40">·</span>
          <a href="/#contact" className="underline-offset-2 hover:underline">Contact</a>
        </nav>

        {/* Credentials & Affiliations */}
        <div className="mt-6 pt-6 border-t border-primary-foreground/20">
          <p className="text-[11px] uppercase tracking-widest opacity-80 mb-3">
            Credentials &amp; Affiliations
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {credentials.map((c) => (
              <li
                key={c.abbr}
                title={c.full}
                aria-label={c.full}
                className="px-3 py-1.5 rounded-full border border-primary-foreground/30 text-xs font-semibold tracking-wide bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors"
              >
                {c.abbr}
              </li>
            ))}
          </ul>
        </div>

        {/* TREC Compliance */}
        <div className="mt-6 pt-6 border-t border-primary-foreground/20 max-w-3xl mx-auto">
          <p className="text-xs">
            TEXAS LAW REQUIRES ALL LICENSE HOLDERS TO PROVIDE THE{' '}
            <Dialog>
              <DialogTrigger asChild>
                <button type="button" className="underline cursor-pointer hover:text-primary-foreground/80 transition-colors">
                  INFORMATION ABOUT BROKERAGE SERVICES
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px] p-0">
                <DialogHeader className="p-6 pb-0">
                  <DialogTitle>Information About Brokerage Services</DialogTitle>
                </DialogHeader>
                <div className="p-6 pt-2 max-h-[80vh] overflow-y-auto">
                  <iframe src={iabsPdfUrl} title="Information About Brokerage Services" className="w-full h-[70vh] rounded-md border-0" />
                </div>
              </DialogContent>
            </Dialog>
            {' '}TO PROSPECTIVE CLIENTS.
          </p>
          <p className="text-xs mt-2">
            <Dialog>
              <DialogTrigger asChild>
                <button type="button" className="underline cursor-pointer hover:text-primary-foreground/80 transition-colors">
                  CONSUMER PROTECTION NOTICE
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] p-0">
                <DialogHeader className="p-6 pb-0">
                  <DialogTitle>Consumer Protection Notice</DialogTitle>
                </DialogHeader>
                <div className="p-6 pt-2 max-h-[80vh] overflow-y-auto">
                  <img src={trecImageUrl} alt="Consumer Protection Notice" loading="lazy" className="w-full h-auto rounded-md" />
                </div>
              </DialogContent>
            </Dialog>
            : FOR YOUR PROTECTION, READ THE CONSUMER PROTECTION NOTICE.
          </p>
        </div>

        <p className="text-[10px] mt-6 opacity-80">
          &copy; {currentYear} Bonnie The Realtor ATX. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
