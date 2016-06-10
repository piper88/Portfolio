var projectView = {};

projectView.handleNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    $('.content-to-toggle').hide();
    $('#' + $(this).data('content')).fadeIn();
  });
  $('.main-nav .tab:first').click();
};

projectView.handleTeasers = function() {
  $('.projects-body *:nth-of-type(n+2)').hide();
  $('#projects').on('click', 'a.read-on', function(e) {
    e.preventDefault();
    $(this).parent().find('*').show();
    $(this).hide();
    $(this).parent().$('.show-less').show();
  });
  $('#projects').on('click', 'a.show-less', function(e) {
    e.preventDefault();
    $(this).parent().find($('.projects-body *:nth-of-type(n+2)')).hide();
    $(this).hide();
    $('.read-on').show();
  });
};

projectView.handleNav();
projectView.handleTeasers();
