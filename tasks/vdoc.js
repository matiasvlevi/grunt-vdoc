/*
 * grunt-vdoc
 * https://github.com/matiasvlevi/grunt-contrib-vdoc
 *
 * Copyright (c) 2021 Matias Vazquez-Levi
 * Licensed under the MIT license.
 */

'use strict';

const compileTemplates = require('../lib/compile');
const compileContent = require('../lib/parser');

module.exports = function(grunt) {

  grunt.registerMultiTask('vdoc', 'Compile inline docs to html', function(a, b) {
    let config = this.data.options;

    // Compile inline documentation content
    compileContent(config);

    // Compile all templates & content in specified directories
    // as html files
    compileTemplates(config);
  });

};
