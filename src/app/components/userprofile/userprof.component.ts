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
  userdata:User[];
  favbooks:Book[];
  bookserv: BookService;
  userserv: UserService;
  c:number=0;
  arr:any;
  sessvar:String;
  userkey:String;
  
  constructor(bookserv:BookService,userserv:UserService){
    this.bookserv = bookserv;
    this.userserv= userserv;
    this.bookarr = [];
    this.favbooks = [];
    this.userdata=[];
    this.userarr =[];
  }

  
  ngOnInit(){
   this.flag = this.userserv.getUserLoggedIn();
   console.log(this.flag);
   this.getBooks();
   this.userDet();
   
   this.sessvar=this.userserv.session();
  // console.log(this.sessvar);

}

  userDet(){
    var x = this.userserv.getUsers();
    x.snapshotChanges().subscribe( users =>{
    this.userarr = [];

    users.forEach(user => {
      var y =user.payload.toJSON();
      y["$key"] = user.key;
      this.userarr.push(y as User);
    });

    //console.log(this.userarr);
    
  });
  //this.userinfo();
  }
  userinfo(){
    this.info=true;
    this.lstflag=false;
    for(var i=0;i<this.userarr.length;i++){
      if(this.sessvar==this.userarr[i].email){
        this.userkey=this.userarr[i].$key;
       // console.log(this.userkey);
        this.userdata.push(this.userarr[i]);
        //console.log(this.userdata);
        (<HTMLInputElement> document.getElementById("b1")).disabled = true;
        
        (<HTMLInputElement> document.getElementById("b2")).disabled = false;
        this.favbooks.splice(0,this.favbooks.length);

      }
    }
    
   //var myvar=sessionStorage.getItem("key");

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
    //console.log(this.bookarr[0]);
  });
}

  favBooks(){
    this.lstflag =true;
    this.info=false;
    
    //console.log(this.userarr[0]);
    
    

    for(var i=0;i<this.userarr.length;i++){
     // for(var i=6;i<7;i++){
       
      if(this.userkey==this.userarr[i].$key){
      
      if(this.userarr[i].favbook != null && this.userarr[i].favbook != ""){
        
        for(var j=0;j<this.bookarr.length;j++){
           //from book db
            //console.log(this.bookarr[j].$key);
            var bookkey=[];
            var keys=this.userarr[i].favbook;
            
            bookkey.push.apply(bookkey, keys.split(",").map(String));
            //console.log(bookkey.length);
            
            //var bookkey = keys.split(',');
            if (bookkey.length>1){
         //   console.log("Books keys:"+bookkey[0]);
            for (var k=0;k<bookkey.length;k++)
            {
            if(bookkey[k] == this.bookarr[j].$key){
              this.favbooks.push(this.bookarr[j]);
             
            }
          }
          }

          else
          { //console.log(keys);
            //console.log(this.bookarr[j].$key);
            if(keys == this.bookarr[j].$key){
              this.favbooks.push(this.bookarr[j]);
              
            }
          }
        }
        //  console.log(this.favbooks);

      }
    }
  }
   //console.log(this.favbooks.slice());
  
    
  
   (<HTMLInputElement> document.getElementById("b1")).disabled = false;
   this.userdata.splice(0,this.userdata.length);
   
  
   (<HTMLInputElement> document.getElementById("b2")).disabled = true;
    
    
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







