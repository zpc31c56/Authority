import { Component, OnInit } from '@angular/core';
import { Service, State, SubsidemaintainData } from '@app/app.service';
import { SubsidyMaintainService } from '@app/services/subsidyMaintain.service';
import { first } from 'rxjs/operators';
import { returnMsg } from '@app/models/returnMsgModel';


@Component({
  selector: 'app-subsidymaintain',
  templateUrl: './subsidy-maintain.component.html',
  styleUrls: ['./subsidy-maintain.component.scss']
})
export class SubsidymaintainComponent implements OnInit {
  dataSource: SubsidemaintainData[];
  states: State[];
  returnMsg: returnMsg[];


  constructor(service: Service, private subsidyMaintainService: SubsidyMaintainService) {
    this.states = service.getStates();
  }

  ngOnInit() {
    this.subsidyMaintainService.SearchAll().pipe(first()).subscribe(returnMsg => {
      this.dataSource = returnMsg;
    });
  }

  onToolbarPreparing(e) {
    e.toolbarOptions.items[0].showText = "always";
  }
}
