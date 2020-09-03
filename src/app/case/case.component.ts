import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss']
})



export class CaseComponent implements OnInit {
  cases = [.01, 1, 5, 10, 25, 50, 75, 100, 200, 300, 400, 500, 750, 1000, 5000, 
    10000, 25000, 50000, 75000, 100000, 200000, 300000, 400000, 500000, 750000, 1000000];

  constructor() {
  }



  ngOnInit(): void {
  }

}
