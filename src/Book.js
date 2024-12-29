export default class Book{
    constructor(title,author){
        this.title = title;
        this.author = author;
        this.read = false;
    }

    markAsRead(){
        this.read = true;
    }
}