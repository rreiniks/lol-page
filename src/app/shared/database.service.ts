import { Injectable, resolveForwardRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Summoner } from '../summoner/summoner.model';

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {
    constructor(private http: HttpClient) { }

    checkForSummoner(puuid: string) {
        return new Promise((resolve) => {
        this.http.get('http://localhost:3000/summoners/' + puuid).subscribe(res => {
            var data: any;
            data = res;
            resolve(data.length);
        })
        });
    }

    putSummoner(summoner: Summoner){
        return this.http.post<Summoner>('http://localhost:3000/summoners', summoner);
    }
}
