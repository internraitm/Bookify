import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import {Book} from '../../models/TestBook/book';

@Component({
  selector: 'app-testbook',
  templateUrl: './testbook.component.html',
  //styleUrls: ['./testbook.component.css']
})
export class TestbookComponent implements OnInit {
  books:Book[];
  b =  new Book("jk","hk","kl");
  constructor(public bkserv : BookService) { }

  ngOnInit() {
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
      console.log(this.books[0]);
    });
  }
  //Function to add book
 /*        addBook(){
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
  }   */
  
  

}
