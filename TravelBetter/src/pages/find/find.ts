import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { find1Page } from '../find1/find1';
import { find2Page } from '../find2/find2';
import { find3Page } from '../find3/find3';
import { find4Page } from '../find4/find4';
import { find5Page } from '../find5/find5';

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
   openPage2(option){
    this.navCtrl.push(find2Page,{
         option:option
    })
   }
   openPage3(option){
    this.navCtrl.push(find3Page,{
         option:option
    })
   }
   openPage4(option){
    this.navCtrl.push(find4Page,{
         option:option
    })
   }
   openPage5(option){
    this.navCtrl.push(find5Page,{
         option:option
    })
   }

}
