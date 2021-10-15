const fs = require('fs');
const getDirContent = source =>
  fs.readdirSync(source, { withFileTypes: true })
  .map(dirent => dirent.name)

const getDirectories = source =>
  fs.readdirSync(source, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name)

module.exports = {
  getDirContent,
  getDirectories
}