let http = require("http")
let fs = require("fs")
let url = require("url")
const EventEmitter = require("events")


let App = {
    start : function (port) {
        let emitter  = new EventEmitter()
        
        let server = http.createServer((request, response) =>{
            response.writeHead(200,
                {"content-type" : "text/html; charset=utf-8"})
            if(request.url === "/"){
                emitter.emit("root", response)
            }
            response.end()
        }).listen(port)
        return emitter
    }
}


let app = App.start(8889)


app.on("root", function(response){
    response.write("je suis à la racine")
})