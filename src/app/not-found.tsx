import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-[60vh] container-max flex flex-col items-center justify-center text-center gap-6 pt-28">
      <div className="text-sm uppercase tracking-widest text-white/50">404</div>
      <h1 className="font-display text-4xl md:text-5xl">Page not found</h1>
      <p className="text-white/70 max-w-xl">The page you’re looking for doesn’t exist or has been moved.</p>
      <Link href="/" className="btn btn-primary">Go back home</Link>
    </main>
  );
}
