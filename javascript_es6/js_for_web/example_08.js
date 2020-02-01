console.log("---- script 08 -----")

setTimeout(()=>{
  console.log("a")
}, 2000)
//setInterval()


//CALLBACK ERROR MANAGEMENT
fs.readFile(filePath, function(err, data) {
  if (err) {
      throw err;
  }
  // Do something with data
});

// PROMISES 
functionThatReturnsAPromise()
    .then(function(data) {
        // Do somthing with data 
    })
    .catch(function(err) {
        // Do something with error
    });


returnAPromiseWithNumber2()
.then(function(data) { // Data is 2
    return data + 1;
})
.then(function(data) { // Data is 3
    throw new Error('error');
})
.then(function(data) {
    // Not executed  
})
.catch(function(err) {
    return 5;
})
.then(function(data) { // Data is 5
    // Do something
});



// ASYNC // AWAIT

async function fonctionAsynchrone1() {/* code asynchrone */}
async function fonctionAsynchrone2() {/* code asynchrone */}

async function fonctionAsynchrone3() {
 const value1 = await fonctionAsynchrone1();
 const value2 = await fonctionAsynchrone2();
 return value1 + value2;
}
// DANS CE CAS LA IL FAUT UTILISER try {} catch (e) {}


// TP 

async function compute() {
  let val_1 = await getNumber1();
  let val_2 = await getNumber2();
  return val_1 + val_2;
}

compute().then( function(data) {
    document.getElementById("result").innerHTML = data
})



console.log("---- script 08 -----")
