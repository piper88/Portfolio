function Project (opts) {
  for (keys in opts) {
    this[keys] = opts[keys];
  }
}

Project.all = [];

Project.prototype.toHtml = function() {
  $('#project-template').find('article').attr('data-title', this.title);
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

$('.icon-menu').click(function() {
  $('.main-nav ul').toggle();
});
