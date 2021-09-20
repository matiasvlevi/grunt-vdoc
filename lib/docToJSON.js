const getInlineDocs = require('./getInlineDocs.js');
const parseLines = require('./parseLines');

module.exports = function docToJSON(file) {
  let docs = getInlineDocs(file);
  let classes = [];
  let globals = { name: 'global methods', methods: [] };
  let classScope = 'window';
  docs.forEach(docMethod => {
    parsedData = parseLines(docMethod.doc, docMethod.declaration, classes, globals, classScope);
    classes = parsedData.classes;
    classScope = parsedData.classScope
  });
  return {
    classes: Object.values(classes),
    globals
  }
};