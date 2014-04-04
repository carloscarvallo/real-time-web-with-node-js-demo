var http = require('http');
var fs = require('fs');

var contents;

fs.readFile('./index.html', function read(err, data) {
  if (err) {
    throw err;
  }
  contents = data;
});

console.log(contents);
