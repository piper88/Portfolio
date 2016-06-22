(function(module) {
  var repos = {};
  repos.allRepos = [];

  repos.requestRepos = function(next) {
    $.get('/github.com/users/prungy88/repos' + '?per_page=10')
    .done(function(data) {
      repos.allRepos = data;
    }).done(callback);
  };

  repos.withAttribute = function(attr) {
    return repos.allRepos.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
