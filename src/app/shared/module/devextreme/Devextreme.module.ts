import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxButtonModule, DxDrawerModule, DxToolbarModule, DxListModule, DxTemplateModule, DxRadioGroupModule, DxContextMenuModule, DxTextBoxModule, DxDateBoxModule, DxSelectBoxModule, DxPopupModule, DxDataGridModule, DxLoadPanelModule } from 'devextreme-angular';
import { DxValidatorModule, DxValidationSummaryModule } from 'devextreme-angular';
@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    DxButtonModule,
    DxDrawerModule,
    DxToolbarModule,
    DxListModule,
    DxTemplateModule,
    DxRadioGroupModule,
    DxTextBoxModule,
    DxContextMenuModule,
    DxDateBoxModule,
    DxSelectBoxModule,
    DxPopupModule,
    DxDataGridModule,
    DxLoadPanelModule,
    DxValidatorModule,
    DxValidationSummaryModule
  ]
})
export class DevextremeModule { }
