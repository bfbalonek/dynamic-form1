import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wf-numeric-textbox',
  templateUrl: './wf-numeric-textbox.component.html',
  styleUrls: ['./wf-numeric-textbox.component.scss']
})
export class WfNumericTextboxComponent implements OnInit {

  @Input() webFormSectionData: any;
  @Input() componentData: any;
  @Output() isComponentValid: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngModelChanged(event) {
    this.isComponentValid.emit(this.componentData.value);
    //if (this.componentData.value % 2 == 0) {
    //  this.isComponentValid.emit(true);
    //}
    //else {
    //  this.isComponentValid.emit(false);
    //}
  };

}
