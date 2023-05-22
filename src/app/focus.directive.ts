import { Directive,Input,ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[focused]'
})
export class FocusDirective {

  @Input()
  set focused(value: boolean){
    if(value){
      console.log(this.renderer.selectRootElement(this.elementRef));
      this.renderer.selectRootElement(this.elementRef).scrollIntoView();
    }
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2){}

}
