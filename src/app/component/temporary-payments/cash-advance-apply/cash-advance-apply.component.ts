
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Service } from '@app/app.service';
import { AuthenticationService } from '@app/services/authentication.service';
import { environment } from '@environments/environment';
import { map, tap } from 'rxjs/operators';
@Component({
  selector: 'app-cashadvanceapply',
  templateUrl: './cash-advance-apply.component.html',
  styleUrls: ['./cash-advance-apply.component.scss']
})

export class CashAdvanceApplyComponent implements OnInit {
  now: Date = new Date();
  simpleProducts: string[];
  announced: string[] = ["Y", "N"];
  department: string[] = ["路", "常", "低", "宅", "物", "公司"];
  allrelevantsupervisors: string[] = ["不補貼", "補貼"];
  directsupervisor: string[] = ["不補貼", "補貼"];
  subsidycategory: string[] = ["禮金", "奠儀"];
  applicantcase: string[] = ["A1", "A2", "B1", "B2", "C1", "C2", "D1", "D2"];
  applicantName:string = '';//申請人姓名
  summary:string = '';//備註
  ceremonyDate:string = '';//儀式日期
  cashAdvanceSummary: string = '';
  cashGiftYears: string = '';
  startDate: string = '';
  endDate: string = '';
  applicantTitle: string = '';

  constructor(service: Service, private http: HttpClient, private authenticationService: AuthenticationService) {
    this.simpleProducts = service.getSimpleProducts();
  }

  ngOnInit() {
  }

  onValueDateChanged(e) {
    this.cashGiftYears = e.value.toLocaleDateString();
    console.log('this.cashGiftYears:', this.cashGiftYears);
  }

  startDateChanged(e) {
    this.startDate = e.value.toLocaleDateString();
    console.log('this.startDate', this.startDate);
  }

  endDateChanged(e) {
    this.endDate = e.value.toLocaleDateString();
    console.log('this.endDate', this.endDate);
  }

  onValueChanged(e) {
    console.log(e.value);
  }

  onSubmit() {
    console.log('this.cashAdvanceSummary:', this.cashAdvanceSummary);
    console.log('this.applicantTitle:', this.applicantTitle);
    let data = {
      StartDay: this.startDate,
      EndDay: this.endDate
    }
    console.log('data:',data);
    this.authenticationService.callApi(data);
  }


}
