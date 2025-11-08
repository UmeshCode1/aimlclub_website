"use client";
import { useEffect, useMemo, useState } from 'react';
import { TEAM, TeamMember, TeamRole } from '../data/content';
import TeamCard from './TeamCard';
import dynamic from 'next/dynamic';
import { Search, X } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import SkeletonCard from './SkeletonCard';

const roleOrder: TeamRole[] = [
  'President',
  'Vice President',
  'Discipline Head',
  'Tech Lead',
  'Event Head',
  'Media Relations',
  'Media',
  'Editor',
  'Stage Lead'
];

const ProfileModal = dynamic<{
  member: TeamMember;
  onClose: () => void;
}>(() => import('./TeamProfileModal'), { ssr: false });

export default function TeamSection() {
  const [query, setQuery] = useState('');
  const [activeRole, setActiveRole] = useState<TeamRole | 'All'>('All');
  const [openMember, setOpenMember] = useState<TeamMember | null>(null);
  const [loading, setLoading] = useState(true);

  const filtered: TeamMember[] = useMemo(() => {
    return TEAM.filter((m: TeamMember) => {
      if (activeRole !== 'All' && m.role !== activeRole) return false;
      if (query && !m.name.toLowerCase().includes(query.toLowerCase())) return false;
      return true;
    }).sort((a: TeamMember, b: TeamMember) => roleOrder.indexOf(a.role) - roleOrder.indexOf(b.role) || a.name.localeCompare(b.name));
  }, [query, activeRole]);

  // Simulate loading on mount and when filters change for a smoother UX
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(t);
  }, [query, activeRole]);

  return (
    <div className="space-y-8">
      {/* Search and Role Filter */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-3xl mx-auto">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/55" />
          <input
            aria-label="Search team members"
            placeholder="Search by name..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full bg-white/5 backdrop-blur border border-white/10 rounded-lg py-2.5 pl-10 pr-10 text-sm focus:outline-none focus:border-neon-blue/60 focus:ring-2 focus:ring-neon-blue/30 transition"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/65 hover:text-white transition"
              aria-label="Clear search"
            >
              <X size={16} />
            </button>
          )}
        </div>
        <select
          value={activeRole}
          onChange={e => setActiveRole(e.target.value as TeamRole | 'All')}
          className="bg-white/5 backdrop-blur border border-white/10 rounded-lg py-2.5 px-4 text-sm focus:outline-none focus:border-neon-blue/60 focus:ring-2 focus:ring-neon-blue/30 transition cursor-pointer"
          aria-label="Filter by role"
        >
          <option value="All">All Roles</option>
          {roleOrder.map(r => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>

      {/* Results count */}
      {(query || activeRole !== 'All') && (
        <div className="text-center text-sm text-white/75">
          Showing {filtered.length} of {TEAM.length} member{filtered.length !== 1 ? 's' : ''}
        </div>
      )}

      {/* Team Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        role="list"
        aria-label="Team members"
      >
        {loading
          ? Array.from({ length: 8 }).map((_, i) => (<SkeletonCard key={`skeleton-${i}`} />))
          : filtered.map((m, i) => (
              <TeamCard
                key={m.name}
                member={m}
                i={i}
                onOpen={setOpenMember}
              />
            ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-center text-white/65 py-16">
            <p className="text-lg">No team members found</p>
            <button
              onClick={() => {
                setQuery('');
                setActiveRole('All');
              }}
              className="mt-4 text-sm text-neon-blue hover:text-neon-pink transition"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {openMember && (
          <ProfileModal member={openMember} onClose={() => setOpenMember(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
