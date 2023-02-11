import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdDatepickerPopup } from './datepicker-popup';
import { DateDirective } from './date.directive';
import { NgbDateParserFormatter, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import {MomentDateFormatter } from './momentdate.ts'

@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule, ReactiveFormsModule],
  declarations: [NgbdDatepickerPopup, DateDirective],
  exports: [NgbdDatepickerPopup],
  bootstrap: [NgbdDatepickerPopup],
  providers: [
    {provide: NgbDateParserFormatter, useClass: MomentDateFormatter}
   ]
})
export class NgbdDatepickerPopupModule {}
