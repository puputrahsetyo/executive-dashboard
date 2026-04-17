export const Skeleton = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`animate-pulse skeleton-shimmer h-6 w-24 rounded${className}`}
    />
  );
};