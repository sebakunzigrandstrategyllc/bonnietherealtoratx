import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { z } from 'zod';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Loader2, Facebook, Instagram, Linkedin } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100),
  email: z.string().trim().email('Please enter a valid email').max(255),
  phone: z.string().trim().max(30).optional().or(z.literal('')),
  message: z.string().trim().min(5, 'Please share a bit more').max(2000),
  // honeypot
  website: z.string().max(0).optional().or(z.literal('')),
});

const ContactSection: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? 'Please check the form.');
      return;
    }
    if (parsed.data.website) return; // honeypot triggered, silently drop

    setLoading(true);
    try {
      const { data: result, error } = await supabase.functions.invoke(
        'send-transactional-email',
        {
          body: {
            templateName: 'contact-inquiry',
            recipientEmail: 'bfrancisagent60@gmail.com',
            idempotencyKey: `contact-${Date.now()}-${parsed.data.email}`,
            replyTo: parsed.data.email,
            templateData: {
              name: parsed.data.name,
              email: parsed.data.email,
              phone: parsed.data.phone || 'Not provided',
              message: parsed.data.message,
              submittedAt: new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' }),
            },
          },
        }
      );
      if (error) throw error;
      toast.success("Thanks! Bonnie will be in touch soon.");
      form.reset();
    } catch (err) {
      console.error('Contact form error:', err);
      toast.error("Couldn't send right now. Please call or text (512) 923-0552.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12 md:mb-16"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-secondary mb-3">
            Get in touch
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-primary text-balance">
            Ready when you are.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tell me a little about what you're looking for. I'll get back to you within one business day.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-card p-6 md:p-8 rounded-2xl shadow-soft border border-border space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
                <Input id="name" name="name" required maxLength={100} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                <Input id="email" name="email" type="email" required maxLength={255} />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone <span className="text-muted-foreground font-normal">(optional)</span></label>
              <Input id="phone" name="phone" type="tel" maxLength={30} />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">How can I help?</label>
              <Textarea id="message" name="message" rows={5} required maxLength={2000} placeholder="Buying, selling, renting, or just exploring?" />
            </div>
            {/* honeypot */}
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

            <Button type="submit" size="lg" disabled={loading} className="w-full sm:w-auto shadow-elegant">
              {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</> : 'Send message'}
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="p-6 rounded-2xl bg-card border border-border shadow-soft">
              <a href="tel:5129230552" className="flex items-start gap-4 group">
                <div className="h-11 w-11 rounded-xl bg-accent flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Call or text</div>
                  <div className="text-lg font-medium text-foreground">(512) 923-0552</div>
                </div>
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border shadow-soft">
              <a href="mailto:bfrancisagent60@gmail.com" className="flex items-start gap-4 group">
                <div className="h-11 w-11 rounded-xl bg-accent flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                  <div className="text-base font-medium text-foreground break-all">bfrancisagent60@gmail.com</div>
                </div>
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border shadow-soft">
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-accent flex items-center justify-center text-secondary flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Office</div>
                  <div className="text-foreground">10222 Pecan Park Blvd #10<br />Austin, TX 78729</div>
                  <div className="text-xs text-muted-foreground mt-1">By appointment only</div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 px-2">
              <a href="#" aria-label="Facebook" className="h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center text-secondary hover:bg-primary hover:text-primary-foreground transition-smooth">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center text-secondary hover:bg-primary hover:text-primary-foreground transition-smooth">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center text-secondary hover:bg-primary hover:text-primary-foreground transition-smooth">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
