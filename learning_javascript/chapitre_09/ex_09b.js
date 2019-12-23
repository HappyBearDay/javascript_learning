function get_proposition(sufix){
    
    var proposition 
    proposition = parseInt( window.prompt("Entrez une nombre entier "+sufix) , 10)
        
    while( Number.isInteger(proposition) === false){
        proposition = parseInt( window.prompt("Vous n'avez pas entrer un nombre entier "+sufix+" , veuillez ressayer") ,10)
    }
    return proposition

}

(
    function ( ) {
        var val_max = 100
        var val_min = 0

        var number = Math.round( Math.random() * ( val_max - val_min)) + val_min 
        console.log(number)

        var proposition = get_proposition("")

        
        while(proposition != number){
            if(proposition > number){
            
                proposition = get_proposition("inferieur à " + proposition)

            }else if (proposition < number){

                proposition = get_proposition("supérieur à " + proposition)
            }

        }
        console.log("GOOOOOD JOOOOOB")
        window.alert("goood joooooob")
    }
)()