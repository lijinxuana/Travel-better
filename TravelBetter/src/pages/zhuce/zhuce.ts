import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-zhuce',
  templateUrl: 'zhuce.html'
})
export class zhucePage {


 constructor(public alertCtrl: AlertController) {
   }


  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: '您已注册',
      buttons: ['确认']
    });
    alert.present();
  }
}




