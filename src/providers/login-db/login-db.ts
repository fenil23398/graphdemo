import { Injectable } from '@angular/core';
import { Http,Response,RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LoginDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginDbProvider {

  constructor(public http: Http) {
    console.log('Hello LoginDbProvider Provider');
  }
urll:string="http://localhost:3000/login/";
urls:string="";
login1(user)
{
  let body=JSON.stringify(user);
  console.log(body);
  let h=new Headers({'Content-Type':'application/json'});
  let ro=new RequestOptions({headers:h});
  return this.http.post(this.urll,body,ro).map((res:Response)=>res.json());
}
signup1(user)
{

}
}
