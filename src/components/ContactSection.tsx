"use client";
import SectionHeader from '@/components/SectionHeader';
import { SOCIALS } from '@/data/content';

export default function ContactSection() {
  return (
    <section id="contact" className="section container-max">
      <SectionHeader title="Contact" subtitle="Reach out for collaboration, sponsorship, or membership inquiries." center />
      <div className="grid md:grid-cols-2 gap-8">
        <form className="card p-6 flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <input required name="name" placeholder="Name" className="bg-white/5 border border-white/10 rounded px-3 py-2 focus:outline-none focus:border-neon-blue" />
          <input required type="email" name="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded px-3 py-2 focus:outline-none focus:border-neon-blue" />
          <textarea required name="message" rows={5} placeholder="Message" className="bg-white/5 border border-white/10 rounded px-3 py-2 focus:outline-none focus:border-neon-blue" />
          <button className="btn btn-primary" type="submit">Send Message</button>
          <div className="text-xs text-white/50">Form is a placeholder; integrate backend or service (Formspree, Resend, etc.).</div>
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
