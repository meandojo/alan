import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: '/tasks'},
  {path: "tasks", component: IndexComponent},
  {path: "tasks/new", component: NewComponent},
  {path: "tasks/update/:id", component: EditComponent},
  {path: "tasks/:id", component: ShowComponent},
  {path: "**", redirectTo: "['/tasks']"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
