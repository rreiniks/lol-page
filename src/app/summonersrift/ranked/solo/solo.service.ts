import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RiotService {

    
    constructor(private http: HttpClient){}


    getRiotSummonerData(region: string, username: string){
        return this.http.get('http://localhost:3000/online/' + region + '/' + username);

    }

}