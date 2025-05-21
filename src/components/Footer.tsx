
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const trecImageUrl = "/lovable-uploads/c98e6f93-9d2d-420c-abad-12a078dadb92.png";
  const iabsImageUrl = "/lovable-uploads/7e8d514b-22cc-4d8c-bf0f-51342ddf0f19.png"; // New image URL

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
        <div className="mt-4 pt-4 border-t border-primary-foreground/20">
          <p className="text-xs">
            TEXAS LAW REQUIRES ALL LICENSE HOLDERS TO PROVIDE THE {/*
            */}
            <Dialog>
              <DialogTrigger asChild>
                <span className="underline cursor-pointer hover:text-primary-foreground/80 transition-colors">
                  INFORMATION ABOUT BROKERAGE SERVICES
                </span>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] p-0">
                <DialogHeader className="p-6 pb-0">
                  <DialogTitle>Information About Brokerage Services</DialogTitle>
                </DialogHeader>
                <div className="p-6 pt-2 max-h-[80vh] overflow-y-auto">
                  <img src={iabsImageUrl} alt="Information About Brokerage Services" className="w-full h-auto rounded-md" />
                </div>
              </DialogContent>
            </Dialog>
            {/* */} TO PROSPECTIVE CLIENTS.
          </p>
          <p className="text-xs mt-1">
            <Dialog>
              <DialogTrigger asChild>
                <span className="underline cursor-pointer hover:text-primary-foreground/80 transition-colors">
                  CONSUMER PROTECTION NOTICE
                </span>
              </DialogTrigger>
              : FOR YOUR PROTECTION, READ THE CONSUMER PROTECTION NOTICE.
              <DialogContent className="sm:max-w-[600px] p-0">
                <DialogHeader className="p-6 pb-0">
                  <DialogTitle>Consumer Protection Notice</DialogTitle>
                </DialogHeader>
                <div className="p-6 pt-2 max-h-[80vh] overflow-y-auto">
                  <img src={trecImageUrl} alt="Consumer Protection Notice" className="w-full h-auto rounded-md" />
                </div>
              </DialogContent>
            </Dialog>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

