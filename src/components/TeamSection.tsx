"use client";
import { useEffect, useMemo, useRef, useState } from 'react';
import { TEAM, TeamMember, TeamRole } from '../data/content';
import TeamCard from './TeamCard';
import dynamic from 'next/dynamic';
import { Filter, Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

const roleColors: Record<TeamRole, string> = {
  'President': 'from-neon-pink to-neon-blue',
  'Vice President': 'from-neon-blue to-neon-pink',
  'Discipline Head': 'from-fuchsia-500 to-neon-blue',
  'Tech Lead': 'from-cyan-500 to-violet-500',
  'Event Head': 'from-indigo-500 to-neon-pink',
  'Media Relations': 'from-emerald-500 to-cyan-500',
  'Media': 'from-sky-500 to-indigo-500',
  'Editor': 'from-purple-500 to-fuchsia-500',
  'Stage Lead': 'from-amber-500 to-pink-500'
};

const ProfileModal = dynamic<{
  member: TeamMember;
  onClose: () => void;
}>(() => import('./TeamProfileModal'), { ssr: false });

export default function TeamSection() {
  const [query, setQuery] = useState('');
  const [activeRoles, setActiveRoles] = useState<Set<TeamRole>>(new Set());
  const [showFilters, setShowFilters] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  const [openMember, setOpenMember] = useState<TeamMember | null>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  function toggleRole(r: TeamRole) {
    setActiveRoles(prev => {
      const next = new Set(prev);
      next.has(r) ? next.delete(r) : next.add(r);
      return next;
    });
  }

  function clearFilters() {
    setActiveRoles(new Set());
    setQuery('');
  }

  const filtered: TeamMember[] = useMemo(() => {
    return TEAM.filter((m: TeamMember) => {
      if (activeRoles.size && !activeRoles.has(m.role)) return false;
      if (query && !m.name.toLowerCase().includes(query.toLowerCase())) return false;
      return true;
    }).sort((a: TeamMember, b: TeamMember) => roleOrder.indexOf(a.role) - roleOrder.indexOf(b.role) || a.name.localeCompare(b.name));
  }, [query, activeRoles]);

  // Keyboard navigation (roving focus)
  function onGridKey(e: React.KeyboardEvent<HTMLDivElement>) {
    if (!['ArrowRight','ArrowLeft','ArrowUp','ArrowDown','Home','End'].includes(e.key)) return;
    e.preventDefault();
    const cols = window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 3 : 2; // rough responsive guess
    let next = focusedIndex;
    switch (e.key) {
      case 'ArrowRight': next = Math.min(focusedIndex + 1, filtered.length - 1); break;
      case 'ArrowLeft': next = Math.max(focusedIndex - 1, 0); break;
      case 'ArrowDown': next = Math.min(focusedIndex + cols, filtered.length - 1); break;
      case 'ArrowUp': next = Math.max(focusedIndex - cols, 0); break;
      case 'Home': next = 0; break;
      case 'End': next = filtered.length - 1; break;
    }
    setFocusedIndex(next);
  }

  // Move DOM focus to the currently focused card wrapper
  useEffect(() => {
    const el = itemRefs.current[focusedIndex];
    if (el) el.focus();
  }, [focusedIndex, filtered.length]);

  // Persist filters in query params
  useEffect(() => {
    const params = new URLSearchParams();
    if (query) params.set('q', query);
    if (activeRoles.size) params.set('roles', Array.from(activeRoles).join(','));
    const newUrl = `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}${window.location.hash}`;
    window.history.replaceState(null, '', newUrl);
  }, [query, activeRoles]);

  // Hydrate from query params once
  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    const qParam = sp.get('q');
    const rolesParam = sp.get('roles');
    if (qParam) setQuery(qParam);
    if (rolesParam) {
      const parts = rolesParam.split(',').filter(Boolean) as TeamRole[];
      setActiveRoles(new Set(parts));
    }
  }, []);

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
          <input
            aria-label="Search team members"
            placeholder="Search by name..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full bg-white/5 backdrop-blur border border-white/10 rounded-lg py-2 pl-9 pr-3 text-sm focus:outline-none focus:border-neon-blue/60 focus:ring-2 focus:ring-neon-blue/30 transition"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
              aria-label="Clear search"
            >
              <X size={16} />
            </button>
          )}
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowFilters(s => !s)}
            className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-neon-blue/40"
            aria-expanded={showFilters}
          >
            <Filter size={16} /> Roles
          </button>
          {(activeRoles.size > 0 || query) && (
            <button
              onClick={clearFilters}
              className="text-xs px-3 py-2 rounded bg-white/5 hover:bg-white/10 border border-white/10"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      <AnimatePresence initial={false}>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 overflow-hidden"
          >
            {roleOrder.map(r => {
              const active = activeRoles.has(r as TeamRole);
              return (
                <button
                  key={r}
                  type="button"
                  onClick={() => toggleRole(r as TeamRole)}
                  className={`relative text-xs font-medium px-3 py-2 rounded-lg border transition group focus:outline-none focus:ring-2 focus:ring-neon-blue/40 ${active ? 'border-neon-blue/60 bg-neon-blue/15 text-white' : 'border-white/10 bg-white/5 text-white/70 hover:text-white hover:border-white/20'}`}
                >
                  <span className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 bg-gradient-to-r ${roleColors[r as TeamRole]} blur-sm transition`}></span>
                  <span className="relative">{r}</span>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results count */}
      <div className="text-xs text-white/50">
        Showing {filtered.length} member{filtered.length !== 1 && 's'}{activeRoles.size > 0 && ' • filtered'}
      </div>

      <div
        className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
        onKeyDown={onGridKey}
        role="list"
        aria-label="Team members"
      >
        {filtered.map((m, i) => (
          <div
            key={m.name}
            role="listitem"
            ref={(el) => { itemRefs.current[i] = el; }}
            tabIndex={i === focusedIndex ? 0 : -1}
            aria-label={`${m.name}, ${m.role}`}
          >
            <TeamCard
              member={m}
              i={i}
              onOpen={setOpenMember}
            />
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-center text-white/50 text-sm py-12">No team members match your filters.</div>
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
