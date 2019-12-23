var ps = document.querySelectorAll("p")


var rougit = function ( ){

    this.classList.toggle("red")
    //p.removeEventListener("click", rougit)

}

var p_mouseover = function ( ){

    this.classList.add("red")
}

var p_mouseout = function ( ){

    this.classList.remove("red")
}

for ( var i = 0; i < ps.length ; i++) {
    var p = ps[i]
    //p.addEventListener("click", rougit )
    p.addEventListener("mouseover", p_mouseover )
    p.addEventListener("mouseout", p_mouseout )
}



var liens = document.querySelectorAll("a.external")


for ( var i = 0; i < liens.length ; i ++ ){
    var lien = liens[i]
    lien.addEventListener("click", function (e) {
        e.stopPropagation()
        console.log(e)
        var answer = window.confirm("voulez vous vraiment quittez le site")
        if(answer === false){
            e.preventDefault()
        }
    })
}

