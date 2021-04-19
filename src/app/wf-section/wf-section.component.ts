import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wf-section',
  templateUrl: './wf-section.component.html',
  styleUrls: ['./wf-section.component.scss']
})
export class WfSectionComponent implements OnInit {

  @Input() webFormSectionData: any;
  @Input() defaultSection: any = true;

  displayString: string = "";
  contextObj = {};

  constructor() { }

  ngOnInit(): void {
    if (this.defaultSection) {
      this.displayString = "DEFAULT section works!";
    } else {
      this.displayString = "CUSTOM section works!";
      this.contextObj = { webFormSectionData: this.webFormSectionData };

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
          default:
            componentString = '{{component' + i + '}}';
            break;
        }

        this.webFormSectionData.layout = this.webFormSectionData.layout.replace("{{component" + i + "}}", componentString);
      }
    }
  }

}
