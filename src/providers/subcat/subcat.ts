import { Injectable } from '@angular/core';
import { Http,Headers,Response,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SubcatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SubcatProvider {
url:string="http://localhost:3000/scategories/";
  constructor(public http: Http) {
    console.log('Hello SubcatProvider Provider');
  }
  getScategoriesById(id:number)
  {
    return this.http.get(this.url+id).map((res:Response)=>res.json());
  }
}
