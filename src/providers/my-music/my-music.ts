import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MyMusicProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MyMusicProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MyMusicProvider Provider');
  }
  getMusic(){
    return this.http.get('http://orangevalleycaa.org/api/music');
  }
  getOneSong(){
    return this.http.get('http://orangevalleycaa.org/api/music');
  }
}
