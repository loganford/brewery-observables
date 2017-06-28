import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {BeerLineupComponent} from "./beerLineup/beerLineup.component";
import {BeerLineupService} from "./beerLineup/beerLineup.service";
import {MdCardModule} from '@angular/material';


const appComponents = [
  AppComponent,
  BeerLineupComponent
];

const materialModules = [
  MdCardModule
];

const appServices = [
  BeerLineupService,
];


@NgModule({
  declarations: [
    appComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    materialModules
  ],
  providers: [
    appServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
