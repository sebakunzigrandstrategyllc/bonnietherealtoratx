
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  date: string;
  text: string;
  avatar?: string; // Optional avatar image URL
  rating?: number; // Optional star rating (1-5)
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  return (
    <Card className="bg-card/80 backdrop-blur-sm shadow-xl border-primary/20 hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-serif text-primary">{testimonial.name}</CardTitle>
          {testimonial.rating && (
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < testimonial.rating! ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/50'}`}
                />
              ))}
            </div>
          )}
        </div>
        <p className="text-xs text-muted-foreground">{testimonial.date}</p>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <Quote className="absolute -top-2 -left-3 h-8 w-8 text-primary/20 transform rotate-180" />
          <p className="text-foreground/90 leading-relaxed whitespace-pre-line">{testimonial.text}</p>
          <Quote className="absolute -bottom-2 -right-3 h-8 w-8 text-primary/20" />
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
