const { copySync, outputJsonSync, removeSync } = require("./fileFun");

const { resolve } = require("path");
const {
  getThemePath,
  getSrcThemePath,
  getRequireThemePath,
  srcThemeRootPath,
  getThemeAssetPath,
} = require("./pathFun");

const { initTheme } = require("./init");

const { staticMap, optionMap, assetMap } = initTheme();

removeSync(srcThemeRootPath);

setTimeout(() => {
  for (let key in staticMap) {
    copySync(getThemePath(staticMap[key]), getSrcThemePath(staticMap[key]));
    staticMap[key] = getRequireThemePath(staticMap[key]);
  }
  for (let key in assetMap) {
    copySync(getThemePath(assetMap[key]), getThemeAssetPath(assetMap[key]));
  }

  outputJsonSync(resolve(srcThemeRootPath, "theme.static.json"), staticMap);
  outputJsonSync(resolve(srcThemeRootPath, "theme.option.json"), optionMap);
}, 100);
