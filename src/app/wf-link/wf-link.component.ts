import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wf-link',
  templateUrl: './wf-link.component.html',
  styleUrls: ['./wf-link.component.scss']
})
export class WfLinkComponent implements OnInit {

  @Input() webFormSectionData: any;
  @Input() componentData: any;

  constructor() { }

  ngOnInit(): void {
    let wfsd = this.webFormSectionData;
    let wfcd = this.componentData;
  }

}
