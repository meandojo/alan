import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TacoService {

  constructor(private _http: HttpClient) { }

  firstMethod(){
    let obs = this._http.get("/cats");
    obs.subscribe(data=>console.log(data));
    return "Hola dude"
  }
}
