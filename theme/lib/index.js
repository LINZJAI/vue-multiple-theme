/** 用于theme的合并，后面的覆盖前面的 */
function mergeTheme(themeArr) {
  return themeArr.reduce((total, current) => {
    let keys = Object.keys(current);

    let obj = {};
    for (let key of keys) {
      obj[key] = Object.assign(total[key] || {}, current[key] || {});
    }
    return obj;
  }, {});
}

module.exports = { mergeTheme };
