# grunt-vdoc


## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-vdoc --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-vdoc');
```

## The "vdoc" task

### Overview
In your project's Gruntfile, add a section named `vdoc` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
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
        source: "./src/build/lib.js"
      }
    }
  },
});
```

### Options

##### Specify directories

* `templates` where are the handlebar templates located?
* `partials` where are the partials located? (The sub-templates handlebars use)
* `dest` where is the destination of the built documentation? (html files)
* `assets` where are the assets located? (css, svg, js, other assets for documentation)

##### Specify files

* `content` where is the documentation content located?
* `source` where is the source code to get the documentation content from?

##### Meta data
* Add any meta data you want, the meta object is transfered to the documentation content in the json file.


<br/><br/>

