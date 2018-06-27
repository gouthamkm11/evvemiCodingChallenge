import { Directive, Renderer2, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appClickMe]'
})
export class ClickMeDirective {

  constructor(private renderer: Renderer2, private elementRef:ElementRef) {

  }

  btnboolValue: boolean = false;

  ngOnInit () {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color','#888');
  }

  @HostListener('click') mouseClick(){
    this.btnboolValue = !this.btnboolValue;
    (this.btnboolValue) ? this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','#333') : this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','#888');
  }

}
