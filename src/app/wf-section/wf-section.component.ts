import { Component, OnInit, Input } from '@angular/core';
import { WfValueChange } from '../models/wf-value-change';

@Component({
  selector: 'app-wf-section',
  templateUrl: './wf-section.component.html',
  styleUrls: ['./wf-section.component.scss']
})
export class WfSectionComponent implements OnInit {

  @Input() webFormSectionData: any;
  @Input() defaultSection: any = true;

  displayString: string = "";
  contextObj:any = {};

  latestComponentValue: string = "";

  constructor() { }

  ngOnInit(): void {
    let wfsd = this.webFormSectionData;

    if (this.defaultSection) {
      this.displayString = "DEFAULT section works!";
    } else {
      this.displayString = "CUSTOM section works!";
      //this.contextObj = { webFormSectionData: this.webFormSectionData, isComponentValidHandler: this.isComponentValidHandler };//A function directly assigned to the context object will have this pointing to the context object itself when called
      this.contextObj = { webFormSectionData: this.webFormSectionData, isComponentValidHandler: this.isComponentValidHandler.bind(this) };

      //we need to parse the layout string and convert any placeholder components into actual components
      for (var i = 0; i < this.webFormSectionData.components.length; i++) {
        let componentString = "";

        switch (this.webFormSectionData.components[i].type) {
          case 1: //label
            componentString = '<app-wf-label [webFormSectionData]="context.webFormSectionData" [componentData]="context.webFormSectionData.components[' + i + ']"></app-wf-label>';
            break;
          case 2: //link
            componentString = '<app-wf-link [webFormSectionData]="context.webFormSectionData" [componentData]="context.webFormSectionData.components[' + i + ']"></app-wf-link>';
            break;
          case 3: //numeric
            componentString = '<app-wf-numeric-textbox [webFormSectionData]="context.webFormSectionData" [componentData]="context.webFormSectionData.components[' + i + ']" (isComponentValid)="context.isComponentValidHandler($event)"></app-wf-numeric-textbox>';
            break;
          case 4: //datepicker
            componentString = '<app-wf-datepicker [webFormSectionData]="context.webFormSectionData" [componentData]="context.webFormSectionData.components[' + i + ']" (isComponentValid)="context.isComponentValidHandler($event)"></app-wf-datepicker>';
            break;
          default:
            componentString = '{{component' + i + '}}';
            break;
        }

        this.webFormSectionData.layout = this.webFormSectionData.layout.replace("{{component" + i + "}}", componentString);
      }
    }
  }

  isComponentValidHandler(wfValueChange: WfValueChange) {
    this.latestComponentValue = wfValueChange.componentValue;
  };

}
