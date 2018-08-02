import { Book } from '../models/Book/book';
import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class BookService{

    mybook:Book;
    bookarr:Book[];
    favbooks:Book[];

    constructor(private http:Http){
        this.bookarr = []; 
        this.favbooks= [];
        this.http.get(`http://localhost:5001/Books`).pipe(map((res:Response)=>res.json()))
        .subscribe((res)=>{
            this.bookarr = res;
        })
    }

    search(b:Book){
        for(var i=0;i<this.bookarr.length;i++){
            /*if(this.bookarr[i].id == b.id && this.bookarr[i].bookname == b.bookname && 
            this.bookarr[i].bookauthor == b.bookauthor && this.bookarr[i].bookpublisher == b.bookpublisher)*/
            if(this.bookarr[i].isbn = b.isbn){
               return true;
            }
        }
    }
    favBook()
    {
        for(var i=0;i<this.bookarr.length;i++){
          //  console.log("entered for:"+this.bookarr[i].favbook);
            if(this.bookarr[i].favbook === true){
                this.favbooks.push(this.bookarr[i]);
            //    console.log("Entered if:"+this.favbooks.slice());


            }
        }
        
        
        return this.favbooks.slice();
        //console.log("eof:"+this.bookarr.slice());

    }
}






    