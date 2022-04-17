import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApicallerService {

  constructor(private _http: HttpClient) { }

  // get data from swapi.dev
  getData() {
    return this._http.get('https://swapi.dev/api/people/');
  }
}
