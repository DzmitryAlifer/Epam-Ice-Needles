import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  moduleId: module.id,
  selector: 'my-player-detail',
  templateUrl: 'player-detail.component.html',
  styleUrls: ['player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  @Input() player: Player;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here

  constructor(private playerService: PlayerService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.navigated = true;
        this.playerService.getPlayer(id)
            .then(player => this.player = player);
      } else {
        this.navigated = false;
        this.player = new Player();
      }
    });
  }

  save(): void {
    this.playerService
        .save(this.player)
        .then(player => {
          this.player = player; // saved player, w/ id if new
          this.goBack(player);
        })
        .catch(error => this.error = error); // TODO: Display error message
  }

  goBack(savedPlayer: Player = null): void {
    this.close.emit(savedPlayer);
    
    if (this.navigated) { 
      window.history.back(); 
    }
  }
}
