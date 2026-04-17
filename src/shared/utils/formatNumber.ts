export const formatNumber = (num: number): string => {
    // Handle negative numbers
    if (num < 0) return "-" + formatNumber(-num);
    if (num >= 1e9){
        const formatted = (num / 1e9).toFixed(1);
        // Remove trailing .0 for whole numbers
        return formatted.endsWith(".0") ? formatted.slice(0, -2) + "B" : formatted + "B";
    } 
    if (num >= 1e6){
        const formatted = (num / 1e6).toFixed(1);
        return formatted.endsWith(".0") ? formatted.slice(0, -2) + "M" : formatted + "M";
    }
    if (num >= 1e3){
        const formatted = (num / 1e3).toFixed(1);
        return formatted.endsWith(".0") ? formatted.slice(0, -2) + "K" : formatted + "K";
    }
  return num.toString();
};