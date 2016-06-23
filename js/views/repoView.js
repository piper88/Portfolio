(function(module) {
  var repoView = {};

  var repoCompiler = function(source) {
    var template = Handlebars.compile($('#repo-template').text());
    return template(source);
  };

  repoView.renderRepos = function() {
    $('#about dr').empty().append(
      repos.withAttribute('fork')
    .map(repoCompiler)
  );
  };

  repos.requestRepos(repoView.renderRepos);
  module.repoView = repoView;
})(window);
