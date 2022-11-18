import { Component, OnInit } from '@angular/core';
import { Summoner } from './summoner.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-summoner',
  templateUrl: './summoner.component.html',
  styleUrls: ['./summoner.component.css']
})
export class SummonerComponent implements OnInit {

  currentSummoner!: Summoner;
  apiKey = "RGAPI-e9e6ab57-1e74-4c40-8a7d-d9822ba096ab";
  region = "EUW1";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getSummonerData(){
    return (this.http.get<Summoner>('https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/stichylele?api_key=RGAPI-e9e6ab57-1e74-4c40-8a7d-d9822ba096ab'));
  }

  showSummonerData(){
    this.getSummonerData().subscribe((data: Summoner) => this.currentSummoner ={
      
      puuid: data.puuid,
      name: data.name,
      profileIconId: data.profileIconId,
      summonerLevel: data.summonerLevel
    });

    console.log(this.currentSummoner);

    console.log(this.region);
  }

}
