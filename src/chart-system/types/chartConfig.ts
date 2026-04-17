export type ChartType = "line" | "bar";

export type ChartConfig = {
  type: ChartType;

  xKey: string;
  yKey: string;

  title?: string;

  colors?: {
    primary?: string;
  };
};