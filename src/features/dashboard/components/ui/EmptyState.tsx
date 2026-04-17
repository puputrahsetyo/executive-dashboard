export const EmptyState = ({
  title = "No data available",
  description = "Try adjusting your filters or data source.",
  action,
}: {
  title?: string;
  description?: string;
  action?: React.ReactNode;
}) => {
  return (
    <div className="card flex flex-col items-center justify-center py-12 text-center">
      <div className="text-gray-400 text-sm">{title}</div>
      <p className="text-gray-500 text-sm mt-2">{description}</p>

      {action && <div className="mt-4">{action}</div>}
    </div>
  );
};