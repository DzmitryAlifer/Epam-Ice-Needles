import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { PlayersComponent } from '../players/players.component';
import { PlayerDetailComponent } from '../player/detail/player-detail.component';
import { GridComponent } from '../grid/grid.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
},{
  path: 'dashboard',
  component: DashboardComponent
},{
  path: 'detail/:id',
  component: PlayerDetailComponent
},{
  path: 'players',
  component: PlayersComponent
},{
  path: 'grid',
  component: GridComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routedComponents = [DashboardComponent, PlayersComponent, PlayerDetailComponent, GridComponent];
