var http = require('http');
var EventEmitter = require('events').EventEmitter;

var jeu = new EventEmitter();

var server = http.createServer(function(req, res){
jeu.emit('gameover', 'Vous avez perdu !');
	res.writeHead(200);
	res.end('salut');
});

server.on('close', function(){
	
	console.log('page close');
});


jeu.on('gameover', function(message){
    console.log(message);
});

jeu.emit('gameover', 'Vous avez perdu !');
server.listen(8080);


//server.close();
