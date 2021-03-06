import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WfValueChange } from '../models/wf-value-change';

@Component({
  selector: 'app-wf-numeric-textbox',
  templateUrl: './wf-numeric-textbox.component.html',
  styleUrls: ['./wf-numeric-textbox.component.scss']
})
export class WfNumericTextboxComponent implements OnInit {

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
