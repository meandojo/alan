import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private _http: HttpClient) { }

  makeCat(data)
  {
    return this._http.post("/cats", data);
  }

  grabCats()
  {
    return this._http.get("/cats")
  }
}
