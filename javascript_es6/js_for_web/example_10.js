console.log("---- script 09 -----")

async function func1() {
    return 3;
}

async function func2() {
    return 4;
}

var promiseRes = 
    Promise
        .all([func1(), func2()])
        .then(function(results) {
            return results.reduce(function(acc, res) {
                return acc * res;
            }, 2);
        })
        .then(function(time) {
            return setTimeout(callback, time * 1000);
        });

console.log("---- script 09 -----")
