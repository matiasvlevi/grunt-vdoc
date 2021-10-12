/*
 * grunt-vdoc
 * https://github.com/matia/grunt-contrib-vdoc
 *
 * Copyright (c) 2021 Matias Vazquez-Levi
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Configuration to be run (and then tested).
    vdoc: {
      compile: {
        options: {
          meta: {
            name: "myProject",
            version: "0.0.0",
            github: "https://github.com/user/myProject"
          },
          templates: "./docs/theme/",
          dest: "./docs/build/",
          partials: "./docs/theme/partials/",
          content: "./docs/content/data.json",
          assets: "./docs/theme/assets/",
          source: "./src/**/*.js"
        }
      }
    },
  });

  // Set encoding
  grunt.file.defaultEncoding = 'utf8';

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('compile', ['vdoc']);

};