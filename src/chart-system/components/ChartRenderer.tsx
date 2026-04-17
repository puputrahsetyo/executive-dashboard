import { ChartSkeleton } from "@/features/dashboard/components/skeletons/ChartSkeleton";
import { chartRegistry } from "../core/chartRegistry";
import { EmptyState } from "@/features/dashboard/components/ui/EmptyState";
import { transformData } from "../utils/transformData";


type Props = {
  config: { type: keyof typeof chartRegistry; title?: string; xKey: string; yKey: string; [key: string]: any };
  data: any[] | [];
  loading?: boolean;
};

export const ChartRenderer = ({ config, data, loading }: Props) => {
  const ChartComponent = chartRegistry[config.type];

  if (loading) {
    return <ChartSkeleton />;
  }

  if (!data || data.length === 0) {
    return (
      <EmptyState
        title="No chart data"
        description="There’s nothing to visualize here yet."
      />
    );
  }

  const transformedData = transformData(data, config);

  return (
    <div className="card">
      {config.title && (
        <h3 className="text-sm font-medium text-gray-700 mb-4">
          {config.title}
        </h3>
      )}

      <ChartComponent data={transformedData} config={config} />
    </div>
  );
};