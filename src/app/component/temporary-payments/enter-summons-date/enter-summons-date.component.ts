import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-entersummonsdate',
  templateUrl: './enter-summons-date.component.html',
  styleUrls: ['./enter-summons-date.component.scss']
})
export class EnterSummonsDateComponent implements OnInit {
  now: Date = new Date();
  ordersStore: any;

  constructor() { }

  ngOnInit() {
  }

}
