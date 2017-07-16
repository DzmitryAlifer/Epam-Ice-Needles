import { Component, Input } from '@angular/core';

import { PlayerService } from '../player.service';

@Component({
  moduleId: module.id,
  selector: 'player-slat',
  templateUrl: 'player-slat.component.html',
  styleUrls: ['player-slat.component.css']
})
export class PlayerSlatComponent {
  @Input() player: Player;

  constructor(private playerService: PlayerService) {}

  vote(player: Player, isPositiveVote: boolean): void {
    if (!player.positiveVotes) player.positiveVotes = 0;
    if (!player.negativeVotes) player.negativeVotes = 0;

    if (isPositiveVote) {
      player.positiveVotes++;
    } else {
      player.negativeVotes++;    
    }

    this.playerService
        .save(this.player)
        .then(player => this.player = player)
        .catch(error => this.error = error);
  }
}
