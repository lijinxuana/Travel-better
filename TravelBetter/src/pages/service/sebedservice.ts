import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class SebedService{
  http:any;
  baseUrl: String;
  constructor(http:Http){
    this.http = http;
    this.baseUrl = 'http://123.206.22.15_getDetail';
  }

  getPost(){
    return this.http.get(this.baseUrl+'&offset=0'+'&num=100')
    .map(res => res.json());
  }
}
