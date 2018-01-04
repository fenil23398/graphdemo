import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
c:number=0;
  constructor(public navCtrl: NavController) {

  }
onclickif()
{
 this.c=this.c+1;
}

}
