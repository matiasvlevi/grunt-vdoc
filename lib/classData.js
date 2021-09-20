const methodData = require('./methodData');

/*
 * classData Class
 */
classData = function(name) {
  // Main data
  this.name = name;
  this.description = '';
  this.params = [];
  this.properties = [];
  this.return = {};
  this.examples = [];
  // Meta data
  this.chainable = false;
  this.static = false;
  this.isConstructor = false;
}

// Add all methods from methodData class to classData
classData.prototype = {...methodData.prototype };

// classData methods
classData.prototype.addProperty = function(prop) {
  this.properties.push(prop);
}

module.exports = classData;