
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send to an API)
    alert('Thank you for your message! Bonnie will get back to you soon.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 animate-fade-in-up">
            Get in Touch
          </h2>
          <p className="text-lg text-secondary animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Ready to find your dream home or sell your property? Contact Bonnie today!
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Full Name</label>
                <Input type="text" name="name" id="name" required className="bg-muted/30 border-border focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email Address</label>
                <Input type="email" name="email" id="email" required className="bg-muted/30 border-border focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
                <Textarea name="message" id="message" rows={4} required className="bg-muted/30 border-border focus:ring-primary focus:border-primary" />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Send Message
              </Button>
            </form>
            <div className="space-y-6 pt-0 md:pt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-xl font-serif font-semibold text-primary mb-4">Contact Information</h3>
              <a href="tel:+15129230552" className="flex items-center text-foreground hover:text-primary transition-colors">
                <Phone size={20} className="mr-3 text-primary" />
                <span>(512) 923-0552</span>
              </a>
              <a href="mailto:bfrancisagent60@gmail.com" className="flex items-center text-foreground hover:text-primary transition-colors">
                <Mail size={20} className="mr-3 text-primary" />
                <span>bfrancisagent60@gmail.com</span>
              </a>
              <div className="flex items-start text-foreground">
                <MapPin size={20} className="mr-3 text-primary mt-1 flex-shrink-0" />
                <span>
                  10222 Pecan Park Blvd #10,<br />
                  Austin, TX 78729<br />
                  <span className="text-sm text-secondary">(By Appointment Only)</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
