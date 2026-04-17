import * as d3 from "d3";

export const createLinePath = (
  data: { x: string | number; y: number }[],
  xScale: d3.ScaleLinear<number, number> | d3.ScaleBand<string> | d3.ScalePoint<string>,
  yScale: d3.ScaleLinear<number, number>
) => {
  return d3
    .line<{ x: string | number; y: number }>()
    .x((d) => xScale(d.x as string & number) ?? 0)
    .y((d) => yScale(d.y))(data);
};