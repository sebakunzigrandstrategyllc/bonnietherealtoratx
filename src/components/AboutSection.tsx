
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
              <AvatarImage src="/lovable-uploads/4a12e33a-deef-461e-894b-a96c92efc97b.png" alt="Bonnie Francis, Austin Realtor" />
              <AvatarFallback>BF</AvatarFallback>
            </Avatar>
          </div>
          <div className="md:w-2/3 text-center md:text-left animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg text-foreground mb-6">
              When it comes to buying or selling a home, you deserve more than just a Realtor®—you deserve a trusted partner who is fully dedicated to your happiness. I am Bonnie Francis, and I am here to make one of life’s most significant decisions a seamless, rewarding experience.
            </p>
            <p className="text-lg text-foreground mb-6">
              My mission goes beyond closing deals; I help clients realize dreams, build futures, and create spaces where life can flourish. Every transaction is personal to me because I know how personal it is for you. With every client, I bring my expertise and a genuine passion for making the process as smooth and manageable as possible. There’s no greater joy for me than seeing the relief and excitement on my client’s faces when they find their perfect home or complete a successful sale.
            </p>
            <p className="text-lg text-foreground mb-8">
              I don’t just guide you through the process—I advocate for you, listen to your needs, and ensure you feel supported from the first meeting through well beyond the transaction. When you work with me, you’re not just getting a Realtor®—you’re gaining a committed professional who is deeply invested in your future and happiness.
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
