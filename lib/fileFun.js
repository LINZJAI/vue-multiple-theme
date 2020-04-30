var fse = require("fs-extra");
const {
  copySync,
  //   emptyDirSync,
  //   ensureFileSync,
  //   ensureDirSync,
  //   ensureLinkSync,
  //   ensureSymlinkSync,
  //   mkdirpSync,
  //   mkdirsSync,
  //   moveSync,
  //   outputFileSync,
  outputJsonSync,
  //   pathExistsSync,
  //   readJsonSync,
  removeSync,
  //   writeJsonSync,
  //   readFileSync,
  //   writeFileSync,,
  readdirSync,
} = fse;

// const readdir = fs.readdir;

module.exports = {
  copySync,
  outputJsonSync,
  removeSync,
  readdirSync,
};
