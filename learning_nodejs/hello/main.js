/**   les imports  **/
var http = require('http');
var url = require('url');
var querystring = require('querystring')


var instructionsNouveauVisiteur = function(req, res) {
	var page = url.parse(req.url).pathname;
	
	var params = querystring.parse(url.parse(req.url).query);
	
	res.writeHead(200, { "Content-Type" : "text/html" });
	
	var page1 = '<!DOCTYPE html>'+
	'<html>'+
	'    <head>'+
	'        <meta charset="utf-8" />'+
	'        <title>Ma page Node.js !</title>'+
	'    </head>'+ 
	'    <body>'+
	'     	<p>Voici un paragraphe <strong>HTML</strong> !</p>'+
	'    </body>'+
	'</html>';
	
	
	var page2 = "page <strong> 2 </strong>";
	var page3 = "page <strong> 3 </strong>";
	
	if('nom' in params){
		page2 += "\n"+params['nom']
		page3 += "\r\n"+params['nom']
	}
	
	if(page == "/"){
		res.write(page1);
	}else if(page =="/page2"){
		
		res.write(page2);
		
	}else if(page =="/page3"){
		res.write(page3);
	}else{
		res.write("il y a rien ici ");
	}
	console.log(page);

    res.end();

}




var server = http.createServer( instructionsNouveauVisiteur);

server.listen(8080);
