import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  
  templateUrl: 'selectfood.html'
})

export class SelectfoodPage {
  option:any;
  constructor(public navCtrl: NavController, public navp:NavParams) {
      this.option=navp.get("option");
  }

}