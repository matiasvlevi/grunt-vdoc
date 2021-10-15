const fs = require('fs');
const docToJSON = require('./docToJSON');
const getAllFiles = require('./getAllFiles');

function compileContent(config) {
  let source = config.source;
  let file = '';
  let allFiles = getAllFiles(source);

  for (let i = 0; i < allFiles.length; i++) {
    console.log(allFiles[i]);
    file += '\n' + fs.readFileSync(allFiles[i], 'utf-8') + '\n';
  }

  let methods = docToJSON(file);

  let docData = {...methods }
  docData['meta'] = {...config.meta }
  let exportData = JSON.stringify(docData)
  fs.writeFileSync(config.content, exportData, 'utf-8');



}

module.exports = compileContent;