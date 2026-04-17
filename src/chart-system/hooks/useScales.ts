import * as d3 from "d3";

interface DataPoint {
  x: string | number;
  y: number;
}

export const useScales = (data: DataPoint[], width: number, height: number) => {
  const xScale = d3
    .scalePoint()
    .domain(data.map((d) => String(d.x)))
    .range([0, width]);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.y)!])
    .range([height, 0]);

  return { xScale, yScale };
};