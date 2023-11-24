import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  options = [
    {
      name: 'Dashboard',
      router: ['home']
    },
    {
      name: 'Table',
      router: ['tables']
    },
    {
      name: 'Billing',
      router: ['billing']
    },
    {
      name: 'Virtual Reality',
      router: ['virtual']
    },
    {
      name: 'RTL',
      router: ['rtl']
    },
  ];
}
