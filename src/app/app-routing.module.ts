import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./moduls/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'tables',
    loadChildren: () => import('./moduls/tables/tables.module').then(m => m.TablesModule)
  },
  {
    path: 'billing',
    loadChildren: () => import('./moduls/billing/billing.module').then(m => m.BillingModule)
  },
  {
    path: 'virtual',
    loadChildren: () => import('./moduls/virtual/virtual.module').then(m => m.VirtualModule)
  },
  {
    path: 'rtl',
    loadChildren: () => import('./moduls/rtl/rtl.module').then(m => m.RtlModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
