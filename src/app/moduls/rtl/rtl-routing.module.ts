import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RtlComponent } from './pages/rtl/rtl.component';

const routes: Routes = [
  {
    path: '',
    component: RtlComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RtlRoutingModule { }
