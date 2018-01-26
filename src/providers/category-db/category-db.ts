import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CategoryDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoryDbProvider {
url:string="http://localhost:3000/categories/";

  constructor(public http: Http) {
    console.log('Hello CategoryDbProvider Provider');
  }
  getAllCategories()
{
  return this.http.get(this.url).map((res:Response)=>res.json());
}
}
