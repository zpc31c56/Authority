import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cashadvanceprint',
  templateUrl: './cash-advance-print.component.html',
  styleUrls: ['./cash-advance-print.component.scss']
})
export class CashAdvancePrintComponent implements OnInit {
  now: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
