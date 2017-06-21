// source.service.ts

import {Injectable, EventEmitter} from '@angular/core';
import {IBeer} from './beer';

@Injectable()
export class SourceService {

  private beerLineupSource: IBeer[];

  beerLineupSourceUpdated = new EventEmitter<IBeer[]>();

  setBeerLineup(beerLineup: IBeer[]) {
    this.beerLineupSource = beerLineup;
    this.beerLineupSourceUpdated.emit(this.beerLineupSource);
  }

  getBeerLineup(): IBeer[] {
    return this.beerLineupSource;
  }
}

