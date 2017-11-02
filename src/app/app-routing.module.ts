import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppHeroesComponent } from './app.heroes.component';
import { AppHeroDetailComponent } from './app.hero-detail.component';
import { AppDashBoardComponent } from './app.dashboard.component';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: AppDashBoardComponent },
  { path: 'detail/:id', component: AppHeroDetailComponent },
  { path: 'heroes',     component: AppHeroesComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { enableTracing: true }) ],
  exports: [ RouterModule ]
})

class AppRoutingModule {}

export { AppRoutingModule as mainAppRoutingModule };
