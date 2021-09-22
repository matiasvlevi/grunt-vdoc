module.exports = function getInlineDoc(file) {

  let exp = [];
  let reg = new RegExp(/\/\*\*((.|\n|\r)*?)\*\//gm);
  let declaration = new RegExp(/\*\/([^;]*?)(\{(\n|\r))/gm);

  let declarations = [...file.matchAll(declaration)]
  let inlineDocs = [...file.matchAll(reg)];
  for (let i = 0; i < declarations.length; i++) {
    exp.push({
      doc: inlineDocs[i][1],
      declaration: declarations[i][1].split('\r').join('').split('\n').join('')
    });
  }

  return exp;
};