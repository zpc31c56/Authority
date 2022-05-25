import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashAdvanceApplyComponent } from './cash-advance-apply/cash-advance-apply.component';
import { CashAdvanceMaintainComponent } from './cash-advance-maintain/cash-advance-maintain.component';
import { CashAdvancePrintComponent } from './cash-advance-print/cash-advance-print.component';
import { QueryPaymentComponent } from './query-payment/query-payment.component';
import { EnterSummonsDateComponent } from './enter-summons-date/enter-summons-date.component';
import { GeneralAffairsCaptureComponent } from './general-affairs-capture/general-affairs-capture.component';
import { SubsidymaintainComponent } from './subsidy-maintian/subsidy-maintain.component';
import { AuthGuard } from '@app/httpInterceptor/auth.guard';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'temporarypayment'
    },
    children: [
      {
        path: 'cashadvanceapply',
        component: CashAdvanceApplyComponent,
        canActivate: [AuthGuard],
        data: {
          title: "cashadvanceapply",
        },
      },
      {
        path: 'cashadvancemaintain',
        component: CashAdvanceMaintainComponent,
        canActivate: [AuthGuard],
        data: {
          title: "cashadvancemaintain",
        },
      },
      {
        path: 'cashadvanceprint',
        component: CashAdvancePrintComponent,
        canActivate: [AuthGuard],
        data: {
          title: "cashadvanceprint",
        },
      },
      {
        path: 'querypayment',
        component: QueryPaymentComponent,
        canActivate: [AuthGuard],
        data: {
          title: "querypayment",
        },
      },
      {
        path: 'entersummonsdate',
        component: EnterSummonsDateComponent,
        canActivate: [AuthGuard],
        data: {
          title: "entersummonsdate",
        },
      },
      {
        path: 'generalaffairscapture',
        component: GeneralAffairsCaptureComponent,
        canActivate: [AuthGuard],
        data: {
          title: "generalaffairscapture",
        },
      }
      ,
      {
        path: 'subsidymaintain',
        component: SubsidymaintainComponent,
        canActivate: [AuthGuard],
        data: {
          title: "subsidymaintain",
        },
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemporaryPaymentRoutingModule { }
