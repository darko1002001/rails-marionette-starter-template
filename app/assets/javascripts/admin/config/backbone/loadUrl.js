(function(Backbone) {
  
  // Patches history.loadUrl to continue route matching after an initial 
  // match has occured, if Backbone.History.isFilter is truthy.
  // Controller methods can set this value to true to allow preprocessing to 
  // occur before a child route matches & executes.
  
  Backbone.History.prototype.loadUrl = function(fragmentOverride) {
    var fragment = this.fragment = this.getFragment(fragmentOverride);
    var matched = _.any(this.handlers, function(handler) {
      if (handler.route.test(fragment)) {
        Backbone.History.isFilter = false;
        handler.callback(fragment);
        if (Backbone.History.isFilter) {
          Backbone.History.isFilter = false;
          return;
        }
        return true;
      }
    });
    return matched;
  }
})(Backbone);