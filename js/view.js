var projectView = {};

projectView.handleNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    $('.content-to-toggle').hide();
    $('#' + $(this).data('content')).fadeIn();
  });
  $('.main-nav .tab:first').click();
};

projectView.populateFilter = function() {
  $('article').each(function() {
    if (!$(this).hasClass('template')) {
      var val = $(this).find('h2').text();
      console.log(val);
      var optionTag = '<option value="' + val + '">' + val + '</option>';
      $('#project-filter').append(optionTag);
    }
  });
};

projectView.handleFilter = function() {
  $('#project-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      var targetProject = $('article[data-title="' + $(this).val() + '"]');
      console.log(targetProject);
      targetProject.fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
  });
};

projectView.handleTeasers = function() {
  $('.projects-body *:nth-of-type(n+2)').hide();
  $('#projects').on('click', 'a.read-on', function(e) {
    e.preventDefault();
    $(this).parent().find('*').show();
    $(this).hide();
    // $(this).parent().$('.show-less').show();
    // $('.show-less').show();
  });
  $('#projects').on('click', 'a.show-less', function(e) {
    e.preventDefault();
    $(this).parent().find($('.projects-body *:nth-of-type(n+2)')).hide();
    $(this).hide();
    $('.read-on').show();
  });
};

projectView.renderIndexPage = function() {
  Project.all.forEach(function(a) {
    $('#projects').append(a.toHtml());
  });
  projectView.handleNav();
  projectView.handleTeasers();
  projectView.populateFilter();
  projectView.handleFilter();
};

Project.fetchAll();
