import { Directive, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appSimpleEdit]'
})
export class SimpleEditDirective implements OnInit {

  constructor(protected elementRef: ElementRef, protected render: Renderer2) { }

  ngOnInit() {
    this.render.setAttribute(this.elementRef.nativeElement, 'contentEditable', true);
  }

}
