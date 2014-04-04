var fs = require('fs');

var file = fs.createReadStream("readme.md");
var newFile = fs.createWriteStream("readme_copy.md");

file.on('data', function(chunk) {
  var buffer_good = newFile.write(chunk);
  if(!buffer_good) file.pause();
});

newFile.on('drain', function() {
  file.resume();
});

file.on('end', function() {
  newFile.end();
});
