let myBook = {
    title: 'The Story of Tau',
    author: 'Will Alexander',
    numberOfPages: 250,
    isAvailable: true
};


class Book {
    constructor(title, author, pages, isAvailable = true) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isAvailable = isAvailable;
    }
}

let myBook_bis = new Book("L'Histoire de Tao", "Will Alexander", 250);

console.log(myBook)
console.log(myBook_bis)

