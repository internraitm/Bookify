export class Book{
    //id:number;
    $key:string;
    bookcategory:string;
    bookname:string;
    bookauthor:string;
    bookpublisher:string;
    pageno:string;
    isbn:string;
    bookstatus:boolean;
    favbook:boolean;
    constructor(bookname,bookauthor,bookpublisher,isbn,pageno,bookstatus,bookcategory){
        //  this.id = id;
        this.bookcategory = bookcategory;
        this.bookname = bookname;
        this.bookauthor = bookauthor;
        this.bookpublisher = bookpublisher;
        this.isbn = isbn;
        this.pageno = pageno;
        this.bookstatus = bookstatus;
        // this.favbook=favbook;
    }
}