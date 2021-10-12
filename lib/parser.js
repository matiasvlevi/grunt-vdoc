const fs = require('fs');
const docToJSON = require('./docToJSON');

const getDirContent = source =>
  fs.readdirSync(source, { withFileTypes: true })
  .map(dirent => dirent.name)

const getDirectories = source =>
  fs.readdirSync(source, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name)

function compileContent(config) {
  let source = config.source;
  let file = '';
  if (source.indexOf('*') !== -1) {
    let path = source.split('/');

    let paths = [];
    let files = [];
    for (let i = 0; i < path.length; i++) {
      let cdir = path.slice(0, i).join('/');
      if (path[i][0] === '*') {
        if (path[i][1] === '*') {
          cdir = path.slice(0, i).join('/');

          let dirs = getDirectories(cdir);

          for (let j = 0; j < dirs.length; j++) {
            paths.push(cdir + '/' + dirs[j]);
          }

        } else if (path[i][1] === '.') {
          for (let j = 0; j < paths.length; j++) {


            let dirFiles = getDirContent(paths[j]);

            for (let k = 0; k < dirFiles.length; k++) {
              let npath = paths[j] + '/' + dirFiles[k];
              if (dirFiles[k].indexOf('.js') !== -1) {
                files.push(npath)
              } else {
                paths.push(npath);
              }
            }

          }
        }
      }
    }

    console.log('\n\n\n Reading files for documentation: \n');


    for (let i = 0; i < files.length; i++) {
      console.log(files[i]);
      file += '\n' + fs.readFileSync(files[i], 'utf-8') + '\n';
    }

  } else {
    file = fs.readFileSync(source, 'utf-8')

  }
  let methods = docToJSON(file);

  let docData = {...methods }
  docData['meta'] = {...config.meta }
  let exportData = JSON.stringify(docData)
  fs.writeFileSync(config.content, exportData, 'utf-8');

}

module.exports = compileContent;