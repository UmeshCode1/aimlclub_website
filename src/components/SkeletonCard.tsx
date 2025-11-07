export default function SkeletonCard() {
  return (
    <div className="card p-6 animate-pulse">
      <div className="flex flex-col items-center text-center gap-4">
        {/* Avatar skeleton */}
        <div className="h-20 w-20 rounded-full bg-white/10" />
        
        {/* Name skeleton */}
        <div className="space-y-2 w-full">
          <div className="h-5 bg-white/10 rounded w-3/4 mx-auto" />
          <div className="h-6 bg-white/10 rounded-full w-24 mx-auto" />
        </div>
        
        {/* Bio skeleton */}
        <div className="space-y-2 w-full">
          <div className="h-3 bg-white/10 rounded w-full" />
          <div className="h-3 bg-white/10 rounded w-5/6 mx-auto" />
        </div>
        
        {/* Social icons skeleton */}
        <div className="flex gap-2 pt-2">
          <div className="h-8 w-8 bg-white/10 rounded-md" />
          <div className="h-8 w-8 bg-white/10 rounded-md" />
          <div className="h-8 w-8 bg-white/10 rounded-md" />
        </div>
      </div>
    </div>
  );
}
