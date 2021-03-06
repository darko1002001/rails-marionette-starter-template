(function(Backbone, Admin) {

  $(document).on('click', 'a:not([data-bypass])', function (evt) {

    var href = $(this).attr('href');
    var protocol = this.protocol + '//';

    if (href.slice(protocol.length) !== protocol) {
      evt.preventDefault();
      Admin.navigate(href, true);
    }
  });

})(Backbone, Admin);