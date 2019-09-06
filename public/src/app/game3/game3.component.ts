import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import { ActivatedRoute, Params, Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-game3',
  templateUrl: './game3.component.html',
  styleUrls: ['./game3.component.css']
})
export class Game3Component implements OnInit {
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
      this.player.status3 = status;
      let observable = this._httpService.updateStatus(this.player);
      observable.subscribe(data=> {
          console.log('status data', data);
      })
  }

}
