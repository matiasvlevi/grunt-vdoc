const fs = require('fs');
const docToJSON = require('./docToJSON');


module.exports = function compileContent(config) {
  let file = fs.readFileSync(config.source, 'utf-8')
  let methods = docToJSON(file);

  let docData = {...methods }
  docData['meta'] = {...config.meta }
  let exportData = JSON.stringify(docData)

  fs.writeFileSync(config.content, exportData, 'utf-8');
}