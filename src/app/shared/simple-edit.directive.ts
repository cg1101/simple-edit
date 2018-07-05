import { Directive, OnInit, ElementRef, Renderer2, HostListener, EventEmitter, Output } from '@angular/core';

export interface EditData {
  html: string;
  readonly text: string;
  readonly count: number;
}

@Directive({
  selector: '[appSimpleEdit]'
})
export class SimpleEditDirective implements OnInit {

  @Output() change = new EventEmitter<EditData>();

  @HostListener('keyup')
  keyUp() {
    console.log('keyUp');
    const el = this.elementRef.nativeElement;
    const html = el.innerHTML;
    const text = el.textContent;
    const count = text.length;
    this.change.emit(<EditData>{html, text, count});
  }

  constructor(protected elementRef: ElementRef, protected render: Renderer2) { }

  ngOnInit() {
    this.render.setAttribute(this.elementRef.nativeElement, 'contentEditable', 'true');
  }

}
