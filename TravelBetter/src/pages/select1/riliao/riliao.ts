import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { SefoodService } from '../../service/sefoodservice';

@Component({
  templateUrl: 'riliao.html',
  providers:[SefoodService]
})
export class riliaoPage {

datas:any;
 constructor(public navCtrl: NavController,public params: NavParams,private riliaoservice:SefoodService) {
     this.riliaoservice.getPost3().subscribe(reponse => {
      this.datas=reponse.data;
  })
}

}