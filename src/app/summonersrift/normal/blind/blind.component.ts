import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blind',
  templateUrl: './blind.component.html',
  styleUrls: ['./blind.component.css']
})
export class BlindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data = [
    {
      name: 'Win',
      value: 55
    },
    {
      name: 'Lose',
      value: 45
    }
  ];
  
}
