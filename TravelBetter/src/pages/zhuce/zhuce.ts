import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ZhuceService} from'../service/zhuceservice';

@Component({
  selector: 'page-zhuce',
  templateUrl: 'zhuce.html',
  providers:[ZhuceService]
})
export class zhucePage {
  mypass1:string;
  mypass2:string;
  status:number;
  username:string;

  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public params: NavParams,private zhuceservice:ZhuceService) {
    this.username=params.get('username');
    this.mypass1=params.get('mypass1');
    this.mypass2=params.get('mypass2');
  }

ngOnInit(){
  this.zhuce();
}
  zhuce(){
    if(this.mypass1==this.mypass2){
      this.zhuceservice.zhuce(this.username,this.mypass1).subscribe(reponse => {
      this.status=reponse.status;
        if(this.status==0)
        {
           this.navCtrl.push(HomePage,{
           datas:this.username
      })
          
        }else
        {
          let alert = this.alertCtrl.create({
          title: '注册错误',
          subTitle: '您的注册出错，请重新注册',
          buttons: ['我知道了']
        });
        alert.present();
        this.navCtrl.push(zhucePage);
      }
    })
  }
  else{
    let alert = this.alertCtrl.create({
          title: '两次密码输入不一致',
          subTitle: '请重新输入密码',
          buttons: ['我知道了']
        });
        alert.present();
        this.navCtrl.push(zhucePage);
  }
}
}