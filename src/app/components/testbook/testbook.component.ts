import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import {Book} from '../../models/TestBook/book';

@Component({
  selector: 'app-testbook',
<<<<<<< HEAD
  templateUrl: './testbook.component.html',
  //styleUrls: ['./testbook.component.css']
})
export class TestbookComponent implements OnInit {
  books:Book[];
  b =  new Book("jk","hk","kl");
  constructor(public bkserv : BookService) { }

  ngOnInit() {
=======
  templateUrl: './testbook.component.html'
})
export class TestbookComponent implements OnInit {
  books:Book[];
  currentBook:Book;
  b =  new Book("Wolf Hall","	Hilary Mantel","Fourth Estate","978-0-00-735355-2","651",true,"Fiction");
  constructor(public bkserv : BookService) { }

  ngOnInit() {
    this.getBooks();
    console.log(this.books);
>>>>>>> a1ca86f38bbeeed34d6f4c0abf621230c4e1221c
  }

  //Function to get all books
  getBooks(){
    var x = this.bkserv.getBooks();
    x.snapshotChanges().subscribe( books =>{
      this.books = [];
      books.forEach(book => {
        var y =book.payload.toJSON();
        y["$key"] = book.key;
        this.books.push(y as Book);
      });
      console.log(this.books);
<<<<<<< HEAD
      console.log(this.books[0]);
    });
  }
  //Function to add book
 /*        addBook(){
=======
    });
  }

  //Function to add book
  addBook(){
>>>>>>> a1ca86f38bbeeed34d6f4c0abf621230c4e1221c
    //console.log(this.b);
    this.bkserv.addBook(this.b);
    
  }

  //Function to delete book
  deleteBook(key)
  {
    this.bkserv.deleteBook(key);
  }
  
  //Function to update book
  updateBook(){
    this.bkserv.editBook('-LJ52D6-cg-a6-wa4oj8',this.b);
<<<<<<< HEAD
  }   */
  
=======
  }
  
  getBook(key){
    for(var i = 0 ;i<this.books.length;i++){
      if(this.books[i].$key == key){
          //console.log(this.books[i]);
           this.currentBook=this.books[i];
           console.log(this.currentBook);
      }

  }
  }
>>>>>>> a1ca86f38bbeeed34d6f4c0abf621230c4e1221c
  

}
