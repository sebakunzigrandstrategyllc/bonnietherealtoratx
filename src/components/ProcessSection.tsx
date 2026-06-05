import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Search, FileText, Key } from 'lucide-react';

const steps = [
  { icon: MessageCircle, n: '01', title: 'Let\'s talk', body: 'A free, no-pressure call to understand your goals, timeline, and budget.' },
  { icon: Search, n: '02', title: 'Find or list', body: 'Curated showings, or strategic pricing and marketing to attract the right buyer.' },
  { icon: FileText, n: '03', title: 'Negotiate', body: 'I advocate hard so the contract works in your favor — terms, price, and timing.' },
  { icon: Key, n: '04', title: 'Keys in hand', body: 'I stay close through closing and beyond. You\'re a client for life, not a transaction.' },
];

const ProcessSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12 md:mb-16"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-secondary mb-3">
            The process
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-primary text-balance">
            What to expect, step by step.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative p-8 rounded-2xl bg-accent/40 border border-border/60"
            >
              <div className="absolute top-6 right-6 font-serif text-3xl text-secondary/40">{s.n}</div>
              <s.icon className="h-7 w-7 text-secondary mb-4" />
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
