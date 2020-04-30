const { readdirSync } = require("./fileFun");
const { themeRootPath } = require("./pathFun");
/** 根据主题初始化数据 */
function initTheme() {
  const theme = process.argv[2] || "base";
  let themes = readdirSync(themeRootPath);
  if (themes.includes("theme-" + theme)) {
    console.log(`使用${theme}主题初始化`);
    const themeConfig = require(`../theme/theme-${theme}/theme.config`);
    const staticMap = themeConfig.static;
    const optionMap = themeConfig.option;
    const assetMap = themeConfig.asset;

    return {
      staticMap,
      optionMap,
      assetMap,
    };
  } else {
    throw new Error("没有找到对应主题，请检查!");
  }
}

module.exports = {
  initTheme,
};
