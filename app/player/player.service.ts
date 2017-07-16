import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Player } from './player';

@Injectable()
export class PlayerService {
  private playersUrl = 'app/playerss';
  data = [];

  constructor(private http: Http) {}

  getPlayers(): Promise<Player[]> {
    return this.http
      .get(this.playersUrl)
      .toPromise()
      .then(response => response.json().data as Player[])
      .catch(this.handleError);
  }

  getPlayer(id: number): Promise<Player> {
    return this.getPlayers()
      .then(players => players.find(player => player.id === id));
  }

  save(player: Player): Promise<Player> {
    if (player.id) {
      return this.put(player);
    }
    return this.post(player);
  }

  delete(player: Player): Promise<Response> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.playersUrl}/${player.id}`;

    return this.http
      .delete(url, { headers: headers })
      .toPromise()
      .catch(this.handleError);
  }

  private post(player: Player): Promise<Player> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post(this.playersUrl, JSON.stringify(player), { headers: headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  private put(player: Player): Promise<Player> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.playersUrl}/${player.id}`;

    return this.http
      .put(url, JSON.stringify(player), { headers: headers })
      .toPromise()
      .then(() => player)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
