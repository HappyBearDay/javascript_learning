//Import de la library
var http = require('http');

var instruction_new_visiteur = function(req, res) {
    res.writeHead(200);
    res.end('Salut tout le monde !');
  }

var server = http.createServer(instruction_new_visiteur);
server.listen(8080);