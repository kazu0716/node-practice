var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
    if (req.method == 'GET') {
        var url_parse = url.parse(req.url, true);
        console.log(url_parse.query);
        res.end();
    }
    else if (req.method == 'POST') {
      var body = '';
      req.on('data', function(chunk) {
          body += chunk;
      });
      req.on('end', function() {
        console.log(body);
        res.end();
      });
    }
}).listen(8080);