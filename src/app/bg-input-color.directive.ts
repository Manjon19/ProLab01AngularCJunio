import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBgInputColor]'
})
export class BgInputColorDirective {
  @Input("appBgInputColor") color:string="";
  constructor(private e:ElementRef) { }
  @HostBinding("style.background-color") bgColor="";
  @HostListener("keyup") onInputChange(){
    if(this.e.nativeElement.tagName!=="INPUT"){
      this.bgColor=this.color;
    }
  }
}
