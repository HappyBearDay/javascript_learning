let guests = ["Sarah Kate", "Audrey Simon", "Will Alexander"];

console.log(guests[50])


// PASSAGE PAR REFERENCE

let artistProfile = {
    name: "Tao Perkington",
    age: 27,
    available: true
};

let allProfiles = [artistProfile]; // nouveau tableau contenant l'objet ci-dessus

artistProfile.available = false; // modification de l'objet

console.log(allProfiles) // affiche { nom: "Tao Perkington", âge: 27, disponible: false }


// WORK WITH TABLEAU

guests = ["Will Alexander", "Sarah Kate", "Audrey Simon"];

let howManyGuests = guests.length; // 3

guests.push("Tao Perkington"); // ajoute "Tao Perkington" à la fin de notre tableau guests

guests.unshift("Tao Perkington"); // "Tao Perkington" est ajouté au début du tableau guests

let a = guests.pop(); // supprimer le dernier élément du tableau

console.log("a : ", a)
