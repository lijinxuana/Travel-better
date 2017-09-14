import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { dengluPage } from '../denglu/denglu';
import { bangzhuPage } from '../bangzhu/bangzhu';
import { gerenziliaoPage } from '../gerenziliao/gerenziliao';
import { zhanghaoshezhiPage } from '../zhanghaoshezhi/zhanghaoshezhi';
import { zhucePage } from '../zhuce/zhuce';
import { tuijianPage } from '../tuijian/tuijian';
                       
@Component({
  selector: 'page-me',
  templateUrl: 'me.html'
})
export class MePage {

  constructor(public navCtrl: NavController) {

  }
   openPage1(option){
    this.navCtrl.push(dengluPage,{
        option:option
    })
   }
   openPage2(option){
    this.navCtrl.push(bangzhuPage,{
        option:option
    })
   }
   openPage3(option){
    this.navCtrl.push(gerenziliaoPage,{
        option:option
    })
   }
   openPage4(option){
    this.navCtrl.push(zhanghaoshezhiPage,{
        option:option
    })
   }
   openPage5(option){
    this.navCtrl.push(zhucePage,{
        option:option
    })
   }
   openPage6(option){
    this.navCtrl.push(tuijianPage,{
        option:option
    })
   }

}

