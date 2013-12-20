Admin = (function(Backbone, Marionette) {
  "use strict";

  var App = new Marionette.Application();

  App.rootRoute = '';

  App.addInitializer(function(config) {
    Parse.initialize("PARSE KEY", "PARSE SECRET");
    App.addRegions({
      viewport: config.el
    });
    App.config = config;

  });

  App.on("start", function() {
    Backbone.history.start({pushState: true});
    App.navigate(App.rootRoute, {trigger: true});
  })

  App.vent.on("setTitle", function(title) {
    if (title) {
      title = "Admin | " + title;
    } else {
      title = "Admin";
    }
    $(document).attr('title', title);
  });

  return App;

})(Backbone, Marionette);
