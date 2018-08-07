import { Component  } from '@angular/core';
import { Book } from '../../models/Book/book';
import { BookService } from '../../services/book.service';

@Component({
    selector:'advancesearch-root',
    templateUrl:'./advancesearch.component.html'
})

export class AdvancedSearchComponent{

    mybook:Book;
    found:Boolean;
    bookserv:BookService;

    constructor(bookserv:BookService){
        this.bookserv = bookserv;
        this.mybook = new Book(null,null,null,null,null,null,null);
    }

    search(b:Book){
        
        this.found = this.bookserv.search(b);
        console.log(b.id,b.bookcategory,b.bookname,b.bookauthor,b.bookpublisher,b.isbn);
        if(this.found){
            console.log(b.id,b.bookcategory,b.bookname,b.bookauthor,b.bookpublisher,b.isbn);
        }
        else{
            console.log("Book Not Found");
        }
    }
}
