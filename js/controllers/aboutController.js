(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('.content-to-toggle').hide();
    $('#about').fadeIn();
    $('hr').fadeIn();
  };
  module.aboutController = aboutController;
})(window);
