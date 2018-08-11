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

/*
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
*/
  favBooks(){
    this.lstflag =true;
    this.info=false;
    //this.bookarr = this.bookserv.favBook();
    
    var x = this.bookserv.getBooks();
    x.snapshotChanges().subscribe( books =>{
    this.bookarr = [];

    books.forEach(book => {
      var y =book.payload.toJSON();
      y["$key"] = book.key;
      this.bookarr.push(y as Book);
    });

    console.log(this.bookarr);
    console.log(this.bookarr[0]);


    for(var i=0;i<this.bookarr.length;i++){
      console.log("entered for:"+this.bookarr[i].favbook);
      if(this.bookarr[i].favbook === true){
          this.favbooks.push(this.bookarr[i]);
      //    console.log("Entered if:"+this.favbooks.slice());


      }
  }
   //console.log(this.favbooks.slice());
  
    
  
  });
    
    
    //console.log(this.bookarr);

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







