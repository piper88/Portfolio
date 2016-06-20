(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('.content-to-toggle').hide();
    $('#about').fadeIn();
  };
  module.aboutController = aboutController;
})(window);
