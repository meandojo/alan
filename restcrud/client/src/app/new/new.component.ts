import { Component, OnInit } from '@angular/core';
import { TacoService } from '../taco.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  _errors = [];
  _task = {title: "", description: ""}
  constructor(private _tacos: TacoService, private _nav: Router) { }

  ngOnInit() {
  }

  create()
  {
    this._tacos.createTask(this._task)
               .subscribe(data=>{
                 if('errors' in data)
                 {
                   console.log(data);
                   this._errors.push(data['errors']['description']['message']);
                   this._errors.push(data['errors']['title']['message']);
                 }else{
                  this._nav.navigate(['/tasks']);
                 }
               })
  }
}
