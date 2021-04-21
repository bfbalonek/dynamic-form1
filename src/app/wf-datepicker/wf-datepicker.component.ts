import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WfValueChange } from '../models/wf-value-change';

@Component({
  selector: 'app-wf-datepicker',
  templateUrl: './wf-datepicker.component.html',
  styleUrls: ['./wf-datepicker.component.scss']
})
export class WfDatepickerComponent implements OnInit {

  @Input() webFormSectionData: any;
  @Input() componentData: any;
  @Output() isComponentValid: EventEmitter<WfValueChange> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
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
