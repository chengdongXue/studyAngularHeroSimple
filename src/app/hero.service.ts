import { concat } from 'rxjs/observable/concat';
import { Inject, Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Hero } from './Hero';
import { HEROES } from './mock-heroes';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';

 @Injectable()
 export class HeroService {
    private heroesUrl = 'api/heroes';  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'}); // request headers. save or update will be use

    constructor(private http: Http) { }
    getHeroes(): Promise<Hero[]> {
      return this.http.get(this.heroesUrl)
                 .toPromise()
                 .then(response => response.json().data as Hero[])
                 .catch(this.handleError);
    }

    getHero(id: number): Promise<Hero> {
        const url = this.heroesUrl + '/' + id;
        return this.http.get(url)
        .toPromise()
        .then(response => response.json().data as Hero)
        .catch(this.handleError);
    }

    update(hero: Hero): Promise<Hero> {
        const url = this.heroesUrl + '/' + hero.id;
        return this.http
          .put(url, JSON.stringify(hero), {headers: this.headers})
          .toPromise()
          .then(() => hero)
          .catch(this.handleError);
    }

    create(name: string): Promise<Hero> {
        return this.http
          .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
          .toPromise()
          .then(res => res.json().data as Hero)
          .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = this.heroesUrl + '/' + id;
        return this.http.delete(url, {headers: this.headers})
          .toPromise()
          .then(() => null)
          .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }

    getHeros(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHeroEntity(id: number): Promise<Hero> {
        return this.getHeros().then(heros => heros.find(hero => hero.id === id));
    }
 }
