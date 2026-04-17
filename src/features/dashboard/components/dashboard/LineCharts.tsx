import * as d3 from "d3";
import { useEffect, useRef } from "react";

type Props = {
  data: { date: string; value: number }[];
};

export const LineChart = ({ data }: Props) => {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();

    const width = 500;
    const height = 300;

    const x = d3
      .scalePoint()
      .domain(data.map((d) => d.date))
      .range([0, width]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)!])
      .range([height, 0]);

    const line = d3
      .line<{ date: string; value: number }>()
      .x((d) => x(d.date)!)
      .y((d) => y(d.value));

    svg
      .attr("width", width)
      .attr("height", height)
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "blue")
      .attr("d", line);
  }, [data]);

  return <svg ref={ref}></svg>;
};