import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RtlRoutingModule } from './rtl-routing.module';
import { RtlComponent } from './pages/rtl/rtl.component';


@NgModule({
  declarations: [
    RtlComponent
  ],
  imports: [
    CommonModule,
    RtlRoutingModule
  ]
})
export class RtlModule { }
