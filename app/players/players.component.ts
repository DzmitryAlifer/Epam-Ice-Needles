import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Player } from '../player/player';
import { PlayerService } from '../player/player.service';

import { NgGrid, NgGridItem } from 'angular2-grid';

@Component({
  moduleId: module.id,
  selector: 'my-players',
  templateUrl: 'players.component.html',
  styleUrls: ['players.component.css']
})
export class PlayersComponent implements OnInit {
  constructor (private router: Router, private playerService: PlayerService) {}

  players: Player[];
  selectedPlayer: Player;
  addingPlayer = false;
  error: any;

  getPlayers(): void {
    this.playerService
      .getPlayers()
      .then(players => this.players = players)
      .catch(error => this.error = error);
  }

  addPlayer(): void {
    this.addingPlayer = true;
    this.selectedPlayer = null;
  }

  close(savedPlayer: Player): void {
    this.addingPlayer = false;
    
    if (savedPlayer) { 
      this.getPlayers(); 
    }
  }

  deletePlayer(player: Player, event: any): void {
    event.stopPropagation();
    this.playerService
      .delete(player)
      .then(res => {
        this.players = this.players.filter(h => h !== player);
        
        if (this.selectedPlayer === player) { 
          this.selectedPlayer = null; 
        }
      })
      .catch(error => this.error = error);


  }
  ngOnInit(): void {
    this.getPlayers();
    //this.readCsvData();
  }

  onSelect(player: Player): void {
    this.selectedPlayer = player;
    this.addingPlayer = false;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedPlayer.id]);
  }
}

