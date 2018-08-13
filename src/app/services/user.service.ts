import { Injectable } from '@angular/core';
//import { Http, Response } from '@angular/http';  
//import {Observable} from 'rxjs';
//import 'rxjs/add/operator/map'; 
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { User } from '../models//User/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList:AngularFireList<any>;
  endPoint :string;
  myuser:User;
  userarr:User[];

  private isUserLoggedIn;

  constructor(public af : AngularFireDatabase) {
    //this.endPoint = "http://localhost:5001/books";
    this.isUserLoggedIn = false;
    this.userarr = []; 

    this.userList = this.af.list('users');

   }

   /*search(term: string): Observable<any[]> {  
    var bookList = this.http.get(this.endPoint + '?term=' + term)
    .map((r: Response) => { return (r.json().length != 0 ? r.json() : [{ "bookId": 0, "bookname": "No Record Found" }]) as any[] });  
    return bookList;  
}  */

   setUserLoggedIn(){
     this.isUserLoggedIn = true;
   }

   getUserLoggedIn(){
     return this.isUserLoggedIn;
   }

   signUp(name:string,email: string , password: string, contactno:number){

    console.log(name + email + password + contactno);
   }
      
    login(email: string , password:string)  {
      console.log(email+password);
    }

    getUsers(){

      this.userList = this.af.list('users');
      return this.userList;
  
     }
  
     //Function to add Users to the db
     addUser(user:User){
  
      this.userList.push({
        Username : user.name,
        Useremail : user.email,
        Userpassword : user.password,
        Usercontactno : user.contactno 
      })
   
     }
  
     //Function to delete user
     deleteUser($key){
  
      this.userList.remove($key);
  
    }
  
    //Function to update book
    editUser(key,user:User){
  
      this.userList.update(key,{
        Username : user.name,
        Useremail : user.email,
        Userpassword : user.password,
        Usercontactno : user.contactno 
      });
   
    }
  
    
    search(u:User){
        for(var i=0;i<this.userarr.length;i++){
            if(this.userarr[i].name == u.name && 
            this.userarr[i].email == u.email && this.userarr[i].contactno == u.contactno){
               return true;
            }
        }
    }
}
