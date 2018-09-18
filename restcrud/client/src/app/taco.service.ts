import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TacoService {

  constructor(private _http: HttpClient) { }

  getTasks()
  {
    return this._http.get("/api/tasks");
  }

  getTask(id)
  {
    console.log("/api/tasks/"+id)
    return this._http.get("/api/tasks/"+id);
  }

  createTask(data)
  {
    return this._http.post("/api/tasks", data)
  }

  delete(id)
  {
    return this._http.delete("/api/tasks/"+id)
  }

  updateTask(id, data)
  {
    return this._http.put("/api/tasks/"+id,data)
  }
}
