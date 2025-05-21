import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TestimonialCard from '@/components/TestimonialCard';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

// Define the Testimonial type matching TestimonialCardProps
interface Testimonial {
  name: string;
  date: string;
  text: string;
  avatar?: string;
  rating?: number;
}

const testimonialsData: Testimonial[] = [
  {
    name: "Lisa Herring",
    date: "May 12, 2025",
    text: `My name is Lisa, and I have had the pleasure of working with Bonnie Francis in finding a
house. Two households are relocating from Houston: my sister, family and myself.
The first time I met Bonnie, she listened closely to what type of houses we were looking for.
Bonnie had the perfect house for my sister and family. Lease signed. She then found a
house perfect for me. Bonnie knew how close my sister and I are and worked her magic to
find a house for me in the same neighborhood, on the same street.

Bonnie Francis is an amazing realtor who is kind, listens to what her clients want/need, and
works hard to get it for you. She stays in contact with you from day one and every step of
the way until you move-in to ensure her clients are well taken care of. She reviews the
contract to be certain everything is listed properly before she presents it to you to be signed.
She is an inspiration for us all.
I highly recommend Bonnie Francis, you will not be disappointed! GO Bonnie!!`,
    rating: 5, // Example rating
  },
  {
    name: "Dina Jacobs",
    date: "May 2025",
    text: `Bonnie Francis is amazing. Relocated from the Houston area. Being new to the area, Bonnie was very helpful in finding us a cozy neighborhood. She found us a perfect rental house that checked all of our boxes. She was efficient & flexible. Worked with our schedule. If you’re looking to move, Bonnie’s your lady!`,
    // Assuming a default rating or no rating if not specified by user
    // rating: 5, 
  },
  {
    name: "Ocie McCutchen Jr",
    date: "2016 (Implied)", // Assuming a date based on "in 2016"
    text: `We’ve known Miss Francis for over 10 years, and she has always been
professional, cheerful, and attentive to our needs. When we started looking for a home in 2016, she came prepared with options and guided us through the
process. With her help, we found the perfect home in Elgin and were impressed by her dedication and knowledge. Her warm personality and expertise make her a pleasure to work with. She is not only a great agent but also a genuinely kind person.`,
    // rating: 5, // Assuming a positive experience, can be adjusted
  },
  {
    name: "Carlace",
    date: "Date Not Provided", // Placeholder as date wasn't given
    text: `I had an outstanding experience with
Bonnie Francis. Her professionalism,
attention to detail, and dedication to my
needs truly set her apart. I highly
recommend her services to anyone
looking to buy, sell, or lease a property.`,
    // rating: 5, // Assuming a positive experience, can be adjusted
  },
  {
    name: "Amanda Guerra",
    date: "Date Not Provided", // Placeholder as date wasn't given
    text: `I have used Bonnie several times for my real estate needs. Each time she has
been professional and knowledgeable. She will listen to what you want/need in
your new home and accommodate it in her search.`,
    // rating: 5, // Assuming a positive experience, can be adjusted
  },
  {
    name: "Sylvia/Delia Rojas",
    date: "Date Not Provided", // Placeholder as date wasn't given
    text: `Bonnie worked with us to help us find a
rental house and she was great! She
provided us with available listings and
was available to show us the homes that
we were interested in. I highly
recommend her!`,
    // rating: 5, // Assuming a positive experience, can be adjusted
  },
  // Add more testimonials here in the future
  // {
  // name: "John Doe",
  // date: "April 20, 2025",
  // text: "Bonnie was fantastic! She helped us find our dream home quickly and efficiently. Highly recommended.",
  // rating: 5,
  // },
];

const TestimonialsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-background to-muted/30">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Words From Happy Clients
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Hear what others have to say about their experience working with Bonnie.
          </p>
        </div>

        {testimonialsData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl text-muted-foreground mb-6">
              No testimonials yet. Check back soon!
            </p>
            {/* Optional: Add a CTA to submit a testimonial */}
            {/* 
            <Button variant="outline" size="lg">
              <PlusCircle className="mr-2 h-5 w-5" />
              Share Your Experience
            </Button> 
            */}
          </div>
        )}

        {/* Future section for adding a form to submit testimonials */}
        {/* 
        <div className="mt-16 md:mt-24 pt-12 border-t border-border/50 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-3xl font-serif font-bold text-primary text-center mb-8">
            Share Your Story
          </h2>
          <p className="text-center text-foreground/80 mb-8 max-w-xl mx-auto">
            Loved working with Bonnie? We'd love to hear about your experience!
          </p>
          // Placeholder for a testimonial submission form
          <div className="max-w-lg mx-auto p-8 bg-card rounded-lg shadow-lg border border-primary/10">
            <p className="text-center text-muted-foreground">Testimonial submission form coming soon!</p>
          </div>
        </div>
        */}
      </main>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
