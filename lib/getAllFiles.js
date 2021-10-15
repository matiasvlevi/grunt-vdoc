const { getDirectories, getDirContent } = require('./getLocalInfo');
module.exports = function getfiles(source) {
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

              if (dirFiles[k].search(/\..*/gm) !== -1) {
                if (dirFiles[k].indexOf('.css') !== -1) {
                  console.log(dirFiles[k])
                }
                files.push(npath)
              } else {
                paths.push(npath);
              }
            }

          }
        }
      }
    }
    return files;

  }
  return [file];

}