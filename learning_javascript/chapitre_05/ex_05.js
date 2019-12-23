var b = "global a"

function printer(a){
    console.log(a)
    a = " changement a"
    b = "changement bis de a"
}



console.log(b)

printer(b)


console.log(b)

