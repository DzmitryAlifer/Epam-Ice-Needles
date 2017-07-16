import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgGrid, NgGridItem } from 'angular2-grid';

import { Player } from '../player/player';
import { PlayerService } from '../player/player.service';

@Component({
  moduleId: module.id,
  selector: 'ui-grid',
  templateUrl: 'grid.component.html',
  styleUrls: ['grid.component.css']
})
export class GridComponent implements OnInit {
  constructor (private router: Router, private playerService: PlayerService) {}
  
  players: Player[] = [];

  gridConfig = {
    'max_cols': 5, 
    'row_height': 150, 
    'col_width': 100, 
    'auto_resize': true
  };
  
  gridItemConfig = {
    'sizex': 1, 
    'sizey': 1
  };

  ngOnInit(): void {
    this.playerService.getPlayers()
      .then(players => {
        this.players = players;
        console.log(this.players);
        for (var i = 0; i < this.players.length; i++) {
          if (!this.players[i].positiveVotes) 
            this.players[i].positiveVotes = 0;
          
          if (!this.players[i].negativeVotes) 
            this.players[i].negativeVotes = 0;
        }
      });
  }
}



