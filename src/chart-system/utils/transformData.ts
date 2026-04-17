interface DataItem {
  [key: string]: string | number;
}

interface TransformConfig {
  xKey: string;
  yKey: string;
}

export const transformData = (data: DataItem[], config: TransformConfig) => {
  const { xKey, yKey } = config;

  return data.map((d) => ({
    x: d[xKey],
    y: Number(d[yKey]),
  }));
};