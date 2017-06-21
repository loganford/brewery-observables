// beerLineup.component.ts

import {BeerLineupService} from './beerLineup.service';
import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import {SourceService} from "../source.service";
import {IBeer} from "../beer";

@Component({
  moduleId: module.id,
  templateUrl: 'beerLineup.component.html',
  styleUrls: ['beerLineup.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})

export class BeerLineupComponent implements OnInit  {

  private beerLineup: IBeer[];

  constructor(private beerLineupService: BeerLineupService,
              private sourceService: SourceService) {}

  ngOnInit() {
    // Get current lineup on init
    this.beerLineupService.getBeers().subscribe(
      (beers) => {
        // If beers successfully return, update the source service
        this.sourceService.setBeerLineup(beers);
      },
      err => {
        console.error(err);
      }
    );
  }

}
