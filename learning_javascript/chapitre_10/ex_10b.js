


var test_val = document.querySelectorAll("p")


for ( var i = 0 ; i < test_val.length; i ++ ){

    ( function ( p ) {
        
        window.setInterval(function (){
            p.classList.toggle("red")
        }, 1000)
        
    } ) ( test_val[i] )
}
