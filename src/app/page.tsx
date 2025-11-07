import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import Footer from '@/components/Footer';
import EventCard from '@/components/EventCard';
import ProjectCard from '@/components/ProjectCard';
import Preloader from '@/components/Preloader';
import AboutCards from '@/components/AboutCards';
import ScrollToTop from '@/components/ScrollToTop';
import Tilt from '@/components/Tilt';
import ParallaxSection from '@/components/ParallaxSection';
import { TEAM, EVENTS, PROJECTS } from '@/data/content';

// Dynamic imports for heavy components
const TeamSection = dynamic(() => import('../components/TeamSection'), {
  loading: () => <div className="h-96 animate-pulse bg-white/5 rounded-xl" />
});
const FacultySection = dynamic(() => import('../components/FacultySection'), {
  loading: () => <div className="h-96 animate-pulse bg-white/5 rounded-xl" />
});
const GalleryGrid = dynamic(() => import('@/components/GalleryGrid'), {
  loading: () => <div className="h-96 animate-pulse bg-white/5 rounded-xl" />
});
const ContactSection = dynamic(() => import('@/components/ContactSection'), {
  loading: () => <div className="h-96 animate-pulse bg-white/5 rounded-xl" />
});

export default function Page() {
  return (
    <>
      <Preloader />
      <Navbar />
      <ScrollToTop />
      <main>
        <Hero />

        {/* About */}
  <section id="about" data-accent-index="0" className="section container-max">
          <ParallaxSection speed={0.12}>
            <SectionHeader
              title="About the Club"
              subtitle="We empower students to explore Artificial Intelligence and Machine Learning through hands-on workshops, collaborative open-source projects, competitive hackathons, and impactful research initiatives."
              center
            />
            <AboutCards />
          </ParallaxSection>
        </section>

        {/* Faculty */}
        <FacultySection />

        {/* Team */}
        <section id="team" className="section container-max">
          <SectionHeader title="Core Team" subtitle="Explore the people driving innovation and execution." center />
          <TeamSection />
        </section>

        {/* Events */}
  <section id="events" data-accent-index="2" className="section container-max">
          <ParallaxSection speed={0.1}>
            <SectionHeader title="Events" subtitle="Engaging experiences—from fundamentals to advanced AI hackathons." center />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {EVENTS.map((e: any, i: number) => (
                <Tilt key={e.title + i}>
                  <EventCard event={e} i={i} />
                </Tilt>
              ))}
            </div>
          </ParallaxSection>
        </section>

        {/* Projects */}
  <section id="projects" data-accent-index="1" className="section container-max">
          <ParallaxSection speed={0.08}>
            <SectionHeader title="Projects" subtitle="Open-source and research initiatives building practical AI solutions." center />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {PROJECTS.map((p: any, i: number) => (
                <Tilt key={p.title}>
                  <ProjectCard project={p} i={i} />
                </Tilt>
              ))}
            </div>
          </ParallaxSection>
        </section>

        {/* Gallery */}
  <section id="gallery" data-accent-index="0" className="section container-max">
          <ParallaxSection speed={0.06}>
            <SectionHeader title="Gallery" subtitle="Snapshots from workshops, meetups, and hackathons." center />
            <GalleryGrid />
          </ParallaxSection>
        </section>

        {/* Contact */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
