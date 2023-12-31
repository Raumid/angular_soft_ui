import { Component, OnInit } from '@angular/core';
import { ConfigService } from './services/config.service';
import { Router, NavigationStart } from '@angular/router';

declare const PerfectScrollbar: any;
// declare const Chart: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  showSidebar:boolean = true;
  routesWithoutSidebar = ['/sign-in', '/sign-up'];

  constructor(
    public configService: ConfigService,
    private router: Router
  ) {

  }
  
  ngOnInit(){
    this.initObservers();
    this.scroll();
    // this.charts();
  }

  initObservers():void {
    this.router.events.subscribe((event:any) => {
      if(event instanceof NavigationStart) {
        if(event.navigationTrigger == 'popstate') {
          setTimeout(() => {
            this.scroll();
          }, 0)
        }

        if(this.routesWithoutSidebar.includes(event.url)){
          this.showSidebar = false;
        }else {
          this.showSidebar = true;
        }
      }
    });
  }

  private scroll():void {
    try {
      var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

      if (isWindows) {
        // if we are on windows OS we activate the perfectScrollbar function
        if (document.getElementsByClassName('main-content')[0]) {
          var mainpanel = document.querySelector('.main-content');
          var ps = new PerfectScrollbar(mainpanel);
        };
    
        if (document.getElementsByClassName('sidenav')[0]) {
          var sidebar = document.querySelector('.sidenav');
          var ps1 = new PerfectScrollbar(sidebar);
        };
    
        if (document.getElementsByClassName('navbar-collapse')[0]) {
          var fixedplugin = document.querySelector('.navbar:not(.navbar-expand-lg) .navbar-collapse');
          var ps2 = new PerfectScrollbar(fixedplugin);
        };
    
        if (document.getElementsByClassName('fixed-plugin')[0]) {
          var fixedplugin = document.querySelector('.fixed-plugin');
          var ps3 = new PerfectScrollbar(fixedplugin);
        };
      };
    } catch (error) {
      
    }
  }

  // private charts():void {
  //   var ctx = (document.getElementById("chart-bars") as HTMLCanvasElement).getContext("2d");

  //   new Chart(ctx, {
  //     type: "bar",
  //     data: {
  //       labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  //       datasets: [{
  //         label: "Sales",
  //         tension: 0.4,
  //         borderWidth: 0,
  //         borderRadius: 4,
  //         borderSkipped: false,
  //         backgroundColor: "#fff",
  //         data: [450, 200, 100, 220, 500, 100, 400, 230, 500],
  //         maxBarThickness: 6
  //       }, ],
  //     },
  //     options: {
  //       responsive: true,
  //       maintainAspectRatio: false,
  //       plugins: {
  //         legend: {
  //           display: false,
  //         }
  //       },
  //       interaction: {
  //         intersect: false,
  //         mode: 'index',
  //       },
  //       scales: {
  //         y: {
  //           grid: {
  //             drawBorder: false,
  //             display: false,
  //             drawOnChartArea: false,
  //             drawTicks: false,
  //           },
  //           ticks: {
  //             suggestedMin: 0,
  //             suggestedMax: 500,
  //             beginAtZero: true,
  //             padding: 15,
  //             font: {
  //               size: 14,
  //               family: "Open Sans",
  //               style: 'normal',
  //               lineHeight: 2
  //             },
  //             color: "#fff"
  //           },
  //         },
  //         x: {
  //           grid: {
  //             drawBorder: false,
  //             display: false,
  //             drawOnChartArea: false,
  //             drawTicks: false
  //           },
  //           ticks: {
  //             display: false
  //           },
  //         },
  //       },
  //     },
  //   });


  //   var ctx2 = (document.getElementById("chart-line") as HTMLCanvasElement).getContext("2d");

  //   var gradientStroke1 = ctx2?.createLinearGradient(0, 230, 0, 50);

  //   if(typeof gradientStroke1 == 'undefined') return;

  //   gradientStroke1.addColorStop(1, 'rgba(203,12,159,0.2)');
  //   gradientStroke1.addColorStop(0.2, 'rgba(72,72,176,0.0)');
  //   gradientStroke1.addColorStop(0, 'rgba(203,12,159,0)'); //purple colors

  //   var gradientStroke2 = ctx2?.createLinearGradient(0, 230, 0, 50);

  //   if(typeof gradientStroke2 == 'undefined') return;

  //   gradientStroke2.addColorStop(1, 'rgba(20,23,39,0.2)');
  //   gradientStroke2.addColorStop(0.2, 'rgba(72,72,176,0.0)');
  //   gradientStroke2.addColorStop(0, 'rgba(20,23,39,0)'); //purple colors

  //   new Chart(ctx2, {
  //     type: "line",
  //     data: {
  //       labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  //       datasets: [{
  //           label: "Mobile apps",
  //           tension: 0.4,
  //           borderWidth: 0,
  //           pointRadius: 0,
  //           borderColor: "#cb0c9f",
  //           backgroundColor: gradientStroke1,
  //           fill: true,
  //           data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
  //           maxBarThickness: 6

  //         },
  //         {
  //           label: "Websites",
  //           tension: 0.4,
  //           borderWidth: 0,
  //           pointRadius: 0,
  //           borderColor: "#3A416F",
  //           backgroundColor: gradientStroke2,
  //           fill: true,
  //           data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
  //           maxBarThickness: 6
  //         },
  //       ],
  //     },
  //     options: {
  //       responsive: true,
  //       maintainAspectRatio: false,
  //       plugins: {
  //         legend: {
  //           display: false,
  //         }
  //       },
  //       interaction: {
  //         intersect: false,
  //         mode: 'index',
  //       },
  //       scales: {
  //         y: {
  //           grid: {
  //             drawBorder: false,
  //             display: true,
  //             drawOnChartArea: true,
  //             drawTicks: false,
  //             borderDash: [5, 5]
  //           },
  //           ticks: {
  //             display: true,
  //             padding: 10,
  //             color: '#b2b9bf',
  //             font: {
  //               size: 11,
  //               family: "Open Sans",
  //               style: 'normal',
  //               lineHeight: 2
  //             },
  //           }
  //         },
  //         x: {
  //           grid: {
  //             drawBorder: false,
  //             display: false,
  //             drawOnChartArea: false,
  //             drawTicks: false,
  //             borderDash: [5, 5]
  //           },
  //           ticks: {
  //             display: true,
  //             color: '#b2b9bf',
  //             padding: 20,
  //             font: {
  //               size: 11,
  //               family: "Open Sans",
  //               style: 'normal',
  //               lineHeight: 2
  //             },
  //           }
  //         },
  //       },
  //     },
  //   });
  // }
}
