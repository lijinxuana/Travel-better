import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-denglu',
  templateUrl: 'denglu.html'
})
export class dengluPage {


 constructor(public alertCtrl: AlertController) {
   }


  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Dear Friend!',
      subTitle: '您已登录',
      buttons: ['确认']
    });
    alert.present();
  }
}

