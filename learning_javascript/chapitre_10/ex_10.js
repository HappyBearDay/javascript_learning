console.log( document.getElementById("demo"))

console.log( document.getElementsByClassName("parag"))


console.log( document.getElementsByTagName("p"))
console.log( document.getElementsByTagName("p")[0])

console.log( document.querySelector(".parag") )
console.log( document.querySelectorAll("p") )

test_val = document.querySelector(".parag")
console.log( test_val.className)

test_val.className += " blue"


console.log( test_val.className)

console.log( test_val.style.fontSize )
test_val.style.fontSize = "60px"
console.log( test_val.style.fontSize )
