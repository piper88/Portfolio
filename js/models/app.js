(function(module) {

  function Project (opts) {
    for (keys in opts) {
      this[keys] = opts[keys];
    }
  }

  Project.all = [];

  Project.prototype.toHtml = function() {
    var source = $('#project-template').html();
    var template = Handlebars.compile(source);
    return template(this);
  };

  Project.loadAll = function(dataWePassIn) {
    dataWePassIn.forEach(function(ele) {
      Project.all.push(new Project(ele));
    });
  };

  Project.fetchAll = function() {
    if (localStorage.mydata) {
      Project.loadAll(JSON.parse(localStorage.mydata));
      projectView.renderIndexPage();
    } else {
      $.getJSON('data/mydata.json', function(data) {
        Project.loadAll(data);
        localStorage.setItem('mydata', JSON.stringify(data));
        projectView.renderIndexPage();
      });
    }
  };

  Project.numWordsAll = function() {
    return Project.all.map(function(project) {
      return project.body.match(/\b\w{4}\b/g).length;
    }).reduce(function(acc, cur, idx, arr) {
      console.log(acc + cur);
      return acc + cur;
    });
  };

  Project.numFiveWords = function() {
    return Project.all.map(function(project) {
      return project.body.match(/\b\w{5}\b/g).length;
    }).reduce(function(acc, cur, idx, arr) {
      return acc + cur;
    });
  };


  // $('.icon-menu').click(function() {
  //   $('.main-nav ul').toggle();
  // });
  //this attaches the Project object to the module (equivalent to the window)
  module.Project = Project;
})(window);
