  var projectView = {};

//Loads main page first, then handles user clicks on different nav tabs to toggle content
  // projectView.handleNav = function() {
  //   $('.main-nav').on('click', '.tab', function() {
  //     $('.content-to-toggle').hide();
  //     $('#' + $(this).data('content')).fadeIn();
  //   });
  //   $('.main-nav .tab:first').click();
  // };
//Method to populate filter
  projectView.populateFilter = function() {
    $('article').each(function() {
      if (!$(this).hasClass('template')) {
        var val = $(this).find('h2').text();
        var optionTag = '<option value="' + val + '">' + val + '</option>';
        $('#project-filter').append(optionTag);
      }
    });
  };
//Method to handle changing of the filter, actual filter functionality
  projectView.handleFilter = function() {
    $('#project-filter').on('change', function() {
      if ($(this).val()) {
        $('article').hide();
        $('article[data-title="' + $(this).val() + '"]').fadeIn();
      } else {
        $('article').fadeIn();
        $('article.template').hide();
      }
    });
  };
//Method to handle more/less buttons and teasers, should be refactored to be more DRY
  projectView.handleTeasers = function() {
    $('.projects-body *:nth-of-type(n+2)').hide();
    $('#projects').on('click', 'a.read-on', function(e) {
      e.preventDefault();
      $(this).parent().find('*').show();
      $(this).parent().find('a.read-on').hide();
      $(this).parent().find('a.show-less').show();
    });
    $('#projects').on('click', 'a.show-less', function(e) {
      e.preventDefault();
      $(this).parent().find($('.projects-body *:nth-of-type(n+2)')).hide();
      $(this).parent().find('a.read-on').show();
      $(this).parent().find('a.show-less').hide();
    });
  };

//Method to render number of 4 letter words
  projectView.countWords = function() {
    $('#blog-stats .num-words').text(Project.numWordsAll() / Project.all.length);
  };
//Method to render number of 5 letter words
  projectView.countFive = function() {
    $('#blog-stats .num-five').text(Project.numFiveWords());
  };
//Method to render number of projects
  projectView.countProjects = function() {
    $('#blog-stats .num-projects').text(Project.all.length);
  };
//Method to actually render the page, calls all necessary methods
  projectView.renderIndexPage = function() {
    Project.all.forEach(function(a) {
      $('#projects').append(a.toHtml());
    });
    // projectView.handleNav();
    projectView.handleTeasers();
    projectView.populateFilter();
    projectView.handleFilter();
    projectView.countWords();
    projectView.countProjects();
    projectView.countFive();
  };
//Runs Fetch all, which gets data from JSON or local storage, which then runs renderIndexPage, which kicks the whole process off....or something ;)
  Project.fetchAll();
