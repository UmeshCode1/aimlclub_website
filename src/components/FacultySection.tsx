"use client";
import { FACULTY } from '../data/content';
import FacultyCard from './FacultyCard';
import SectionHeader from './SectionHeader';

export default function FacultySection() {
  return (
    <section id="faculty" className="py-20 md:py-28">
      <div className="container-max">
        <SectionHeader
          title="Faculty Mentors"
          subtitle="Meet the dedicated faculty members inspiring the next generation of AI/ML innovators"
          center
        />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
          {FACULTY.map((faculty, idx) => (
            <FacultyCard key={faculty.name} member={faculty} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
