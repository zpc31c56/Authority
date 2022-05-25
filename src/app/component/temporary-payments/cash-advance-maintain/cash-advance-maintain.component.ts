import { Component, OnInit } from '@angular/core';
import { CashadvancemaintainData, Service } from '@app/app.service';

@Component({
  selector: 'app-cashadvancemaintain',
  templateUrl: './cash-advance-maintain.component.html',
  styleUrls: ['./cash-advance-maintain.component.scss']
})
export class CashAdvanceMaintainComponent implements OnInit {
  now: Date = new Date();
  states: any;
  dataSource: CashadvancemaintainData[];
  employeeID: string = '';
  descriptionCode: string = '';
  withholdingAmount: string = '';
  subsidyAmount: string = '';
  withholdingYearAndMonth: string = '';
  constructor(private service: Service) { this.dataSource = service.getCashAdvanceMainTainData() }

  ngOnInit() {
  }

  onValueChanged(e) {
    this.withholdingYearAndMonth = e.value.toLocaleDateString();
  }

  onSubmit() {
    console.log('this.withholdingYearAndMonth:', this.withholdingYearAndMonth);
    console.log('this.employeeID:', this.employeeID);
    console.log('this.descriptionCode:', this.descriptionCode);
    console.log('this.withholdingAmount:', this.withholdingAmount);
    console.log('this.subsidyAmount:', this.subsidyAmount);
  }
}
