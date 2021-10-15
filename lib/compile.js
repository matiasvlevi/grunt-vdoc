const Handlebars = require('handlebars');
const getFileData = require('./getFileData');
const fs = require('fs');
const getAllFiles = require('./getAllFiles');
const { getDirectories, getDirContent } = require('./getLocalInfo');
const fse = require('fs-extra');

module.exports = function compile(config) {

  const sourceDir = config.templates;
  const buildDir = config.dest;
  const partialsDir = config.partials;
  const assetsDir = config.assets;
  const dataDir = config.content;

  const data = JSON.parse(fs.readFileSync(dataDir, 'utf-8'));
  const files = getFileData(sourceDir, partialsDir);

  // Register partials
  let partials = files.partials;
  for (let i = 0; i < partials.length; i++) {
    Handlebars.registerPartial(
      partials[i].name,
      partials[i].data
    )
  }

  // Apply templates
  let templates = files.files;
  for (let i = 0; i < templates.length; i++) {
    let filedata = templates[i].data
    templates[i].template = Handlebars.compile(filedata);
    let builtFile = templates[i].template(data);
    fs.writeFileSync(buildDir + templates[i].builtName, builtFile, 'utf-8');
  }

  // Move assets directory to the built directory
  let dirs = assetsDir.split('/').filter(x => (x.length <= 1 ? false : true));
  let dirname = dirs[dirs.length - 1];
  let assetsPath = buildDir + dirname + '/';
  console.log(assetsDir.slice(0, assetsDir.length - 1), assetsPath.slice(0, assetsPath.length - 1))

  fse.copySync(assetsDir.slice(0, assetsDir.length - 1), assetsPath.slice(0, assetsPath.length - 1), { overwrite: true }, function(err) {
    if (err) {
      console.error(err);
    } else {
      console.log("success!");
    }
  });

};