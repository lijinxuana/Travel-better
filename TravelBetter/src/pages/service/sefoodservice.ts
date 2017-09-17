import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import{ NavController,NavParams}from 'ionic-angular';

@Injectable()
export class SefoodService{
  http:any;
  baseUrl: String;
  constructor(http:Http,public navCtrl:NavController,public params:NavParams){
    this.http = http;
    this.baseUrl = 'http://123.206.22.15/food.json';
  }

  getPost(){
    return this.http.get(this.baseUrl)
    .map(res => res.json());
  }
}
