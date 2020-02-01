class Book {
    constructor(title, author, description, pages, currentPage, read = false) {
      this.title = title;
      this.author = author;
      this.description = description;
      this.pages = pages;
      this.currentPage = currentPage   ;
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

a = new Book(title = "a", author="a", description="a", pages=5, currentPage=1, read = false)
b = new Book(title = "b", author="a", description="a", pages=5, currentPage=1, read = false)
c = new Book(title = "c", author="b", description="b", pages=7, currentPage=1, read = false)


export const books = [a,b,c];

console.log(books)