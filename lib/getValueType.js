module.exports = function getValueType(typestr) {
  return typestr
    .split('}')
    .join('')
    .split('{')
    .join('');
};