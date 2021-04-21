import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WfValueChange } from '../models/wf-value-change';

@Component({
  selector: 'app-wf-grid',
  templateUrl: './wf-grid.component.html',
  styleUrls: ['./wf-grid.component.scss']
})
export class WfGridComponent implements OnInit {

  @Input() webFormSectionData: any;
  @Input() componentData: any;
  @Output() isComponentValid: EventEmitter<WfValueChange> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    let wfsd = this.webFormSectionData;
    let wfcd = this.componentData;
  }

  ngModelChanged(event) {
    let componentValid: WfValueChange = {
      componentValue: this.componentData.value,
      webFormSectionComponentID: Math.random().toString(),
      isValid: true
    };
    this.isComponentValid.emit(componentValid);
  };

}
