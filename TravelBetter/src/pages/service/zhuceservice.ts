import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/Rx';
import{ NavController,NavParams}from 'ionic-angular';

/*
  Generated class for the ZhuceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ZhuceService {
  http:any;
  baseUrl:string;
  constructor(http: Http,public navCtrl:NavController,public params:NavParams){
    this.http=http;
    this.baseUrl='http://tb.likole.cn/user_register'
  }
 
  zhuce(username,mypass1){
   return this.http.get(this.baseUrl+'&username='+username+'&password='+mypass1)
   .map(res=>res.json());
      }
 }     

