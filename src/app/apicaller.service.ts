import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import rxjs map
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApicallerService {
  private _myreply = new BehaviorSubject<any[]>(null);
  cast = this._myreply.asObservable();

  constructor(private _http: HttpClient) {}

  // get data from swapi.dev
  getData() {
    console.log(Math.random() * 100 + ' getData()');
    // count api request
    // return as array of objects
    return this._http
      .get('https://swapi.dev/api/people/')
      .pipe(map((result) => result['results']));
  }

  editRes(nextRes) {
    this._myreply.next(nextRes);
  }
}
