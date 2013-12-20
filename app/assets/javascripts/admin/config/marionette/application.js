(function(Backbone, Marionette) {

  _.extend(Backbone.Marionette.Application.prototype, {

    navigate: function(route, options) {
      options = options || {};
      Backbone.history.navigate(route, options);
    },

    getCurrentRoute: function() {
      return Backbone.history.getFragment();
    },

    parseQueryString: function(queryString) {
      var params = {};
      if (queryString) {
        _.each(_.map(decodeURIComponent(queryString).split(/&/g), function(el, i) {
          var aux = el.split('='), o = {};
          if (aux.length >= 1) {
            var val = undefined;
            if (aux.length == 2)
              val = aux[1];
            o[aux[0]] = val;
          }
          return o;
        }), function(o) {
          _.extend(params, o);
        });
      }
      return params;
    },
    serializeQueryString: function(obj) {
      var str = [];
      for (var p in obj) {
        if (obj[p] && (!_.isArray(obj[p]) || obj[p].length)) {
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
      }
      return str.join("&");
    }
  })

})(Backbone, Marionette);
