import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginDbProvider } from "../../providers/login-db/login-db";
import { user_class } from "../../providers/userdoc";
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,public _db:LoginDbProvider) {

  }
  u_id:string="";
  u_pass:string="";
  m_no:string;
  onLogin()
  {
      this._db.login1(new user_class(this.u_id,this.u_pass,'')).subscribe(
        (x:user_class[])=>{
          //alert(x);
          if(x.length==1){
            alert('login');
          }
          else{
            alert('invalid');
          }
        }
      )
  }
  onSignup()
  {

  }

}
