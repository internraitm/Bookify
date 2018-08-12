import { Book } from '../models/TestBook/book';
import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs';

// import { Http,Response } from '@angular/http';
// import { map } from 'rxjs/operators';

@Injectable()
export class BookService{

    bookList:AngularFireList<any>;

    mybook:Book;
    bookarr:Book[];
    favbooks:Book[];

    constructor(public af : AngularFireDatabase){
        this.bookarr = []; 
        this.favbooks= [];
        
        // this.http.get(`http://localhost:5001/Books`).pipe(map((res:Response)=>res.json()))
        // .subscribe((res)=>{
        //     this.bookarr = res;
        // })

        this.bookList = this.af.list('books');

    }


    //Function to retrieve all books in the db
   getBooks(){

    this.bookList = this.af.list('books');
    return this.bookList;

   }

   //Function to add books to the db
   addBook(book:Book){

    this.bookList.push(book);
 
   }

   //Function to delete book
   deleteBook($key){

    this.bookList.remove($key);

  }

  //Function to update book
  editBook(key,book:Book){

    this.bookList.update(key,{
      bookname:book.bookname,
      bookauthor:book.bookauthor,
      bookpublisher:book.bookpublisher,
    });
 
  }

  //Function to get single book
  getBook(key:string){
      console.log("Service called");
    this.bookList = this.af.list('books');
    this.bookList.snapshotChanges().subscribe( books  => {
        this.bookarr = [];
        books.forEach(book => {
          var y =book.payload.toJSON();
          y["$key"] = book.key;
          this.bookarr.push(y as Book);
        });

        for(var i = 0 ;i<this.bookarr.length;i++){
            if(this.bookarr[i].$key == key){
                console.log(this.bookarr[i]);
                return this.bookarr[i];
            }

        }
        return null;
    });


  }
  
    search(b:Book){
        for(var i=0;i<this.bookarr.length;i++){
            if(this.bookarr[i].bookname == b.bookname && 
            this.bookarr[i].bookauthor == b.bookauthor && this.bookarr[i].bookpublisher == b.bookpublisher)
            /*if(this.bookarr[i].isbn = b.isbn)*/{
               return true;
            }
        }
    }
    favBook()
    {
        for(var i=0;i<this.bookarr.length;i++){
          //  console.log("entered for:"+this.bookarr[i].favbook);
            if(this.bookarr[i].favbook === true){
                this.favbooks.push(this.bookarr[i]);
            //    console.log("Entered if:"+this.favbooks.slice());


            }
        }
        
        
        return this.favbooks.slice();
        //console.log("eof:"+this.bookarr.slice());

    }
}






    
