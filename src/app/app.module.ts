import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {BeerLineupComponent} from "./beerLineup/beerLineup.component";
import {BeerLineupService} from "./beerLineup/beerLineup.service";


const appComponents = [
  AppComponent,
  BeerLineupComponent
];

const appServices = [
  BeerLineupService,

];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
