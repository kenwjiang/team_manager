import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import { ActivatedRoute, Params, Router, Event, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-game2',
  templateUrl: './game2.component.html',
  styleUrls: ['./game2.component.css']
})
export class Game2Component implements OnInit {
    players: any=[];
    player: any;
    status: string;

    constructor(
        private _httpService: HttpService,
        private _route: ActivatedRoute,
        private _router: Router

        ){}

  ngOnInit() {
      this.getPlayers();
  }
  getPlayers(){
      let observable = this._httpService.getPlayers();
      observable.subscribe(data=> {
          console.log("getting data", data);
          this.players = data;
      })
  }
  setStatus(player, status){
      this.player = player;
      this.player.status2 = status;
      let observable = this._httpService.updateStatus(this.player);
      observable.subscribe(data=> {
          console.log('status data', data);
      })
  }
}
