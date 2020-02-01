export class Book {
    constructor(title, author, description, pages, currentPage, read = false) {
      this.title = title;
      this.author = author;
      this.description = description;
      this.pages = pages;
      this.currentPage = currentPage;
      this.read = read ;
}   
    readBook(page) {
        if (page > this.pages || page < 0) {
        this.currentPage = 0
         return 0
        } else if  (page == this.pages) {
          this.currentPage = page
          this.read = true
          return 1
        } else {
          this.currentPage = page
          return 1          
        }
    }    
}

let a = new Book("aaaa","a","a",5, 1, false);
let b = new Book("bbbbb","b","bcbc",7, 1, false);
let c = new Book("ccccc","a","ccc",15, 1, false);

export const books = [a,b,c];
