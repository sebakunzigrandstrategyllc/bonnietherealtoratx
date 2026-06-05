import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/#about", text: "About" },
    { href: "/#services", text: "Services" },
    { href: "/#neighborhoods", text: "Neighborhoods" },
    { href: "/testimonials", text: "Testimonials" },
    { href: "/#contact", text: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClass = (active: boolean) =>
    `text-sm font-medium transition-colors hover:text-primary ${active ? 'text-primary' : isScrolled ? 'text-foreground/80' : 'text-primary-foreground/95'}`;

  const renderLink = (href: string, text: string, onClick?: () => void) => {
    const isHash = href.startsWith('/#');
    const active = isHash ? false : location.pathname === href;
    return isHash ? (
      <a href={href} onClick={onClick} className={linkClass(active)}>{text}</a>
    ) : (
      <Link to={href} onClick={onClick} className={linkClass(active)}>{text}</Link>
    );
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300
                  ${isScrolled ? 'bg-background/95 shadow-soft backdrop-blur-md' : 'bg-transparent'}`}
    >
      <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className={`font-serif text-xl md:text-2xl font-semibold tracking-tight transition-colors ${isScrolled ? 'text-primary' : 'text-primary-foreground'}`}>
            Bonnie Francis
          </span>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex gap-7 items-center">
          {navLinks.map((l) => <React.Fragment key={l.text}>{renderLink(l.href, l.text)}</React.Fragment>)}
          <Button asChild size="sm" className="shadow-soft">
            <a href="tel:5129230552"><Phone className="h-4 w-4" /> (512) 923-0552</a>
          </Button>
        </nav>

        {/* Mobile */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={isScrolled ? '' : 'text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground'}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-serif text-xl font-semibold text-primary">Bonnie Francis</span>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon"><X className="h-5 w-5" /></Button>
                  </SheetClose>
                </div>
                {navLinks.map((l) => (
                  <SheetClose key={l.text} asChild>
                    {l.href.startsWith('/#') ? (
                      <a href={l.href} className="text-lg font-medium text-foreground hover:text-primary">{l.text}</a>
                    ) : (
                      <Link to={l.href} className="text-lg font-medium text-foreground hover:text-primary">{l.text}</Link>
                    )}
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button asChild className="w-full mt-2 shadow-soft">
                    <a href="tel:5129230552"><Phone className="h-4 w-4" /> Call (512) 923-0552</a>
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
