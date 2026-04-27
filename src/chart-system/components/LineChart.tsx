import { useChartDimensions } from "../hooks/useChartDimensions";
import { useScales } from "../hooks/useScales";
import { createLinePath } from "../core/line";
import { BaseChart } from "./BaseChart";

type Props = {
  data: { x: string | number; y: number }[];
  config?: {
    xKey?: string;
    yKey?: string;
    colors?: {
      primary?: string;
    };
    width?: number;
    height?: number;
    margin?: { top: number; right: number; bottom: number; left: number };
}
};

export const LineChart = ({ data, config }: Props) => {
  const { width, height, margin, boundedWidth, boundedHeight } = useChartDimensions(config?.width, config?.height, config?.margin);
  const color = config?.colors?.primary || "blue";

  const { xScale, yScale } = useScales(data, boundedWidth, boundedHeight);

  const path = createLinePath(data, xScale, yScale);

  return (
    <BaseChart width={width} height={height} margin={margin}>
      <path d={path!} fill="none" stroke={color} />
    </BaseChart>
  );
};