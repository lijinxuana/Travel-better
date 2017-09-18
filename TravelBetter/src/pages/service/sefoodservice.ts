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
    this.baseUrl = 'http://123.206.22.15/food.json/food?category=';
  }

  getPost1(){
    return this.http.get(this.baseUrl+"6")
    .map(res => res.json());
  }
  getPost2(){
    return this.http.get(this.baseUrl+"2")
    .map(res => res.json());
  }
  getPost3(){
    return this.http.get(this.baseUrl+"3")
    .map(res => res.json());
  }
  getPost4(){
    return this.http.get(this.baseUrl+"5")
    .map(res => res.json());
  }
  getPost5(){
    return this.http.get(this.baseUrl+"4")
    .map(res => res.json());
  }
  getPost6(){
    return this.http.get(this.baseUrl+"1")
    .map(res => res.json());
  }
}
