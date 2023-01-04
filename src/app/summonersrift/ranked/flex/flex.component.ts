import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.css']
})
export class FlexComponent implements OnInit {

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
