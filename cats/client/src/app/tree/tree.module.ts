import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FishComponent } from '../fish/fish.component';
import { CatterComponent } from '../catter/catter.component';

const routes: Routes = [
  // root
  {path: "", pathMatch: "full", redirectTo: "/cats"},
  // views
  {path: "cats", component: FishComponent},
  {path: "cats/new", component: CatterComponent}
  // wildcard
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class TreeModule { }
