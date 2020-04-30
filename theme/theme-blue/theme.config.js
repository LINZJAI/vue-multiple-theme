const { mergeTheme } = require("../lib");
const baseThemeConfig = require("../theme-base/theme.config");
const redThemeConfig = require("../theme-red/theme.config");

const themeConfig = {
  asset: {
    valScss: "@theme/theme-blue/asset/val.scss",
  },
  static: {
    img3: "@theme/theme-red/img/2.jpg",
  },
  option: {
    themeName: "蓝色主题，继承红色主题和标准主题",
    imgNum: 6,
  },
};

module.exports = mergeTheme([baseThemeConfig, redThemeConfig, themeConfig]);
