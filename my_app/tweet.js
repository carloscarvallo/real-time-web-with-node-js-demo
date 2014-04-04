var request = require('request');
var url = require('url');
var express = require('express');
var app = express();

app.get('/tweets/:username', function(req, response){
  var username = req.params.username;

  options = {
    protocol: "http:",
    host: 'api.twitter.com',
    pathname: '/1/statuses/user_timeline.json',
    query: {screenname: username, count: 10}
  };

  var twitterURL = url.format(options);
  request(twitterURL).pipe(response);
});

app.listen(8080);

