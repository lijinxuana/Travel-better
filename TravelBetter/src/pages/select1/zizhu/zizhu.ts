import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { SefoodService } from '../../service/sefoodservice';
@Component({
  templateUrl: 'zizhu.html',
  providers:[SefoodService]
})
export class zizhuPage {

datas:any;
 constructor(public navCtrl: NavController,public params: NavParams,private zizhuservice:SefoodService) {
     this.zizhuservice.getPost1().subscribe(reponse => {
      this.datas=reponse.data;
  })
}
}