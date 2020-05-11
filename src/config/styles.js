import { hexToRgb } from "@material-ui/core";

export default {
  colors: {
    brand: "#ff7c46",
    brandDark: "#ea5634",
    black: "#000000",
    grey100: "#1b222b",
    grey90: "#313840",
    grey80: "#494e55",
    grey70: "#5f646a",
    grey60: "#767a80",
    grey50: "#8d9095",
    grey40: "#a4a7aa",
    grey30: "#babcbf",
    grey20: "#d1d3d5",
    grey10: "#e8e8e9",
    white: "#ffffff",
    withOpacity: (hexColor, opacity) =>
      `rgba(${hexToRgb(hexColor).join(", ")}, ${opacity})`
  }
};
