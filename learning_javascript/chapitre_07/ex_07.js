var eleve = { 
    
    present : function (){
        console.log(this.nom)
    },
    
    moyenne : function(){
        var somme = 0
        for ( var i = 0; i < this.notes.length; i++){
            somme += this.notes[i]
        }
        return somme / this.notes.length 
    }
}


var jean = Object.create(eleve)
jean.nom = "jean"
jean.notes = [10,11,15,17]

console.log(jean.moyenne())




