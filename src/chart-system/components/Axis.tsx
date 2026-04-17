import * as d3 from "d3";
import { useEffect, useRef } from "react";

interface AxisProps {
  scale: d3.ScaleLinear<number, number> | d3.ScaleBand<string>;
  orient: "bottom" | "left";
}

export const Axis = ({ scale, orient }: AxisProps) => {
  const ref = useRef<SVGGElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    
    const selection = d3.select(ref.current);
    const numericScale = scale as d3.ScaleLinear<number, number>;
    if (orient === "bottom") {
      selection.call(d3.axisBottom(numericScale));
    } else {
      selection.call(d3.axisLeft(numericScale));
    }
  }, [scale, orient]);

  return <g ref={ref} />;
};