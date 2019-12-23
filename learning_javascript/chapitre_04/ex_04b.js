var sentence = "Les fonctions permettent de stocker en mémoire une certaine logique que l'on pourra utiliser à "
+"plusieurs reprises dans la suite de notre code "
+"Elles prennent en général des paramètres et retournent un résultat particulier "
+"Les fonctions en JavaScript sont un type de variable particulier il est donc aussi possible de ne pas leur donner de nom mais de les stocker dans une variable de manière classique"
+" Si on souhaite rendre le paramètre optionel et lui assigner la valeur 0 par défaut il nous suffira de rajouter une condition"

var splited_sentence = sentence.replace("\'"," ").toLocaleLowerCase().split(" ").sort()


function occurence(curr_array){
    
    var occur_data = {}

    for ( var i = 0; i < curr_array.length; i++ ){
        var curr_elem = curr_array[i]
        if( Object.keys(occur_data).indexOf(curr_elem) === -1 ){
            //console.log(curr_elem)
            occur_data[curr_elem] = 1
        }else{
            occur_data[curr_elem] += 1
        }
    }
    return occur_data

}

var a = { val : "15"}
//console.log( Object.keys(a).indexOf( "vaazal" ))


console.log( occurence(splited_sentence))




var eleve1 = { nom : "a", notes : [10,15,17] }
var eleve2 = { nom : "b", notes : [14,17,1] }

