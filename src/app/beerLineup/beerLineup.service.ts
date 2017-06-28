// beerLineup.service.ts

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response, Headers} from '@angular/http';
import {IBeer} from '../beer'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment';

//CRUD Service for the Beer Lineup of a brewery
@Injectable()
export class BeerLineupService {

  private lineupUrl: string;
  private headers: Headers;

  constructor(private http: Http) {
    this.lineupUrl = environment.lineupUrl; // Your API url
    this.headers = new Headers({'Content-Type': 'application/json'});
  }

  // Get all beers in the current lineup
  getBeers(): Observable<IBeer[]> {
    return this.http.get(this.lineupUrl).map((response: Response) => <IBeer[]>response.json()).catch(this.handleError);
  }

  // Add a new beer to the lineup, should return updated beer lineup
  addBeer(beer: IBeer): Observable<IBeer[]> {
    let body = JSON.stringify(beer);
    return this.http.post(this.lineupUrl, body, {headers: this.headers}).map((response: Response) => <IBeer[]>response.json()).catch(this.handleError)
  }

  // Update an existing beer in the lineup, should return updated beer lineup
  updateBeer(beer: IBeer): Observable<IBeer[]> {
    let body = JSON.stringify(beer);
    return this.http.put(this.lineupUrl + '/' + beer.id, body, {headers: this.headers}).map((response: Response) => <IBeer[]>response.json()).catch(this.handleError);
  }

  // Delete a beer from the lineup, should return updated beer lineup
  deleteBeer(id: number): Observable<IBeer[]> {
    return this.http.delete(this.lineupUrl + '/' + id).map((response: Response) => <IBeer[]>response.json()).catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error);
  }

}
