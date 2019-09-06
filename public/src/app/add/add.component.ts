import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import { ActivatedRoute, Params, Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
    position: string;
    player: any={name:""};
    errorMsg: string;

    constructor(
        private _httpService: HttpService,
        private _route: ActivatedRoute,
        private _router: Router
        ){}
    ngOnInit(){
    }

    addPlayer(){
        let observable = this._httpService.addPlayer({name: this.player.name, position: this.position});
        observable.subscribe(data=>{
            console.log('receiving data', data);
            if(!data['message']){
                this.showPlayers();
            } else if (data['message']=="Error"){
                this.errorMsg = "This name already exists in our database";
            }
        })
    }
    showPlayers() {
    this._router.navigate(['']);
      }

}
