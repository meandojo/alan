import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { FishComponent } from './fish/fish.component';
import { TacoService } from './taco.service';
import { HttpClientModule } from '@angular/common/http';
import { CatterComponent } from './catter/catter.component';
import { TreeModule } from './tree/tree.module' ;

@NgModule({
  declarations: [
    AppComponent,
    FishComponent,
    CatterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TreeModule
  ],
  providers: [TacoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
