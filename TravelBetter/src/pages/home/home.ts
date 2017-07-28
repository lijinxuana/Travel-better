import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SelectfoodPage } from '../select/selectfood';
import { SelectspotPage } from '../select/selectspot';
import { SelectbedroomPage } from '../select/selectbedroom';
import { SelectfunPage } from '../select/selectfun';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  Selectfood(option){
    this.navCtrl.push(SelectfoodPage,{
        option:option
    })
  }
  Selectspot(option){
    this.navCtrl.push(SelectspotPage,{
        option:option
    })
  }
  Selectbedroom(option){
    this.navCtrl.push(SelectbedroomPage,{
        option:option
    })
  }
  Selectfun(option){
    this.navCtrl.push(SelectfunPage,{
        option:option
    })
  }
}
