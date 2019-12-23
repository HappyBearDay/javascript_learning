var a = {}


console.log("a")

try {
    a.methode()    
} catch (error) {
    console.log("voici l'erreur rencontrée : \n",error.stack)

} finally {
    console.log("FINALLY")
}


console.log("a")



var b = 10



try {
    if ( b > 5){
        throw new Error("le nombre de peut être supérieur à 5")
    }

} catch(e){
    console.log(e.stack)
}finally{
    console.log("FINALLY 2")
}

