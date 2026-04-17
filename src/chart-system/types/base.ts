export type ChartDataPoint = {
  x: string | number;
  y: number;
};

export type ChartMargin = {
  top: number;
  right: number;
  bottom: number;
  left: number;
};

export type BaseChartProps<T> = {
  data: T[];
  width?: number;
  height?: number;
  margin?: ChartMargin;
};