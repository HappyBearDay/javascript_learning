let http = require("http")
let fs = require("fs")
let url = require("url")
let server = http.createServer()


server.on("request", (request, response) => {
    
    response.writeHead(200)
    let incoming_data = url.parse( request.url,true ).query
    let name = incoming_data.name === undefined ? "anonyme" : incoming_data.name


    
    fs.readFile("./index.html",'utf8', (err, data) => {
        if(err){
            response.writeHead(404)
            response.end("le fichier n'existe pas")
        }else{
            console.log("une requête")
            //response.write("hello")
            response.writeHead(
                    200,
                    {"content-type" : "text/html; charset=utf-8"}
                )
            
            response.end(data.replace("{{ name }}", name))
        }
        

    })
     
})


server.listen(8889)
console.log("salut")