(function(module) {
  var repos = {};
  repos.allRepos = [];

  repos.requestRepos = function(next) {
    $.ajax({
      url: 'https://api.github.com/users/prungy88/repos',
      type: 'GET',
      headers: {'Authorization': 'token ' + githubToken},
      success: function(data) {
        repos.allRepos = data;
        next();
      }
    });
  };

  repos.withAttribute = function(attr) {
    return repos.allRepos.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
