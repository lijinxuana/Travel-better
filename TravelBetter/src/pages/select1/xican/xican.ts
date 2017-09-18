import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { SefoodService } from '../../service/sefoodservice';

@Component({
  templateUrl: 'xican.html',
  providers:[SefoodService]
})
export class xicanPage {
datas:any;
 constructor(public navCtrl: NavController,public params: NavParams,private xicanservice:SefoodService) {
     this.xicanservice.getPost4().subscribe(reponse => {
      this.datas=reponse.data;
  })
}
}