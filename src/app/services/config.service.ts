import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  isTopbarActive:boolean = false;
  isSidebarActive:boolean = false;

  constructor() { }

  public handlerConfig():void {
    this.isTopbarActive = !this.isTopbarActive;
  }

  public handlerSidebar():void {
    this.isSidebarActive = !this.isSidebarActive;
  }
}
