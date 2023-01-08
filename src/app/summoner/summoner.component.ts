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
  errorCode = -1;
  errorMsg = '';

  constructor(private riotService: RiotService, private databaseService: DatabaseService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.deAuth();
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
            if(res === true)len = 1;
            else{
              this.errorMsg = 'Error saving summoner in database';
            }
          });;
        }
        
        if (len === 1) {  //summoner exists in database
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
          if(matchList === false){
            this.errorMsg = 'Could not retrieve player match list from backend server, please try again later';
          }else{
          if(await this.databaseService.storeMatches(this.currentSummoner.puuid, matchList, regionB)){

          }else{
            this.errorMsg = ('Match data may be incomplete, try again later');
          }
        }

          this.authService.auth(this.currentSummoner);
          this.router.navigate(['/rift']);
        
        }
      }
    }
    else if (this.errorCode) {  //if riot api responded with an error
      this.authService.deAuth();
    }
    else {  //any other error 
      this.errorMsg = 'Could not connect to backend server, please try again later';
      this.authService.deAuth();
    }

    if(this.errorMsg != '' || this.errorCode != -1)this.showAlert();
    this.errorCode = -1;
    this.errorMsg = '';
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
          this.currentSummoner.region = this.region;
          this.currentSummoner.id = data.id;
        }
        else if (data.status.status_code && data.status.message) {
          this.errorCode = data.status.status_code;
          this.errorMsg = data.status.message;
        }
        resolve(null);
      },error => {
        this.errorMsg = 'Could not connect to backend server, please try again later';
        resolve(null);
      });
    });

  }

  showAlert(){
    if(this.errorCode != -1 || this.errorMsg != ''){
    var err = '';
    if(this.errorCode != -1)err = err + this.errorCode + ' ';
    if(this.errorMsg != '')err = err + this.errorMsg;
    window.alert(err);
    }
  }

}
