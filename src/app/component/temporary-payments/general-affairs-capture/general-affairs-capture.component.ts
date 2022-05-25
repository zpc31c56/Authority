import { Service } from '@app/app.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import ArrayStore from 'devextreme/data/array_store';

@Component({
  selector: 'app-generalaffairscapture',
  templateUrl: './general-affairs-capture.component.html',
  styleUrls: ['./general-affairs-capture.component.scss']
})
export class GeneralAffairsCaptureComponent implements OnInit {
  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
  now: Date = new Date();
  selectedItemKeys: any[] = [];
  dataSource: ArrayStore;
  states: any;
  constructor(service:Service) {
    this.dataSource = new ArrayStore({
      key: 'ID',
      data: service.getTestData(),
    });
  }

  ngOnInit() {
  }

  selectionChanged(data: any) {
    this.selectedItemKeys = data.selectedRowKeys;
  }

}
