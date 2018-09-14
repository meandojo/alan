import { Component, OnInit, Output } from '@angular/core';
import { CatService } from '../cat.service';
import { EventEmitter } from 'events';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catter',
  templateUrl: './catter.component.html',
  styleUrls: ['./catter.component.css']
})
export class CatterComponent implements OnInit {

  cat: any = {
    name: ""
  }

  erros: String[] = [];

  constructor(private _catCafe: CatService, private _nav: Router) { }

  ngOnInit() {
  }

  makeCat()
  {
    console.log('yo, we make a cat now')
    let obs = this._catCafe.makeCat(this.cat);
    console.log(obs);
    obs.subscribe(data=>{
      if(data['status'] === "bad")
      {
        console.dir(data['errors']);
         this.erros.push(data['data']['errors']['name']['message'])
      }else{
        this._nav.navigate(['/cats'])
      }

    });
  }

}
