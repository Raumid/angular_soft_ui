import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(
    public configService: ConfigService,
    public router: Router
  ) {

  }

  sideBar = [
    {
      name:'',
      options : [
        {
          name: 'Dashboard',
          router: ['home'],
          pathSVG: 'assets/svg/shop'
        },
        {
          name: 'Table',
          router: ['tables'],
          pathSVG: 'assets/svg/office'
        },
        {
          name: 'Billing',
          router: ['billing'],
          pathSVG: 'assets/svg/credit-card'
        },
        {
          name: 'Virtual Reality',
          router: ['virtual'],
          pathSVG: 'assets/svg/box-3d'
        },
        {
          name: 'RTL',
          router: ['rtl'],
          pathSVG: 'assets/svg/setting'
        },
      ]
    },
    {
      name:'Account pages',
      options : [
        {
          name: 'Profile',
          router: ['profile'],
          pathSVG: 'assets/svg/customer-support'
        },
        {
          name: 'Sign In',
          router: ['sign-in'],
          pathSVG: 'assets/svg/document'
        },
        {
          name: 'Sing Up',
          router: ['sign-up'],
          pathSVG: 'assets/svg/spaceship'
        }
      ]
    }
  ];
}
