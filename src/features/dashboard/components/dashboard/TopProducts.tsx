export const TopProducts = ({ data }: any) => {
  return (
    <div className="card">
      <h3 className="text-sm font-medium mb-4">Top Products</h3>

      <table className="w-full text-sm">
        <thead className="text-gray-500">
          <tr>
            <th className="text-left py-2">Product</th>
            <th>Sales</th>
            <th>Growth</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item: any, i: number) => (
            <tr key={i} className="border-t">
              <td className="py-2">{item.name}</td>
              <td className="text-center">{item.sales}</td>
              <td
                className={`text-center ${
                  item.growth > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {item.growth}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};