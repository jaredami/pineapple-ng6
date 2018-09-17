import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeviceTableComponent } from './components/device-table/device-table.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { CommonModule } from '../../node_modules/@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DeviceTableComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
