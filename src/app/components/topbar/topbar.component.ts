import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {

  constructor(
    private render: Renderer2
  ){} 

  @ViewChild('config') config!: ElementRef<HTMLElement>; 

  public handlerConfig():void {
    let isActive = this.config.nativeElement.classList.contains('show');
    if(isActive){
      this.render.removeClass(this.config.nativeElement, 'show');
    }else {
      this.render.addClass(this.config.nativeElement, 'show');
    }
  }

}
