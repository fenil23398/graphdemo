import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions,Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ExpdbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ExpdbProvider {
url:string="http://localhost:3000/expbycat/";
  constructor(public http: Http) {
    console.log('Hello ExpdbProvider Provider');
  }
  getScategoriesById(id:number)
  {
    return this.http.get(this.url+id).map((res:Response)=>res.json());
  }
}
