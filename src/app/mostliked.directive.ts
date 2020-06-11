import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMostliked]'
})
export class MostlikedDirective {

  constructor(private elem:ElementRef){

    elem.nativeElement.style.backgroundColor="#834c69"

  }
}
