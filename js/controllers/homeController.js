(function(module) {
  var homeController = {};

  homeController.index = function() {
    $('.content-to-toggle').hide();
    $('#projects').fadeIn();
    $('hr:eq(5)').hide();
  };

  module.homeController = homeController;
})(window);
