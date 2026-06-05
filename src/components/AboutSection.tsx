import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const credentials = [
  'Deep local knowledge of Austin neighborhoods',
  'Expert negotiation for the best possible deal',
  'Personalized service tailored to your needs',
  'Tech-savvy, modern approach to real estate',
  'Bilingual — English & Spanish',
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-warm rounded-3xl opacity-15 blur-2xl" />
            <img
              src="/lovable-uploads/4a12e33a-deef-461e-894b-a96c92efc97b.png"
              alt="Bonnie Francis, Austin Realtor"
              className="relative w-full max-w-md mx-auto rounded-2xl shadow-elegant"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-sm font-medium uppercase tracking-widest text-secondary mb-3">
              Meet your Realtor
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-primary text-balance mb-6">
              Hi, I'm Bonnie.
            </h2>
            <div className="space-y-4 text-foreground/85 leading-relaxed">
              <p>
                When it comes to buying or selling a home, you deserve more than a Realtor® —
                you deserve a partner fully dedicated to your happiness. I help families
                across Greater Austin make one of life's biggest decisions feel seamless
                and rewarding.
              </p>
              <p>
                My mission goes beyond closing deals. I help clients realize dreams,
                build futures, and create spaces where life can flourish. Every
                transaction is personal because I know how personal it is for you.
              </p>
            </div>

            <ul className="mt-8 space-y-3">
              {credentials.map((c) => (
                <li key={c} className="flex items-start gap-3 text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
