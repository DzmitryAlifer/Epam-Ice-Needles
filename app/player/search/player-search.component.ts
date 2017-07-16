import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { PlayerSearchService } from './player-search.service';
import { Player } from '../player';

@Component({
  moduleId: module.id,
  selector: 'player-search',
  templateUrl: 'player-search.component.html',
  styleUrls: ['player-search.component.css'],
  providers: [PlayerSearchService]
})
export class PlayerSearchComponent implements OnInit {
  players: Observable<Player[]>;
  private searchTerms = new Subject<string>();

  constructor(private playerSearchService: PlayerSearchService, private router: Router) {}

  search(term: string): void {
    // Push a search term into the observable stream.
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.players = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.playerSearchService.search(term)
        // or the observable of empty players if no search term
        : Observable.of<Player[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Player[]>([]);
      });
  }

  gotoDetail(player/*: Player*/): void {
    let link = ['/detail', player.id];
    this.router.navigate(link);
  }
}
