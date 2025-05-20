
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'; // Using Shadcn Avatar for the image
import { CheckCircle } from 'lucide-react'; // Icon for bullet points

const AboutSection: React.FC = () => {
  const credentials = [
    "Deep Local Knowledge of Austin Neighborhoods",
    "Expert Negotiation Skills for Best Deals",
    "Personalized Service Tailored to Your Needs",
    "Tech-Savvy Approach for Modern Real Estate",
    "Committed to a Smooth & Stress-Free Experience"
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50"> {/* Using a slightly lighter muted background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
            Meet Bonnie
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          <div className="md:w-1/3 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Avatar className="w-48 h-48 md:w-64 md:h-64 border-4 border-primary/20 shadow-xl">
              <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" alt="Bonnie, Austin Realtor" />
              <AvatarFallback>BN</AvatarFallback>
            </Avatar>
          </div>
          <div className="md:w-2/3 text-center md:text-left animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg text-foreground mb-6">
              Welcome to Austin! I'm Bonnie, your dedicated real estate partner in this vibrant city. With years of experience and a deep love for Austin's unique neighborhoods, I'm committed to helping you find not just a house, but a place you can truly call home.
            </p>
            <p className="text-lg text-foreground mb-8">
              Whether you're buying your first home, seeking a luxury property, or looking to sell, I provide personalized service, expert market insights, and a seamless transaction process. My goal is to make your real estate journey enjoyable and successful.
            </p>
            <h3 className="text-xl md:text-2xl font-semibold text-primary mb-4">Why Work With Me?</h3>
            <ul className="space-y-3">
              {credentials.map((credential, index) => (
                <li key={index} className="flex items-start text-foreground">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>{credential}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
