import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgGrid, NgGridItem } from 'angular2-grid';

import { Player } from '../player/player';
import { PlayerService } from '../player/player.service';

import { OrderByPipe } from '../pipe/orderby.pipe';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  pipes: [OrderByPipe]
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router, private playerService: PlayerService) {}

  players: Player[] = [];

  ascending = false;
  orderByValue = 'posMinusNeg';
  orderByValues = [
    {key: 'posMinusNeg', label: 'Aggregate votes'}, 
    {key: 'positiveVotes', label: 'Positive votes'}, 
    {key: 'negativeVotes', label: 'Negative votes'}, 
    {key: 'firstName', label: 'First name'}, 
    {key: 'lastName', label: 'Last name'}
  ];

  gridConfig = {
    'col_width': 80,
    'row_height': 100,
    'fix_to_grid': true
  };

  gridItemConfig = {
    'borderSize': 55
  };  

  ngOnInit(): void {
    this.playerService.getPlayers()
      .then(players => {
        this.players = players;
        
        for (var i = 0; i < this.players.length; i++) {
          if (!this.players[i].positiveVotes) this.players[i].positiveVotes = 0;
          if (!this.players[i].negativeVotes) this.players[i].negativeVotes = 0;
        }
      });
  }

  gotoDetail(player: Player): void {
    let link = ['/detail', player.id];
    this.router.navigate(link);
  }

  onChangeSorting(value: number): void {
    this.orderByValue = value;
  }

  onChangeDirection(): void {
    this.ascending = !this.ascending;
  }
}
