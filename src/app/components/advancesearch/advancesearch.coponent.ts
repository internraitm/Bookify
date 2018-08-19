import { Component ,OnInit } from '@angular/core';
import { Book } from '../../models/testBook/book';
import { BookService } from '../../services/book.service';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
    selector:'advancesearch-root',
    templateUrl:'./advancesearch.component.html'
})

export class AdvancedSearchComponent implements OnInit{
    ngOnInit() {
        this.userserv.session();
    }

    bookList:AngularFireList<any>;
    keylist:Observable<any[]>;
    mybook:Book;
    found:Boolean;
    bookserv:BookService;
    userserv:UserService;
    books:Book[];
    router:Router;
    constructor(router:Router,public af : AngularFireDatabase,bookserv:BookService,userserv:UserService){

        this.router = router;
        this.books = [];
        this.userserv=userserv;
        this.bookserv = bookserv;
        this.mybook = new Book(null,null,null,null,null,null,null);
        this.getAllBooks();
    }

    search(b:Book){
        
        for(var i=0;i<this.books.length;i++){
            if(b.bookname == this.books[i].bookname || b.bookauthor == this.books[i].bookauthor || b.bookpublisher == this.books[i].bookpublisher
                || b.isbn == this.books[i].isbn){
                    console.log(this.books[i]);
                    console.log(this.books[i].$key);
                    this.router.navigate(['book',this.books[i].$key]);
                    //this.router.navigate(['book',{'key':this.books[i].$key}]);
            }
            else{
                console.log('Book not found');
            }
        }
    }
    
    getAllBooks(){
        var x = this.bookserv.getBooks();
        x.snapshotChanges().subscribe( books =>{
          this.books = [];
          books.forEach(book => {
            var y =book.payload.toJSON();
            y["$key"] = book.key;
            this.books.push(y as Book);
          });
          console.log(this.books);
        });
      }
}
