import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashAdvanceApplyComponent } from './cash-advance-apply/cash-advance-apply.component';
import { CashAdvanceMaintainComponent } from './cash-advance-maintain/cash-advance-maintain.component';
import { CashAdvancePrintComponent } from './cash-advance-print/cash-advance-print.component';
import { QueryPaymentComponent } from './query-payment/query-payment.component';
import { TemporaryPaymentRoutingModule } from './temporary-payment-routing.module';
import { QueryPaymentDetailComponent } from './query-payment-detail/query-payment-detail.component';
import { DevextremeModule } from '@app/shared/module/devextreme/Devextreme.module';
import { EnterSummonsDateComponent } from './enter-summons-date/enter-summons-date.component';
import { GeneralAffairsCaptureComponent } from './general-affairs-capture/general-affairs-capture.component';
import { SubsidymaintainComponent } from './subsidy-maintian/subsidy-maintain.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    CashAdvanceApplyComponent,
    CashAdvanceMaintainComponent,
    CashAdvancePrintComponent,
    QueryPaymentComponent,
    QueryPaymentDetailComponent,
    EnterSummonsDateComponent,
    GeneralAffairsCaptureComponent,
    SubsidymaintainComponent
  ],
  imports: [
    CommonModule,
    TemporaryPaymentRoutingModule,
    DevextremeModule,
    FormsModule
  ]
})
export class TemporarypaymentsModule { }
