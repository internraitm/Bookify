import { Injectable, Pipe, PipeTransform } from '@angular/core';
import {Book} from '../../models/Book/book';
import { BookService } from "../../services/book.service";

@Pipe({
 name: 'searchfilter'
})

@Injectable()
export class SearchFilterPipe implements PipeTransform
 {
   /* transform(value: any, ...args: any[]) {
        throw new Error("Method not implemented.");
    }
    */

   bookarr:Book[];
   bookServ:BookService;

   constructor(bs:BookService){
    this.bookServ = bs;

  }
  ngOnInit(){
    this.bookServ.getBooks();
    }
   
   
 transform(items: Book[], field: string, value: string) {
   if (!items) return [];
   return items.filter(it => it[field] == value);
 }

}