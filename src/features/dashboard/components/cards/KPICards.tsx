import { formatNumber } from "@/shared/utils/formatNumber";

type Props = {
  title: string;
  value: number | string;
  change: number;
};

export const KPICard = ({ title, value, change }: Props) => {
  const isPositive = change > 0;

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-300">{title}</span>
        <span
          className={`text-xs px-2 py-1 rounded-full ${
            isPositive
              ? "bg-green-900/70 text-green-100"
              : "bg-red-900/70 text-red-100"
          }`}
        >
          {isPositive ? "+" : ""}
          {change}%
        </span>
      </div>

      <div className="mt-3 text-2xl font-semibold">{ typeof value === "number" ? formatNumber(value) : value }</div>
    </div>
  );
};