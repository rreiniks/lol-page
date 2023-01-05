import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Summoner } from '../summoner/summoner.model';
import { RiotService } from './riot.service';
import { Match } from './match.model';

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {
    constructor(private http: HttpClient, private riotService: RiotService) { }

    checkForSummoner(puuid: string) {
        return new Promise((resolve) => {
            this.http.get('http://localhost:3000/summoners/' + puuid).subscribe(res => {
                var data: any;
                data = res;
                resolve(data.length);
            })
        });
    }


    putSummoner(summoner: Summoner) {
        return this.http.post<Summoner>('http://localhost:3000/summoners', summoner);
    }

    async storeMatches(puuid: string, matches: string[], region: string) {
        return new Promise(async (resolve) => {

            for (const match in matches) {
                var m = new Match;
                var data: any;
                data = (await this.riotService.getMatchData(matches[match], puuid, region));
                if (data.matchid) {
                    m = data;
                    await this.http.post<Match>('http://localhost:3000/matches', m);
                    console.log(m);
                }
                else resolve(false);
                break;
            }
            resolve(true);
        })
    }

}
