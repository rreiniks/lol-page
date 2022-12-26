import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, of } from 'rxjs';
import { Summoner } from '../summoner/summoner.model';

@Injectable({
    providedIn: 'root'
})
export class RiotService {

    
    constructor(private http: HttpClient){}


    getRiotSummonerData(region: string, username: string){
        return this.http.get('http://localhost:3000/online/' + region + '/' + username);

    }

}