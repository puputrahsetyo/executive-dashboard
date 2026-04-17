type Props = {
  width: number;
  height: number;
  margin: { left: number; top: number };
  children: React.ReactNode;
};

export const BaseChart = ({ width, height, margin, children }: Props) => {
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        {children}
      </g>
    </svg>
  );
};