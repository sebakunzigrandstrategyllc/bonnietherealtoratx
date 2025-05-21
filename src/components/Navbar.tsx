
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/#about", text: "About" },
    { href: "/#listings", text: "Listings" },
    { href: "/testimonials", text: "Testimonials" }, // New link
    { href: "/#contact", text: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinkItem: React.FC<{ href: string; text: string; onClick?: () => void }> = ({ href, text, onClick }) => {
    const isExternalLink = href.startsWith('/#');
    const isActive = isExternalLink ? location.hash === href.substring(1) && location.pathname === '/' : location.pathname === href;

    if (isExternalLink) {
      return (
        <a
          href={href}
          onClick={onClick}
          className={`text-sm font-medium transition-colors hover:text-primary ${
            isActive ? 'text-primary font-semibold' : 'text-foreground/80'
          }`}
        >
          {text}
        </a>
      );
    }
    return (
      <Link
        to={href}
        onClick={onClick}
        className={`text-sm font-medium transition-colors hover:text-primary ${
          isActive ? 'text-primary font-semibold' : 'text-foreground/80'
        }`}
      >
        {text}
      </Link>
    );
  };


  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out 
                  ${isScrolled ? 'bg-background/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src="/lovable-uploads/e4db05f2-f1f2-425a-8669-bc04e89ab6b1.png" alt="All City Real Estate Logo" className="h-8 w-auto" />
          <span className="font-serif text-xl font-bold text-primary">Bonnie The Realtor ATX</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <NavLinkItem key={link.text} href={link.href} text={link.text} />
          ))}
          <Button asChild size="sm" className="ml-2">
            <a href="/#contact">Get In Touch</a>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center mb-4">
                   <Link to="/" className="flex items-center gap-2">
                     <img src="/lovable-uploads/e4db05f2-f1f2-425a-8669-bc04e89ab6b1.png" alt="Logo" className="h-7 w-auto" />
                     <span className="font-serif text-lg font-bold text-primary">Bonnie ATX</span>
                   </Link>
                  <SheetClose asChild>
                     <Button variant="ghost" size="icon">
                       <X className="h-5 w-5" />
                       <span className="sr-only">Close menu</span>
                     </Button>
                  </SheetClose>
                </div>
                {navLinks.map((link) => (
                  <SheetClose key={link.text} asChild>
                    <NavLinkItem href={link.href} text={link.text} />
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button asChild className="w-full mt-4">
                    <a href="/#contact">Get In Touch</a>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
