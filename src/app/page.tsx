import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import Footer from '@/components/Footer';
import TeamCard from '@/components/TeamCard';
import EventCard from '@/components/EventCard';
import ProjectCard from '@/components/ProjectCard';
import Preloader from '@/components/Preloader';
import ContactSection from '@/components/ContactSection';
import AboutCards from '@/components/AboutCards';
import ScrollToTop from '@/components/ScrollToTop';
import GalleryGrid from '@/components/GalleryGrid';
import { TEAM, EVENTS, PROJECTS } from '@/data/content';

export default function Page() {
  return (
    <>
      <Preloader />
      <Navbar />
      <ScrollToTop />
      <main>
        <Hero />

        {/* About */}
        <section id="about" className="section container-max">
          <SectionHeader
            title="About the Club"
            subtitle="We empower students to explore Artificial Intelligence and Machine Learning through hands-on workshops, collaborative open-source projects, competitive hackathons, and impactful research initiatives."
            center
          />
          <AboutCards />
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

        {/* Gallery */}
        <section id="gallery" className="section container-max">
          <SectionHeader title="Gallery" subtitle="Snapshots from workshops, meetups, and hackathons." center />
          <GalleryGrid />
        </section>

        {/* Contact */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
