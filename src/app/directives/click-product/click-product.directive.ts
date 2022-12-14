import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickProduct]'
})
export class ClickProductDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('click',) onClick(){

    this.elementRef.nativeElement.style.opacity = 0.5;

  }

  @HostListener('dblclick',) onDblClick(){
    this.elementRef.nativeElement.style.opacity = 1;
  }

}
