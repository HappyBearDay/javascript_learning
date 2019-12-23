var Eleve = function ( nom, notes ) {
    this.nom = nom 
    this.notes = notes
}

Eleve.prototype.moyenne = function()
{
    var somme = 0
    for ( var i = 0; i < this.notes.length; i++){
        somme += this.notes[i]
    }
    return somme / this.notes.length 
}

Eleve.prototype.present = function()
{ 
    console.log(this.nom)
}



var jean = new Eleve("jean", [10,15,11,14])

jean.present()
console.log( jean.moyenne() )
