const fs = require('fs');
module.exports = function getFileData(sourceDir, partialsDir) {
  let files = [];
  let dir = fs.readdirSync(sourceDir);


  dir.forEach(file => {
    if (file.indexOf('.handlebars') !== -1) {
      let builtName = file.split('.').slice(0, 1);
      builtName.push('.html');
      builtName = builtName.join('');
      files.push({
        name: file,
        builtName,
        data: fs.readFileSync(sourceDir + file, 'utf-8')
      });
    }
  });
  let partials = [];
  fs.readdirSync(partialsDir).forEach(file => {
    let name = file.split('.').slice(0, 1);

    if (file.indexOf('.handlebars') !== -1) {
      partials.push({
        name: name.join(''),
        data: fs.readFileSync(partialsDir + file, 'utf-8')
      });
    }
  });
  return {
    files,
    partials
  };
};