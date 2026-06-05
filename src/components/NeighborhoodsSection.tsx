import React from 'react';
import { motion } from 'framer-motion';

const neighborhoods = [
  { name: 'Pecan Park', tag: 'NW Austin', img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=800&auto=format&fit=crop' },
  { name: 'Round Rock', tag: 'Family favorite', img: 'https://images.unsplash.com/photo-1592595896616-c37162298647?q=80&w=800&auto=format&fit=crop' },
  { name: 'Cedar Park', tag: 'Hill Country edge', img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop' },
  { name: 'Pflugerville', tag: 'Growing fast', img: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=800&auto=format&fit=crop' },
  { name: 'Elgin', tag: 'Country charm', img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=800&auto=format&fit=crop' },
  { name: 'Leander', tag: 'New builds', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop' },
];

const NeighborhoodsSection: React.FC = () => {
  return (
    <section id="neighborhoods" className="py-20 md:py-28 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12 md:mb-16"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-secondary mb-3">
            Where I work
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-primary text-balance">
            Neighborhoods I know inside and out.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {neighborhoods.map((n, i) => (
            <motion.a
              href="#contact"
              key={n.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-smooth"
            >
              <img
                src={n.img}
                alt={`${n.name} homes`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-background">
                <div className="text-xs uppercase tracking-wider opacity-80">{n.tag}</div>
                <div className="text-xl font-serif font-semibold mt-0.5">{n.name}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NeighborhoodsSection;
