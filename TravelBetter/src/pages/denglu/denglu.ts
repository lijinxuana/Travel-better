import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DengluService } from'../service/dengluservice'
import { HomePage } from'../../pages/home/home';
@Component({
  selector: 'page-denglu',
  templateUrl: 'denglu.html',
  providers:[DengluService]
})
export class dengluPage {
username:string;
status:number;
token:string;
password:string;

constructor(public navCtrl: NavController,public alertCtrl: AlertController,public params: NavParams,private dengluservice:DengluService) {
    this.username=params.get('username');
    this.password=params.get('password');
}

showAlert() {
   this.dengluservice.zhuce(this.username,this.password).subscribe(reponse => {
    this.status=reponse.status;
    this.token=reponse.token;
    if(this.status==0)
    {
      let alert = this.alertCtrl.create({
      title: '登录成功！',
      subTitle: '您已登录',
      buttons: ['确认']
    });
    alert.present();
    this.navCtrl.push(HomePage);
  }
  else{
    let alert = this.alertCtrl.create({
          title: '登录错误！',
          subTitle: '请重新输入',
          buttons: ['我知道了']
        });
        alert.present();
        this.navCtrl.push(dengluPage);
  }
})
}
}