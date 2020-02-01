console.log("---- script 03 -----")


let elt =  document.getElementsByTagName("p")[0]

elt.addEventListener('click', (event) => {          // On écoute l'événement click
    event.stopPropagation();
    elt.innerHTML = "C'est cliqué !";               // On change le contenu de notre élément pour afficher "C'est cliqué !"
    console.log( "call back")
});

console.log("---- script 03 -----")
