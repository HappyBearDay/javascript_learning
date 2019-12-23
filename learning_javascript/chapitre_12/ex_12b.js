/**
 * cliquer sur le bouton .spoiler => afficher le contenu
 * Alors
 *      J'ajoute la classe .visible à l'élement suivant
 * 
 */

 
 (function (){

    var elements = document.querySelectorAll(".spoiler")
 

    var createSpoilerButton = function(element){
        var hidden_text = element.textContent
        
        //créer span
        var span = document.createElement("span")
        span.className = "spoiler-content"
        span.innerHTML = element.innerHTML
        
        //créer bouton
        var button = document.createElement("button")
        button.textContent = "Afficher le spoiler"
        
        element.innerHTML = ""
        
        //Ajout element
        element.appendChild(button)
        element.appendChild(span)


        // Ajout écouteur
        button.addEventListener("click", function(){
            button.parentNode.removeChild(button)
            span.classList.add("visible")
        })

    }
   
   
    for ( var i = 0; i < elements.length; i++){
        createSpoilerButton(elements[i])
    }
 })()
 