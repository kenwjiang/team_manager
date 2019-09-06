import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import { ActivatedRoute, Params, Router, Event, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    players: any=[];

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
      observable.subscribe(data=>{
          console.log('receiving player data', data);
          this.players = data;
      })
  }
  delete(player){
      if(confirm("Are you sure you want to delete this player?")){
          let observable=this._httpService.delete(player);
          observable.subscribe(data=> {
              console.log('receiving data', data);
              if(!data['message']){
                  this.getPlayers();
              }
          })
      }
  }
}
