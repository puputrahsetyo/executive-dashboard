
type Props = {
    title: string;
    filter?: string;
    children: React.ReactNode;
};

export const ChartCard = ({ title, filter, children }: Props) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-300">{title}</span>
        {filter && (
          <select className="text-sm border border-gray-200 rounded-md px-2 py-1">
            <option>{filter}</option>
            </select>
        )}
      </div>
        <div className="mt-3">
            {children}
        </div>
    </div>
  );
};