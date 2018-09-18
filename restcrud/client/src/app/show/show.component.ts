import { Component, OnInit } from '@angular/core';
import { TacoService } from '../taco.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  _task = {title: "", description: "", completed: false}
  constructor(private _tacos: TacoService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((data: any)=>{
      this._tacos.getTask(data['id'])
                .subscribe((data: any)=>this._task=data)
    })
  }

  delete(id)
  {
    this._tacos.delete(id).subscribe(data=>{
      if('errors' in data)
      {
        console.log('gooft')
      }else{
        this._router.navigate(['/tasks'])
      }
    })
  }

}
