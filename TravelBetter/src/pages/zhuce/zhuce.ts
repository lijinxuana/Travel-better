import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
/*import { ZhuceProvider} from'../../providers/zhuce-provider';*/

@Component({
  selector: 'page-zhuce',
  templateUrl: 'zhuce.html'
})
export class zhucePage {
  myemail:string;
  mypass1:string;
  mypass2:string;
  datas;
  password:string;
  email:string;

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }

  zhuce(){
    if(this.mypass1==this.mypass2){
      let password=this.mypass1;
      let email=this.myemail;
    this.datas=[this.email,this.password];
    /*this.navCtrl.push(ZhuceProvider,{
        datas:this.datas
    })*/
  }
  }
}