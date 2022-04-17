import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApicallerService {
  constructor(private _http: HttpClient) {}

  // get data from swapi.dev
  getData() {
    console.log('RequestID:' + Math.random() * 100 + ' getData()');
    // count api request
    // return as array of objects
    return this._http
      .get('https://swapi.dev/api/people/')
      .pipe(map((result) => result['results']));
  }
}
