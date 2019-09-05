const fs = require('fs');
const path = require('path');
const util = require('util');

const sass = require('sass');
const nodeSassImport = require('node-sass-import');

const renderSass = util.promisify(sass.render);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
var mkdirp = require("mkdirp");
var getDirName = require("path").dirname;

const delimiter = /<%\s*content\s*%>/;

async function sassToCss(sassFile) {
  const result = await renderSass({
    file: sassFile,
    importer: nodeSassImport,
    precision: 6,
    outputStyle: 'expanded'
  });
  return result.css.toString();
}

const templateFile = path.join(__dirname, './sass-template.tmpl');

async function sassRender(sourceFile) {
  const template = await readFile(templateFile, 'utf-8');
  const match = delimiter.exec(template);
  if (!match) {
    throw new Error(`Template file ${templateFile} did not contain template delimiters`);
  }
  console.log(`Processing ${sourceFile}`);
  const replacement = await sassToCss(sourceFile);
  const newContent = template.replace(delimiter, replacement);
  const outputFile = sourceFile.replace('.scss', '-css.js').replace('scss', 'src');
  return writeFile(outputFile, newContent, 'utf-8');
}

//for packages/bootstrap-css -- output raw css and js literal template
//TODO streamline scripting  - this is getting sloppy vs basic sassRender above
async function bootstrapCss(sourceFile) {
  const template = await readFile(templateFile, 'utf-8');
  const match = delimiter.exec(template);
  if (!match) {
    throw new Error(`Template file ${templateFile} did not contain template delimiters`);
  }
  console.log(`Processing ${sourceFile}`);
  const cssContent = await sassToCss(sourceFile);
  const cssOutput = sourceFile.replace('.scss', '.css').replace('scss', 'dist/css');
  mkdirp(getDirName(cssOutput), err => {
    writeFile(cssOutput, cssContent, 'utf-8');
  });
  const jsCssContent = template.replace(delimiter, cssContent);
  const jsOutput = sourceFile.replace('.scss', '-css.js').replace('scss', 'dist/js-css');
  mkdirp(getDirName(jsOutput), err => {
    writeFile(jsOutput, jsCssContent, 'utf-8');
  });
}

exports.sassRender = sassRender;
exports.bootstrapCss = bootstrapCss;
