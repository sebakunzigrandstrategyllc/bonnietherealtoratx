import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Quote, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const featured = [
  {
    name: 'Lisa Herring',
    text: 'Bonnie Francis is an amazing realtor who is kind, listens to what her clients want, and works hard to get it for you. She stays in contact with you from day one and every step of the way.',
  },
  {
    name: 'Dina Jacobs',
    text: 'Being new to the area, Bonnie was very helpful in finding us a cozy neighborhood. She found us a perfect rental house that checked all of our boxes. Efficient and flexible.',
  },
  {
    name: 'Amanda Guerra',
    text: 'I have used Bonnie several times for my real estate needs. Each time she has been professional and knowledgeable. She listens to what you want and accommodates it.',
  },
  {
    name: 'Jorge and Zuleymi',
    text: 'The entire process was super fast and without any setbacks. You have earned our affection and respect for being a wonderful and very professional person.',
  },
  {
    name: 'Carlace',
    text: 'Her professionalism, attention to detail, and dedication to my needs truly set her apart. I highly recommend her services to anyone looking to buy, sell, or lease.',
  },
];

const TestimonialsCarousel: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14"
        >
          <div className="max-w-xl">
            <p className="text-sm font-medium uppercase tracking-widest text-secondary mb-3">
              Kind words
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-primary text-balance">
              From the families I've called home.
            </h2>
          </div>
          <Button variant="ghost" asChild className="self-start md:self-end text-primary">
            <Link to="/testimonials">
              Read all stories <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <Carousel opts={{ align: 'start', loop: true }} className="w-full">
          <CarouselContent className="-ml-4">
            {featured.map((t, i) => (
              <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="h-full p-8 rounded-2xl bg-card border border-border shadow-soft">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-primary/30 mb-3" />
                  <p className="text-foreground/90 leading-relaxed mb-6 line-clamp-6">
                    {t.text}
                  </p>
                  <div className="pt-4 border-t border-border">
                    <div className="font-serif font-semibold text-foreground">{t.name}</div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="-left-4 bg-background border-border" />
            <CarouselNext className="-right-4 bg-background border-border" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
