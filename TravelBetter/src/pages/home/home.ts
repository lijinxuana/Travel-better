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
import { rengongPage } from '../select2/rengong/rengong';
import { ziranPage } from '../select2/ziran/ziran';
import { jingjiPage } from '../zhusu/jingji/jingji';
import { mingsuPage } from '../zhusu/mingsu/mingsu';
import { shushiPage } from '../zhusu/shushi/shushi';
import { yanxuanPage } from '../zhusu/yanxuan/yanxuan';

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
  openPage1(){
    this.navCtrl.push(zizhuPage)
   }
   openPage2(){
    this.navCtrl.push(huoguoPage)
   }
   openPage3(){
    this.navCtrl.push(riliaoPage)
   }
   openPage4(){
    this.navCtrl.push(xicanPage)
   }


  Selectspot(option){
    this.navCtrl.push(SelectspotPage,{
        option:option
    })
  }
     openPage5(){
    this.navCtrl.push(ziranPage)
   }
   openPage6(){
    this.navCtrl.push(rengongPage)
   }
  Selectbedroom(option){
    this.navCtrl.push(SelectbedroomPage,{
        option:option
    })
  }
  openPage7(){
    this.navCtrl.push(jingjiPage)
   }
   openPage8(){
    this.navCtrl.push(mingsuPage)
   }
   openPage9(){
    this.navCtrl.push(shushiPage)
   }
   openPage10(){
    this.navCtrl.push(yanxuanPage)
   }
  Selectfun(option){
    this.navCtrl.push(SelectfunPage,{
        option:option
    })
  }
}
