/**
 * Lorsque que l'on clique sur un onglet
 *      On retire la class active 
 */



 
 (function (){
    var afficherOnglet = function ( a, animations ){
        if(animations ===undefined){
            animations = true
        }
        var div = a.parentNode.parentNode.parentNode
        var li = a.parentNode
        var activetab = div.querySelector(".tabs-content .active") 
        var aAfficher = div.querySelector(a.getAttribute("href"))
        
        if( li.classList.contains("active")){
            return false
        }


        div.querySelector(".tabs .active").classList.remove("active")
        li.classList.add("active")

        if( animations){

            activetab.classList.add("fade")
            activetab.classList.remove("in")
        
            var transition_end = function() {
                this.classList.remove("fade")
                this.classList.remove("active")

                aAfficher.classList.add("active")
                aAfficher.classList.add("fade")
                aAfficher.offsetWidth
                aAfficher.classList.add("in")
                activetab.removeEventListener("transitionend", transition_end)
            }
            activetab.addEventListener("transitionend", transition_end)
            

        } else{
            aAfficher.classList.add("active")
            activetab.classList.remove("active")
        }


        
        


        //activetab.classList.remove("active")
        
        

        //.classList.add("active")
    }

    var hashchange = function(){
        var hash = window.location.hash
        var first_a = document.querySelector("a[href='"+hash+"']")
        
        if( first_a !== null && !first_a.parentNode.classList.contains("active") ) {
            afficherOnglet(first_a, false)
        }
        window.removeEventListener("hashchange", hashchange)

    }
    
    window.addEventListener("hashchange", hashchange)
    
    var tabs = document.querySelectorAll(".tabs a")

    for ( var i = 0; i < tabs.length ; i++ ){
        tabs[i].addEventListener("click", function(e){
            afficherOnglet(this, true)
        })
    }
 })()

/**
 var hash = window.location.hash
 var a = document.querySelector("a[href='"+href+"']")
 if( a !== null && a.parentNode.classList.contains("active") ) {
     afficherOnglet(a)
 }
  */