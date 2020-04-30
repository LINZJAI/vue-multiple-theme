// console.log(process.env.VUE_APP_TITLE);
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: "/",
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@theme", resolve("src/theme"));
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/theme/asset/val.scss";`,
      },
    },
  },
};
