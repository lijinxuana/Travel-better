import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WeatherService{
    http:any;
    baseUrl:string;
    constructor(http:Http){
        this.http = http;
        this.baseUrl = 'http://123.206.116.70:8080/hours/user_register?phone=';
        
    }

    getPosts(city){
        this.http.get(this.baseUrl+$scope.phone+"&password="+hex_md5($scope.password))
        .map(res => res.json());
    }
}