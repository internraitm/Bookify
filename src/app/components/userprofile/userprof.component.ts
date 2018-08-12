import { Book } from '../../models/Book/book';
import { BookService } from '../../services/book.service';




import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User/user';


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
  userarr:User[];
  favbooks:Book[];
  bookserv: BookService;
  userserv: UserService;
  c:number=0;
  arr:any;

  constructor(bookserv:BookService,userserv:UserService){
    this.bookserv = bookserv;
    this.userserv= userserv;
    this.bookarr = [];
    this.favbooks = [];
  }

  
  ngOnInit(){
   this.flag = this.userserv.getUserLoggedIn();
   console.log(this.flag);
   this.getBooks();

}

  getBooks(){
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
  });
}

  favBooks(){
    this.lstflag =true;
    this.info=false;
    //this.bookarr = this.bookserv.favBook();
    
    var x = this.userserv.getUsers();
    x.snapshotChanges().subscribe( users =>{
    this.userarr = [];

    users.forEach(user => {
      var y =user.payload.toJSON();
      y["$key"] = user.key;
      this.userarr.push(y as User);
    });

    console.log(this.userarr);
    console.log(this.userarr[0]);


    for(var i=0;i<this.userarr.length;i++){
      
      console.log("user name:"+this.userarr[i].name);
      
      
      if(this.userarr[i].favbook != null && this.userarr[i].favbook != ""){
        
        for(var j=0;j<this.bookarr.length;j++){
           //from book db
            //console.log(this.bookarr[j].$key);
            var bookkey=[];
            var keys=this.userarr[i].favbook;
            
            bookkey.push.apply(bookkey, keys.split(",").map(String));
            
            //var bookkey = keys.split(',');
            if (bookkey.length>1){
            console.log("Books keys:"+bookkey[1]);
            for (var k=0;k<bookkey.length;k++)
            {
            if(bookkey[k] == this.bookarr[j].$key){
              this.favbooks.push(this.bookarr[j]);
              
            }
          }
          }
          else
          {
            if(keys == this.bookarr[j].$key){
              this.favbooks.push(this.bookarr[j]);
            }
          }
        }
          console.log(this.favbooks);

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







