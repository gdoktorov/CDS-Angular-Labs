import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeContent]'
})
export class ChangeContentDirective {

  constructor(private el: ElementRef) {
      el.nativeElement.style.textDecoration = 'line-through'
  }

}
