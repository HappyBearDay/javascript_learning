/**
 * cliquer sur le bouton .spoiler => afficher le contenu
 * Alors
 *      J'ajoute la classe .visible à l'élement suivant
 * 
 */

 var button = document.querySelector(".spoiler button")
 
 console.log(button)


 button.addEventListener("click", function(e){
     var element =  this.parentElement.getElementsByTagName("span")[0]
     element.classList.add("visible")
     this.parentElement.removeChild(this)
 }
)