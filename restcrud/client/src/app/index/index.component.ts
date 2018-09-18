import { Component, OnInit } from '@angular/core';
import { TacoService } from '../taco.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  _tasks = [];
  constructor(private _tacos: TacoService) { }

  ngOnInit() {
    this.populateTasks();
  }

  populateTasks()
  {
    this._tacos.getTasks()
        .subscribe((data: any)=>this._tasks=data);
  }

}
