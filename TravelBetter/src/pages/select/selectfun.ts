import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-select',
  templateUrl: 'selectfun.html'
})
export class SelectfunPage {
  option:any;
  constructor(public navCtrl: NavController, public navp:NavParams) {
      this.option=navp.get("option");
  }

}