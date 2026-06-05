import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '10+', label: 'Years in Austin real estate' },
  { value: '100s', label: 'Families helped home' },
  { value: 'Bilingual', label: 'English & Spanish' },
  { value: '5★', label: 'Average client rating' },
];

const TrustStrip: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-soft border-y border-border/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="font-serif text-4xl md:text-5xl font-semibold text-primary">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
