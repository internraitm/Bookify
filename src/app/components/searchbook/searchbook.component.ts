import { Component, OnInit ,Output ,Input , EventEmitter } from '@angular/core';
import {Book} from '../../models/Book/book';
import { BookService } from "../../services/book.service";
import {FormGroup, FormBuilder} from '@angular/forms';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-searchbook',
  templateUrl: './searchbook.component.html',
  styleUrls: ['./searchbook.component.css']
})
@Injectable()
export class SearchbookComponent implements OnInit {
  
  
  booklist:string[];
  bookarr:Book[];
  bookServ:BookService;
  stateForm: FormGroup;
  showDropDown = false;
  fbb:FormBuilder;
  find:string;

  constructor(bs:BookService,fb:FormBuilder){
    this.bookServ = bs;
    this.fbb = fb;
    this.find=null;
    this.initForm();
  }

  ngOnInit(){
    this.booklist = [];
   this.getBooks();
   }
  
  initForm(): FormGroup {
    return this.stateForm = this.fbb.group({
      search: [null]
    })
  }
  
  

  getBooks(){
    this.showDropDown = false;
    var x = this.bookServ.getBooks();
    x.snapshotChanges().subscribe( books =>{
      this.bookarr = [];
      books.forEach(book => {
        var y =book.payload.toJSON();
        y["$key"] = book.key;
        this.bookarr.push(y as Book);
      });
      console.log(this.bookarr);
      console.log(this.bookarr[0]);
  
    for(var i=0;i<this.bookarr.length;i++)
    { 
      this.booklist.push(this.bookarr[i].bookname);
      console.log(this.booklist);
    }
   
    });
  }

  
  selectValue(value) {
    //this.stateForm.patchValue({"search": value});
    this.showDropDown = false;
  }
   closeDropDown() {
     this.showDropDown = !this.showDropDown;
   }
 
   openDropDown() {
     this.showDropDown = false;
     this.getBooks();
   }
 
   getSearchValue() {
     console.log(this.stateForm.value.search);
     return this.stateForm.value.search;
    // console.log(this.stateForm.value.search);
   
  }

  checkValue(a:string,b:string):boolean{
    console.log(a);
    console.log(b);
    
    
    if(a === b)
      return true;

    return false;
  }
 }
 




