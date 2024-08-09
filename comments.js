//Create web server
//Create a web server that listens on port 3000 and serves the file comments.html.
//comments.html should be in the same directory as the comments.js file. 
//Use the fs module to read the file and the http module to create the server.

var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var rs = fs.createReadStream(path.join(__dirname, 'comments.html'));
  rs.pipe(res);
}).listen(3000);