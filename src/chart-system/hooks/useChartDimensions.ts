export const useChartDimensions = (
  width = 500,
  height = 300,
  margin = { top: 20, right: 20, bottom: 30, left: 40 }
) => {
  return {
    boundedWidth: width - margin.left - margin.right,
    boundedHeight: height - margin.top - margin.bottom,
    margin,
    width,
    height,
  };
};