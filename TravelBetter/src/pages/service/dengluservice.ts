import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

/*
  Generated class for the DengluProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DengluService {

  constructor(http: Http) {
    console.log('Hello DengluProvider Provider');
  }

}
