import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { find1Page } from '../find1/find1';

@Component({
  selector: 'page-find',
  templateUrl: 'find.html'
})
export class FindPage {

  constructor(public navCtrl: NavController) {

  }
  
   openPage1(option){
    this.navCtrl.push(find1Page,{
        option:option
    })
   }

}
