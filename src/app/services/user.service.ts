import { Injectable } from '@angular/core';
//import { Http, Response } from '@angular/http';  
//import {Observable} from 'rxjs';
//import 'rxjs/add/operator/map'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  endPoint :string;

  private isUserLoggedIn;

  constructor() {
    //this.endPoint = "http://localhost:5001/books";
    this.isUserLoggedIn = false;
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

  

  
}
