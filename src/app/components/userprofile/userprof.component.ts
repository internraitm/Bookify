import { Book } from '../../models/Book/book';
import { BookService } from '../../services/book.service';




import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';



@Component({
    selector: 'user-profile',
    templateUrl: './userprof.component.html',
    //styleUrls: ['./app.component.css']
  })



export class UserProfileComponent implements OnInit
{ info:boolean=true;
  flag:boolean=false;
  lstflag:boolean=false;
  bookarr:Book[];
  favbooks:Book[];
  bookserv: BookService;
  userserv: UserService;
  c:number=0;

  constructor(bookserv:BookService,userserv:UserService){
    this.bookserv = bookserv;
    this.userserv= userserv;
    this.bookarr = [];
    this.favbooks = [];
  }

  
  ngOnInit(){
   this.flag = this.userserv.getUserLoggedIn();
   console.log(this.flag);


}




  favBooks(){
    this.lstflag =true;
    this.info=false;
    this.bookarr = this.bookserv.favBook();
    console.log(this.bookarr);

  }
  reqBooks(){
      this.lstflag=false;
      this.info=false;
  }
  bookOrders(){
      this.lstflag=true;
      this.info=false;
  }

}







