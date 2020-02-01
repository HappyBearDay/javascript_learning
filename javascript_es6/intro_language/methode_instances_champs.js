// Methode d'instance
class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    
    showBalance() {
        console.log("Solde: " + this.balance + " EUR");
    }
    
    deposit(amount) {
        console.log("Dépôt de " + amount + " EUR");
        this.balance += amount;
        this.showBalance();
    }
    
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Retrait refusé !");
        } else {
            console.log("Retrait de " + amount + " EUR");
            this.balance -= amount;
            this.showBalance();
        }
    }
}


const newAccount = new BankAccount("Will Alexander", 500);

newAccount.showBalance(); // imprime "Solde: 500 EUR" à la console


// Methode Static

class BePolite {
    static sayHello() {
        console.log("Hello!");
    }
    static sayHelloTo(name) {
        console.log("Hello " + name + "!");
    }
    static add(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    }
}

BePolite.sayHello(); // imprime "Hello!""
BePolite.sayHelloTo("Will"); // imprime "Hello Will!""
const sum = BePolite.add(2, 3); // sum = 5