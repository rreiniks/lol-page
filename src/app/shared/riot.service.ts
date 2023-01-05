import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Match } from './match.model';
import { first } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RiotService {

    constructor(private http: HttpClient) {
    }

    getRiotSummonerData(region: string, username: string) {
        return this.http.get('http://localhost:3000/online/summoner/' + region + '/' + username);
    }

    async updateMatchList(region: string, puuid: string): Promise<any> {
        const start = 0;
        const count = 100;
        var data: any;
        data = await this.http.get('http://localhost:3000/online/matches/' + region + '/' + puuid + '/' + start + '/' + count).pipe(first()).toPromise();
        const matches = [];
        for (const m in data) {
            const match = await this.http.get('http://localhost:3000/matches/' + puuid + '/' + data[m]).pipe(first()).toPromise();
            if (!match) {
                matches.push(data[m]);
            }
        }
        return matches;
    }

    async getMatchData(matchid: string, puuid: string, region: string) {
        return new Promise((resolve) => {
            this.http.get('http://localhost:3000/online/mData/' + region + '/' + puuid + '/' + matchid).subscribe(res => {
                var data: any;
                data = res;
                var match = new Match;
                var i = 0;
                if (data.info) {
                    if (data.info.gameType === 'CUSTOM_GAME') resolve(false);
                    for (i; i < 9; i++) {
                        if (data.info.participants[i].puuid === puuid) break;
                    }
                    match.gameMode = data.info.gameMode;
                    match.gameType = data.info.gameType;
                    match.matchid = matchid;
                    match.puuid = puuid;
                    match.win = data.info.participants[i].win;
                    match.championName = data.info.participants[i].championName;
                    match.gameStartTimestamp = data.info.gameStartTimestamp;
                    if (match.gameMode === 'CLASSIC') {
                        match.teamPosition = data.info.participants[i].teamPosition;
                    }
                    resolve(match);
                } else if (data.status.status_code) {
                    resolve(data);
                } else {
                    //unknown error
                    console.error('error');
                }
            })
        })
    }

}