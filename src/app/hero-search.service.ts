import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero } from './hero';

@Injectable()
export class HeroSearchService {

  private heroesUrl = 'api/heroes';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'}); // request headers. save or update will be use

  constructor(private http: Http) {}

  search(term: string): Observable<Hero[]> {
    return this.http
               .get(this.heroesUrl + '?name=' + term)
               .map(response => response.json().data as Hero[]);
  }
}
