import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
<<<<<<< HEAD
=======
import { HomePage } from '../home/home';
>>>>>>> 9bfc8506eb499f773244de593f2216a2744f5c28

@Component({
  selector: 'page-zhuce',
  templateUrl: 'zhuce.html'
})
export class zhucePage {
  myemail:string;
  mypass1:string;
  mypass2:string;
  datas;

<<<<<<< HEAD
 constructor(public alertCtrl: AlertController) {
   }
=======
  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {
>>>>>>> 9bfc8506eb499f773244de593f2216a2744f5c28

    showAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: '您已注册成功',
      buttons: ['确认']
    });
    alert.present();
  }

  zhuce(){
    this.datas=[this.myemail,this.mypass1,this.mypass2];
    if(this.mypass1==this.mypass2){
        http.get("http://123.206.116.70:8080/hours/user_register?phone="+$scope.phone+"&password="+hex_md5($scope.password))
      .then(function (response) {
        if(response.data.status==0)
        {
           this.navCtrl.push(HomePage,{
        datas:this.datas
    })
        }else
        {
    let alert = this.alertCtrl.create({
      title: '注册错误',
      subTitle: '您的注册出错，请重新注册',
      buttons: ['我知道了']
    });
    alert.present();
        }
      });
    }
  }
}