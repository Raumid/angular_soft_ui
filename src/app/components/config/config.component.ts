import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent {

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
