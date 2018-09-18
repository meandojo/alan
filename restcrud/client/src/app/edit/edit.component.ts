import { Component, OnInit } from '@angular/core';
import { TacoService } from '../taco.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  _task:any;
  constructor(private _tacos: TacoService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe(data=>{
      this._tacos.getTask(data['id'])
                 .subscribe(data=>{
                   if('errors' in data)
                   {
                     this._router.navigate(['/tasks'])
                   }else{
                     this._task = data;
                   }
                 })
    })
  }

  update()
  {
    this._tacos.updateTask(this._task._id, this._task)
        .subscribe(data=>console.log(data))
  }

}
