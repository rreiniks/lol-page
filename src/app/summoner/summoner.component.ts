import { Component, OnInit } from '@angular/core';
import { Summoner } from './summoner.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summoner',
  templateUrl: './summoner.component.html',
  styleUrls: ['./summoner.component.css']
})
export class SummonerComponent implements OnInit {

  currentSummoner!: Summoner;
  apiKey = "RGAPI-acaa1091-86ba-40ad-8334-a1ae280dd570";
  region = "EUW1";
  name!: string;
  link!: string;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  onSearch() {
    this.getRiotSummonerData(); //get data from riot api about a summoner
    //this.checkDatabaseForSummoner();  //check if his data has been processed before
    this.summoner(); //shows summoner that was found
    // redirect to data page
  }

  getRiotSummonerData() {
    this.link = 'https://' + this.region + '.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + this.name + "?api_key=" + this.apiKey;
    this.getSummonerData().subscribe((data: any) => this.currentSummoner = {
      puuid: data.puuid,
      name: data.name,
      profileIconId: data.profileIconId,
      summonerLevel: data.summonerLevel,
    });
  }

  /*checkDatabaseForSummoner() {
    //check if summoner exists by puuid
    if(this.http.get('https://lol-page-e3f05-default-rtdb.europe-west1.firebasedatabase.app/' + this.currentSummoner.puuid)){
      //get summoner data if it does
      console.log('test');
    }else
    //put summoner if it doesnt
      this.http.put('https://lol-page-e3f05-default-rtdb.europe-west1.firebasedatabase.app/' + this.currentSummoner.puuid, this.currentSummoner).subscribe(response => {
        console.log(response);
    });
    
   
  }*/

  getSummonerData() {
    return (this.http.get<any>(this.link));
  }

  summoner() {
    console.log(this.currentSummoner);
    if(this.currentSummoner) this.router.navigate(['rift']);
  }


}
