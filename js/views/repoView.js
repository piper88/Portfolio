(function(module) {
  var repoView = {};

  var repoCompiler = function(source) {
    var template = Handlebars.compile($('#repo-template').text());
    return template(source);
  };

  repoView.renderRepos = function() {
    $('#about dr').empty().append(
      repos.withAttribute('description').sort(function(a,b) {
        return (new Date(b.updated_at)) - (new Date(a.updated_at));
      })
    .map(repoCompiler)
  );
  };

  repos.requestRepos(repoView.renderRepos);
  module.repoView = repoView;
})(window);
