const getValueType = require('./getValueType');
const classData = require('./classData');
const methodData = require('./methodData');

module.exports = function parseLines(doc, declaration, classes, globals, currentClassScope) {

  // Split text in an array of lines
  let lines = doc.split('\n').join('\r').split('\r').filter(x =>
    x.length <= 1 ? false : true
  );

  // docElement Variables
  let docElement;
  let desc = '';
  let params = [];
  let props = [];
  let returnData = {};
  let chainable = false;
  let static = false;
  let isConstructor = false;
  let isClass = false;

  // Example code snippet
  let exampleScope = 0;
  let exampleCode = [];

  lines.forEach(line => {
    lineArgs = line.split('*').join('').split(' ').filter(x =>
      x.length < 1 ? false : true
    );

    if (lineArgs.length > 0) {
      if (lineArgs[0][0] !== '@') {
        if (exampleScope >= 1) {
          if (exampleCode[exampleScope - 1] === undefined) {
            exampleCode[exampleScope - 1] = [];
          }
          exampleCode[exampleScope - 1].push(lineArgs.join(' '));
        } else {
          if (desc.length === 0) {
            desc = lineArgs.join(' ');
          }
        }

      } else {
        if (lineArgs[0] === '@class') {
          // Create a new class and set the class scope
          docElement = new classData(lineArgs[1]);
          isClass = true;
          currentClassScope = lineArgs[1];
        } else if (lineArgs[0] === '@method') {
          // Create a new method and escape the class scope
          docElement = new methodData(lineArgs[1]);
          isClass = false;
        } else if (lineArgs[0] === '@param') {
          // Get name of parameter, value type and description
          params.push({
            name: lineArgs[2],
            type: getValueType(lineArgs[1]),
            description: lineArgs.slice(3, lineArgs.length).join(' ')
          })
        } else if (lineArgs[0] === '@prop') {
          // Get name of parameter, value type and description
          props.push({
            name: lineArgs[2],
            type: getValueType(lineArgs[1]),
            description: lineArgs.slice(3, lineArgs.length).join(' ')
          });
        } else if (lineArgs[0] === '@return') {
          // Get value type and description
          returnData = {
            type: getValueType(lineArgs[1]),
            description: lineArgs.slice(2, lineArgs.length).join(' ')
          }
        } else if (lineArgs[0] === '@chainable') {
          chainable = true;
        } else if (lineArgs[0] === '@static') {
          static = true;
        } else if (lineArgs[0] === '@constructor') {
          isConstructor = true;
        } else if (lineArgs[0] === '@example') {
          exampleScope++;
        }
      }
    }
  });
  // Set values in docElement
  if (docElement !== undefined) {
    docElement.setDescription(desc);

    params.forEach(x => {
      docElement.addParam(x);
    });

    docElement.setReturn(returnData);
    docElement.setChainable(chainable);
    docElement.setStatic(static);
    docElement.setConstructor(isConstructor);
    if (exampleScope >= 1) {
      exampleCode.forEach(example => {
        docElement.addExample(example.join('\n'));
      });
    }
    if (isClass) {
      props.forEach(x => {
        docElement.addProperty(x);
      });
    }

    let isInClassScope = [...declaration.matchAll(currentClassScope)].length > 0 ? true : false;
    if (isInClassScope === false) {
      currentClassScope = 'window';
    }
    if (currentClassScope !== 'window') {
      if (classes[currentClassScope] === undefined) {
        classes[currentClassScope] = { name: currentClassScope, methods: [] };
      }
      classes[currentClassScope].methods.push(docElement.getGeneric());
    } else {
      globals.methods.push(docElement.getGeneric());
    }
  }
  // Return classes & methods with the currentClass scope
  return {
    classes,
    globals,
    classScope: currentClassScope
  };
}