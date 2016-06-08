var hobbies = [];

function Hobby (opts) {
  this.title = opts.title;
  this.body = opts.body;
}

Hobby.prototype.toHtml = function() {
  var $newHobby = $('article.template').clone();
  $newHobby.find('h2').html(this.title);
  $newHobby.find('.hobbies-body').html(this.body);
  $newHobby.removeClass('template');
  return $newHobby;
};

myData.forEach(function(ele) {
  hobbies.push(new Hobby(ele));
});

hobbies.forEach(function(hobby) {
  $('#hobbies').append(hobby.toHtml());
});
