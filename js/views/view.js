// (function (module) {
  console.log('test');
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
  //
  // articleView.handleCategoryFilter = function() {
  //   $('#category-filter').on('change', function() {
  //     if ($(this).val()) {
  //       $('article').hide();
  //       $('article[data-category="' + $(this).val() + '"]').fadeIn();
  //     } else {
  //       $('article').fadeIn();
  //       $('article.template').hide();
  //     }
  //     $('#author-filter').val('');
  //   });
  // };

  projectView.handleFilter = function() {
    $('#project-filter').on('change', function() {
      if ($(this).val()) {
        console.log($(this).val());
        $('article').hide();
        $('article[data-title="' + $(this).val() + '"]').fadeIn();
      } else {
        console.log('else');
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


  projectView.countWords = function() {
    $('#blog-stats .num-words').text(Project.numWordsAll() / Project.all.length);
  };

  projectView.countFive = function() {
    $('#blog-stats .num-five').text(Project.numFiveWords());
  };

  projectView.countProjects = function() {
    $('#blog-stats .num-projects').text(Project.all.length);
  };

  projectView.renderIndexPage = function() {
    Project.all.forEach(function(a) {
      $('#projects').append(a.toHtml());
    });
    projectView.handleNav();
    projectView.handleTeasers();
    projectView.populateFilter();
    projectView.handleFilter();
    projectView.countWords();
    projectView.countProjects();
    projectView.countFive();
  };

  Project.fetchAll();
  // module.projectView = projectView;
// })(window);
