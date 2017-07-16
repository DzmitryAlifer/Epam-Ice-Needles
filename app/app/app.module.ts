import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../in-memory-data.service';

import '../rxjs-extensions';
import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { PlayerService } from '../player/player.service';
import { PlayerSearchComponent } from '../player/search/player-search.component';
import { PlayerSlatComponent } from '../player/slat/player-slat.component';
import { NgGridModule } from 'angular2-grid';

import { OrderByPipe } from '../pipe/orderby.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    NgGridModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600 })
  ],
  declarations: [
    AppComponent,
    PlayerSearchComponent,
    PlayerSlatComponent,
    routedComponents,
    OrderByPipe
  ],
  providers: [
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
