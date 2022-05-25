import { Component, OnInit } from '@angular/core';
import { Employee, Service } from '@app/app.service';
import { QueryPaymentDetailComponent } from '../query-payment-detail/query-payment-detail.component';
@Component({
  selector: 'app-querypayment',
  templateUrl: './query-payment.component.html',
  styleUrls: ['./query-payment.component.scss']
})
export class QueryPaymentComponent implements OnInit {
  employees: Employee[];
  now: Date = new Date();

  constructor(private service: Service) {
    this.employees = service.getEmployees();
  }

  ngOnInit() {
  }

}
