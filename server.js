var express = require('express'),
  port = process.env.PORT || 3000,
  app = express();
//serving up the initial content
app.use(express.static('./'));

//on any url, want to have access to the request and response object
app.get('*', function(request, response) {
  console.log('New request:', request.url);
  //root is going to be the starter code folder
  response.sendFile('index.html', {root: '.'});
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
