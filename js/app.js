var projects = [];

function Project (opts) {
  this.title = opts.title;
  this.body = opts.body;
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
  $newProject.removeClass('template');
  $newProject.find('h2').html(this.title);
  $newProject.find('.projects-body').html(this.body);
  $newProject.removeClass('template');
  return $newProject;
};

myData.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(project) {
  $('#projects').append(project.toHtml());
});
