
var projects = [];

function Project (opts) {
  this.title = opts.title;
  this.body = opts.body;
}

Project.prototype.toHtml = function() {
  $('#project-template').find('article').attr('data-title', this.title);
  var source = $('#project-template').html();
  var template = Handlebars.compile(source);
  return template(this);
};

myData.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(project) {
  $('#projects').append(project.toHtml());
});

$('.icon-menu').click(function() {
  $('.main-nav ul').toggle();
});
