import { Skeleton } from "../ui/Skeleton";

export const KPISkeleton = () => {
  return (
    <div className="card space-y-3">
      <Skeleton className="h-3 w-20" />
      <Skeleton className="h-6 w-24" />
      <Skeleton className="h-3 w-12" />
    </div>
  );
};