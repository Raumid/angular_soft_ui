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
  },
  {
    path: 'profile',
    loadChildren: () => import('./moduls/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./moduls/sign-in/sign-in.module').then(m => m.SignInModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./moduls/sign-up/sign-up.module').then(m => m.SignUpModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
