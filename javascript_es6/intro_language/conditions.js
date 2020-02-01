let userLoggedIn = true;

if (userLoggedIn) {
    console.log("Utilisateur connecté!");
} else {
    console.log("Alerte, intrus!");
}

const numberOfSeats = 30;
let numberOfGuests = 25;


if (numberOfGuests == numberOfSeats) {
    // tous les sièges sont occupés
    console.log("numberOfGuests == numberOfSeats")
} else if (numberOfGuests < numberOfSeats) {
    // autoriser plus d'invités
    console.log("numberOfGuests < numberOfSeats")
} else {
    console.log("numberOfGuests > numberOfSeats")
    // ne pas autoriser de nouveaux invités
}

console.log("-- condition --")

userLoggedIn = true;
let userHasPremiumAccount = true;
let userHasMegaPremiumAccount = false;


console.log(userLoggedIn && userHasPremiumAccount); // true
console.log(userLoggedIn && userHasMegaPremiumAccount); // false



console.log(userLoggedIn || userHasPremiumAccount); // true
console.log(userLoggedIn || userHasMegaPremiumAccount); // true


console.log(!userLoggedIn); // false
console.log(!userHasMegaPremiumAccount); // true


