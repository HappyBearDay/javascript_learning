document.querySelector("#a").addEventListener("keyup", function(e){
    console.log(e)
    console.log(String.fromCharCode(e.keyCode))
    output.textContent += String.fromCharCode(e.keyCode)
})


var output = document.querySelector("#test_val")
output.textContent = ""