Backbone.Marionette.Renderer.render = function (template, data) {
  var PATH_PREFIX = "admin/modules/";
  if (!HandlebarsTemplates[PATH_PREFIX + template]) throw "Template '" + template + "' not found!";
  return HandlebarsTemplates[PATH_PREFIX + template](data);
};
