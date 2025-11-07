"use client";
import Image from 'next/image';
import { TeamMember } from '@/data/content';

type Props = {
  members: TeamMember[];
  onOpen?: (m: TeamMember) => void;
};

function Avatar({ m }: { m: TeamMember }) {
  const initials = m.name
    .split(' ')
    .map((s) => s[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
  return (
    <div className="relative p-[2px] rounded-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink shadow-neon">
      <div className="h-16 w-16 sm:h-18 sm:w-18 md:h-20 md:w-20 rounded-full overflow-hidden bg-white/5 grid place-items-center">
        {m.image ? (
          <Image
            src={m.image}
            alt={m.name}
            width={80}
            height={80}
            className="h-full w-full object-cover"
            loading="lazy"
            sizes="(max-width: 640px) 64px, 80px"
          />
        ) : (
          <span className="font-display text-lg text-white/90">{initials}</span>
        )}
      </div>
      <span aria-hidden className="pointer-events-none absolute -inset-1 rounded-full bg-gradient-to-r from-neon-blue to-neon-pink blur opacity-20" />
    </div>
  );
}

export default function TeamMarquee({ members, onOpen }: Props) {
  if (!members?.length) return null;
  // Duplicate list for seamless loop
  const loop = [...members, ...members];
  return (
    <div className="marquee group" aria-label="Team members carousel">
      <div className="marquee-track" role="list" aria-live="polite">
        {loop.map((m, idx) => (
          <button
            key={`${m.name}-${idx}`}
            type="button"
            role="listitem"
            onClick={() => onOpen?.(m)}
            className="isolate mx-2 my-3 inline-flex flex-col items-center gap-2 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-purple/60"
          >
            <Avatar m={m} />
            <span className="text-xs text-white/80 leading-tight max-w-[8rem] text-center">
              {m.name}
              <span className="block text-[10px] text-white/60">{m.role}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
