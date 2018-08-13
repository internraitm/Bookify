import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { BookService } from '../../services/book.service';
import {Book} from '../../models/TestBook/book';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {
  description:boolean;
  author:boolean;
  review:boolean;
  paramKey:string;
  books:Book[];
  currentBook:Book;
  constructor(private route: ActivatedRoute,public bkserv : BookService) { 
    this.currentBook = null;
    this.route.params.subscribe( params => {
      if(params['key']){
        this.paramKey = params['key'];
        console.log(this.paramKey);
        var x = this.bkserv.getBooks();
        x.snapshotChanges().subscribe( books =>{
          this.books = [];
          books.forEach(book => {
            var y =book.payload.toJSON();
            y["$key"] = book.key;
            this.books.push(y as Book);
          });
          console.log(this.books);
          for(var i = 0 ;i<this.books.length;i++){
            if(this.books[i].$key == this.paramKey){
                //console.log(this.books[i]);
                 this.currentBook=this.books[i];
                 console.log(this.currentBook);
            }

        }
        });
        
      }
    })
  }

  ngOnInit() {
    this.description = false;
    this.author = false;
    this.review = false;
  }


  showDescripiton(){
    this.author = false;
    this.review = false;
    this.description = !this.description;
  }

  showAuthor(){
    this.description = false;
    this.review = false;
    this.author = !this.author;
  }

  showReview(){
    this.description = false;
    this.author = false;
    this.review = !this.review;
  }
}
