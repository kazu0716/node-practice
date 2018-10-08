var http = require('http');
var server = http.createServer(function(req, res) {
  res.write("Hello world1!\n");
  res.write("Hello world2!\n");
  res.write("Hello world3!\n");
  res.end();
}).listen(8080);