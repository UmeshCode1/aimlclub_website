import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import Footer from '@/components/Footer';
import TeamCard from '@/components/TeamCard';
import EventCard from '@/components/EventCard';
import ProjectCard from '@/components/ProjectCard';
import Preloader from '@/components/Preloader';
import ContactSection from '@/components/ContactSection';
import { TEAM, EVENTS, PROJECTS, SOCIALS } from '@/data/content';

export default function Page() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Hero />

        {/* About */}
  <section id="about" className="section container-max">
          <SectionHeader
            title="About the Club"
            subtitle="We empower students to explore Artificial Intelligence and Machine Learning through hands-on workshops, collaborative open-source projects, competitive hackathons, and impactful research initiatives."
            center
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                t: 'Vision',
                d: 'Cultivate a community of innovators leveraging AI ethically for societal advancement.'
              },
              {
                t: 'Mission',
                d: 'Provide practical learning, mentorship, and resources to accelerate AI skill development.'
              },
              {
                t: 'Objectives',
                d: 'Host events, build projects, publish research, and connect with industry partners.'
              }
            ].map((item) => (
              <div key={item.t} className="card p-6 flex flex-col gap-2">
                <div className="text-sm uppercase tracking-wider text-white/50">{item.t}</div>
                <div className="text-white/80 text-sm leading-relaxed">{item.d}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
  <section id="team" className="section container-max">
          <SectionHeader title="Core Team" subtitle="A multidisciplinary team steering strategy, execution, creativity, and technology." center />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {TEAM.map((m, i) => (
              <TeamCard key={m.name} member={m} i={i} />
            ))}
          </div>
        </section>

        {/* Events */}
  <section id="events" className="section container-max">
          <SectionHeader title="Events" subtitle="Engaging experiences—from fundamentals to advanced AI hackathons." center />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {EVENTS.map((e, i) => (
              <EventCard key={e.title + i} event={e} i={i} />
            ))}
          </div>
        </section>

        {/* Projects */}
  <section id="projects" className="section container-max">
          <SectionHeader title="Projects" subtitle="Open-source and research initiatives building practical AI solutions." center />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROJECTS.map((p, i) => (
              <ProjectCard key={p.title} project={p} i={i} />
            ))}
          </div>
        </section>

        {/* Gallery (placeholder) */}
        <section id="gallery" className="section container-max">
          <SectionHeader title="Gallery" subtitle="Snapshots from workshops, meetups, and hackathons." center />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-video rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 text-sm">
                Image {i + 1}
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
