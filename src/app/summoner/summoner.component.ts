import { Component, OnInit } from '@angular/core';
import { Summoner } from './summoner.model';
import { RiotService } from '../shared/riot.service';
import { DatabaseService } from '../shared/database.service';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-summoner',
  templateUrl: './summoner.component.html',
  styleUrls: ['./summoner.component.css']
})
export class SummonerComponent implements OnInit {

  currentSummoner = new Summoner;
  region = "EUW1";
  username!: string;
  errorCode!: number;
  errorMsg!: string;

  constructor(private riotService: RiotService, private databaseService: DatabaseService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  async onSearch() {
    this.currentSummoner = new Summoner;

    await this.getRiotSummonerData(); //get data from riot api about summoner

    if (this.currentSummoner.name) {
      if (this.currentSummoner.name.toLowerCase() === this.username.toLowerCase()) {  //if summoner exists

        var len = null;
        await this.databaseService.checkForSummoner(this.currentSummoner.puuid).then(response => len = response); //check if summoner exists in database


        if (!len) { //summoner doesnt exist in database
          this.databaseService.putSummoner(this.currentSummoner).subscribe(res => {
            console.log(res);
          });;
        }
          var regionB = null;

          if (this.region === "EUW1" || this.region === "EUN1" || this.region === "RU" || this.region === "TR1") {
            regionB = "europe"
          } else if (this.region === "JP1" || this.region === "KR") {
            regionB = "asia"
          } else if (this.region === "LA1" || this.region === "LA2" || this.region === "BR1" || this.region === "NA") {
            regionB = "americas"
          } else regionB = "sea";

          var matchList: any;
          await this.riotService.updateMatchList(regionB, this.currentSummoner.puuid).then(res => matchList = res);
          if(await this.databaseService.storeMatches(this.currentSummoner.puuid, matchList, regionB)){
            console.log('was able to save all matches');
          }else{
            console.log('was not able to update all matches, more matches available in 2 minutes');
          }
        
        if (len === 1) {  //summoner exists in database
          this.authService.auth();
          this.router.navigate(['/rift'], { queryParams: this.currentSummoner });
        }
      }
    }
    else if (this.errorCode) {  //if riot api responded with an error
      console.log(this.errorCode);
      console.log(this.errorMsg);
      this.authService.deAuth();
    }
    else {  //any other error 
      this.errorMsg = 'Unexpected error';
      console.log('Unexpected error');
      this.authService.deAuth();
    }

  }

  async getRiotSummonerData() {

    return new Promise(resolve => {
      this.riotService.getRiotSummonerData(this.region, this.username).subscribe(res => {
        var data: any;
        data = res;

        if (data.name) {
          this.currentSummoner.name = data.name;
          this.currentSummoner.summonerLevel = data.summonerLevel;
          this.currentSummoner.profileIconId = data.profileIconId;
          this.currentSummoner.puuid = data.puuid;
          this.currentSummoner.accountId = data.accountId;
        }
        else if (data.status.status_code && data.status.message) {
          this.errorCode = data.status.status_code;
          this.errorMsg = data.status.message;
        }
        console.log(data);
        resolve(null);
      });
    });

  }

}
