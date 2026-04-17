import { useState } from "react";

export const useTooltip = () => {
  const [tooltip, setTooltip] = useState<object | null>(null);

  return {
    tooltip,
    showTooltip: setTooltip,
    hideTooltip: () => setTooltip(null),
  };
};