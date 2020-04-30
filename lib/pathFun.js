const { resolve } = require("path");
const rootPath = resolve(__dirname);
const themeRootPath = resolve(__dirname, "../theme");
const srcThemeRootPath = resolve(__dirname, "../src/theme");
/** 获取原来的文件地址 */
function getThemePath(path) {
  let _path = path.replace("@theme", ".");
  _path = resolve(themeRootPath, _path);
  return _path;
}

/** 获取src里面的文件地址 */
function getSrcThemePath(path) {
  let _path = path.replace("@theme", ".");
  _path = resolve(srcThemeRootPath, _path);
  return _path;
}

/** 获取require文件地址 即生产theme.json 文件的value */
function getRequireThemePath(path) {
  let _path = path.replace("@theme", "");
  return _path;
}

/** 固定位置的文件地址 */
function getThemeAssetPath(path) {
  let _path = path
    .split("/")
    .filter((item) => !(item.includes("@theme") || item.includes("theme-")))
    .join("/");
  _path = resolve(srcThemeRootPath, _path);
  return _path;
}

module.exports = {
  getThemePath,
  getSrcThemePath,
  getRequireThemePath,
  rootPath,
  themeRootPath,
  srcThemeRootPath,
  getThemeAssetPath,
};
