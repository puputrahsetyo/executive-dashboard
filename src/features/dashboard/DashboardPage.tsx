import { activities, kpis, topProducts } from "@/data/mockData";
import { KPISkeleton } from "./components/skeletons/KPISkeleton";
import { KPICard } from "./components/cards/KPICards";
import { ChartRenderer } from "@/chart-system/components/ChartRenderer";
import { TopProducts } from "./components/dashboard/TopProducts";
import { ActivityFeed } from "./components/dashboard/ActivityFeed";
import HeaderFilter from "./layout/HeaderFilter";


export const DashboardPage = () => {
  const config = {
    type: "line" as const,
    xKey: "month",
    yKey: "revenue",
    title: "Revenue Trend",
    colors: {
      primary: "green",
    },
  };
  const isLoading = false;

  const data: Array<{ month: string; revenue: number }> = [
    // { month: "Jan", revenue: 100 },
    // { month: "Feb", revenue: 200 },
    // { month: "Mar", revenue: 150 },
  ];

  return (
    <div className="space-y-6">
      <HeaderFilter onFilterChange={(filter) => console.log("Selected filter:", filter)} />
      {/* KPI */}
      <div className="grid grid-cols-4 gap-4">
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => (
              <KPISkeleton key={i} />
            ))
          : kpis.map((kpi, i) => <KPICard key={i} {...kpi} />)}
      </div>

      {/* Chart */}
      <div className="grid grid-cols-2 gap-4">
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-700">
              Revenue Trend
            </h3>

            <select className="text-sm border border-gray-200 rounded-md px-2 py-1">
              <option>Last 3 months</option>
              <option>Last 6 months</option>
            </select>
          </div>

          <ChartRenderer config={config} data={data} loading={false} />
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="grid grid-cols-2 gap-4">
        <TopProducts data={topProducts} />
        <ActivityFeed data={activities} />
      </div>
    </div>
  );
};