import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wf-label',
  templateUrl: './wf-label.component.html',
  styleUrls: ['./wf-label.component.scss']
})
export class WfLabelComponent implements OnInit {

  @Input() webFormSectionData: any;
  @Input() componentData: any;

  constructor() { }

  ngOnInit(): void {
    let wfsd = this.webFormSectionData;
    let wfcd = this.componentData;
  }

}
