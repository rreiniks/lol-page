import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Match } from './match.model';

@Injectable({
    providedIn: 'root'
})
export class RiotService {

    constructor(private http: HttpClient) {
    }

    getRiotSummonerData(region: string, username: string) {
        return this.http.get('http://localhost:3000/online/summoner/' + region + '/' + username);
    }

    updateMatchList(region: string, puuid: string) {
        var start = 0;
        var count = 100;


        return new Promise((resolve) => {
            this.http.get('http://localhost:3000/online/matches/' + region + '/' + puuid + '/' + start + '/' + count).subscribe(res => {
                var data: any;
                data = res;
                var ret: any;
                for(const m in data){
                    this.http.get('http://localhost:3000/matches/' + puuid + '/' + data[m]).subscribe(res => {
                        if(res)data.splice(m, 1);
                    })
                }
                resolve(data);
            })
        });

    }

    async getMatchData(matchid: string, puuid: string, region: string) {
        return new Promise((resolve) => {
            this.http.get('http://localhost:3000/online/mData/' + region + '/' + puuid + '/' + matchid).subscribe(res => {
                var data: any;
                data = res;
                var match = new Match;
                var i = 0;
                if (data.info) {
                    if(data.info.gameType === 'CUSTOM_GAME')resolve(false);
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