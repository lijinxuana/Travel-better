import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-zhuce',
  templateUrl: 'zhuce.html'
})
export class zhucePage {
  myemail:string;
  mypass1:string;
  mypass2:string;
  datas;

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

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