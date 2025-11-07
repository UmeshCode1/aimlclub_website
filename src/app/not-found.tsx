import Link from 'next/link';
import { Home, Search, Users, Mail } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-[80vh] container-max flex flex-col items-center justify-center text-center gap-8 pt-28 relative">
      {/* 404 Badge */}
      <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10">
        <div className="h-2 w-2 rounded-full bg-neon-pink animate-pulse" />
        <span className="text-sm uppercase tracking-widest text-white/75 font-semibold">404 Error</span>
      </div>

      {/* Main heading */}
      <h1 className="font-display text-5xl md:text-7xl font-bold bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
        Page Not Found
      </h1>

      <p className="text-lg text-white/75 max-w-md leading-relaxed">
        Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
      </p>

      {/* Quick navigation */}
      <div className="grid sm:grid-cols-2 gap-4 pt-8 max-w-2xl w-full">
        <Link
          href="/"
          className="group card p-6 hover:shadow-neon transition-all duration-300 flex flex-col items-center gap-3"
        >
          <div className="p-3 rounded-lg bg-neon-blue/20">
            <Home className="h-6 w-6 text-neon-blue" />
          </div>
          <div>
            <div className="font-semibold text-white group-hover:text-neon-blue transition-colors">Go Home</div>
            <div className="text-xs text-white/75 mt-1">Back to main page</div>
          </div>
        </Link>

        <Link
          href="/#team"
          className="group card p-6 hover:shadow-neon transition-all duration-300 flex flex-col items-center gap-3"
        >
          <div className="p-3 rounded-lg bg-neon-purple/20">
            <Users className="h-6 w-6 text-neon-purple" />
          </div>
          <div>
            <div className="font-semibold text-white group-hover:text-neon-purple transition-colors">Meet the Team</div>
            <div className="text-xs text-white/75 mt-1">Explore our members</div>
          </div>
        </Link>

        <Link
          href="/#events"
          className="group card p-6 hover:shadow-neon transition-all duration-300 flex flex-col items-center gap-3"
        >
          <div className="p-3 rounded-lg bg-neon-pink/20">
            <Search className="h-6 w-6 text-neon-pink" />
          </div>
          <div>
            <div className="font-semibold text-white group-hover:text-neon-pink transition-colors">Browse Events</div>
            <div className="text-xs text-white/75 mt-1">View upcoming workshops</div>
          </div>
        </Link>

        <Link
          href="/#contact"
          className="group card p-6 hover:shadow-neon transition-all duration-300 flex flex-col items-center gap-3"
        >
          <div className="p-3 rounded-lg bg-cyan-500/20">
            <Mail className="h-6 w-6 text-cyan-400" />
          </div>
          <div>
            <div className="font-semibold text-white group-hover:text-cyan-400 transition-colors">Contact Us</div>
            <div className="text-xs text-white/75 mt-1">Get in touch</div>
          </div>
        </Link>
      </div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-pink/10 rounded-full blur-[100px]" />
      </div>
    </main>
  );
}
