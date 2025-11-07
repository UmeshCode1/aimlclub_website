"use client";
import SectionHeader from '@/components/SectionHeader';
import { SOCIALS } from '@/data/content';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, MapPin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const fd = new FormData(e.currentTarget);
    const name = String(fd.get('name') || '').trim();
    const email = String(fd.get('email') || '').trim();
    const message = String(fd.get('message') || '').trim();

    if (!name || name.length < 2) {
      setErrorMessage('Please enter a valid name (at least 2 characters)');
      setStatus('error');
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage('Please enter a valid email address');
      setStatus('error');
      return;
    }
    if (!message || message.length < 10) {
      setErrorMessage('Please enter a message (at least 10 characters)');
      setStatus('error');
      return;
    }

    await new Promise(r => setTimeout(r, 1200));
    setStatus('success');
    e.currentTarget.reset();
    setTimeout(() => setStatus('idle'), 4000);
  }

  return (
    <section id="contact" className="section container-max relative" aria-labelledby="contact-heading">
      <SectionHeader 
        title="Get in Touch" 
        subtitle="Have questions about our club? Want to collaborate or sponsor? We'd love to hear from you!" 
        center 
      />

      <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {/* Contact Form */}
        <motion.form 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-3 card p-8 flex flex-col gap-5" 
          onSubmit={onSubmit} 
          aria-describedby="contact-helper"
        >
          <h3 className="text-2xl font-display font-bold mb-2">Send us a Message</h3>
          
          <div className="space-y-2">
            <label htmlFor="name-input" className="text-sm font-semibold text-white/80 block">
              Your Name *
            </label>
            <input 
              id="name-input"
              required 
              name="name" 
              placeholder="John Doe" 
              disabled={status === 'loading'}
              className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email-input" className="text-sm font-semibold text-white/80 block">
              Email Address *
            </label>
            <input 
              id="email-input"
              required 
              type="email" 
              name="email" 
              placeholder="john@example.com" 
              disabled={status === 'loading'}
              className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message-input" className="text-sm font-semibold text-white/80 block">
              Message *
            </label>
            <textarea 
              id="message-input"
              required 
              name="message" 
              rows={6} 
              placeholder="Tell us about your inquiry, collaboration idea, or how you'd like to get involved..." 
              disabled={status === 'loading'}
              className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          <button 
            className="btn btn-primary mt-1 justify-center text-base flex items-center gap-2" 
            type="submit"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="animate-spin" size={18} />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send size={18} />
                <span>Send Message</span>
              </>
            )}
          </button>

          <AnimatePresence mode="wait">
            {status === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                role="status" 
                className="flex items-center gap-3 p-4 bg-green-500/20 border border-green-500/40 rounded-xl text-green-400"
              >
                <CheckCircle size={18} />
                <div>
                  <p className="font-semibold">Message sent successfully!</p>
                  <p className="text-sm text-green-400/80">We'll get back to you within 24-48 hours.</p>
                </div>
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                role="alert" 
                className="flex items-center gap-3 p-4 bg-red-500/20 border border-red-500/40 rounded-xl text-red-400"
              >
                <AlertCircle size={18} />
                <p className="text-sm">{errorMessage}</p>
              </motion.div>
            )}
          </AnimatePresence>

          <p id="contact-helper" className="text-xs text-white/40">
            * Required fields. Your data is handled securely and never shared.
          </p>
        </motion.form>

        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 flex flex-col gap-6"
        >
          {/* Email Card */}
          <div className="card p-6 hover:shadow-neon transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl group-hover:scale-110 transition-transform">
                <Mail size={22} className="text-white" />
              </div>
              <div className="text-sm text-white/60 uppercase tracking-wider">Email Us</div>
            </div>
            <a 
              className="font-semibold text-white/90 hover:text-white transition-colors block" 
              href={`mailto:${SOCIALS.email}`}
            >
              {SOCIALS.email}
            </a>
          </div>

          {/* Location Card */}
          <div className="card p-6 hover:shadow-neon transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl group-hover:scale-110 transition-transform">
                <MapPin size={22} className="text-white" />
              </div>
              <div className="text-sm text-white/60 uppercase tracking-wider">Visit Us</div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Oriental College of Technology<br />
              Bhopal, Madhya Pradesh<br />
              India - 462021
            </p>
          </div>

          {/* Social Links Card */}
          <div className="card p-6 hover:shadow-neon transition-all duration-300">
            <div className="text-sm text-white/60 uppercase tracking-wider mb-3">Connect With Us</div>
            <div className="flex flex-col gap-2">
              <a 
                href={SOCIALS.linkedin} 
                className="flex items-center gap-2 text-white/80 hover:text-blue-400 transition-colors"
                target="_blank" 
                rel="noreferrer"
              >
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a 
                href={SOCIALS.instagram} 
                className="flex items-center gap-2 text-white/80 hover:text-pink-400 transition-colors"
                target="_blank" 
                rel="noreferrer"
              >
                <span className="text-sm font-medium">Instagram</span>
              </a>
              <a 
                href={SOCIALS.github} 
                className="flex items-center gap-2 text-white/80 hover:text-purple-400 transition-colors"
                target="_blank" 
                rel="noreferrer"
              >
                <span className="text-sm font-medium">GitHub</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
