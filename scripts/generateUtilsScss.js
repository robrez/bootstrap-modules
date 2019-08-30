/**
 * Generates scss files for "utilities"
 */
const fs = require("fs");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);
var mkdirp = require("mkdirp");
var getDirName = require("path").dirname;

const basicTemplate = utilName => {
  return `
@import "./utilities";
$utilities: no-media($${utilName}-utils);
@import "../node_modules/bootstrap/scss/utilities/api";
  `.trim();
};
const responsiveTemplate = utilName => {
  return `
@import "./utilities";
$utilities: $${utilName}-utils;
@import "../node_modules/bootstrap/scss/utilities/api";
  `.trim();
};

async function doWriteFile(file, content) {
  return writeFile(file, content, "utf-8");
}

async function genUtil(util) {
  const outDir = "scss2/";
  const basicFile = `${outDir}${util}.scss`;
  const responsiveFile = `${outDir}${util}-responsive.scss`;

  mkdirp(getDirName(outDir), err => {
    doWriteFile(basicFile, basicTemplate(util));
    doWriteFile(responsiveFile, responsiveTemplate(util));
  });
}

//todo auto generate utility names?
//grep "utils:" _utilities.scss | sed "s/:.*//g" | sed "s/^.*\\$//g" > $temp

const utilNames = ["display", "flex", "sizing", "spacing", "style", "text"];

utilNames.forEach(utilName => genUtil(utilName));
