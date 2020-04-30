const { mergeTheme } = require("../lib");
const baseThemeConfig = require("../theme-base/theme.config");

const themeConfig = {
  asset: {
    valScss: "@theme/theme-red/asset/val.scss",
  },
  static: {
    img2: "@theme/theme-red/img/2.jpg",
    img3: "@theme/theme-red/img/3.jpg",
  },
  option: {
    themeName: "红色主题，继承标准主题",
    imgNum: 6,
  },
};

module.exports = mergeTheme([baseThemeConfig, themeConfig]);
