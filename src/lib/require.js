import theme from "../theme/theme.static.json";

export const _require = (key) => {
  return require("../theme" + theme[key]);
};
