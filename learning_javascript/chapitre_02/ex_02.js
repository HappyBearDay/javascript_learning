/*
    COMMENTAIRE
    and : &&
    or : ||
*/

var marc = {
     nom : "Marc",
     age : 18,
     moyenne : 15
 }

 if ( marc.age > 17){
     console.log("marc est majeur")
 

    } else if(marc.age > 15){
        console.log("marc peut passer la conduire accomagnée")
 
    } else {
     console.log("marc est mineur")
     }


console.log(marc.moyenne >=10 ? "marc a validé" : "Marc n'a pas validé")

switch (marc.age){
    case 18:
        console.log("Bravo tu as 18 ans")
        break
        case 25:
        console.log("Bravo tu as 25 ans")
        break
        case 17:
        console.log("Bravo tu as 17 ans")
        break
    default:
        console.log("Bravo tu as default ans")
        break

    }