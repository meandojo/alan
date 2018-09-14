import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.css']
})
export class FishComponent implements OnInit {

  cats: any = [];

  constructor(private _tacos: CatService)
  {
    this.grabCats();
  }

  ngOnInit(){}

  grabCats()
  {
    this._tacos.grabCats().subscribe(data=>this.cats = data);
  }

}
