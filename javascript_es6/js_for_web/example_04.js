console.log("---- script 04 -----")

let elem_input = document.getElementById("input")
let elem_output= document.getElementById("outputtest")

elem_input.addEventListener("input", (event)=>{
    elem_output.innerText = event.target.value
})

document.addEventListener('mousemove', function(event) {
    const x = event.movementX; // Coordonnée X de la souris dans l'élément
    const y = event.movementY; // Coordonnée Y de la souris dans l'élément
    //console.log(x,y)
});
console.log("---- script 04 -----")
