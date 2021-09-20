/*
 * grunt-vdoc
 * https://github.com/matia/grunt-contrib-vdoc
 *
 * Copyright (c) 2021 Matias Vazquez-Levi
 * Licensed under the MIT license.
 */

'use strict';

const compileTemplates = require('../lib/compile');
const compileContent = require('../lib/parser');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('vdoc', 'The best Grunt plugin ever.', function(a, b) {
    let config = this.data.options;

    // Compile all templates in specified directories
    compileTemplates(config);

    // Compile inline documentatio content
    compileContent(config);
  });

};