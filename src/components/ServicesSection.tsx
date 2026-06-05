import React from 'react';
import { motion } from 'framer-motion';
import { Home, KeyRound, Search } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Buying',
    body: 'From first showing to closing day, I help you find a home that fits your life and budget — and negotiate hard so you don\'t overpay.',
  },
  {
    icon: Home,
    title: 'Selling',
    body: 'Strategic pricing, professional marketing, and clear communication so your listing stands out and sells for what it deserves.',
  },
  {
    icon: KeyRound,
    title: 'Renting',
    body: 'New to Austin? I scout neighborhoods, line up tours, and walk you through the lease so the move feels easy, not overwhelming.',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-secondary mb-3">
            How I help
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-primary text-balance">
            Three ways we can work together.
          </h2>
        </motion.div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border shadow-soft hover:shadow-elegant transition-smooth hover:-translate-y-1"
            >
              <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center text-accent-foreground mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
