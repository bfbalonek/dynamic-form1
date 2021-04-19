import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WfSectionComponent } from './wf-section/wf-section.component';
import { WfLabelComponent } from './wf-label/wf-label.component';
import { WfBodyComponent } from './wf-body/wf-body.component';
import { DynamicHooksModule, HookParserEntry } from 'ngx-dynamic-hooks';
import { WfLinkComponent } from './wf-link/wf-link.component';
import { WfNumericTextboxComponent } from './wf-numeric-textbox/wf-numeric-textbox.component';
import { FormsModule } from '@angular/forms';

// This automatically creates SelectorHookParsers for each listed component:
const componentParsers: Array<HookParserEntry> = [
  { component: WfBodyComponent },
  { component: WfSectionComponent },
  { component: WfLabelComponent },
  { component: WfLinkComponent },
  { component: WfNumericTextboxComponent },
  // ...
];

@NgModule({
  declarations: [
    AppComponent,
    WfSectionComponent,
    WfLabelComponent,
    WfBodyComponent,
    WfLinkComponent,
    WfNumericTextboxComponent
  ],
  imports: [
    // forRoot() is used to register global parsers and options
    DynamicHooksModule.forRoot({
      globalParsers: componentParsers
    }),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
