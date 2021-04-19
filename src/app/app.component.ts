import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //https://github.com/MTobisch/ngx-dynamic-hooks
  //https://www.youtube.com/watch?v=XDzxs00iIDE&ab_channel=AngularConnect
  title = 'dynamic-form1';

  contextObj = { index: [1, 2, 3] };
  index = 1;
  exampleText = 'Load a component with content defined in .ts: <app-example-component [input1]="context.index[' + this.index + ']"></app-example-component>';
  showCustom: boolean = false;
  clickMeText = "click me to show custom sections";

  webFormSectionDataDefault = {
    layout: '',
    components: [
      { type: 1, labelText: "Default Label Text" },
      { type: 2, linkText: "Default Link Text", urlAddress: 'https://www.google.com' },
      { type: 3, value: 0 }
    ]
  };

  webFormSectionDataCustom = {
    layout: '<div class="row"><div class="col-md-4"><p style="color:red;text-align:center;"><b>This layout string text in col 1 of 3 using inline styling should be bold and red</b></p></div><div class="col-md-4"><div class="text-danger">This layout string text in col 2 of 3 using bootstrap styling should be red</div></div><div class="col-md-4"><div class="cl-red">This layout string text in col 3 of 3 using custom css styling should be red</div></div></div><div class="row"><div class="col-md-6">First Custom Component: {{component0}}</div><div class="col-md-6">Second Custom Component: {{component1}}</div></div><div class="row"><div class="col-md-12"><table class="table table-bordered"><thead><tr><th colspan="1" bgcolor="#efc0f0" style="text-align:center;">First Column Header (inline centered)</th><th colspan="1" bgcolor="#c4c0f0" class="cl-center-text">Second Column Header (custom css centered)</th></tr></thead><tbody><tr><td>{{component2}}</td><td>{{component3}}</td></tr><tr><td>{{component4}}</td><td>{{component5}}</td></tr></tbody></table></div></div><div class="row"><div class="col-md-6">Numeric Custom Component: {{component6}}</div></div>',
    components: [
      { type: 1, labelText: "Custom Label Text" },
      { type: 2, linkText: "Custom Link Text", urlAddress: 'https://www.google.com' },
      { type: 1, labelText: "Custom Label Text" },
      { type: 2, linkText: "Custom Link Text", urlAddress: 'https://www.google.com' },
      { type: 1, labelText: "Custom Label Text" },
      { type: 2, linkText: "Custom Link Text", urlAddress: 'https://www.google.com' },
      { type: 3, value: 0 }
    ]
  };

  onClick = function () {
    this.showCustom = !this.showCustom;
    if (this.showCustom) {
      this.clickMeText = "click me to show default sections";
    } else {
      this.clickMeText = "click me to show custom sections";
    }
  }
}
