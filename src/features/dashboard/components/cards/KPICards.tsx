import { formatNumber } from "@/shared/utils/formatNumber";

type Props = {
  icon?: React.ReactNode;
  title: string;
  unit?: string;
  inPercentage?: boolean;
  value: number;
  change?: number;
  changeTime?: 'day' | 'week' | 'month' | 'year';
};

export const KPICard = ({ icon, title, value, unit, change, changeTime, inPercentage}: Props) => {
  return (
    <div className="card">
      <div>
        <span>{icon}</span>
        <span className="text-sm text-stone-300 font-semibold">{title}</span>
      </div>
      <div className="mt-3 text-4xl font-semibold text-white">
        <span className="text-stone-500">{unit}</span>
        {formatNumber(value)}
        {inPercentage && <span className="text-stone-500">%</span>}
      </div>
      <div className={`mt-2 text-xs text-stone-400`}>
        {change !== undefined && (
          <span className={`font-medium ${change > 0 ? "text-green-500" : change < 0 ? "text-red-500" : "text-gray-500"}`}>
            {change > 0 && "+"}{change}%
          </span>
        )}
        <span className="ml-1">from last {changeTime ||'month'}</span>
      </div>
    </div>
  );
};