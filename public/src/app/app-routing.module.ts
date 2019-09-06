import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayersComponent } from './players/players.component';
import { StatusComponent } from './status/status.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';

import { Game1Component } from './game1/game1.component';
import { Game2Component } from './game2/game2.component';
import { Game3Component } from './game3/game3.component';


const routes: Routes = [
    {path:"players", component: PlayersComponent, children: [
            {path: "list", component: ListComponent },
            {path:'addplayer', component: AddComponent}
    ]},
    {path: "status", component: StatusComponent, children:[
            {path: 'game/1', component: Game1Component},
            {path: 'game/2', component: Game2Component},
            {path: 'game/3', component: Game3Component}]},
    {path: '', pathMatch: 'full', redirectTo: '/players/list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
