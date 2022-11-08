import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  DateAdapter,
  MAT_DATE_LOCALE,
  MatNativeDateModule,
  MAT_DATE_FORMATS,
} from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";

import {
  MaterialPersianDateAdapter,
  PERSIAN_DATE_FORMATS,
} from "../shared/datepicker/material.persian-date.adapter";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDatepickerModule
  ],
  exports:[
    MatDatepickerModule
  ],
  providers: [
    {
      provide: DateAdapter,
      useClass: MaterialPersianDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: PERSIAN_DATE_FORMATS },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
