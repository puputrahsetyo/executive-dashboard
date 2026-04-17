// components/skeletons/ChartSkeleton.tsx
import { Skeleton } from "../ui/Skeleton";

export const ChartSkeleton = () => {
  return (
    <div className="card space-y-4">
      <div className="flex justify-between">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-6 w-24" />
      </div>

      <Skeleton className="h-62.5 w-full" />
    </div>
  );
};