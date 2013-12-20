Handlebars.registerHelper('shorten', function(s) {
  return new Handlebars.SafeString(s.length > 17 ? s.substr(0, 14) + '...' : s);
});

Handlebars.registerHelper('timeago', function(time) {
  var aMoment = moment(time);
  if (aMoment) {
    return aMoment.fromNow();
  } else {
    return "";
  }
});

Handlebars.registerHelper('ifEquals', function(first, second, block) {
  if (first == second) {
    return block.fn(this);
  } else {
    return block.inverse(this);
  }
});

Handlebars.registerHelper('homeRoute', function() {
  return Admin.rootRoute;
});

Handlebars.registerHelper("isCurrentlyOpenRoute", function(path) {
  var currentRoute = Admin.getCurrentRoute();
  var isSelected = currentRoute.indexOf(path, currentRoute.length - path.length) !== -1;
  if (isSelected) {
    return new Handlebars.SafeString("class=\"selected\"");
  }
});