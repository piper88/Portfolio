var express = require('express'),
  requestProxy = require('express-request-proxy'),
  port = process.env.PORT || 3000,
  app = express();

var proxyGithub = function(request, response) {
  console.log('test');
  (requestProxy ({
    url: 'https://api.github.com/' + request.params[0],
    headers: {Authorization: 'token ' + process.env.GITHUB_TOKEN}
  }))(request, response);
};

app.get('/github/*', proxyGithub);

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
