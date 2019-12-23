const EventEmitter = require("events")

let monEcouteur = new EventEmitter()

monEcouteur.on("saute", function( a, b){
    console.log("j'ai sauté", a, b)
})


monEcouteur.emit("saute")
monEcouteur.emit("saute",10)
monEcouteur.emit("saute",20,10)