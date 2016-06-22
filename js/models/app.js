(function(module) {

  function Project (opts) {
    for (keys in opts) {
      this[keys] = opts[keys];
    }
  }

  Project.all = [];

//Sorts projects by published date, then instantiates projects and pushes to project.all array
  Project.loadAll = function(dataWePassIn) {
    dataWePassIn.sort(function(a,b) {
      return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
    }).forEach(function(ele) {
      Project.all.push(new Project(ele));
    });
  };
//Either gets data from local storage or JSON object, and then runs render function
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
//Method to handle finding number of 4 letter words in projects
  Project.numWordsAll = function() {
    return Project.all.map(function(project) {
      return project.body.match(/\b\w{4}\b/g).length;
    }).reduce(function(acc, cur, idx, arr) {
      return acc + cur;
    });
  };
//Method to handle finding number of 5 letter words in projects
  Project.numFiveWords = function() {
    return Project.all.map(function(project) {
      return project.body.match(/\b\w{5}\b/g).length;
    }).reduce(function(acc, cur, idx, arr) {
      return acc + cur;
    });
  };

//handles hamburger menu schtuffs showing up or not
  $('.icon-menu').click(function() {
    $('.main-nav ul').toggle();
  });
  //this attaches the Project object to the module (equivalent to the window)
  module.Project = Project;
})(window);
