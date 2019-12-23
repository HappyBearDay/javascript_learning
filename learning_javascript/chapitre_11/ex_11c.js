


document.querySelector("form").addEventListener("submit", function(e){
    var cp = document.querySelector( "#cp" )
    var age = document.querySelector("#age")
    var mentions = document.querySelector("#mentions")
    console.log( cp.value )

    if( mentions.checked === false | cp.value.length != 5 | parseInt( age.selectedOptions[0]) < 20 ){
        alert("Le code postal n\'est pas bon")
        e.preventDefault()
    }
})


document.addEventListener("DOMContentLoaded", function(){
    console.log("LE DOCUMENT EST CHARGEE")
})