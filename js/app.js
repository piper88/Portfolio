function Project (opts) {
  this.title = opts.title;
  this.body = opts.body;
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
  // .forEach(function(project) {
  //   $('#projects').append(project.toHtml());
  // });
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

// Article.fetchAll = function(e) {
//   if (localStorage.hackerIpsum) {
//     Article.loadAll(JSON.parse(localStorage.hackerIpsum));
//     articleView.renderIndexPage();
//     /*when our data is already in localStorage:
//     1. we can process and load it,
//     2 Then we can render the index page */
//     //Article.loadAll(//TODO: invoke with our localStorage!);
//     //TODO: now let's render the index page.
//   } else {
//     $.getJSON('data/hackerIpsum.json', function(ipsumData) {
//       Article.loadAll(ipsumData);
//       localStorage.setItem('hackerIpsum', JSON.stringify(ipsumData));
//       //localStorage.hackerIpsum = JSON.stringify(ipsumData);
//       articleView.renderIndexPage();
//     });
//
//     /*TODO: otherwise, without our localStorage data, we need to:
//     -retrieve our json file asynchronously
//       (which jquery method is best for this?).
//     Within this jQuery method, we should:
//     1. load our json data,
//     2. store that same data in localStorage so we can skip the server call next time.
//     3. And then render the index page. */
//   }
// };

$('.icon-menu').click(function() {
  $('.main-nav ul').toggle();
});
