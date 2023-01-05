import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solo',
  templateUrl: './solo.component.html',
  styleUrls: ['./solo.component.css']
})
export class SoloComponent implements OnInit {

  roles: any = null;
  champs: any = null;
  
  rank = {
    name: 'Challenger',
    lp: '1200',
    games: 750,
    wr: '67%',
    wins: '430',
    losses: '280'
  };

  bestRole = 'Mid';

  bestChamp = {
    name: 'Pantheon',
    wr: '75%'
  };

  rowRank = false;
  rowWr = false;
  inPromo = true;
  role = false;
  champ = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleRole() {
    this.role = !this.role;
    if (this.role) {
      this.roles = [
        { name: 'Top', games: 25, wr: '50%' },
        { name: 'Jungle', games: 30, wr: '63%' },
        { name: 'Mid', games: 35, wr: '70%' },
        { name: 'Bot', games: 40, wr: '56%' },
        { name: 'Support', games: 45, wr: '77%' }
      ]
    } else {
      this.roles = null;
    }
  }

  toggleChamp() {
    this.champ = !this.champ;
    if (this.champ) {
      this.champs = [
        { name: 'Pantheon', games: 25, wr: '50%' },
        { name: 'Irelia', games: 30, wr: '63%' },
        { name: 'Morgana', games: 35, wr: '70%' },
        { name: 'Soraka', games: 40, wr: '56%' },
        { name: 'Evelynn', games: 45, wr: '77%' }
      ]
    } else {
      this.champs = null;
    }
  }

}
