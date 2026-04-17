export const ActivityFeed = ({ data }: any) => {
  return (
    <div className="card">
      <h3 className="text-sm font-medium mb-4">Recent Activity</h3>

      <div className="space-y-3">
        {data.map((item: any, i: number) => (
          <div key={i} className="text-sm flex justify-between">
            <span>{item.text}</span>
            <span className="text-gray-400">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};