import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SelectfoodPage } from '../select/selectfood';
import { SelectspotPage } from '../select/selectspot';
import { SelectbedroomPage } from '../select/selectbedroom';
import { SelectfunPage } from '../select/selectfun';
import { huoguoPage } from '../select1/huoguo/huoguo';
import { zizhuPage } from '../select1/zizhu/zizhu';
import { xicanPage } from '../select1/xican/xican';
import { riliaoPage } from '../select1/riliao/riliao';

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
   Selectzizhu(){
    this.navCtrl.push(zizhuPage);
   }

   Selecthuoguo(){
    this.navCtrl.push(huoguoPage);
   }

   Selectriliao(){
    this.navCtrl.push(riliaoPage);
   }

   Selectxican(){
    this.navCtrl.push(xicanPage);
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
