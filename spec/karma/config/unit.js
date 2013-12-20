module.exports = function (config) {
  config.set({

      // base path, that will be used to resolve files and exclude
      basePath: '../../../',

      frameworks: ['jasmine'],

      // list of files / patterns to load in the browser
      files: [
        'spec/lib/jquery.js',
        'spec/lib/underscore.js',
        'spec/lib/backbone.js',
        'spec/lib/backbone.marionette.min.js',
        'vendor/assets/javascripts/backbone_libraries/backbone.syphon.min.js',
        'vendor/assets/javascripts/backbone_libraries/backbone-validation-min.js',
        'vendor/assets/javascripts/moment/moment.js',
        'spec/lib/toastr.js',
        'spec/lib/handlebars.runtime.js',
        'app/assets/javascripts/admin/admin.js',
        'app/assets/javascripts/admin/config/**/*.js',
        'app/assets/javascripts/admin/modules/**/*.hbs',
        'app/assets/javascripts/admin/modules/**/*.js',
      ],


      // list of files to exclude
      exclude: [

      ],

      preprocessors: {
        '**/*.hbs':'handlebars'
      },

      handlebarsPreprocessor: {
        // name of the variable to store the templates hash
        templates: "window.HandlebarsTemplates",

        // use "admin/modules/[module]/templates/[viewname]" as the templateName
        templateName: function(filepath) {
          return 'admin/modules/' + filepath.replace(/^.*admin\/modules\/(.+)\.hbs$/, '$1');
        }
      },

      // test results reporter to use
      // possible values: 'dots', 'progress', 'junit'
      reporters: ['dots'],


      // web server port
      port: 9876,


      // cli runner port
      runnerPort: 9100,


      // enable / disable colors in the output (reporters and logs)
      colors: true,


      // level of logging
      // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
      logLevel: config.LOG_INFO,


      // enable / disable watching file and executing tests whenever any file changes
      autoWatch: true,


      // Start these browsers, currently available:
      // - Chrome
      // - ChromeCanary
      // - Firefox
      // - Opera
      // - Safari (only Mac)
      // - PhantomJS
      // - IE (only Windows)
      browsers: ['Chrome'],


      // If browser does not capture in given timeout [ms], kill it
      captureTimeout: 60000,


      // Continuous Integration mode
      // if true, it capture browsers, run tests and exit
      singleRun: false,

      plugins:[
        "karma-handlebars-preprocessor",
        "karma-chrome-launcher",
        "karma-phantomjs-launcher",
        "karma-jasmine"
      ]
    }
  )
}


