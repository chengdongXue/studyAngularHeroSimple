import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from './hero.service';

@Component({
    selector: 'page-not-found',
    template: `
      <h1>{{title}}</h1>
  `,
})
export class PageNotFoundComponent implements OnInit {

    title = 'http response status is 404....   Page Not Found Please try again find it.....';

    heroArray: Array<string> = [];
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        //this.heroService.getHeroes().then(heroes => this.heroArray = heroes);
    }
}
