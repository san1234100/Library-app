export default class Library{
    constructor(){
        this.books = []
    }
    addBook(book){
        console.log('Added book: ',book);
        this.books.push(book);
    }
    
    getBooks(){
        return this.books;
    }

    removeBook(index){
        console.log('Deleted book: ',this.books[index]);
        this.books.splice(index,1);
    }
}