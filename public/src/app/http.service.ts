import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
      constructor(private _http: HttpClient) { }

    addPlayer(data){
        return this._http.post('/team', data);
    }
    getPlayers(){
        return this._http.get('/team');
    }
    getProduct(data){
        return this._http.get('/team/'+ data.id );
    }
    updateStatus(data){
        console.log(data);
        return this._http.put('/team', data);
    }
    delete(data){
        console.log(data);
        return this._http.delete('/team/'+ data._id);
    }
}
