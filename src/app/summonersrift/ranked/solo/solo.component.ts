import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solo',
  templateUrl: './solo.component.html',
  styleUrls: ['./solo.component.css']
})
export class SoloComponent implements OnInit {

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
