import { Component, OnInit } from '@angular/core';
import { Summoner } from './summoner.model';
import { RiotService } from '../shared/riot.service';
import { DatabaseService } from '../shared/database.service';

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



  constructor(private riotService: RiotService, private databaseService: DatabaseService) { }

  ngOnInit(): void {
  }

  async onSearch() {
    this.currentSummoner = new Summoner;
    
    await this.getRiotSummonerData(); //get data from riot api about summoner

    if (this.currentSummoner.name.toLowerCase() === this.username.toLowerCase()) {  //if summoner exists
      var len = null;
      this.databaseService.checkForSummoner(this.currentSummoner.puuid).then(response => len = response);
      console.log(len);
      if(len === 1)console.log('test');
      /*this.databaseService.putSummoner(this.currentSummoner).subscribe(res => {
        console.log(res);
      });*/
    } else if (this.errorCode) {  //if riot api responded with an error
      console.log(this.errorCode);
      console.log(this.errorMsg);
    } else {  //any other error
      console.log('Unexpected error');
    }

    //this.checkDatabaseForSummoner();  //check if his data has been processed before
    //shows summoner that was found
    // redirect to data page
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
        } else if (data.status.status_code && data.status.message) {
          this.errorCode = data.status.status_code;
          this.errorMsg = data.status.message;
        }
        console.log(data);
        resolve(null);
      });
    });

  }

}
