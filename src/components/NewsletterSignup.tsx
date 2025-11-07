"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate API call (replace with actual newsletter service)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock success
    setStatus('success');
    setMessage('Thanks for subscribing!');
    setEmail('');
    
    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 3000);
  };

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Stay Updated</h3>
      <p className="text-xs text-white/70">Get the latest updates on events, projects, and workshops.</p>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            disabled={status === 'loading' || status === 'success'}
            className="w-full bg-white/5 backdrop-blur border border-white/10 rounded-lg py-2.5 px-4 text-sm focus:outline-none focus:border-neon-blue/60 focus:ring-2 focus:ring-neon-blue/30 transition disabled:opacity-50"
            aria-label="Email address for newsletter"
          />
        </div>
        
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="w-full btn btn-primary text-sm py-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Subscribing...
            </span>
          ) : status === 'success' ? (
            <span className="flex items-center justify-center gap-2">
              <CheckCircle size={16} /> Subscribed!
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <Send size={16} /> Subscribe
            </span>
          )}
        </button>
        
        {message && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-xs text-center ${
              status === 'success' ? 'text-green-400' : 'text-red-400'
            }`}
            role="status"
          >
            {message}
          </motion.p>
        )}
      </form>
    </div>
  );
}
