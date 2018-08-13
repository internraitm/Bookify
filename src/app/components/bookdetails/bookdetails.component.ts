import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {
  description:boolean;
  author:boolean;
  review:boolean;
  
  constructor() { }

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
