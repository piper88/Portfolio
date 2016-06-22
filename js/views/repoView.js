(function(module) {
  var repoView = {};

  var repoCompiler = function(source) {
    var template = Handlebars.compile($('#repo-template').text());
    return template(source);
  };

  repoView.renderRepos = function() {
    console.log(repos.allRepos);
    $('#about dr').empty().append(
      repos.withAttribute('description').sort(function(a,b) {
        console.log(a.updated_at);
        return (new Date(b.updated_at)) - (new Date(a.updated_at));
      })
    .map(repoCompiler)
  );
  };

  repos.requestRepos(repoView.renderRepos);
  module.repoView = repoView;
})(window);
