import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
      <h1>{{title}}</h1>
      <nav>
          <a routerLink="/heroes" routerLinkActive="active">{{heroesLike}}</a>
          <a routerLink="/dashboard" routerLinkActive="active">{{dashboardLike}}</a>
      </nav>
      <router-outlet></router-outlet>
  `,
  styles: [`
    nav {
      font-size:18px;
      font-weight:bold;
      text-align:center;
    }
    h1 {
      font-size: 1.2em;
      color: #999;
      margin-bottom: 0;
    }
    h2 {
      font-size: 2em;
      margin-top: 0;
      padding-top: 0;
    }
    nav a {
      padding: 5px 10px;
      text-decoration: none;
      margin-top: 10px;
      display: inline-block;
      background-color: #eee;
      border-radius: 4px;
    }
    nav a:visited, a:link {
      color: #607D8B;
    }
    nav a:hover {
      color: #039be5;
      background-color: #CFD8DC;
    }
    nav a.active {
      color: #039be5;
    }
  `]
})

export class AppComponent {
    title = 'Tour of Heroes';
    heroesLike = 'Heroes';
    dashboardLike = 'Dashboard';
}
