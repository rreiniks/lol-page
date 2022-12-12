import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data = [
    {
      name: 'Apples',
      value: 10
    },
    {
      name: 'Bananas',
      value: 20
    },
    {
      name: 'Oranges',
      value: 5
    }
  ];
  
}
