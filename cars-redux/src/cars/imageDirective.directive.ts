/**
 * Created by apetrov on 8/7/2017.
 */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[round]'
})
export class ImageDirective {

  @Input('round') radius: number;

   constructor (private el: ElementRef) {

   }
  @HostListener('mouseenter') onMouseEnter () {
    this.round(this.radius);
  }
  @HostListener('mouseleave') onMouseLeave () {
    this.round(null);
  }
  private round(radius: number) {
    this.el.nativeElement.style.borderRadius = radius;
  }
}
