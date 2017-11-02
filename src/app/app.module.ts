import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule} from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { mainAppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppHeroesComponent } from './app.heroes.component';
import { AppHeroDetailComponent } from './app.hero-detail.component';
import { AppDashBoardComponent } from './app.dashboard.component';
import { HeroSearchComponent } from './hero-search.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { HeroService } from './hero.service';

@NgModule({
  declarations: [
    AppComponent,
    AppHeroesComponent,
    AppHeroDetailComponent,
    AppDashBoardComponent,
    HeroSearchComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    mainAppRoutingModule,
    FlexLayoutModule
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
