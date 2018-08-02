export class Book{
    id:number;
    bookcategory:string;
    bookname:string;
    bookauthor:string;
    bookpublisher:string;
    isbn:number;

    constructor(id,bookcategory,bookname,bookauthor,bookpublisher,isbn){
        this.id = id;
        this.bookcategory = bookcategory;
        this.bookname = bookname;
        this.bookauthor = bookauthor;
        this.bookpublisher = bookpublisher;
        this.isbn = isbn;
    }
}