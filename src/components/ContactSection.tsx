"use client";
import SectionHeader from '@/components/SectionHeader';
import { SOCIALS } from '@/data/content';

import { useState } from 'react';

export default function ContactSection() {
  const [status, setStatus] = useState<'idle'|'success'|'error'>('idle');
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get('name') || '').trim();
    const email = String(fd.get('email') || '').trim();
    const message = String(fd.get('message') || '').trim();
    if (!name || !email || !message) {
      setStatus('error');
      return;
    }
    setStatus('success');
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="section container-max" aria-labelledby="contact-heading">
      <SectionHeader title="Contact" subtitle="Reach out for collaboration, sponsorship, or membership inquiries." center />
      <div className="grid md:grid-cols-2 gap-8">
        <form className="card p-6 flex flex-col gap-4" onSubmit={onSubmit} aria-describedby="contact-helper">
          <input aria-label="Name" required name="name" placeholder="Name" className="bg-white/5 border border-white/10 rounded px-3 py-2 focus:outline-none focus:border-neon-blue" />
          <input aria-label="Email" required type="email" name="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded px-3 py-2 focus:outline-none focus:border-neon-blue" />
          <textarea aria-label="Message" required name="message" rows={5} placeholder="Message" className="bg-white/5 border border-white/10 rounded px-3 py-2 focus:outline-none focus:border-neon-blue" />
          <button className="btn btn-primary" type="submit">Send Message</button>
          <div id="contact-helper" className="text-xs text-white/50">Form is a placeholder; integrate backend or service (Formspree, Resend, etc.).</div>
          {status === 'success' && (
            <div role="status" className="text-sm text-emerald-400">Thanks! Your message was recorded locally.</div>
          )}
          {status === 'error' && (
            <div role="alert" className="text-sm text-rose-400">Please fill out all fields.</div>
          )}
        </form>
        <div className="flex flex-col gap-6">
          <div className="card p-6">
            <div className="text-sm text-white/60">Email</div>
            <a className="font-medium mt-1 block" href={`mailto:${SOCIALS.email}`}>{SOCIALS.email}</a>
          </div>
          <div className="card p-6 flex flex-col gap-3">
            <div className="text-sm text-white/60">Connect</div>
            <a href={SOCIALS.linkedin} className="text-sm hover:text-white/90" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={SOCIALS.instagram} className="text-sm hover:text-white/90" target="_blank" rel="noreferrer">Instagram</a>
            <a href={SOCIALS.github} className="text-sm hover:text-white/90" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
