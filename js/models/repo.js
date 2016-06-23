(function(module) {
  var repos = {};
  repos.allRepos = [];

  repos.requestRepos = function(next) {
    $.get('/github/users/prungy88/repos' + '?sort=update&per_page=30')
    .done(function(data) {
      repos.allRepos = data;
    }).done(next);
  };

  repos.withAttribute = function(attr) {
    return repos.allRepos.filter(function(repo) {
      return repo[attr] === false;
    });
  };

  module.repos = repos;
})(window);
