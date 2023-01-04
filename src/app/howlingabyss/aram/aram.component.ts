import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aram',
  templateUrl: './aram.component.html',
  styleUrls: ['./aram.component.css']
})
export class AramComponent implements OnInit {

  roles: any = null;
  champs: any = null;

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
    if(this.role){
      this.roles = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 35 },
        { name: 'Dave', age: 40 },
        { name: 'Eve', age: 45 }
      ]
    }else{
      this.roles = null;
    }
  }

  toggleChamp(){
    this.champ = !this.champ;
    if(this.champ){
      this.champs = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 35 },
        { name: 'Dave', age: 40 },
        { name: 'Eve', age: 45 }
      ]
    }else{
      this.champs = null;
    }
  }

}
