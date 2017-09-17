import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { SefoodService } from '../../service/sefoodservice';

@Component({
  templateUrl: 'huoguo.html',
  providers:[SefoodService]
})
export class huoguoPage {
datas:any;

constructor(public navCtrl: NavController,public params: NavParams,private zizhuservice:SefoodService) {
     this.zizhuservice.getPost().subscribe(reponse => {
      this.datas=reponse.data;
  })
}
}
