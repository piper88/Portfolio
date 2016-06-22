(function(module) {
  var homeController = {};

  homeController.index = function() {
    $('.content-to-toggle').hide();
    $('#projects').fadeIn();
  };

  module.homeController = homeController;
})(window);
