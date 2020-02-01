console.log("---- script 02 -----")

let curr_elem = document.evaluate("/html/body/div/div[1]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue


console.log("innerHTML : " + document.getElementById("modif_01").innerHTML)
console.log("textContent : " + document.getElementById("modif_02").textContent)
console.log( document.getElementsByClassName("classA")[0].classList )

console.log("style : " + curr_elem.style)


setTimeout(() => {
    
    document.getElementById("modif_01").innerHTML = "<b>Nouveau contenu</b>"
    document.getElementById("modif_02").textContent = "<b>Nouveau contenu</b>"
    curr_elem.style.color = "red"
    curr_elem.style.backgroundColor = "blue" 
}, 5000)



console.log("---- script 02 -----")
