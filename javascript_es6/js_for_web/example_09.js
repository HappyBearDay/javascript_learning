console.log("---- script 09 -----")

// ENCHAINEMENT AVEC PROMISES

Promise.all([get(url1), get(url2)])
    .then(function(results) {
        return Promise.all([results, post(url3)])
    })
    .then(function(allResults) {
        // We are done here !
    });

// ASYNC & AWAIT

async function requests() {
    var getResults = await Promise.all([get(url1), get(url2)]);
    var postResult = await post(url3);
    return [getResults, postResult];
}

requests().then(function(allResults) {
    // We are done here !
});

console.log("---- script 09 -----")
