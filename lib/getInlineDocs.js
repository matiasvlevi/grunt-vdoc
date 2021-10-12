module.exports = function getInlineDoc(file) {
  let exp = [];
  let declaration = new RegExp(/\\*\/([^;]*?)(\{(\n|\r))/gm);
  let validDoc = new RegExp(/@class|@method/gm);

  let declarations = [...file.matchAll(declaration)]
  for (let i = 0; i < declarations.length; i++) {
    let valid = [...declarations[i][0].matchAll(validDoc)];
    if (valid[0] !== undefined) {
      exp.push({
        doc: valid[0].input,
        declaration: declarations[i][0].split('\r').join('').split('\n').join('')
      });
    }
  }
  return exp;
};