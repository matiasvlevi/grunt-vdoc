/*
 * methodData Class
 */
methodData = function methodData(name) {
  // Main data
  this.name = name;
  this.description = '';
  this.params = [];
  this.return = {};
  this.examples = [];
  // Meta data
  this.isChainable = false;
  this.isStatic = false;
  this.isConstructor = false;
}

// methodData methods

methodData.prototype.addParam = function(param) {
  this.params.push(param);
}

methodData.prototype.setReturn = function(returndata) {
  this.return = returndata;
}

methodData.prototype.setDescription = function(description) {
  this.description = description;
}

methodData.prototype.setChainable = function(isChainable) {
  this.isChainable = isChainable;
}

methodData.prototype.setStatic = function(static_) {
  this.isStatic = static_;
}

methodData.prototype.setConstructor = function(isConstructor) {
  this.isConstructor = isConstructor;
}

methodData.prototype.addExample = function(exampleStr) {
  this.examples.push(exampleStr);
}

methodData.prototype.getGeneric = function() {
  return {...this }
}

module.exports = methodData;