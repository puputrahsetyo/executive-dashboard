interface BarData {
  y: number;
}

export const BarChart = ({ data }: { data: BarData[] }) => {
  return (
    <svg width={500} height={300}>
      {data.map((d: BarData, i: number) => (
        <rect
          key={i}
          x={i * 40}
          y={300 - d.y}
          width={30}
          height={d.y}
          fill="orange"
        />
      ))}
    </svg>
  );
};