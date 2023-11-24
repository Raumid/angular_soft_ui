import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VirtualRoutingModule } from './virtual-routing.module';
import { VirtualComponent } from './pages/virtual/virtual.component';


@NgModule({
  declarations: [
    VirtualComponent
  ],
  imports: [
    CommonModule,
    VirtualRoutingModule
  ]
})
export class VirtualModule { }
