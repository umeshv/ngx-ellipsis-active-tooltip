import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[ellipsisActive]',
})
export class EllipsisActiveDirective {
  @Input('ellipsisActive') !option = true;

  constructor(private readonly elementRef: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter(): void {
    setTimeout(() => {
      const element = this.elementRef.nativeElement;
      if (element.offsetWidth < element.scrollWidth) {
        element.title = element.textContent;
      } else if (element.title) {
        element.removeAttribute('title');
      }
    }, 100);
  }
}
