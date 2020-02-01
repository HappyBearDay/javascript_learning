console.log("---- script 06 -----")


document.getElementById("code").addEventListener("input", function(event){
    if ( /^CODE-/.test(event.target.value) ){
      document.getElementById("code-validation").innerHTML = 'Code valide'
      document.getElementById("submit-btn").removeAttribute("disabled")
    }else{
      document.getElementById("code-validation").innerHTML = 'Code invalide'
      document.getElementById("submit-btn").setAttribute("disabled", true) 
    }
})

console.log("---- script 06 -----")
