/**
 * Generates scss files for "utilities"
 */
const fs = require("fs");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);
var mkdirp = require("mkdirp");
var getDirName = require("path").dirname;

const nodePackageRoot = "../../../../node_modules/bootstrap/scss/utilities";

const basicTemplate = utilName => {
  return `
@import "./utilities";
$utilities: no-media($${utilName}-utils);
@import "${nodePackageRoot}/api";
  `.trim();
};
const responsiveTemplate = utilName => {
  return `
@import "./utilities";
$utilities: $${utilName}-utils;
@import "${nodePackageRoot}/api";
  `.trim();
};

async function doWriteFile(file, content) {
  return writeFile(file, content, "utf-8");
}

async function genUtil(util) {
  const packageRoot = "packages/bootstrap-css/scss/utilities";
  const outDir = packageRoot;
  const basicFile = `${outDir}/${util}.scss`;
  const responsiveFile = `${outDir}/${util}-responsive.scss`;

  mkdirp(getDirName(outDir), err => {
    doWriteFile(basicFile, basicTemplate(util));
    // TODO let's do responsive later once the overall build patterns are dialed in.. 
    // doWriteFile(responsiveFile, responsiveTemplate(util));
  });
}

//todo auto generate utility names?
//grep "utils:" _utilities.scss | sed "s/:.*//g" | sed "s/^.*\\$//g" > $temp

const utilNames = ["display", "flex", "sizing", "spacing", "style", "text"];

utilNames.forEach(utilName => genUtil(utilName));
