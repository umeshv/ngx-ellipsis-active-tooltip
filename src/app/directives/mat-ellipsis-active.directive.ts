import { Directive, ElementRef, HostListener } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

@Directive({
  selector: '[matTooltip][matEllipsisActive]',
})
export class MatEllipsisActiveDirective {
  constructor(
    private matTooltip: MatTooltip,
    private elementRef: ElementRef<HTMLElement>
  ) {}

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(): void {
    const element = this.elementRef.nativeElement;
    this.matTooltip.disabled = element.scrollWidth <= element.clientWidth;
  }
}
