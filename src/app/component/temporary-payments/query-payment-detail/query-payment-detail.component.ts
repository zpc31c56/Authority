import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import ArrayStore from 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';
import { Service, Task } from '@app/app.service';
@Component({
  selector: 'detail-grid',
  templateUrl: './query-payment-detail.component.html',
  styleUrls: ['./query-payment-detail.component.scss']
})
export class QueryPaymentDetailComponent implements AfterViewInit {
  @Input() key: number;

  tasksDataSource: DataSource;
  tasks: Task[];
  constructor(private service: Service) {
    this.tasks = service.getTasks();
  }

  ngAfterViewInit(): void {
    this.tasksDataSource = new DataSource({
      store: new ArrayStore({
        data: this.tasks,
        key: 'ID',
      }),
      filter: ['ID', '=', this.key],
    });
  }

  ngOnInit() {
  }

  completedValue(rowData) {
    return rowData.Status == 'Completed';
  }
}
