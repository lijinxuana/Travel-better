import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import{ NavController,NavParams}from 'ionic-angular';

@Injectable()
export class DengluService {
  http:any;
  baseUrl:string;
  constructor(http: Http,public navCtrl:NavController,public params:NavParams){
    this.http=http;
    this.baseUrl='http://123.206.22.15/user_login'
  }
 
  zhuce(username,mypass1){
   return this.http.get(this.baseUrl+'?usernameOrEmail='+username+'&password='+mypass1)
   .map(res=>res.json());
      }
 }     
