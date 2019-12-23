function estPremier(nombre){
    for ( var i = 2 ; i < nombre; i++){
        if(   nombre % i === 0 ){
            return false
        }
    }
    return true
}


var estprems = function(nombre){

    for ( var i = 2 ; i < nombre; i++){
        if(   nombre % i === 0 ){
            return false
        }
    }
    return true

}



console.log(estPremier(21))
console.log(estprems(21))



console.log(parseInt("45",10))
console.log(parseInt("EEE",16))
console.log(parseFloat("AAA17SALUT"))

